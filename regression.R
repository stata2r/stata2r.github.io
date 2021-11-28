# ------------------------------------------------------------------------------
# fixest
# ------------------------------------------------------------------------------

source(here::here("helpers.R"))

# Splash Section
splash <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
            "Running regressions using ",
            a(href = "https://lrberge.github.io/fixest/articles/fixest_walkthrough.html", class = "text-emerald-800 italic font-semibold", "fixest"), 
            "."
        )
    ),
    create_splash_body(
        p(
            a(href="https://lrberge.github.io/fixest/articles/fixest_walkthrough.html", class="text-emerald-800 font-semibold underline", "fixest"),
            "is a package designed from the ground up in C++ to make running regressions fast and incredibly easy."
        )
    )
)

# Tutorial
tutorial <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
            "Introduction to fixest"
        )
    ),
    create_splash_body(
        # Tutorial Here
    )
)

cheat_sheet_splash <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", "Cheat Sheet")
    )
)

htmltools::tagList(
  # Head
    head("Stata to R"),
    create_body(
        setup_script,
        toc,
        div(class="flex-grow min-h-screen py-16 pb-96",
            splash,
            tutorial,
            cheat_sheet_splash,
            fixest_cheatsheet
        ),
    )   
) |> 
  as.character() |> 
  cat(file = "regression.html")
