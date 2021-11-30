# ------------------------------------------------------------------------------
# data.table
# ------------------------------------------------------------------------------

source(here::here("helpers.R"))

# Splash Section
splash <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
        "Cleaning data with ",
        a(href = "https://rdatatable.gitlab.io/data.table", class = "text-emerald-800 italic font-semibold", "data.table")
        )
    ),
    create_splash_body(
        p(
        a(href = "https://rdatatable.gitlab.io/data.table", class = "text-emerald-800 font-semibold underline", "data.table"), 
        " (by Matt Dowle, Arun Srinivasan ", span(class = "italic", "et. al."), ") is a package designed from the ground up in C++ to make cleaning data fast, easy and incredibly powerful. All of the examples below will use real-life 2014 New York air traffic data, which we'll import in the ",
        span(class = "font-semibold", "Data I/O"), 
        " section. Don't forget to load the package with ",
            span(class = "font-semibold", "library(data.table)"), " first. Unlike in Stata, you have to re-load a package if you want to use it every time you start a new session."
        )
    )
)
# Tutorial
tutorial <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", "Introduction to data.table")
    ),
    create_splash_body(
        p(
        "The ", a(href = "https://rdatatable.gitlab.io/data.table", class = "text-emerald-800 font-semibold underline", "data.table"),
        " package centers around ", span(class = "font-semibold", "data.tables"), ", which are highly efficient data frames that can be manipulated using the package's syntax."
        ),
        p(
        "If we have a ", span(class = "font-semibold", "data.table"), " called ", span(class = "font-semibold", "d"),
        " then we can use and manipulate it by putting arguments into its square brackets, i.e. ", span(class = "font-semibold", "d[].")
        ),
        p(
        "The three main components of a ", span(class = "font-semibold", "data.table"), " operation are ", span(class = "font-semibold", "i, j,"), " and ", span(class = "font-semibold", "by,"), " which go in the order ", span(class = "font-semibold", "d[i, j, by]"), " (note you don't have to specify the latter two if you're not currently using them.)"
        ),
        p(
        span(class = "font-semibold", "i,"), " the first component, selects the ",  span(class = "italic", "rows"), " of the ", span(class = "font-semibold", "data.table"), " that you'll be working with, like how in Stata the ", span(class = "font-semibold", "if"), " or ", span(class = "font-semibold", "in"), " command options let you refer to certain rows."
        ),
        p(
        span(class = "font-semibold", "j,"), " the second component, both selects and operates on the ",  span(class = "italic", "columns"), " of the ",  span(class = "font-semibold", "data.table,"), " like how in Stata the ", span(class = "font-semibold", "keep"), " or ", span(class = "font-semibold", "drop"), " commands select specific columns of your data, or how ", span(class = "font-semibold", "generate"), " or ", span(class = "font-semibold", "replace"), " create or modify columns in your data."
        ),
        p(
        span(class = "font-semibold", "by,"), " the third component, gives the variable(s) designating groups that you'll be doing your calculations within, like how in Stata you can precede a command with ", span(class = "font-semibold", "bysort.") 
        ),
        p(
        span(class = "font-semibold", "data.table"), " uses these three simple components more flexibly than Stata does. The upshot is that you can can perform complicated operations in a single line of concise ", span(class = "font-semibold", "data.table"), " code, which may have required multiple commands in other languages to accomplish. But even if you aren't doing anything fancy, ", span(class = "font-semibold", "data.table"), " has you covered with a stable set of functions that can be deployed on virtually any data wrangling task."
        ), 
        p("Finally,  ", span(class = "font-semibold", "data.table"), " is extremely fast. It has long set the standard for in-memory data wrangling ", a(href = "https://h2oai.github.io/db-benchmark", class = "text-emerald-800 font-semibold underline", "benchmarks"), " across a variety of libraries and languages. You will likely see an order(s) of magnitude performance difference as you compare the code chunks below. As a bonus for Stata users, many ", span(class = "font-semibold", "data.table"), " operations can be done ",
        span(class = "italic", "in-place,"), " which means that it will affect ", span(class = "italic", "only the parts you're actually changing,"),
        " without wasting memory and time on the parts that aren't being changed. Any time in the below cheat sheet you see a function with the word",
        span(class = "font-semibold", "set"), " in it, or the ", span(class = "font-semibold", ":="), " operator, that's an in-place operation. Speedy!")   
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
            data_cheatsheet
        ),
    )   
) |> 
  as.character() |> 
  cat(file = "data_cleaning.html")


#### TO ADD:
# "stuff that's easy in data.table but not in stata
# - calculations from within data.table
# - Inexact/rolling merges?
# Working with macros/.SD
# merge
# shift
# fill and froll

