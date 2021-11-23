# ------------------------------------------------------------------------------
# data.table
# ------------------------------------------------------------------------------

source(here::here("helpers.R"))

# ------------------------------------------------------------------------------
# Cheat Sheet
# ------------------------------------------------------------------------------


# ---- Load Data ---------------------------------------------------------------
section_load <- div(
    class = "max-w-[84rem] w-[95%]",
    create_section(
        create_section_header("Load Data")
    ),
    create_section(
        create_row(
            "Load .csv",
            "insheet using 'https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv'",
            "df <- fread('https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv')"
        ),
        create_row(
            "Load .dta",
            "use 'filename.dta', clear",
            "# Note: this command requires the package `haven` \ndf <- haven::read_dta('filename.dta')"
        )
    )
)

# ---- Filtering Rows/Columns --------------------------------------------------
section_filter <- div(
    class = "max-w-[84rem] w-[95%] mt-12",
    create_section(
        create_section_header("Filtering Rows/Columns")
    ),
    create_section(
        create_row(
            "Filter rows by logical statement",
            "keep if origin == 'LGA'\ndrop if month == 12\nkeep if day > 5 & day < 10 ",
            "df[origin == 'LGA', ]\ndf[month == 12, ]\ndf[day > 5 & day < 10, ]"
        ),
        create_row(
            "Filter rows by row number",
            "keep in 1/200",
            "df[1:200, ]"
        ),
        create_row(
            "Ordering Rows",
            "sort air_time \nsort air_time dest \nsort -air_time",
            "df[order(air_time), ] \ndf[order(air_time, dest), ] \ndf[order(-air_time), ] \n# Note you can use setorder for memory efficiency \nsetorder(df, air_time) \nsetorder(df, air_time, dest) \nsetorder(df, air_time, order=-1)"
        ),
        create_row(
            "Selecting variables",
            "keep month day carrier \ndrop origin dest\nkeep year-arr_delay\nkeep *_delay",
            "df[ , .(month, day, carrier)] \ndf[, -c('origin', 'dest')] \ndf[ , year:arr_delay] \ndf[, .SD, .SDcols = patterns('*_delay')]"
        ),
        create_row(
            "Renaming variables",
            "rename arr_delay arrival_delay \nrename arr_* arrival_*",
            "?? \n# Note you can use setnames for memory efficiency \nsetnames(df, 'arr_delay', 'arrival_delay') \n??"
        )
    )
)

# ---- Generating Variables ----------------------------------------------------
section_gen <- div(
    class = "max-w-[84rem] w-[95%] mt-12",
    create_section(
        create_section_header("Creating and Summarizing Variables")
    ),
    create_section(
        create_row(
            "Creating Variables",
            "gen total_delay = dep_delay + arr_delay \ngen first_letter = substr(origin, 1, 1) \ngen flight_path = origin + '_' + dest",
            "df[ , total_delay := dep_delay + arr_delay] \ndf[ , first_letter := substr(origin,1,1)] \ndf[, flight_path := paste(origin, dest, sep='_')]"
        ),
        create_row(
            "Summarizing Variables",
            "collapse (mean) mean_delay = arr_delay, by(carrier) \ncollapse (min) min_d = distance (max) max_d = distance, by(origin) \negen unique_dest = group(dest), by(origin) \ncollapse (max) unique_dest, by(origin)",
            "df[ , .(mean_delay = mean(arr_delay)), by=carrier] \ndf[ , .(min_d = min(distance), max_d = max(distance)), by=origin] \ndf[, .(unique_dest = length(unique(dest))), by=origin]"
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
                # Tutorial Here
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




