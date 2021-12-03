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
        " (by Matt Dowle, Arun Srinivasan ", span(class = "italic", "et. al."), ") is a package written in C to make cleaning data fast, easy and incredibly powerful. All of the examples below will use real-life 2014 New York air traffic data, which we'll import in the ",
        a(href = "#data", class = "text-emerald-800 font-semibold underline", "Data I/O"), 
        " section."),
        p(
            "Before continuing, make sure that you have installed ",
        span(class = "font-semibold", "data.table"), ". You only have to do this ", span(class = "italic", "once"), " (or as often as you want to update the package)."
        ),
        p(
            tags$code(class="before:content-[''] after:content-['']", tags$pre(class="language-r", "# Install from CRAN (recommended) \ninstall.packages(data.table)\n\n# Install the development version from GitHub (advanced) \n# Requires Rtools and the remotes package \n# remotes::install_github('Rdatatable/data.table')"))
        ),
        p(
            "Once ", span(class = "font-semibold", "data.table"), " is installed, don't forget to load it whenever you want to use it. Unlike Stata, you have to re-load a package every time you start a new R session."
        ),
        p(
            tags$code(class="before:content-[''] after:content-['']", tags$pre(class="language-r", "# Load data.table into our current R session \nlibrary(data.table)"))
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
        " package centers around ", span(class = "font-semibold", "data.tables"), ", which are highly efficient data frames that can be manipulated using the package's concise syntax. For example, say we have a ", span(class = "font-semibold", "data.table"), " called ", span(class = "font-semibold", "dat"),
        " (you can call it whatever you want). Then we can manipulate it by putting arguments into its square brackets, i.e. ", span(class = "font-semibold", "dat[]"), ". The three main components of a ", span(class = "font-semibold", "data.table"), " operation are ", span(class = "font-semibold", "i, j,"), " and ", span(class = "font-semibold", "by,"), " which go in the order ", span(class = "font-semibold", "dat[i, j, by]"), " (note you don't have to specify the latter two if you're not currently using them.)",
        tags$ul(
            tags$li(span(class = "font-semibold", "i,"), " the first component, selects the ",  span(class = "italic", "rows"), " of the ", span(class = "font-semibold", "data.table"), " that you'll be working with, like how in Stata the ", span(class = "font-semibold", "if"), " or ", span(class = "font-semibold", "in"), " command options let you refer to certain rows."), 
            tags$li( span(class = "font-semibold", "j,"), " the second component, both selects and operates on the ",  span(class = "italic", "columns"), " of the ",  span(class = "font-semibold", "data.table,"), " like how in Stata the ", span(class = "font-semibold", "keep"), " or ", span(class = "font-semibold", "drop"), " commands select specific columns of your data, or how ", span(class = "font-semibold", "generate"), " or ", span(class = "font-semibold", "replace"), " create or modify columns in your data."),
            tags$li(span(class = "font-semibold", "by,"), " the third component, gives the variable(s) designating groups that you'll be doing your calculations within, like how in Stata you can precede a command with ", span(class = "font-semibold", "bysort."))
            )
        ),
        p(
        span(class = "font-semibold", "data.table"), " uses these simple components very flexibly. The upshot is that you can perform complicated operations in a single line of concise ", span(class = "font-semibold", "data.table"), " code, which may have required multiple commands in other languages or libraries to accomplish. But even if you aren't doing anything fancy, ", span(class = "font-semibold", "data.table"), " has you covered with a stable set of functions that can be deployed on virtually any data wrangling task."
        ), 
        p(
            "Like Stata, ", span(class = "font-semibold", "data.table"), "also provides some special shortcut symbols for common operations. For example, `_N` in Stata is equivalent to `.N` in ", span(class = "font-semibold", "data.table"), ", while `.(x1, x2)` is short for `list(x1, x2)`. We'll see more examples in cheatsheat below. But we do want to quickly highlight one special symbol in particular: ", span(class = "font-semibold", ".SD"), " refers to the (S)ubset of (D)ata you're working with. This can be used to do complex within-group calculations when you have ", span(class = "font-semibold", "by"), " specified, but more generally it's a way to perform operations on lots of columns with one line of code. By default, ", span(class = "font-semibold", ".SD"), " refers to all columns not in ", span(class = "font-semibold", "by,"), " but you can specify the columns you want with the ", span(class = "font-semibold", ".SDcols"), " argument. Again, we'll see a bunch of examples below."
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
# - froll

