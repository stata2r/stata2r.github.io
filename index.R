source(here::here("helpers.R"))

splash <- create_section(
    create_splash_header(
      h1(class = "text-black text-4xl font-bold", 
         "Transitioning from Stata to R"
      )
    ),
    create_splash_body(
        p("The goal of this site is to provide a simple 'on-ramp' to R for Stata users. There are three pages (✌️📄) on this site:"),
        tags$ol(
            type = "1", class = "list-decimal list-inside pl-2",
            tags$li(
                " Data cleaning (🗄🧹) with",
                a(href = "data_cleaning.html", class = "text-[#315450] italic font-semibold", "data.table")
            ),
            tags$li(
                class = "mt-4 ", " Regression analysis (💻📈) with",
                a(href = "regression.html", class = "text-[#315450] italic font-semibold", "fixest")
            ),
            tags$li(
                class = "mt-4 ", " A list (📃) of other ", a(href = "misc.html", class = "text-[#315450] italic font-semibold", "miscellaneous"),
                "handy packages you may want to know about."
            )
        ),
        p(" There are other packages that work well and are easy to use as well, but data.table and fixest are blazingly fast (🏃🏻💨) and highly powerful (💪🏻😎)."),
        p("Plus, they are ", span(class = "italic", "flexible"), 
          " (👌✨) and can help you avoid R's 'package overload.' Depending on what you do in Stata, you might even be able to cut back, going from three packages - ", 
          span(class = "font-semibold", "reghdfe, estout"), " and ", 
          span(class = "font-semibold", "gtools"), " - to just two.")
    )
)

htmltools::tagList(
    # Head
    head("Stata to R"),
    create_body(
        setup_script,
        toc,
        div(class="flex-grow min-h-screen py-16 pb-96",
            splash
        ),
    )   
) |> 
  as.character() |> 
  cat(file = "index.html")
