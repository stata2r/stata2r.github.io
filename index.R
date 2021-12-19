source(here::here("helpers.R"))

splash <- create_section(
    create_splash_header(
      h1(class = "text-black text-4xl font-bold", 
         "Transitioning from Stata to R"
      )
    ),
    create_splash_body(
        p("The goal of this site is to provide a simple 'on-ramp' to R for Stata users. There are two main pages (✌️📄) on this site:"),
        tags$ol(
            type = "1", class = "list-decimal list-inside pl-2",
            tags$li(
                " Data cleaning (🗄🧹) with",
                a(href = "data_cleaning.html", class = "text-[#315450] italic font-semibold", "data.table")
            ),
            tags$li(
                class = "mt-4 ", " Regression analysis (💻📈) with",
                a(href = "regression.html", class = "text-[#315450] italic font-semibold", "fixest")
            )
        ),
        p(" There are ", a(href = "misc.html", class = "text-[#315450] italic font-semibold", "other great packages"), "that work well and are easy to use, but ", span(class = "font-semibold", "data.table"), " and ", span(class = "font-semibold", "fixest"), " are blazingly fast (🏃🏻💨) and highly powerful (💪🏻😎)."),
        p("Plus, they are ", span(class = "italic", "flexible"), 
          " (👌✨) and can help you avoid R's 'package overload.' Depending on what you do in Stata, you might even be able to cut back, going from three packages—", 
          span(class = "font-semibold", "reghdfe, estout"), " and ", 
          span(class = "font-semibold", "gtools"), "— to just two.")
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
