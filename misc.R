# ------------------------------------------------------------------------------
# fixest
# ------------------------------------------------------------------------------

source(here::here("helpers.R"))

# Section 1
ggplot <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
           "Making Figures with ",
           a(href = "ggplot2.tidyverse.org/", class = "text-emerald-800 italic font-semibold", "ggplot2")
        )
    ),
    create_splash_body(
        p(
            a(href="ggplot2.tidyverse.org/", class="text-emerald-800 font-semibold underline", "ggplot2"),
            " ..."
        ),
        p(
            "Before continuing, make sure that you have installed ",
            span(class = "font-semibold", "fixest"), ". You only have to do this ", span(class = "italic", "once"), " (or as often as you want to update the package)."
        ),
        p(
            code_block("language-r", "ggplot(mtcars) +\n geom_point()")
        ),
    )
)

# Tutorial


cheat_sheet_splash <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", "Other Packages")
    )
)

htmltools::tagList(
    # Head
    head("Misc Scripts"),
    create_body(
        setup_script,
        toc,
        div(class="flex-grow min-h-screen py-16 pb-96",
            cheat_sheet_splash,
            ggplot,
        ),
    )   
) |> 
    as.character() |> 
    cat(file = "misc.html")
