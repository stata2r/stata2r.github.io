# ------------------------------------------------------------------------------
# fixest
# ------------------------------------------------------------------------------

source(here::here("helpers.R"))

# Splash Section
splash <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
            "Running regressions using ",
            a(href = "https://lrberge.github.io/fixest/index.html", class = "text-emerald-800 italic font-semibold", "fixest")
        )
    ),
    create_splash_body(
        p(
            a(href="https://lrberge.github.io/fixest/index.html", class="text-emerald-800 font-semibold underline", "fixest"),
            " (by Laurent Berge) is a package designed from the ground up in C++ to make running regressions fast and incredibly easy. It provides in-built support for a variety of linear and non-linear models, as well as regression tables and plotting methods."
        ),
        p(
            "Before continuing, make sure that you have installed ",
            span(class = "font-semibold", "fixest"), ". You only have to do this ", span(class = "italic", "once"), " (or as often as you want to update the package)."
        ),
        p(
            tags$code(class="before:content-[''] after:content-['']", tags$pre(class="language-r", "# Install from CRAN (recommended) \ninstall.packages(fixest)\n\n# Install the development version from GitHub (advanced) \n# Requires Rtools and the remotes package \n# remotes::install_github('lrberge/fixest')"))
        ),
        p(
            "Once ", span(class = "font-semibold", "fixest"), " is installed, don't forget to load it whenever you want to use it. Unlike Stata, you have to re-load a package every time you start a new R session."
        ),
        p(
            tags$code(class="before:content-[''] after:content-['']", tags$pre(class="language-r", "# Load fixest into our current R session \nlibrary(fixest)"))
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
