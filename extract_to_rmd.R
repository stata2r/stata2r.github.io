library(xml2)
library(rvest)
library(here)
library(glue)

md_to_html_lines <- function(md){
    md |>
        readLines(encoding = "UTF-8") |>
        # Remove yaml
        blogdown:::split_yaml_body() |>
        (\(x) x$body)() |> 
        commonmark::markdown_html(extensions = TRUE) |>
        rvest::read_html() |> 
        rvest::html_element("body") |>
        rvest::html_children()
}

#' @param folder String. Either fixest or data.table.
convert_md_to_rmd <- function(folder) {
    # Convert to html
    lines <- md_to_html_lines(here(glue("src/{folder}/README.md")))
                                   
    # Parse to .Rmd
    rmd <- glue(r"(---
    title: "{folder}"
    authors: "Nick Huntington-Klein, Grant McDermott, and Kyle Butts"
    output: html_document
    ---
    
    )")
    h3 <- ""
    
    # Add library() calls for extras
    if(folder == "extras") {
        rmd <- glue::glue("{rmd}\n```{{r}}\nlibrary(tidyverse)\nlibrary(sf)\n```\n\n")
    }
    
    for(i in 1:length(lines)) {
        line = lines[[i]]
        if(html_name(line) == "h1") {
            add <- glue::glue("\n# {html_text(line)}\n\n")
        } 
        else if(html_name(line) == "h2") {
            add <- glue::glue("\n## {html_text(line)}\n\n")
        } 
        else if(html_name(line) == "h3") {
            # code block has name
            # add <- glue::glue("\n### {html_text(line)}\n\n")
            add <- ""
            h3 <- tolower(html_text(line))
            h3 <- stringr::str_replace_all(h3, ",", "")
            h3 <- stringr::str_replace_all(h3, " ", "-")
            h3 <- stringr::str_replace_all(h3, " and ", "-")
        }
        else if(html_name(line) == "h4") {
            # code block has name
            # add <- glue::glue("\n### {html_text(line)}\n\n")
            add <- ""
            h3 <- tolower(html_text(line))
            h3 <- stringr::str_replace_all(h3, ",", "")
            h3 <- stringr::str_replace_all(h3, " ", "-")
            h3 <- stringr::str_replace_all(h3, " and ", "-")
        } 
        else if(html_name(line) == "p" | html_name(line) == "ul") {
            # Since I parsed to html, have to "unparse" to md
            line <- as.character(line)
            line <- stringr::str_replace_all(line, "<p>|</p>", "")
            line <- stringr::str_replace_all(line, "<code>|</code>", "`")
            line <- stringr::str_replace_all(line, "<em>|</em>", "**")
            line <- stringr::str_replace_all(line, "<strong>|</strong>", "**")
            line <- stringr::str_replace_all(line, "<i>|</i>", "*")
            line <- stringr::str_replace_all(line, "<ul>|</ul>", "")
            line <- stringr::str_replace_all(line, "<li>", "- ")
            line <- stringr::str_replace_all(line, "</li>", "")
            line <- stringr::str_replace_all(line, '<a href="(.*?)">(.*?)</a>', "[\\2](\\1)")
            
            add <- paste0(line, "\n")
        } 
        # Code chunks are all tha remain
        else {
            code <- html_text(html_elements(line, '.language-r'))

            # Manually eval=F some code
            eval <- ""
            if(stringr::str_detect(code, "install\\.packages|did_means|'NW'|filename\\.dta|\\.parquet|group, time|id, time|custom_func|raceeth")) {
                eval <- ", eval = F"
            }
            
            if(folder == "data.table" & !stringr::str_detect(code, "install\\.packages|library()|fread|filename\\.dta|\\.parquet|melt|dcast")) {
                add <- glue::glue("\n```{r <<h3>><<eval>>}\n#Load dat fresh so that each code chunk runs\ndat = fread('https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv')\n\n<<html_text(html_elements(line, '.language-r'))>>\n```\n\n\n", .open = "<<", .close = ">>")
            } else {
                add <- glue::glue("\n```{r <<h3>><<eval>>}\n<<html_text(html_elements(line, '.language-r'))>>\n```\n\n\n", .open = "<<", .close = ">>")
            }
        }
        
        rmd <- glue::glue("{rmd}\n{add}")
    }

    cat(rmd, file=here(glue("Rmd/{folder}.Rmd")))
    
    return("Success!")
}

purrr::map(c("fixest", "data.table"), \(folder) convert_md_to_rmd(folder))
