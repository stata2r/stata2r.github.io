library(htmltools)
library(data.table)


# This reads the text file as a character vector
commands_raw <- scan("commands.txt", what=character(), sep="\n")
commands_raw <- stringr::str_replace_all(commands_raw, "\\\\t", "    ")
vec <- 1:length(commands_raw)

commands <- data.table(
  Page = commands_raw[vec %% 6 == 1],
  cat_id = commands_raw[vec %% 6 == 2],
  Category = commands_raw[vec %% 6 == 3],
  Example = commands_raw[vec %% 6 == 4],
  stata_code = commands_raw[vec %% 6 == 5],
  r_code = commands_raw[vec %% 6 == 0]
)

# This reads the text file as a character vector
notes_raw <- scan("notes.txt", what=character(), sep="\n")
notes_raw <- stringr::str_replace_all(notes_raw, "\\\\t", "    ")
vec <- 1:length(notes_raw)

notes <- data.table(
  Page = notes_raw[vec %% 4 == 1],
  cat_id = notes_raw[vec %% 4 == 2],
  Category = notes_raw[vec %% 4 == 3],
  note = notes_raw[vec %% 4 == 0]
)

# ------------------------------------------------------------------------------
# Head of HTML
# ------------------------------------------------------------------------------

head = function(title){ 
  htmltools::tagList(
      HTML('<!DOCTYPE html>\n<html lang="en">\n\n<head>'),
      tags$meta(charset="UTF-8"),
      tags$meta('http-equiv'="X-UA-Compatible", content="IE=edge"),
      tags$meta(name="viewport", content="width=device-width, initial-scale=1.0"),
      tags$title(title),
      HTML("\n<!-- prism.js -->"),
      tags$link(
          href="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/themes/prism.css",
          rel="stylesheet"
      ),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/components/prism-core.min.js"),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/plugins/autoloader/prism-autoloader.min.js"),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/plugins/normalize-whitespace/prism-normalize-whitespace.js"),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/components/prism-r.js"),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/components/prism-stan.js"),
      HTML("\n<!-- tailwindCSS -->"),
      tags$script(src="https://cdn.tailwindcss.com/3.0.0?plugins=forms@0.4.0,typography@0.5.0,aspect-ratio@0.4.0,line-clamp@0.3.0"),
      tags$style(type="text/tailwindcss", r"(
        pre[class*="language-"] {
            @apply bg-white px-4 py-4 lg:py-2 m-0;
        }

        li.toc-dot:before {
            content: "";
            width: 16px;
            height: 16px;
            position: absolute;
            top: 0px;
            left: -10px;
            background: white;
            border: 2px solid #4c807b;
            box-shadow: 2px 2px 0px #c1dddb;
            border-radius: 50%;
        }
      )"),
      HTML("</head>")
  )
}

setup_script <- htmltools::includeScript("setup.js")  

create_body <- function(...) {
tags$body(
    div(class="bg-[#fdf9f3] px-4 md:px-8",
        div(class="w-full max-w-[96rem] mx-auto min-h-screen",
            div(class="flex flex-col xl:gap-x-8 xl:flex-row", ...)
        )
    )
)
}

# ------------------------------------------------------------------------------
# Table of Contents
# ------------------------------------------------------------------------------

create_toc_container <- function(...) {
    div(class="flex max-h-screen flex-col xl:px-2 w-full xl:w-[20rem] flex-shrink-0 sticky bg-[#fdf9f3] xl:h-screen top-0 pt-8 md:pt-16 pb-4",
        # Logo and Menu Button 
        div(class = "flex flex-row space-between items-center pb-4",
            a(
                class = "flex-grow", href="index.html",
                h1(class = "text-3xl flex flex-row items-center gap-x-2 text-[#315450] tracking-wide", 
                " Stata",
                tags$svg(
                    xmlns = "http://www.w3.org/2000/svg", class = "h-8 w-8 text-[#315450]", fill = "none", viewbox = "0 0 24 24", stroke = "currentColor",
                    tags$path("stroke-linecap" = "round", "stroke-linejoin" = "round", "stroke-width" = "2", d = "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z")
                ), 
                " R"
                )
            ),
            div(
                id = "menu-button", class = "xl:hidden cursor-pointer",
                tags$svg(
                id = "menu-hamburger", xmlns = "http://www.w3.org/2000/svg", class = "h-8 w-8 text-[#315450]", fill = "none", viewbox = "0 0 24 24", stroke = "currentColor",
                tags$path("stroke-linecap" = "round", "stroke-linejoin" = "round", "stroke-width" = "2", d = "M4 6h16M4 12h16M4 18h16")
                ),
                tags$svg(
                id = "menu-x", xmlns = "http://www.w3.org/2000/svg", class = "hidden h-8 w-8 text-[#993b27]", fill = "none", viewbox = "0 0 24 24", stroke = "currentColor",
                tags$path("stroke-linecap" = "round", "stroke-linejoin" = "round", "stroke-width" = "2", d = "M6 18L18 6M6 6l12 12")
                )
            )      
        ),
        div(id="toc", class="hidden flex-grow w-full bg-[#fdf9f3] sticky overflow-y-scroll xl:overflow-y-auto max-h-screen xl:block xl:relative", ...)
    )
}

create_toc_list <- function(cats) {
htmltools::tagList(
    purrr::imap(cats, \(cat, i) { 
        page = commands[Category == cat, ][1,][["Page"]] 
        id = commands[Category == cat, ][1,][["cat_id"]] 
        link = paste0(page, ".html#", id)

        if(i == length(cats)) {
            tags$li(class = "toc-dot flex flex-col relative border-l-2 border-transparent ml-2 pl-4 pb-4 hover:border-transparent group cursor-pointer",
                a(href=link, class = "font-medium font-light leading-4 mb-2 group-hover:font-normal", cat)
            )
        } else {
            tags$li(class = "toc-dot flex flex-col relative border-l-2 border-[#c1dddb] ml-2 pl-4 pb-4 hover:border-[#5b9a94] group cursor-pointer",
                a(href=link, class = "font-medium font-light leading-4 mb-2 group-hover:font-normal", cat)
            )
        }
    })
)
}

data_cats <- unique(commands[Page == "data_cleaning", ][["Category"]])
data_table_toc <- create_toc_list(data_cats)

fixest_cats <- unique(commands[Page == "regression", ][["Category"]])
fixest_toc <- create_toc_list(fixest_cats)

toc <- create_toc_container(
    # data.table TOC
    div(
        h1(class="text-2xl font-semibold tracking-tight mt-8 text-[#315450]", 
            a(href="data_cleaning.html", "data.table")
        ),
        tags$ul(class="mt-4 relative", data_table_toc)
    ),
    # fixest TOC
    div(
        h1(class="text-2xl font-semibold tracking-tight mt-8 text-[#315450]", 
            a(href="regression.html", "fixest")
        ),
        tags$ul(class="mt-4 relative", fixest_toc)
    ),
    # misc TOC
    div(
      h1(class="text-2xl font-semibold tracking-tight mt-8 text-[#315450]", 
         a(href="misc.html", "extra packages")
      )
    ),
    # Github
    div(class="mt-8 flex flex-row gap-x-4 items-center",
      HTML('<a href="https://github.com/stata2r/stata2r.github.io"><svg class="w-6 h-6 text-[#5b9a94] fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>'),
      div(class="flex flex-col",
        p(class="text-sm italic text-gray-600", "Have suggestions?"),
        p(class="text-sm text-gray-600", a(href="https://github.com/stata2r/stata2r.github.io/issues/new", "Open an issue 📝"))
      )
    )
)

# ------------------------------------------------------------------------------
# Cheat Sheet
# ------------------------------------------------------------------------------

code_block <- function(language, code) {
  pre(
    class = "bg-white border-2 rounded-lg flex flex-col justify-start px-4 py-4",
    code(class = language, code)
  )
}

# Row of Code
create_row = function(name, stata_code, r_code, subitem = FALSE) {

  h2_class = ifelse(subitem, "lg:ml-4 italic", "font-semibold")

  h2_class = glue::glue("text-gray-600 text-lg {h2_class}")

  div(class = "grid grid-cols-1 xl:grid-cols-2 xl:gap-x-8 justify-start gap-y-4 mt-8",
    div(class="xl:col-span-2", h2(class = h2_class, name)),
    code_block("language-stata", stata_code),
    code_block("language-r", r_code)
  )
}

create_section = function(...) 
    div(class = "w-full mx-auto py-12", ... )

create_section_header = function(name) {
  div(class = "flex flex-row",
    h2(class = "inline-block font-bold text-2xl text-[#315450]", name)
  )
}

create_section_notes = function(notes) {
  div(class = "flex flex-col gap-y-4 text-gray-600 mt-6 text-normal md:text-lg xl:text-xl",
      HTML(notes)
  )
}

create_splash_header = function(...) 
  div(class="pb-4 border-b-2 border-gray-600", ...)

create_splash_body = function(...) 
  div(class = "flex flex-col gap-y-4 max-w-prose text-gray-800 pt-8 text-gray-700 text-normal md:text-lg xl:text-xl", ...)

make_cheatsheet <- function(cats) {
    cheatsheet <- NULL

    # Examples
    for(i in 1:length(cats)) {
        cat <- cats[i]
        examples <- commands[Category == cat, ]

        rows <- list()
        for(j in 1:nrow(examples)) {
            example <- examples[j, ]

            name <- example[["Example"]]
            stata_code <- example[["stata_code"]]
            stata_code <- stringr::str_replace_all(stata_code, "\\\\n", "\n")
            r_code <- example[["r_code"]]
            r_code <- stringr::str_replace_all(r_code, "\\\\n", "\n")

            rows <- c(rows, 
                htmltools::tagList(
                    create_row(name, stata_code, r_code)
                )
            )
        }

        id <- examples[1, ][["cat_id"]]
        
        # notes
        note <- notes[Category == cat, ]
        note_html <- NULL
        if(nrow(note) > 0) note_html <- create_section_notes(note$note)

        cheatsheet <- c(cheatsheet, 
            htmltools::tagList(div(id = id,
                create_section(
                    create_section_header(cat),
                    note_html,
                    rows
                )
            ))
        )
    }

    return(htmltools::tagList(cheatsheet))
}

data_cheatsheet <- make_cheatsheet(data_cats)
fixest_cheatsheet <- make_cheatsheet(fixest_cats)
