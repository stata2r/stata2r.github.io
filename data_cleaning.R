# ------------------------------------------------------------------------------
# data.table
# ------------------------------------------------------------------------------

source(here::here("helpers.R"))

# ------------------------------------------------------------------------------
# Cheat Sheet
# ------------------------------------------------------------------------------


# ---- Load Data ---------------------------------------------------------------
section_load = div(
  class = "max-w-[84rem] w-[95%]",
  create_section(
    create_section_header("Load Data")
  ),
  create_section(
    create_row(
      "Load .csv",
      'insheet using "https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv"',
      "d = fread('https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv')"
    ),
    create_row(
      "Load .dta",
      'use "filename.dta", clear',
      "# Note: this command requires the package `haven` \nd = haven::read_dta('filename.dta')"
    )
  )
)

# ---- Filtering Rows/Columns --------------------------------------------------
section_filter = div(
  class = "max-w-[84rem] w-[95%] mt-12",
  create_section(
    create_section_header("Filtering Rows/Columns")
  ),
  create_section(
      create_row(
          "Filter rows by logical statement",
          'drop if month == 12\nkeep if day > 5 & day < 10\nkeep if inrange(day,5,10)\nkeep if origin == "LGA"\nkeep if regex(origin,"LGA")\nkeep if inlist(origin,"EWR","JFK")',
          "d[!(month == 12), ]\nd[day > 5 & day < 10, ]\nd[between(day,5,10)]\nd[origin == 'LGA', ]\nd[origin %like% 'LGA']\nd[origin %in% c('EWR','JFK')]"
      ),
    create_row(
      "Filter rows by row number",
      "keep in 1/200",
      "d[1:200, ]"
    ),
    create_row(
      "Ordering Rows",
      "sort air_time \nsort air_time dest \ngsort -air_time\n\n",
      "setorder(d, air_time) \nsetorder(d, air_time, dest) \nsetorder(d, -air_time)"
    ),
    create_row(
      "Selecting variables",
      "keep month day carrier \ndrop origin dest\nkeep year-arr_delay\nkeep *_delay",
      "d[ , .(month, day, carrier)] \nd[, -c('origin', 'dest')] \nd[ , year:arr_delay] \nd[, .SD, .SDcols = patterns('*_delay')]"
    ),
    create_row(
      "Renaming variables",
      "rename arr_delay arrival_delay \nrename (carrier origin) (carrier_code origin_code)\nrename arr_* arrival_*",
      "setnames(d, 'arr_delay', 'arrival_delay')\nsetnames(d,c('carrier','origin'),c('carrier_code','origin_code'))\nsetnames(d, names(d)[names(d) %like% 'arr_'], function(x) gsub('arr_','arrival_',x))"
    )
  )
)

# ---- Generating Variables ----------------------------------------------------
section_gen = div(
  class = "max-w-[84rem] w-[95%] mt-12",
  create_section(
    create_section_header("Creating and Summarizing Variables")
  ),
  create_section(
    create_row(
      "Creating Variables",
      "gen total_delay = dep_delay + arr_delay \ngen first_letter = substr(origin, 1, 1) \ngen flight_path = origin + '_' + dest",
      "d[ , total_delay := dep_delay + arr_delay] \nd[ , first_letter := substr(origin,1,1)] \nd[, flight_path := paste(origin, dest, sep='_')]"
    ),
    create_row(
      "Manipulating Variables",
      "replace total_delay = dep_delay + arr_delay \nreplace distance = distance + 1 if month == 9\nreplace distance = 0 in 1",
      "d[ , total_delay := dep_delay + arr_delay] \nd[month == 9, distance := distance + 1]\nd[1, distance := 0]"
    ),
    create_row(
      "Summarizing Variables",
      "collapse (mean) mean_delay = arr_delay, by(carrier) \ncollapse (min) min_d = distance (max) max_d = distance, by(origin) \negen unique_dest = group(dest), by(origin) \ncollapse (max) unique_dest, by(origin)",
      "d[ , .(mean_delay = mean(arr_delay)), by=carrier] \nd[ , .(min_d = min(distance), max_d = max(distance)), by=origin] \n# This line matches the final two lines on the left:\nd[, .(unique_dest = length(unique(dest))), by=origin]"
    )
  )
)



# ------------------------------------------------------------------------------
# Construct Page
# ------------------------------------------------------------------------------


htmltools::tagList(
  # Head
  head("Stata to R"),
  create_body(
    prism_init,
    create_splash(
      create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
           "Cleaning Data with ",
           a(href = "https://cran.r-project.org/web/packages/data.table/vignettes/datatable-intro.html", class = "text-emerald-800 italic font-semibold", "data.table"), 
           "."
        )
      ),
      create_splash_body(
        p(
          a(href = "https://cran.r-project.org/web/packages/data.table/vignettes/datatable-intro.html", class = "text-emerald-800 font-semibold underline", "data.table"), 
          " is a package designed from the ground up in C++ to make cleaning data fast, easy and incredibly powerful. All the exampleps below will use a dataset of nyc flights loaded in the",
          span(class = "font-semibold", "Load Data"), 
          " section. A lot of these examples were reworked from",
          a(class = "text-emerald-600", href = "https://web.archive.org/web/20171023203000/http://johnricco.github.io/2016/06/14/stata-dplyr/", "this blog post"), 
          "."
        )
      )
    ),
    # Tutorial
    create_splash(
      create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
           "Introduction to data.table"
        )
      ),
      create_splash_body(
        p(
          "The ", a(href = "https://cran.r-project.org/web/packages/data.table/vignettes/datatable-intro.html", class = "text-emerald-800 font-semibold underline", "data.table"),
          " package centers around ", span(class = "font-semibold", "data.tables,"), " which are highly efficient data sets that can be manipulated using the package's syntax."
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
          span(class = "font-semibold", "data.table"), " uses these three simple components more flexibly than Stata does, and you can get quite a lot out of ", span(class = "font-semibold", "data.table"), " using only these three components that would require multiple other commands in Stata to accomplish. But even if you aren't doing anything fancy."
        ),
        p("These operations are very fast, not only compared to Stata but also many other data-manipulation packages in R or Python. As a bonus, many of them can be done ",
          span(class = "italic", "in-place,"), " which means that it will affect ", span(class = "italic", "only the parts you're actually changing,"),
          " without wasting memory and time on the parts that aren't being changed. Any time in the below cheat sheet you see a function with the word",
          span(class = "font-semibold", "set"), " in it, or the ", span(class = "font-semibold", ":="), " operator, that's an in-place operation. Speedy!")
        
      )
    ),
    # Cheat Sheet
    create_splash(
      create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
           "Cheatsheet"
        )
      )
    ),
    section_load,
    section_filter,
    section_gen
  )
) |> 
  as.character() |> 
  cat(file = "data_cleaning.html")




