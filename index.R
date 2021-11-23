source(here::here("helpers.R"))


htmltools::tagList(
    # Head
    head("Stata to R"),
    create_body(
        create_splash(
            create_splash_header(
                h1(
                    class = "text-black text-4xl font-bold", " Stata 🔀 R,",
                    span(class = "text-emerald-800 italic font-semibold", "quick and easy.")
                )
            ),
            create_splash_body(
                p("The goal of this site is to provide a simple 'on-ramp' to R for Stata users. There are two pages (✌️📄) on this site:"),
                tags$ol(
                    type = "1", class = "list-decimal list-inside pl-2",
                    tags$li(
                        " Data cleaning (🗄🧹) with",
                        a(href = "data_cleaning.html", class = "text-emerald-800 italic font-semibold", "data.table")
                    ),
                    tags$li(
                        class = "mt-4 ", " Regression analysis (💻📈) with",
                        a(href = "regression.html", class = "text-emerald-800 italic font-semibold", "fixest")
                    )
                ),
                p(" There are other packages that work well and are easy to use as well, but these two are blazingly fast (🏃🏻💨) and highly powerful (💪🏻😎).")
            )
        )
    )
) |> 
    as.character() |> 
    cat(file = "index.html")
