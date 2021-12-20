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
            "All of the below packages have far more applications than is shown here. We'll just provide one or two examples of how each can be used. Finally, don't forget to install them with ",
            span(class = "font-semibold", "install.packages('PKGNAME')"), " and load them with ", span(class = "font-semibold", "library(PKGNAME)"), ". The former command you only have to run once per package (or as often as you want to update it); the latter whenever you want to use a package in a new R session."
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
