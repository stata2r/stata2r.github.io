# ------------------------------------------------------------------------------
# fixest
# ------------------------------------------------------------------------------

source(here::here("helpers.R"))


# Tutorial


cheat_sheet_splash <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", "Other Packages")
    ),
    create_splash_body(
        p(
            "While we think you can get pretty darn far in R with just ",
            span(class = "font-semibold", "data.table"), " and ", span(class = "font-semibold", "fixest,"),
            " of course those two don't cover everything."
        ),
        p(
            "This page covers a small list of packages you may find especially useful when getting started with R. ",
            "We won't try to cover everything under the sun here. Just a few places to get going. For the rest, well, that's what Google is for (or, indeed, to learn about each of these in more detail)."
        ),
        p(
            "For each of the below examples, keep in mind first that, as always, you need to load the relevant R package before using them. Also, these give just ",
            span(class = "font-italic", "one or two"), " examples of how the package can be used. Every one of them has far more applications than is shown. Finally, don't forget to install them with ",
            span(class = "font-semibold", "install.packages()"), " and load them with ", span(class = "font-semibold", "library()"), " before running the below code."
        )
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
            misc_cheatsheet,
        ),
    )   
) |> 
    as.character() |> 
    cat(file = "misc.html")
