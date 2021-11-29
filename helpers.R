library(htmltools)
library(data.table)

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
      tags$script(src="https://cdn-tailwindcss.vercel.app/3.0.0-alpha.2?plugins=forms@0.4.0-alpha.2,typography@0.5.0-alpha.3,aspect-ratio@0.3.0,line-clamp@0.2.2"),
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

# This reads the text file as a character vector
commands_raw <- scan("commands.txt", what=character(), sep="\n")
vec <- 1:length(commands)

commands <- data.table(
  Page = commands_raw[vec %% 6 == 1],
  cat_id = commands_raw[vec %% 6 == 2],
  Category = commands_raw[vec %% 6 == 3],
  Example = commands_raw[vec %% 6 == 4],
  stata_code = commands_raw[vec %% 6 == 5],
  r_code = commands_raw[vec %% 6 == 0]
)


create_toc_container <- function(...) {
    div(class="flex max-h-screen flex-col xl:px-2 w-full xl:w-[24rem] sticky bg-[#fdf9f3] xl:h-screen top-0 pt-8 md:pt-16 pb-4",
        # Logo and Menu Button 
        div(class = "flex flex-row space-between items-center pb-4",
            a(
                class = "flex-grow", href="index.html",
                h1(class = "text-3xl flex flex-row items-center gap-x-2 text-[#3d6762] tracking-wide", 
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
        div(id="toc", class="hidden flex-grow w-full bg-[#fdf9f3] sticky overflow-y-scroll max-h-screen xl:block xl:relative", ...)
    )
}

create_toc_list <- function(cats) {
htmltools::tagList(
    purrr::imap(cats, \(cat, i) { 
        page = commands[Category == cat, ][1,][["Page"]] 
        id = commands[Category == cat, ][1,][["cat_id"]] 
        link = paste0(page, ".html#", id)

        if(i == length(cats)) {
            tags$li(class = "toc-dot flex flex-col relative border-l-0 border-transparent ml-2 pl-4 pb-6 hover:border-transparent group cursor-pointer",
                a(href=link, class = "font-medium font-light leading-4 mb-2 group-hover:font-normal", cat)
            )
        } else {
            tags$li(class = "toc-dot flex flex-col relative border-l-2 border-[#c1dddb] ml-2 pl-4 pb-6 hover:border-[#5b9a94] group cursor-pointer",
                a(href=link, class = "font-medium font-light leading-4 mb-2 group-hover:font-normal", cat)
            )
        }
    })
)
}

data_cats <- unique(commands[commands$Page == "data_cleaning", ][["Category"]])
data_table_toc <- create_toc_list(data_cats)

fixest_cats <- unique(commands[commands$Page == "regression", ][["Category"]])
fixest_toc <- create_toc_list(fixest_cats)

toc <- create_toc_container(
    div(
        h1(class="text-2xl font-semibold tracking-tight mt-8 text-[#315450]", 
            a(href="data_cleaning.html", "data.table")
        ),
        tags$ul(class="mt-4 relative", data_table_toc)
    ),
    div(
        h1(class="text-2xl font-semibold tracking-tight mt-8 text-[#315450]", 
            a(href="regression.html", "fixest")
        ),
        tags$ul(class="mt-4 relative", fixest_toc)
    )
)

# ------------------------------------------------------------------------------
# Cheat Sheet
# ------------------------------------------------------------------------------

# Row of Code
create_row = function(name, stata_code, r_code, subitem = FALSE) {
  code_class = glue::glue("bg-white border-2 rounded-lg shadow-lg flex flex-col justify-center px-4 py-4")

  h2_class = ifelse(subitem, "lg:ml-4 italic", "font-semibold")

  h2_class = glue::glue("text-gray-600 text-lg {h2_class}")

  div(class = "flex flex-col justify-start gap-y-4 mt-8",
    div(h2(class = h2_class, name)),
    pre(
      class = code_class,
      code(class = "language-text language-stata", stata_code)
    ),
    pre(
      class = code_class,
      code(class = "language-text language-r", r_code)
    )
  )
}
create_section = function(...) 
    div(class = "w-full max-w-5xl mx-auto py-12", ... )

create_section_header = function(name) {
  div(class = "flex flex-row",
    h2(class = "inline-block font-bold text-2xl text-[#315450]", name)
  )
}

create_splash_header = function(...) 
  div(class="pb-4 border-b-2 border-gray-600", ...)

create_splash_body = function(...) 
  div(class = "max-w-prose prose pt-8 text-gray-700 text-xl", ...)

make_cheatsheet <- function(cats) {
    cheatsheet <- NULL

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

        cheatsheet <- c(cheatsheet, 
            htmltools::tagList(div(id = id,
                create_section(
                    create_section_header(cat),
                    rows
                )
            ))
        )
    }

    return(htmltools::tagList(cheatsheet))
}

data_cheatsheet <- make_cheatsheet(data_cats)
fixest_cheatsheet <- make_cheatsheet(fixest_cats)
