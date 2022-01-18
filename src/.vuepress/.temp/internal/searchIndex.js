export const searchIndex = [
  {
    "title": "intro",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": [
      "\n# Translating Stata to R\n\nThe goal of this site is to provide a simple 'on-ramp' to R for Stata users.\nThere are two main pages (✌️📄) on this site:\n\n1. Data wrangling (🗄🧹) with [**data.table**](/data.table/)\n2. Regression analysis (💻📈) with [**fixest**](/fixest/)\n\nThere are [**other great packages**](/extras/) \nthat work well and are easy to use, but **data.table** and **fixest** are \nblazingly fast (🏃🏻💨) and highly powerful (💪🏻😎).\n\nPlus, they are flexible (👌✨) and can help you avoid R's \"package overload\".\nDepending on what you do in Stata, you might even be able to cut back, going \nfrom three packages—**reghdfe**, **estout** and **gtools**—to just two.\n"
    ]
  },
  {
    "title": "data.table",
    "headers": [
      {
        "level": 2,
        "title": "Introduction to data.table",
        "slug": "introduction-to-data-table",
        "children": []
      },
      {
        "level": 2,
        "title": "Data I/O",
        "slug": "data-i-o",
        "children": [
          {
            "level": 3,
            "title": "Read and write .csv",
            "slug": "read-and-write-csv",
            "children": []
          },
          {
            "level": 3,
            "title": "Read and write .parquet",
            "slug": "read-and-write-parquet",
            "children": []
          },
          {
            "level": 3,
            "title": "Read and write .dta",
            "slug": "read-and-write-dta",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Order",
        "slug": "order",
        "children": [
          {
            "level": 3,
            "title": "Sort rows",
            "slug": "sort-rows",
            "children": []
          },
          {
            "level": 3,
            "title": "Sort columns",
            "slug": "sort-columns",
            "children": []
          },
          {
            "level": 3,
            "title": "Rename columns",
            "slug": "rename-columns",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Subset",
        "slug": "subset",
        "children": [
          {
            "level": 3,
            "title": "Subset rows",
            "slug": "subset-rows",
            "children": []
          },
          {
            "level": 3,
            "title": "Subset columns",
            "slug": "subset-columns",
            "children": []
          },
          {
            "level": 3,
            "title": "Subset rows and columns",
            "slug": "subset-rows-and-columns",
            "children": []
          },
          {
            "level": 3,
            "title": "Drop duplicates",
            "slug": "drop-duplicates",
            "children": []
          },
          {
            "level": 3,
            "title": "Drop missing",
            "slug": "drop-missing",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Modify",
        "slug": "modify",
        "children": [
          {
            "level": 3,
            "title": "Create new variables",
            "slug": "create-new-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Create new variables within groups",
            "slug": "create-new-variables-within-groups",
            "children": []
          },
          {
            "level": 3,
            "title": "Work with dates",
            "slug": "work-with-dates",
            "children": []
          },
          {
            "level": 3,
            "title": "Modify existing variables",
            "slug": "modify-existing-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Using Booleans & control-flow",
            "slug": "using-booleans-control-flow",
            "children": []
          },
          {
            "level": 3,
            "title": "Row-wise calculations",
            "slug": "row-wise-calculations",
            "children": []
          },
          {
            "level": 3,
            "title": "Fill in Time Series/Panel Data",
            "slug": "fill-in-time-series-panel-data",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Collapse",
        "slug": "collapse",
        "children": [
          {
            "level": 3,
            "title": "Collapse with no grouping",
            "slug": "collapse-with-no-grouping",
            "children": []
          },
          {
            "level": 3,
            "title": "Collapse by group",
            "slug": "collapse-by-group",
            "children": []
          },
          {
            "level": 3,
            "title": "Count rows",
            "slug": "count-rows",
            "children": []
          },
          {
            "level": 3,
            "title": "Grouped calculations and complex objects inside a data.table",
            "slug": "grouped-calculations-and-complex-objects-inside-a-data-table",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Reshape",
        "slug": "reshape",
        "children": [
          {
            "level": 3,
            "title": "Reshape prep (this dataset only)",
            "slug": "reshape-prep-this-dataset-only",
            "children": []
          },
          {
            "level": 3,
            "title": "Reshape long",
            "slug": "reshape-long",
            "children": []
          },
          {
            "level": 3,
            "title": "Reshape wide",
            "slug": "reshape-wide",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Merge",
        "slug": "merge",
        "children": [
          {
            "level": 3,
            "title": "Import and prep secondary dataset on airport characterists",
            "slug": "import-and-prep-secondary-dataset-on-airport-characterists",
            "children": []
          },
          {
            "level": 3,
            "title": "Inner merge (i.e. keep row matches only)",
            "slug": "inner-merge-i-e-keep-row-matches-only",
            "children": []
          },
          {
            "level": 3,
            "title": "Full merge (i.e. keep all rows)",
            "slug": "full-merge-i-e-keep-all-rows",
            "children": []
          },
          {
            "level": 3,
            "title": "Left merge (i.e. keep all rows from \"main\" dataset)",
            "slug": "left-merge-i-e-keep-all-rows-from-main-dataset",
            "children": []
          },
          {
            "level": 3,
            "title": "Right merge (i.e. keep all rows from \"secondary\" dataset)",
            "slug": "right-merge-i-e-keep-all-rows-from-secondary-dataset",
            "children": []
          },
          {
            "level": 3,
            "title": "Anti merge (i.e. keep non-matched rows only)",
            "slug": "anti-merge-i-e-keep-non-matched-rows-only",
            "children": []
          },
          {
            "level": 3,
            "title": "Advanced merges (tips and tricks)",
            "slug": "advanced-merges-tips-and-tricks",
            "children": []
          },
          {
            "level": 3,
            "title": "Appending data",
            "slug": "appending-data",
            "children": []
          }
        ]
      }
    ],
    "path": "/data.table/",
    "pathLocale": "/",
    "extraFields": [
      "\n## Introduction to data.table\n\nThe [**data.table**](https://rdatatable.gitlab.io/data.table) package centers \naround _data.tables_, which are highly efficient data frames that can be \nmanipulated using the package's concise syntax. For example, say we have a \ndata.table called `dat` (you can call it whatever you want). Then we can \nmanipulate it by putting arguments into its square brackets, i.e. `dat[]`. The \nthree main components of a **data.table** operation are `i`, `j`, and `by`, \nwhich go in the order **`dat[i, j, by]`**. Note you don't have to specify the \nlatter two if you're not currently using them.\n\n- **`i`**, the first component, selects the rows of the data.table that you'll be working with, like how in Stata the `if` or `in` command options let you refer to certain rows.\n- **`j`**, the second component, both selects and operates on the columns of the data.table, like how in Stata the `keep` or `drop` commands select specific columns of your data, or how `generate` or `replace` create or modify columns in your data.\n- **`by`**, the third component, gives the variable(s) designating groups that you'll be doing your calculations within, like how in Stata you can precede a command with `bysort`.\n\n**data.table** uses these simple components very flexibly. The upshot is that \nyou can perform complicated operations in a single line of concise **data.table** \ncode, which may have required multiple commands in other languages or libraries \nto accomplish. But even if you aren't doing anything fancy, **data.table** has \nyou covered with a stable set of functions that can be deployed on virtually \nany data wrangling task.\n\nLike Stata, **data.table** also provides some special shortcut symbols for \ncommon operations. For example, `_N` in Stata is equivalent to `.N` in \n**data.table**, while `.(x1, x2)` is short for `list(x1, x2)`. We'll see more \nexamples in cheatsheat that follows. But we do want to quickly highlight one \nspecial symbol in particular: `.SD` refers to the (S)ubset of (D)ata you're \nworking with. This can be used to do complex within-group calculations when you \nhave by specified, but more generally it's a way to perform operations on lots \nof columns with one line of code. By default, `.SD` refers to all columns in the\ndataset (excepting those in `by`). But you can specify the columns you want with \nthe `.SDcols` argument. Again, we'll see a bunch of examples below.\n\nFinally, **data.table** is extremely fast. It has long set the standard for \nin-memory data wrangling [benchmarks](https://h2oai.github.io/db-benchmark) \nacross a variety of libraries and languages. You will likely see an order(s) of \nmagnitude performance difference as you compare the code chunks below. As a \nbonus for Stata users, who are used to operations changing a single dataset in \nmemory, many **data.table** operations can be done _in-place_. This means that \nyou don't have to (re)assign the result to a new **data.table**. In-place \nmodifications are also very efficient, since they will only affect the parts \nyou're actually changing, without wasting memory and time on the parts that \naren't being changed. Any time in the below cheat sheet you see a function with \nthe word `set` in it, or the `:=` operator, that's an in-place operation.\n\nBefore continuing, make sure that you have installed `data.table`. You only \nhave to do this once (or as often as you want to update the package).\n\n<div class=\"code--container grid-cols-1\">\n<div>\n\n```r\n# Install from CRAN (recommended) \ninstall.packages(data.table)\n\n# Install the development version from GitHub (advanced) \n# Requires Rtools and the remotes package \n# remotes::install_github('Rdatatable/data.table')\n```\n</div>\n</div>\n\nOnce `data.table` is installed, don't forget to load it whenever you want to \nuse it. Unlike Stata, you have to re-load a package every time you start a new R \nsession.\n\n<div class=\"code--container grid-cols-1\">\n<div>\n\n```r\n# Load data.table into our current R session\nlibrary(data.table)\n```\n</div>\n</div>\n\n                     \n                     \n## Data I/O\n\nLike Stata's \".dta\" format, R has its own native \".rds\" binary file storage type. (See also the <a href = \"http://www.fstpackage.org/\">fst</a> package.) However, we generally recommend that users avoid native—especially proprietary—data types since they hamper interoperability and reproducibility. We'll hence concentrate on common open-source file types below. We'll make an exception for .dta given our target audience, but we still recommend avoiding it if possible.\n\n           \n### Read and write .csv\n\n<div class='code--container'>\n<div>\n\n```stata\nimport delimited using \"https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv\", clear \nexport delimited using \"flightdata.csv\", replace\n```\n</div>\n<div>\n\n```r\ndat = fread('https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv')\nfwrite(dat, 'flightdata.csv')\n```\n</div>\n</div>\n           \n### Read and write .parquet\n\n<div class='code--container'>\n<div>\n\n```stata\n* Stata currently has limited support for parquet files \n* (and Linux/Unix only). \n* See: https://github.com/mcaceresb/stata-parquet\n```\n</div>\n<div>\n\n```r\n# These commands require the `arrow` package \npfiles = dir(pattern = \".parquet\") \nrbindlist(lapply(pfiles, arrow::read_parquet)) \nrbindlist(lapply(pfiles, arrow::read_parquet, col_select=1:10))\n```\n</div>\n</div>\n           \n### Read and write .dta\n\n<div class='code--container'>\n<div>\n\n```stata\n* .dta is Stata's native (proprietary) filetype \nuse \"filename.dta\", clear \n\n\nsave \"filename.dta\", replace\n```\n</div>\n<div>\n\n```r\n# These commands require the `haven` package \ndat = haven::read_dta('filename.dta') \nsetDT(dat) # Or: dat = as.data.table(dat) \n \nhaven::write_dta(dat, 'filename.dta')\n```\n</div>\n</div>\n                     \n                     \n## Order\n\n           \n### Sort rows\n\n<div class='code--container'>\n<div>\n\n```stata\nsort air_time \nsort air_time dest \ngsort -air_time\n\n\n```\n</div>\n<div>\n\n```r\nsetorder(dat, air_time) \nsetorder(dat, air_time, dest) \nsetorder(dat, -air_time)\n```\n</div>\n</div>\n           \n### Sort columns\n\n<div class='code--container'>\n<div>\n\n```stata\norder month day\n```\n</div>\n<div>\n\n```r\nsetcolorder(dat, c('month','day'))\n```\n</div>\n</div>\n           \n### Rename columns\n\n<div class='code--container'>\n<div>\n\n```stata\n* rename (old) (new) \n\nrename arr_delay arrival_delay \nrename (carrier origin) (carrier_code origin_code) \nrename arr_* arrival_*\n```\n</div>\n<div>\n\n```r\n# setnames(dat, old = ..., new = ...) \n\nsetnames(dat, 'arr_delay', 'arrival_delay') \nsetnames(dat, c('carrier','origin'), c('carrier_code','origin_code')) \nsetnames(dat, gsub('arr_', 'arrival_', names(dat)))\n```\n</div>\n</div>\n                     \n                     \n## Subset\n\nWhile it takes some doing in Stata to work with multiple data sets at once (and most people do not use Stata this way, and it doesn't work in old versions), using multiple datasets at once is standard in R, and **subsetting operations won't overwrite your original dataset**. That means you don't need to wrap everything in `preserve/restore`. However, it also means that you'll need to (re)assign your subsetted data if you want to use it again later. E.g. `dat1 = dat[origin=='LGA']`.\n\n           \n### Subset rows\n\n<div class='code--container'>\n<div>\n\n```stata\n* Reminder: You'll need to use preserve/restore\n* if you want to retain the original dataset in \n* the examples that follow. \n\nkeep in 1/200 \nkeep if day > 5 & day < 10\nkeep if inrange(day,5,10)\nkeep if origin == \"LGA\"\nkeep if regex(origin,\"LGA\") \nkeep if inlist(month,3,4,11,12) \nkeep if inlist(origin,\"JFK\",\"LGA\") \ndrop if month == 1\n```\n</div>\n<div>\n\n```r\n# Reminder: You'll need to (re)assign the \n# collapsed dataset if you want to use it later,\n# e.g. dat1 = dat[1:200] \n\ndat[1:200] \ndat[day > 5 & day < 10] \ndat[between(day,5,10)] # Or: dat[day %in% 5:10] \ndat[origin=='LGA']\ndat[origin %like% 'LGA'] \ndat[month %in% c(3,4,11,12)] \ndat[origin %chin% c(\"JFK\",\"LGA\")] # %chin% is a faster %in% for (ch)aracter strings \ndat[month!=1]\n```\n</div>\n</div>\n           \n### Subset columns\n\n<div class='code--container'>\n<div>\n\n```stata\n* Reminder: You'll need to use preserve/restore\n* if you want to retain the original dataset in \n* the examples that follow. \n\nkeep month day carrier \n\n\n\nkeep year-arr_delay\nkeep *_delay \n\ndrop origin dest \n\n\nds, has(type string) \ndrop `r(varlist)' \n\nds, has(type int) \nkeep `r(varlist)'\n```\n</div>\n<div>\n\n```r\n# Reminder: You'll need to (re)assign the \n# collapsed dataset if you want to use it later,\n# e.g. dat1 = dat[, .(month, day, carrier)] \n\ndat[, .(month, day, carrier)] \ndat[, list(month, day, carrier)] # same as above \ndat[, c('month', 'day', 'carrier')] # ditto \n\ndat[, year:arr_delay] \ndat[, .SD, .SDcols=patterns('*_delay')] \n\ndat[, -c('origin', 'dest')]\ndat[, c('origin', 'dest') := NULL] # same, but in-place \n\n# Matches the two lines on the left:\ndat[, .SD, .SDcols=!is.character] \n\n# Matches the two lines on the left: \ndat[, .SD, .SDcols=is.integer]\n```\n</div>\n</div>\n           \n### Subset rows and columns\n\n<div class='code--container'>\n<div>\n\n```stata\n* Reminder: You'll need to use preserve/restore\n* if you want to retain the original dataset in \n* the examples that follow. \n\nkeep if origin == \"LGA\"\nkeep month day carrier\n```\n</div>\n<div>\n\n```r\n# Reminder: You'll need to (re)assign the \n# collapsed dataset if you want to use it later,\n# e.g. dat1 = dat[origin==\"LGA\", .(month, day, carrier)] \n\n# Matches the two lines on the left:\ndat[origin==\"LGA\", .(month, day, carrier)]\n```\n</div>\n</div>\n           \n### Drop duplicates\n\n<div class='code--container'>\n<div>\n\n```stata\n* Reminder: You'll need to use preserve/restore\n* if you want to retain the original dataset in \n* the examples that follow. \n\nduplicates drop\nduplicates drop month day carrier, force\n\n```\n</div>\n<div>\n\n```r\n# Reminder: You'll need to (re)assign the \n# collapsed dataset if you want to use it later,\n# e.g. dat1 = unique(dat) \n\nunique(dat) \nunique(dat, by = c('month', 'day', 'carrier'))\n```\n</div>\n</div>\n           \n### Drop missing\n\n<div class='code--container'>\n<div>\n\n```stata\n* Reminder: You'll need to use preserve/restore\n* if you want to retain the original dataset in \n* the examples that follow. \n\nkeep if !missing(dest)\n* Requires: ssc inst missings\nmissings dropvars, force \nmissings air_time dest, force \n\n```\n</div>\n<div>\n\n```r\n# Reminder: You'll need to (re)assign the \n# collapsed dataset if you want to use it later,\n# e.g. dat = dat[!is.na(dest)] \n\ndat[!is.na(dest)]\n\nna.omit(dat) \nna.omit(dat, cols = c('air_time', 'dest')) \ndat[!is.na(air_time) & !is.na(dest)] # Same as above\n```\n</div>\n</div>\n                     \n                     \n## Modify\n\nIn R, any missing (i.e. \"NA\") values will propagate during aggregating functions. If you have NA values in your real-life dataset — we don't in this example dataset — you probably want to add \"na.rm=TRUE\" to remove these on the fly. E.g. \"mean(var1, na.rm=TRUE)\" or \"lapply(.SD, mean, na.rm=TRUE)\".\n\n           \n### Create new variables\n\n<div class='code--container'>\n<div>\n\n```stata\ngen dist_sq = distance^2 \ngen tot_delay = dep_delay + arr_delay \ngen first_letter = substr(origin, 1,1) \ngen flight_path = origin + '_' + dest \n\n* These next operations don't have a great Stata \n* equivalent, although you could implement a loop.\n```\n</div>\n<div>\n\n```r\ndat[, dist_sq := distance^2] \ndat[, tot_delay := dep_delay + arr_delay] \ndat[, first_letter := substr(origin,1,1)] \ndat[, flight_path := paste(origin, dest, sep='_')] \n\n# Multiple variables can be created at once.\n# These next few lines all do the same thing.\n# Just pick your favourite. \ndat[, c('dist_sq', 'dist_cu') := .(distance^2, distance^3)] \ndat[, ':=' (dist_sq=distance^2, dist_cu=distance^3)] # \"functional\" equivalent \ndat[, let(dist_sq=distance^2, dist_cu=distance^3)] # dev version only\n\n# We can also chain back-to-back dat[...][...] \n# (this holds for any data.table operation) \ndat[, dist_sq := distance^2][\n    , dist_cu := distance*dist_sq]\n```\n</div>\n</div>\n           \n### Create new variables within groups\n\n**Aside:** In R, any missing (i.e. \"NA\") values will propagate during aggregating functions. If you have `NA` values in your real-life dataset — we don't in this example dataset — you probably want to add `na.rm=TRUE` to remove these on the fly. E.g. `mean(var1, na.rm=TRUE)` or `lapply(.SD, mean, na.rm=TRUE)`.\n\n<div class='code--container'>\n<div>\n\n```stata\nbysort origin: egen mean_dep_delay = mean(dep_delay) \nbysort origin dest: egen mean_dep_delay2 = mean(dep_delay) \n\n* Multiple grouped variables (manual demean example) \nforeach x of varlist dep_delay arr_delay air_time {\n    egen mean_`x'=mean(`x'), by(origin) \n    gen `x'_dm = `x` - mean_`x' \n    drop mean* \n}\n\n* Some short-cut symbols \nbysort carrier: g rows_per_carrier = _N \nbysort carrier: g index_within_carrier = _n \negen origin_index = group(origin)\n\n* Refer to other rows (uses generic data set)\nsort group time\nby group: gen growth = X/X[_n-1]\nby group: gen growth_since_first = X/X[1]\n```\n</div>\n<div>\n\n```r\ndat[, mean_dep_delay := mean(dep_delay), by=origin] \ndat[, mean_dep_delay2 := mean(dep_delay), by=.(origin, dest)] \n\n# Multiple grouped variables (manual demean example) \ndmcols = c('dep_delay', 'arr_delay', 'air_time') \ndat[,\n    paste0(dmcols,'_dm') := lapply(.SD, \\(x) x-mean(x)),  # before R 4.1 you'll need function(x) instead of the \\(x) shorthand\n    .SDcols = dmcols,\n    by = origin] \n\n# Some short-cut symbols \ndat[, rows_per_carrier := .N, by = carrier] \ndat[, index_within_carrier := .I, by = carrier] \ndat[, origin_index := .GRP, by = origin]\n\n# Refer to other rows (uses generic data set)\nsetorder(dat, group, time)\ndat[, growth := X/shift(X, 1), by = group]\ndat[, growth_since_first := X/first(X), by = group]\n```\n</div>\n</div>\n           \n### Work with dates\n\n<div class='code--container'>\n<div>\n\n```stata\n* Give ourselves a date variable to work with\ntostring year month day, replace\ngen day_string = year + \"/\" + month + \"/\" + day\ngen date = date(day_string, \"YMD\")\nformat date %td\n\n* Pull out year (quarter, month, etc. work too)\ngen the_year = year(date)\n\n* Shift forward 7 days\nreplace date = date + 7\n```\n</div>\n<div>\n\n```r\n# Make ourselves a date variable\ndat[, date := as.IDate(paste(year, month, day, sep='-'))] \n\n\n\n\n# Pull out year (quarter, month, etc. work too)\ndat[, the_year := year(date)]\n\n# Shift forward 7 days\ndat[, date := date + 7]\n```\n</div>\n</div>\n           \n### Modify existing variables\n\n<div class='code--container'>\n<div>\n\n```stata\nreplace tot_delay = dep_delay + arr_delay \n\n* Conditional modification \nreplace distance = distance + 1 if month==9\nreplace distance = 0 in 1 \n\n* Modify multiple variables (same function) \nforeach x of varlist origin dest {\n    replace `x' = `x' + \" Airport\"\n}\n```\n</div>\n<div>\n\n```r\ndat[, tot_delay := dep_delay + arr_delay] \n\n# Conditional modification \ndat[month==9, distance := distance + 1]\ndat[1, distance := 0]\n\n# Modify multiple variables (same function) \ncols = c('origin','dest')\ndat[, (cols) := lapply(.SD, \\(x) paste(x,'Airport')),  ## Note: before R 4.1 you need function(x) instead of the \\(x) shorthand \n    .SDcols = cols] \n\n# Aside: We don't normally use a gen -> replace \n# workflow in R, the way we do in Stata. See the \n# 'Using Booleans & control-flow' section below.\n```\n</div>\n</div>\n           \n### Using Booleans & control-flow\n\n<div class='code--container'>\n<div>\n\n```stata\ngen long_flight = air_time>500 & !missing(air_time) \n\ngen flight_length = \"Long\" if air_time>500 & !missing(air_time)\nreplace flight_length = \"Short\" if missing(flight_length) & !missing(air_time) \n\n\ngen flight_length2 = \"Long\" if !missing(air_time) \nreplace flight_length2 = \"Med\" if air_time<=500  \nreplace flight_length2 = \"Short\" if air_time<=120\n```\n</div>\n<div>\n\n```r\ndat[, long_flight := air_time>500] \n\ndat[, flight_length := fifelse(air_time>500, 'Long', 'Short')] \n# fifelse is like base-R ifelse, but (f)aster! \n\n# for nested ifelse, easier to use fcase \ndat[, flight_length2 := fcase(air_time<=120, 'Short', \n                              air_time<=500, 'Med', \n                              default = 'Long')]\n```\n</div>\n</div>\n           \n### Row-wise calculations\n\n<div class='code--container'>\n<div>\n\n```stata\n* Pre-packaged row calculations: \negen tot_delay = rowtotal(*_delay)\negen any_delay = rowfirst(*_delay)\n\n* Custom row calculations:\n* ?\n```\n</div>\n<div>\n\n```r\n# Pre-packaged row calculations: \ndat[, tot_delay := rowSums(.SD), .SDcols = patterns('*_delay')]\ndat[, any_delay := fcoalesce(.SD), .SDcols = patterns('*_delay')] \n\n# Custom row calculations: \ndat[, new_var := mapply(custom_func, var1, var2)] \ndat[, new_var := custom_func(var1, var2), by=.I] # dev version only\n\n\n```\n</div>\n</div>\n           \n### Fill in Time Series/Panel Data\n\n<div class='code--container'>\n<div>\n\n```stata\n* Carry forward the last-known observation\nsort id time\nby id: replace x = x[_n-1] if missing(x)\n* Carry back the next-known observation\ngsort id -time\nby id: replace x = x[_n-1] if missing(x)\n```\n</div>\n<div>\n\n```r\n# Carry forward the last-known observation\nsetorder(dat, id, time)\ndat[, x := nafill(x, type = 'locf'), by = id]\n# Carry back the next-known observation\ndat[, x := nafill(x, type = 'nocb'), by = id]\n```\n</div>\n</div>\n                     \n                     \n## Collapse\n\nWhile it takes some doing in Stata to work with multiple data sets at once (and most people do not use Stata this way, and it doesn't work in old versions), using multiple datasets at once is standard in R. That means you don't need to wrap everything in `preserve/restore`. However, it also means that you'll need to (re)assign your collapsed data if you want to use it again later. E.g. `dat1 = dat[, mean(var1)]`. Also remember our earlier note about aggregating functions on columns that have missing values: Use `na.rm=TRUE` to remove these on the fly. E.g. `dat[, mean(var1, na.rm=TRUE)]`.\n\n           \n### Collapse with no grouping\n\n<div class='code--container'>\n<div>\n\n```stata\n* Reminder: You'll need to use preserve/restore\n* if you want to retain the original dataset in \n* the examples that follow. \n\ncollapse (mean) dep_delay \ncollapse (mean) mean_ddel=dep_delay \n\ncollapse (mean) mean_ddel=dep_delay mean_adel=arr_delay \n\n\n\ncollapse (mean) *delay \n\nds, has(type long)\ncollapse (mean) `r(varlist)'\n```\n</div>\n<div>\n\n```r\n# Reminder: You'll need to (re)assign the \n# collapsed dataset if you want to use it later,\n# e.g. dat1 = dat[, mean(dep_delay)] \n\ndat[, mean(dep_delay)] # Just give me the number! As a scalar. \ndat[, .(mean_ddel=mean(dep_delay))] # Give me back a data.table (note the .() here, that's what does it) \n\ndat[, .(mean_ddel=mean(dep_delay), mean_adel=mean(arr_delay))]\ndat[, lapply(.SD, mean), .SDcols=c('arr_delay','dep_delay')] # same \ndat[, lapply(.SD, mean), .SDcols=arr_delay:dep_delay] # ditto \n\ndat[, lapply(.SD, mean), .SDcols=patterns('delay')] \n\n # Matches the two lines on the left\ndat[, lapply(.SD, mean), .SDcols=is.numeric]\n```\n</div>\n</div>\n           \n### Collapse by group\n\n<div class='code--container'>\n<div>\n\n```stata\n* Reminder: You'll need to use preserve/restore\n* if you want to retain the original dataset in \n* the examples that follow. \n\ncollapse (mean) arr_delay, by(carrier) \ncollapse (mean) mean_adel = arr_delay, by(carrier) \n\ncollapse (mean) arr_delay, by(carrier month) \n\ncollapse (min) min_d = distance (max) max_d = distance, by(origin) \n\ncollapse (mean) *_delay, by(origin) \ncollapse (mean) dep_delay arr_delay air_time distance, by(origin) \n\n\negen unique_dest = tag(dest origin) \ncollapse (sum) unique_dest, by(origin)\n```\n</div>\n<div>\n\n```r\n# Reminder: You'll need to (re)assign the \n# collapsed dataset if you want to use it later,\n# e.g. dat1 = dat[, mean(dep_delay), by=origin] \n\ndat[, .(arr_delay = mean(arr_delay)), by=carrier] \ndat[, .(mean_adel = mean(arr_delay)), by=carrier] \n\ndat[, .(arr_delay = mean(arr_delay)), by=.(carrier, month)] \n\ndat[, .(min_d = min(distance), max_d = max(distance)), by=origin] \n\ndat[, lapply(.SD, mean), .SDcols=patterns('_delay'), by=origin] \ndat[, lapply(.SD, mean), .SDcols=c('dep_delay','arr_delay','air_time','distance'), by=origin] \ndat[, lapply(.SD, mean), .SDcols = c(4,5,9,10), by=origin] # same as above \n\n# Matches the final two lines on the left: \ndat[, .(unique_dest = uniqueN(dest)), by = origin] \n\n# Bonus: You can also do complicated (grouped)\n# aggregations as part of a dcast (i.e. reshape \n# wide) call. E.g. Get the min, mean and max\n# departure and arrival delays, by origin airport.\ndcast(dat, origin~., fun=list(min,mean,max),\n      value.var=c('dep_delay','arr_delay'))\n```\n</div>\n</div>\n           \n### Count rows\n\n<div class='code--container'>\n<div>\n\n```stata\ncount\ncount if month==10\n* Count rows by group:\ntabulate origin\n```\n</div>\n<div>\n\n```r\ndat[, .N] # Or: nrow(dat) \ndat[month==10, .N] # Or: nrow(dat[month==10]\n# Count rows by group:\ndat[, .N, by = origin]\n```\n</div>\n</div>\n           \n### Grouped calculations and complex objects inside a data.table\n\ndata.tables support list columns, so you can have complex objects like regression models inside a data.table. Among many other things, this means you can nest simulations inside a data.table as easily as you would perform any other (grouped) operation.\n\n<div class='code--container'>\n<div>\n\n```stata\n* ??\n```\n</div>\n<div>\n\n```r \n# Example: Grouped regression \n\n# Let's run a separate regression of arrival delay on \n# departure delay for each month, inside our dataset \n\n# Just the coefficients\ndat[,\n    .(beta = coef(lm(arr_delay ~ dep_delay, .SD))[2]),\n    by = month]\n\n# Keep the whole model for each month\nmods = dat[,\n           .(mod = list(lm(arr_delay ~ dep_delay, .SD))),\n           by = month] \n# Now you can do things like put all 10 models in a \n# regression table or coefficient plot \nmodelsummary::msummary(mods$mod) \nmodelsummary::modelplot(mods$mod, coef_omit = 'Inter')\n```\n</div>\n</div>\n                     \n                     \n## Reshape\n\n           \n### Reshape prep (this dataset only)\n\n<div class='code--container'>\n<div>\n\n```stata\n* We'll generate row IDs to avoid the (reshape) ambiguity \n* of repeated entries per date \ngen id = _n \n\n* For the Stata reshape, it's also going to prove \n* convenient to rename the delay vars. \nrename (dep_delay arr_delay) (delay_dep delay_arr)\n```\n</div>\n<div>\n\n```r\n# We'll generate row IDs to avoid the (reshape) ambiguity \n# of repeated entries per date \ndat[, id := .I] \n```\n</div>\n</div>\n           \n### Reshape long\n\n<div class='code--container'>\n<div>\n\n```stata\nreshape long delay_, i(id) j(delay_type) s\n```\n</div>\n<div>\n\n```r\nldat = melt(dat, measure=patterns('_delay'))\n\n# Aside: you can also choose different names for your\n# new reshaped columns if you'd like, e.g. \nmelt(dat, measure=patterns('_delay'), variable='d_type')\n```\n</div>\n</div>\n           \n### Reshape wide\n\n<div class='code--container'>\n<div>\n\n```stata\n* This starts with the reshaped-long data from above\nreshape wide delay_, i(id) j(delay_type) s\n```\n</div>\n<div>\n\n```r\n# This starts with the reshaped-long data from above\nwdat = dcast(ldat, ... ~ variable)\n\n# Aside 1: If you only want to keep the id & *_delay cols\ndcast(ldat, id ~ variable)\n\n# Aside 2: It's also possible to perform complex and \n# powerful data aggregating tasks as part of the dcast \n# (i.e. reshape wide) call.\ndcast(dat, origin~., fun=list(min,mean,max),\n      value.var=c('dep_delay','arr_delay'))\n```\n</div>\n</div>\n                     \n                     \n## Merge\n\n           \n### Import and prep secondary dataset on airport characterists\n\n<div class='code--container'>\n<div>\n\n```stata\nimport delimited using \"https://vincentarelbundock.github.io/Rdatasets/csv/nycflights13/airports.csv\", clear\n* Stata requires that merge ID variables have the same \n* name across datasets. \nrename faa dest \nsave dat2.dta, replace\nimport delimited using \"https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv\", clear\n```\n</div>\n<div>\n\n```r\ndat2 = fread(\"https://vincentarelbundock.github.io/Rdatasets/csv/nycflights13/airports.csv\") \n# R _doesn't_ require that merge ID variables share the \n# same name across datasets. But we'll add this anyway.\ndat2[, dest := faa]\n```\n</div>\n</div>\n           \n### Inner merge (i.e. keep row matches only)\n\n<div class='code--container'>\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, keep(3) nogen\n```\n</div>\n<div>\n\n```r\nmdat = merge(dat, dat2, by='dest') \n```\n</div>\n</div>\n           \n### Full merge (i.e. keep all rows)\n\n<div class='code--container'>\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, nogen\n```\n</div>\n<div>\n\n```r\nmdat = merge(dat, dat2, by='dest', all=TRUE)\n```\n</div>\n</div>\n           \n### Left merge (i.e. keep all rows from \"main\" dataset)\n\n<div class='code--container'>\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, keep(1 3) nogen\n```\n</div>\n<div>\n\n```r\nmdat = merge(dat, dat2, by='dest', all.x=TRUE)\n```\n</div>\n</div>\n           \n### Right merge (i.e. keep all rows from \"secondary\" dataset)\n\n<div class='code--container'>\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, keep(2 3) nogen\n```\n</div>\n<div>\n\n```r\nmdat = merge(dat, dat2, by='dest', all.y=TRUE)\n```\n</div>\n</div>\n           \n### Anti merge (i.e. keep non-matched rows only)\n\n<div class='code--container'>\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, keep(1 2) nogen\n```\n</div>\n<div>\n\n```r\nmdat = dat[!dat2, on='dest']\n```\n</div>\n</div>\n           \n### Advanced merges (tips and tricks)\n\nThese next few examples are meant to highlight some specific data.table merge tricks. They don't really have good Stata equivalents (that we're aware of).\n\n#### Merge on different ID names \n\n<div class='code--container grid-cols-1'>\n<div>\n\n```r\nmdat = merge(dat, dat2, by.x='dest', by.y='faa') \n```\n</div>\n</div>\n\n#### Set keys for even faster merges and syntax shortcuts \n\n<div class='code--container grid-cols-1'>\n<div>\n\n```r\nsetkey(dat, dest); setkey(dat2, dest) \nmdat = merge(dat, dat2) ## note: don't need 'by' \n```\n</div>\n</div>\n\n#### Non-equi joins\n\nNon-equi joins are a bit hard to understand if you've never seen them before. But they are incredibly powerful and solve a suprisingly common problem: Merging datasets over a range (e.g. start to end dates), rather than exact matches. Simple example where we want to subset the 1st qtr flights for American Airlines and 2nd qtr flights for United Airlines: \n\n<div class='code--container grid-cols-1'>\n<div>\n\n```r\ndat3 = data.table(carrier     = c('AA', 'UA'),\n                  start_month = c(1, 4),\n                  end_month   = c(3, 6)) \ndat[dat3, on = .(carrier,\n                 month >= start_month,\n                 month <= end_month)] \n```\n</div>\n</div>\n\n#### Rolling Joins\n\nRolling joins are similar and allow you to match a set of dates forwards or backwards. For example, our `dat`  datset ends in October. Let's say we want to carry the  last known entries for American and United Airlines  forward to (random) future dates. \n\n<div class='code--container grid-cols-1'>\n<div>\n\n```r\ndat4 = data.table(carrier  = c('AA', 'UA'),\n                  new_date = as.IDate(c('2014-11-01',\n                                        '2014-11-15'))) \ndat[, date := as.IDate(paste(year, month, day, sep='-'))] \ndat[dat4, on = .(carrier, date=new_date), roll='nearest']\n```\n</div>\n</div>\n\n\n\n\n### Appending data\n\n<div class='code--container'>\n<div>\n\n```stata\n* This just appends the flights data to itself\nsave data_to_append.dta, replace\nappend using data_to_append.dta\n```\n</div>\n<div>\n\n```r\n# This just appends the flights data to itself\nrbindlist(list(dat, dat)) # Or rbind(dat, dat)\n# The fill = TRUE option is handy if the one data set has columns the other doesn't\n```\n</div>\n</div>\n"
    ]
  },
  {
    "title": "fixest",
    "headers": [
      {
        "level": 2,
        "title": "Introduction to Fixest",
        "slug": "introduction-to-fixest",
        "children": []
      },
      {
        "level": 2,
        "title": "Models",
        "slug": "models",
        "children": [
          {
            "level": 3,
            "title": "Simple model",
            "slug": "simple-model",
            "children": []
          },
          {
            "level": 3,
            "title": "Categorical variables",
            "slug": "categorical-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Fixed effects",
            "slug": "fixed-effects",
            "children": []
          },
          {
            "level": 3,
            "title": "Instrumental variables",
            "slug": "instrumental-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Macros, wildcards and shortcuts",
            "slug": "macros-wildcards-and-shortcuts",
            "children": []
          },
          {
            "level": 3,
            "title": "Nonlinear models",
            "slug": "nonlinear-models",
            "children": []
          },
          {
            "level": 3,
            "title": "Difference-in-differences",
            "slug": "difference-in-differences",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Interactions",
        "slug": "interactions",
        "children": [
          {
            "level": 3,
            "title": "Interact continuous variables",
            "slug": "interact-continuous-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Interact categorical variables",
            "slug": "interact-categorical-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Interact categorical with continuous variables",
            "slug": "interact-categorical-with-continuous-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Interact fixed effects",
            "slug": "interact-fixed-effects",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Standard errors",
        "slug": "standard-errors",
        "children": [
          {
            "level": 3,
            "title": "HC",
            "slug": "hc",
            "children": []
          },
          {
            "level": 3,
            "title": "HAC",
            "slug": "hac",
            "children": []
          },
          {
            "level": 3,
            "title": "Clustered",
            "slug": "clustered",
            "children": []
          },
          {
            "level": 3,
            "title": "Conley standard errors",
            "slug": "conley-standard-errors",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Presentation",
        "slug": "presentation",
        "children": [
          {
            "level": 3,
            "title": "Regression table",
            "slug": "regression-table",
            "children": []
          },
          {
            "level": 3,
            "title": "Joint test of coefficients",
            "slug": "joint-test-of-coefficients",
            "children": []
          },
          {
            "level": 3,
            "title": "Coefficient plot",
            "slug": "coefficient-plot",
            "children": []
          },
          {
            "level": 3,
            "title": "Interaction Plot",
            "slug": "interaction-plot",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Panel",
        "slug": "panel",
        "children": [
          {
            "level": 3,
            "title": "Lag variables",
            "slug": "lag-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Lead variables",
            "slug": "lead-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "First difference",
            "slug": "first-difference",
            "children": []
          }
        ]
      }
    ],
    "path": "/fixest/",
    "pathLocale": "/",
    "extraFields": [
      "\n# Regression analysis with fixest\n\n[**fixest**](https://lrberge.github.io/fixest) (by Laurent Bergé) is a package \ndesigned from the ground up in C++ to make running regressions fast and \nincredibly easy. It provides in-built support for a variety of linear and \nnon-linear models, as well as regression tables and plotting methods. \n\nBefore continuing, make sure that you have installed `fixest`. You only \nhave to do this once (or as often as you want to update the package).\n\n<div class=\"code--container grid-cols-1\">\n<div>\n\n```r\n# Install from CRAN (recommended) \ninstall.packages(fixest)\n\n# Install the development version from GitHub (advanced) \n# Requires Rtools and the remotes package \n# remotes::install_github('lrberge/fixest')\n```\n</div>\n</div>\n\nOnce `fixest` is installed, don't forget to load it whenever you want to \nuse it. Unlike Stata, you have to re-load a package every time you start a new R \nsession.\n\n<div class=\"code--container grid-cols-1\">\n<div>\n\n```r\n# Load fixest into our current R session\nlibrary(fixest)\n```\n</div>\n</div>\n\n## Introduction to Fixest\n\nThe <a href=\"https://lrberge.github.io/fixest/index.html\">fixest</a> package contains a highly flexible set of tools that allow you to estimate a fairly large set of standard regression models. While the package certainly doesn't cover *every* model that exists, there is a non-negligible subset of Stata users for whom every model they've ever needed to run is covered by `fixest.`\n\nThis includes regular ol' linear regression in the `feols()` function, which builds off of the Base R standard regression function `lm(),` but also includes things like instrumental variables via 2SLS, and of course support for as many fixed effects as you'd like. `fixest` isn't limited to linear regression either, covering IV and fixed-effects support for a wide range of GLM models like logit, probit, Poisson, negative binomial, and so on in `feglm()` and `fepois().`\n\n`fixest` covers all of this while being very fast. If you felt a speed boost going from Stata's `xtreg` to `reghdfe,` get ready for another significant improvement when moving to `fixest.`\n\nYou also get a fair amount of convenience. Adjusting your standard errors to be heteroskedasticity-robust or clustered can be a pain in other R regression functions, but it is easy in `fixest` with the `vcov` option. Regression tables, coefficient and interaction-margin plots, selecting long lists of controls without having to type them all in, lagged variables, retrieving estimated fixed effects, Wald tests, and the choice of reference for categorical variables are all made easy. You even get some stuff that's rather tricky in Stata, like automatically iterating over a bunch of model specifications, basic and staggered difference-in-difference support, or Conley standard errors.\n\nUsing `fixest` for regression starts with writing a formula. While there are plenty of bells and whistles to ad d, at its core regression formulas take the form `y ~ x1 + x2 | fe1 + fe2` where y is the outcome, x1 and x2 are predictors, and fe1 and fe2 are your sets of fixed effects.\n\nTo begin, we will use a modified dataset from the CPS with some added variables for demonstration purposes. To load the data run the following:\n\n<div class=\"code--container\">\n<div>\n\n```stata\n\nimport delimited using \"https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv\", clear\n```\n</div>\n<div>\n\n```r\n# Base R reads CSVs too, but we'll use data.table here\ndat = data.table::fread('https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv')\n```\n</div>\n</div>\n\n\n                     \n                     \n                     \n## Models\n\nUnike Stata, which only ever has one active dataset in memory, remember that having multiple datasets in your global environment is the norm in R. We highlight this difference to head off a very common error for new Stata R users: you need to specify *which* dataset you're using in your model calls, e.g. `feols(..., data = dat)`. We'll see lots of examples below. At the same time, note that **fixest** allows you to set various <a href=\"https://lrberge.github.io/fixest/reference/index.html#section-default-values\">global options</a>, including which dataset you want to use for all of your regressions. Again, we'll see examples below.\n\n           \n### Simple model\n\n<div class='code--container'>\n<div>\n\n```stata\nreg wage educ \nreg wage educ age\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ, data = dat) \nfeols(wage ~ educ + age, data = dat)\n\n# Aside 1: `data = ...` is always the first argument \n# after the model formula. So many R users would just \n# write: \nfeols(wage ~ educ, dat) \n\n# Aside 2: You can also set your dataset globally so \n# that you don't have to reference it each time. \nsetFixest_estimation(data = dat) \nfeols(wage ~ educ) \nfeols(wage ~ educ + age) \n# etc.\n```\n</div>\n</div>\n           \n### Categorical variables\n\n<div class='code--container'>\n<div>\n\n```stata\nreg wage educ i.treat \n\n* Specifying a baseline:\nreg wage educ ib1.treat\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + i(treat), dat) \n\n# Specifying a baseline:\nfeols(wage ~ educ + i(treat, ref = 1), dat)\n```\n</div>\n</div>\n           \n### Fixed effects\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ, absorb(countyfips) cluster(countyfips) \n\n\n\n\n\nreghdfe wage educ, absorb(countyfips)  \n\n* Add more fixed effects... \nreghdfe wage educ, absorb(countyfips year) \\\\\\ \n                   vce(cluster countyfips year) \nreghdfe wage educ, absorb(countyfips#year) \\\\\\ \n                   vce(cluster countyfips#year)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ | countyfips, dat) \n\n# Aside: fixest automatically clusters SEs by the first \n# fixed effect (if there are any). We'll get to SEs \n# later, but if you just want iid errors for a fixed \n# effect model: \nfeols(wage ~ educ | countyfips, dat, vcov = 'iid') \n\n# Add more fixed effects... \nfeols(wage ~ educ | countyfips + year, \n      dat, vcov = ~countyfips + year) \nfeols(wage ~ educ | countyfips^year, \n      dat) # defaults to vcov = ~countyfips^year\n```\n</div>\n</div>\n           \n### Instrumental variables\n\n<div class='code--container'>\n<div>\n\n```stata\nivreg 2sls wage (educ = age) \nivreg 2sls wage marr(educ = age) \n\n* With fixed effects \nivreghdfe 2sls wage marr(educ = age), absorb(countyfips)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ 1 | educ ~ age, dat)  \nfeols(wage ~ marr | educ ~ age, dat) \n\n# With fixed effects (IV 1st stage always comes last) \nfeols(wage ~ marr | countyfips | educ ~ age, dat)\n```\n</div>\n</div>\n           \n### Macros, wildcards and shortcuts\n\n<div class='code--container'>\n<div>\n\n```stata\nlocal ctrls age black hisp marr \nreg wage educ `ctrls' \n\nreg wage educ x* \nreg wage educ *sp  \nreg wage educ *ac*\n```\n</div>\n<div>\n\n```r\nctrls = c(\"age\", \"black\", \"hisp\", \"marr\") \nfeols(wage ~ educ + .[ctrls], dat) \n\nfeols(wage ~ educ + ..('^x'), dat) # ^ = starts with \nfeols(wage ~ educ + ..('sp$'), dat) # $ = ends with \nfeols(wage ~ educ + ..('ac'), dat) \n\n# Many more macro options. See `?setFixest_fml` and\n# `?setFixest_estimation`. Example (reminder) where \n# you set your dataset globally, so you don't have to \n# retype `data = ...` anymore. \nsetFixest_estimation(data = dat) \nfeols(wage ~ educ) \nfeols(wage ~ educ + .[ctrls] | statefips) \n# Etc.\n```\n</div>\n</div>\n          \n### Nonlinear models\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset statefips\nlogit marr age black hisp\n* Attempting to replicate the feglm() model with fixed effects\n* at right using xtlogit or xtprobit leads to numerical overflow or matsize issues\n\nxtpoisson educ age black hisp i.year, fe\n```\n</div>\n<div>\n\n```r\n# feglm() runs all sorts of GLM models, with the same FE features as feols()!\nest1 = feglm(marr ~ age + black + hisp, data = dat, family = binomial(link = 'logit'))\nest2 = feglm(marr ~ age + black + hisp | statefips + year, data = dat, family = binomial(link = 'probit'))\n\n# fepois() is there for Poisson regression\nest3 = fepois(educ ~ age + black + hisp | statefips + year, data = dat)\n```\n</div>\n</div>\t  \n\n### Difference-in-differences\n\nIn addition to the ability to estimate a difference-in-differences design using two-way fixed effects (if the design is appropriate for that - no staggered treatment, for instance), `fixest` offers several other DID-specific tools. The below examples use generic data sets, since the CPS data used in the rest of this page is not appropriate for DID.\n\n<div class='code--container'>\n<div>\n\n```stata\n* No immediate Stata equivalent to did_means that we know of,\n* although you could replicate much of it by hand with an elaborate call to table\n\n* Sun and Abraham can be estimated using the \n* eventstudyinteract package on ssc\n```\n</div>\n<div>\n\n```r\n# did_means provides tables of means, SEs, and treatment/control and pre/post differences for 2x2 DID\ndid_means(outcome + control ~ treat | post)\n\n# sunab() produces interactions of the type that allow you to estimate the Sun & Abraham model\n# for staggered treatment timing, and automatically get average treatment effects for each relative period\nsunab_model = feols(y ~ control + sunab(year_treated, year))\netable(sunab_model)\n```\n</div>\n</div>\t  \n                     \n## Interactions\n\n           \n### Interact continuous variables\n\n<div class='code--container'>\n<div>\n\n```stata\nreg wage c.educ#c.age \nreg wage c.educ##c.age \n\n* Polynomials \nreg wage c.age#c.age \nreg wage c.age##c.age \n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ:age, dat) \nfeols(wage ~ educ*age, dat) \n\n# Polynomials \nfeols(wage ~ I(age^2), dat) \nfeols(wage ~ poly(age, 2, raw = TRUE))\n```\n</div>\n</div>\n           \n### Interact categorical variables\n\n<div class='code--container'>\n<div>\n\n```stata\nreg wage i.treat#i.hisp \n\n\n\n\nreg wage i.treat i.treat#i.hisp\nreg wage i.treat##i.hisp\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ i(treat, i.hisp), dat) \n\n# Aside: i() is a fixest-specific shortcut that also \n# has synergies with some other fixest functions. But \n# base R interaction operators all still work, e.g. \nfeols(wage ~ factor(treat)/factor(hisp), dat) \nfeols(wage ~ factor(treat)*factor(hisp), dat)\n```\n</div>\n</div>\n           \n### Interact categorical with continuous variables\n\n<div class='code--container'>\n<div>\n\n```stata\nreg wage i.treat#c.age \n\n\n\n\nreg wage i.treat#c.age \nreg wage i.treat i.treat#c.age \nreg wage i.treat##c.age\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ i(treat, age), dat) \n\n# Aside: i() is a fixest-specific shortcut that also \n# has synergies with some other fixest functions. But \n# base R interaction operators all still work, e.g. \nfeols(wage ~ factor(treat):age, dat) \nfeols(wage ~ factor(treat)/age, dat) \nfeols(wage ~ factor(treat)*age, dat)\n```\n</div>\n</div>\n           \n### Interact fixed effects\n\n<div class='code--container'>\n<div>\n\n```stata\n* Combine fixed effects \nreghdfe wage educ, absorb(statefips#year) \n\n* Varying slopes (e.g. time trend for each state) \n? \n```\n</div>\n<div>\n\n```r\n# Combine fixed effects \nfeols(wage ~ educ | statefips^year, dat) \n\n# Varying slopes (e.g. time trend for each state) \nfeols(wage ~ educ | statefips[year], dat)\n```\n</div>\n</div>\n                     \n                     \n## Standard errors\n\nWhile you can specify standard errors inside the original `fixest` model call (just like Stata), a unique feature of R is that you can adjust errors for an exisiting model *on the fly*. This has <a href = \"https://grantmcdermott.com/better-way-adjust-SEs\">several benefits</a>, including being much more efficient since you don't have to re-estimate your whole model. We'll try to highlight examples of both approaches below.\n\n           \n### HC\n\n<div class='code--container'>\n<div>\n\n```stata\nreg wage educ, vce(robust) \nreg wage educ, vce(hc3)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ, dat, vcov = 'hc1') \nfeols(wage ~ educ, dat, vcov = sandwich::vcovHC) \n\n# Note: You can also adjust the SEs of an existing model \nm = feols(wage ~ educ, dat) \nsummary(m, vcov = 'hc1')\n```\n</div>\n</div>\n           \n### HAC\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset id year\nivreghdfe wage educ, bw(auto) vce(robust)\n```\n</div>\n<div>\n\n```r\nfeols(y ~ x, dat, vcov = 'NW', panel.id = ~unit + time)\nfeols(y ~ x, dat, vcov = 'NW') # if panel id is already set (see below)\n```\n</div>\n</div>\n           \n### Clustered\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ, absorb(countyfips) \\\\\\ \n                   vce(cluster countyfips) \n\n* Twoway clustering etc. \nreghdfe wage educ, absorb(countyfips year) \\\\\\ \n                   vce(cluster countyfips year) \n\n\nreghdfe wage educ, absorb(countyfips#year) \\\\\\ \n                   vce(cluster countyfips#year)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ | countyfips, dat) # Auto clusters by FE \n# feols(wage ~ educ | countyfips, dat, vcov = ~countyfips) # ofc can be explicit too \n\n# Twoway clustering etc. \nfeols(wage ~ educ | countyfips + year, \n      dat, vcov = ~countyfips + year) \n# feols(wage ~ educ | countyfips + year, \n#      dat, vcov = 'twoway') ## same as above \nfeols(wage ~ educ | countyfips^year, \n      dat, vcov = ~countyfips^year) \n\n# Reminder that you can adjust the SEs of existing \n# fixest models on-the-fly. \nm = feols(wage ~ educ | countyfips + year, dat) \nm # Clustered by countyfips (default) \nsummary(m, vcov = 'twoway') \nsummary(m, vcov = ~countyfips^year) \n# etc.\n```\n</div>\n</div>\n           \n### Conley standard errors\n\n<div class='code--container'>\n<div>\n\n```stata\n* See: http://www.trfetzer.com/conley-spatial-hac-errors-with-fixed-effects/\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ, dat, vcov = conley(\"25 mi\"))\n```\n</div>\n</div>\n                     \n                     \n## Presentation\n\n           \n### Regression table\n\n<div class='code--container'>\n<div>\n\n```stata\nreg wage educ age \neststo est1 \nesttab est1\n\nreg wage educ age black hisp\neststo est2\nesttab est1 est2 \n\n* There aren't great Stata equivalents for these next \n* examples. You could mimic with a loop, but that will \n* require more code and be slower (since your whole \n* model has to be reestimated each time).\n```\n</div>\n<div>\n\n```r\nest1 = feols(wage ~ educ + age, dat) \netable(est1)\n\n\nest2 = feols(wage ~ educ + age + black + hisp, dat) \netable(est1, est2) \n\n\n# SEs for existing models can be adjusted on-the-fly \netable(est1, vcov = 'hc1') \n\n# Report multiple SEs for the same model \netable(est1, vcov = list('iid', 'hc1', ~id, ~countyfips)) \n\n# Multi-model example \n# (Two dep. vars, stepwise coefs, varying slopes, etc.) \nest_mult = feols(c(wage, age) ~ educ + csw(hisp, black) | \n                     statefips[year], \n                 dat, vcov = ~statefips^year) \netable(est_mult)\n```\n</div>\n</div>\n\n### Joint test of coefficients\n\n<div class='code--container'>\n<div>\n\n```stata\n* Rename so we can use the wildcard later\nrename (black hisp) (raceeth_black raceeth_hisp)\nregress wage educ age raceeth_black raceeth_hisp marr \ntestparm raceeth_black raceeth_hisp\ntestparm raceeth_*\n```\n</div>\n<div>\n\n```r\n# Rename so we can use a regular expression later\ndata.table::setnames(dat, c('black','hisp'),c('raceeth_black','raceeth_hisp'))\nest1 = feols(wage ~ educ + age + raceeth_black + raceeth_hisp + marr, dat) \nwald(est1, c('raceeth_black','raceeth_hisp'))\nwald(est1, 'raceeth_')\n```\n</div>\n</div>\n           \n### Coefficient plot\n\n<div class='code--container'>\n<div>\n\n```stata\n* Assume we have est1 and est2 from above \ncoefplot est1 \ncoefplot est1 est2\n```\n</div>\n<div>\n\n```r\n# Assume we have est1 and est2 from above \ncoefplot(est1) \ncoefplot(list(est1, est2))\n```\n</div>\n</div>\n                     \n### Interaction Plot\n\n<div class='code--container'>\n<div>\n\n```stata\nregress wage hisp##c.age\n\n* Show how effect differs by group\nmargins hisp, dydx(age)\nmarginsplot\n```\n</div>\n<div>\n\n```r\nest1 = feols(wage ~ i(hisp, age), dat) \n\n# Show how effect differs by group\niplot(est1)\n```\n</div>\n</div>        \n\t\t\n## Panel\n\nNote you don't need to specify panel.vars if you make your data a panel dataset before running the regression using the `panel` function. For example, you can use `panel(dat, ~ id + var)`.\n\n           \n### Lag variables\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset id year \n reg wage educ l1.wage\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + l(wage, 1), dat, panel.id = ~id+year)\n```\n</div>\n</div>\n           \n### Lead variables\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset id year \nreg wage educ f1.wage\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + l(wage, -1), dat, panel.id = ~id+year)\n```\n</div>\n</div>\n           \n### First difference\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset id year \nreg wage educ D.x\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + d(wage), dat, panel.id = ~id+year)\n```\n</div>\n</div>\n"
    ]
  },
  {
    "title": "extras",
    "headers": [
      {
        "level": 2,
        "title": "ggplot2: Beautiful and customizable plots",
        "slug": "ggplot2-beautiful-and-customizable-plots",
        "children": [
          {
            "level": 3,
            "title": "Basic scatterplot",
            "slug": "basic-scatterplot",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "tidyverse",
        "slug": "tidyverse",
        "children": [
          {
            "level": 3,
            "title": "Data wrangling with dplyr",
            "slug": "data-wrangling-with-dplyr",
            "children": []
          },
          {
            "level": 3,
            "title": "Manipulating dates with lubridate",
            "slug": "manipulating-dates-with-lubridate",
            "children": []
          },
          {
            "level": 3,
            "title": "Iterating with purrr",
            "slug": "iterating-with-purrr",
            "children": []
          },
          {
            "level": 3,
            "title": "String operations with stringr",
            "slug": "string-operations-with-stringr",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "collapse: Extra convenience functions and super fast aggregations",
        "slug": "collapse-extra-convenience-functions-and-super-fast-aggregations",
        "children": [
          {
            "level": 3,
            "title": "Quick Summaries",
            "slug": "quick-summaries",
            "children": []
          },
          {
            "level": 3,
            "title": "Multiple grouped aggregations",
            "slug": "multiple-grouped-aggregations",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "sandwich: More Standard Error Adjustments",
        "slug": "sandwich-more-standard-error-adjustments",
        "children": [
          {
            "level": 3,
            "title": "Linear Model Adjustments",
            "slug": "linear-model-adjustments",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "modelsummary: Summary tables, regression tables, and more",
        "slug": "modelsummary-summary-tables-regression-tables-and-more",
        "children": [
          {
            "level": 3,
            "title": "Summary Table",
            "slug": "summary-table",
            "children": []
          },
          {
            "level": 3,
            "title": "Regression Table",
            "slug": "regression-table",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "lme4: Random effects and mixed models",
        "slug": "lme4-random-effects-and-mixed-models",
        "children": [
          {
            "level": 3,
            "title": "Random Effects and Mixed Models",
            "slug": "random-effects-and-mixed-models",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "marginaleffects: Marginal effects, constrasts, etc.",
        "slug": "marginaleffects-marginal-effects-constrasts-etc",
        "children": [
          {
            "level": 3,
            "title": "Basic Logit Marginal Effects",
            "slug": "basic-logit-marginal-effects",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "multcomp and nlWaldTest: Joint coefficient tests",
        "slug": "multcomp-and-nlwaldtest-joint-coefficient-tests",
        "children": [
          {
            "level": 3,
            "title": "Test other null hypotheses and coefficient combinations",
            "slug": "test-other-null-hypotheses-and-coefficient-combinations",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "sf: Geospatial operations",
        "slug": "sf-geospatial-operations",
        "children": [
          {
            "level": 3,
            "title": "Simple Map",
            "slug": "simple-map",
            "children": []
          }
        ]
      }
    ],
    "path": "/extras/",
    "pathLocale": "/",
    "extraFields": [
      "\n# Other Packages\n\nWhile we think you can get pretty darn far in R with just **data.table** and \n**fixest**, of course those two don't cover everything.\n\nThis page covers a small list of packages you may find especially useful when \ngetting started with R. We won't try to cover everything under the sun here. \nJust a few places to get going. For the rest, well, that's what Google is for \n(or, indeed, to learn about each of these in more detail).\n\nAll of the below packages have far more applications than is shown here. We'll \njust provide one or two examples of how each can be used. Finally, don't forget \nto install them with `install.packages('PKGNAME')` and load them with \n`library(PKGNAME)`. The former command you only have to run once per package (or \nas often as you want to update it); the latter whenever you want to use a \npackage in a new R session.\n\n## ggplot2: Beautiful and customizable plots\n\n[**ggplot2**](https://ggplot2.tidyverse.org/) is widely considered one of the \npreeminent plotting libraries available in any language. It provides an \nintuitive syntax that applies in the same way across many, many different kinds \nof vizualisations, and with a deep level of customization. Plus, endless \nadditional plugins to do what you want, including easy interactivity, animation, \nmaps, etc. We thought about giving **ggplot2** its own dedicated page like \n**data.table** and **fixest**. But instead we'll point you to the \n[Figures](https://lost-stats.github.io/Presentation/Figures/Figures.html) \nsection of the _Library of Statistical Techniques_, which already shows how to \ndo many different graphing tasks in both Stata and **ggplot2**. For a more \nin-depth overview you can always consult the excellent \n[package documentation](https://ggplot2.tidyverse.org/), or a book like Kieran \nHealy's wonderful [_Data Visualization_](https://socviz.co/).\n\n### Basic scatterplot\n\n<div class=\"code--container\">\n<div>\n\n```stata\ntwoway scatter yvar xvar\ntwoway (scatter yvar xvar if group == 1, mc(blue)) \\\\\\\n        (scatter yvar xvar if group == 2, mc(red))\n```\n</div>\n<div>\n\n```r\nggplot(dat, aes(x = xvar, y = yvar)) + geom_point()\nggplot(dat, aes(x = xvar, y = yvar, color = group)) + \n  geom_point()\n```\n</div>\n</div>\n\n\n## tidyverse\n\nThe [**tidyverse**](https://www.tidyverse.org/) provides an extremely popular\nframework for data science tasks in R. This meta-package is actually a\ncollection of smaller packages that are all designed to work together, based on\na shared philosophy and syntax. We've already covered **ggplot2** above, but\nthere are plenty more. These include **dplyr** and **tidyr**, which offer an\nalternative syntax and approach to data wrangling tasks. While we personally\nrecommend **data.table**, these **tidyverse** packages have many ardent fans\ntoo. You may find that you prefer their modular design and verbal syntax. But\ndon't feel bound either way: it's totally fine to combine them. Some other\n**tidyverse** packages worth knowing about include **purrr**, which contains a suite\nof functions for automating and looping your work, **lubridate** which makes\nworking with date-based data easy, and **stringr** which offers functions with\nstraightforward syntax for working with string variables.\n\n### Data wrangling with dplyr\n\n_Note: **dplyr** doesn't modify data in place. So you'll need to (re)assign if you want to keep your changes. E.g. `dat = dat %>% group_by...`_\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Subset by rows and then columns\nkeep if var1==\"value\"\nkeep var1 var2 var3\n* Create a new variable by group\nbysort group1: egen mean_var1 = mean(var1)\n* Collapse by group\ncollapse (mean) arr_delay, by(carrier)\n```\n</div>\n<div>\n\n```r\n# Subset by rows and then columns\ndat %>%   # `%>%` is the tidyverse \"pipe\" operator\n   filter(var1==\"value\") %>%\n   select(var1, var2, var3)\n# Create a new variable by group\ndat %>%\n  group_by(group1) %>%\n  mutate(mean_var1 = mean(var1))\n# Collapse by group\ndat %>%\n  group_by(group1) %>%\n  summarise(mean_var1 = mean(var1))\n```\n</div>\n</div>\n\n### Manipulating dates with lubridate\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Shift a date forward one month (not 30 days, one month)\n* ???\n```\n</div>\n<div>\n\n```r\n# Shift a date forward one month (not 30 days, one month)\nshifted_date = date + months(1)\n```\n</div>\n</div>\n\n### Iterating with purrr \n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Read in many files and append them together\nlocal filelist: dir \"Data/\" files \"*.dta\"\nlocal firsttime = 1\nforeach f in filelist {\n    use `f', clear\n    if `firsttime' == 0 {\n        append using compiled_data.dta\n    }\n    save compiled_data.dta, replace\n}\n```\n</div>\n<div>\n\n```r\n# Read in many files and append them together\n# (this combines purrr with the data.table function fread)\nfilelist = list.files('Data/', pattern = '.csv')\ndat = filelist %>%\n    map_df(fread)\n```\n</div>\n</div>\n\n### String operations with stringr \n\n<div class=\"code--container\">\n<div>\n\n```stata\nsubinstr(string, \"remove\", \"replace\", .)\nsubstr(string, start, length)\nregex(string, \"regex\")\n\n```\n</div>\n<div>\n\n```r\nstr_replace_all(string, \"remove\", \"replace\")\nstr_sub(string, start, end)\nstr_detect(string, \"regex\")\n# Note all the stringr functions accept regex input\n```\n</div>\n</div>\n\n  \n\n## collapse: Extra convenience functions and super fast aggregations\n\np>Sure, we've gone on and on about how fast `data.table` is compared to just about everything else. But there is another R package that can boast even faster computation times for certain grouped calculations and transformations, and that's <a href = \"https://sebkrantz.github.io/collapse/index.html\" >collapse</a>. The `collapse` package doesn't try to do everything that `data.table` does. But the two <a href=\"https://sebkrantz.github.io/collapse/articles/collapse_and_data.table.html\">play very well together</a> and the former offers some convenience functions like `descr` and `collap`, which essentially mimic the equivalent functions in Stata and might be particularly appealing to readers of this guide. (P.S. If you'd like to load `data.table` and `collapse` at the same time, plus some other high-performance packages, check out the <a href = \"https://sebkrantz.github.io/fastverse/index.html\" >fastverse</a>.)\n\n\n\n### Quick Summaries\n\n<div class='code--container'>\n<div>\n\n```stata\nsummarize\ndescribe\n```\n</div>\n<div>\n\n```r\nqsu(dat)\ndescr(dat)\n```\n</div>\n</div>\n\n### Multiple grouped aggregations\n\n<div class='code--container'>\n<div>\n\n```stata\ncollapse (mean) var1, by(group1)\ncollapse (min) min_var1=var1 min_var2=var2 (max) max_var1=var1 max_var2=var2, by(group1 group2)\n```\n</div>\n<div>\n\n```r\ncollap(dat, var1 ~ group1, fmean) # 'fmean' => fast mean\ncollap(dat, var1 + var2 ~ group1 + group2, FUN = list(fmin, fmax))\n```\n</div>\n</div>\n\n                     \n## sandwich: More Standard Error Adjustments\n\nThe `fixest` package comes with plenty of shortcuts for accessing standard-error adjustments like HC1 heteroskedasticity-robust standard errors, Newey-West, Driscoll-Kraay, or clustered standard errors. But there is, of course, more than that! Many additional options are covered by the `sandwich` package, which comes with a long list of functions like `vcovBS()` for bootstrapped standard errors, or `vcovHAC()` for HAC. These can slot right into `fixest` estimates, too! You shouldn't be using those \", robust\" errors for smaller samples anyway... but you <a href = \"http://datacolada.org/99\">knew that</a>, right?\n\n           \n### Linear Model Adjustments\n\n<div class='code--container'>\n<div>\n\n```stata\n* \", robust\" uses hc1 which isn't great for small samples\nregress Y X Z, vce(hc3)\n```\n</div>\n<div>\n\n```r\n# sandwich's vcovHC uses HC3 by default\nfeols(Y ~ X + Z, dat,vcov = sandwich::vcovHC) \n\n# Aside: Remember that you can also adjust the SEs \n# for existing models on the fly \nm = feols(Y ~ X + Z, dat) \nsummary(m, vcov = sandwich::vcovHC)\n```\n</div>\n</div>\n\n\n## modelsummary: Summary tables, regression tables, and more\n\nThe `fixest` package already has the `etable()` function for generating regression tables. However, it is only really intended to work with models from the same package. So we also recommend checking out the fantastic <a href = \"https://vincentarelbundock.github.io/modelsummary/\">modelsummary</a> package. It works with all sorts of model objects, including those not from `fixest`, is incredibly customizable, and outputs to a bunch of different formats (PDF, HTML, DOCX, etc). Similarly, `modelsummary` has a wealth of options for producing publication-ready summary tables. Oh, and it produces coefficient plots too. Check out the <a href = \"https://vincentarelbundock.github.io/modelsummary/\">package website</a> for more.\n\n\n### Summary Table\n\n<div class='code--container'>\n<div>\n\n```stata\n* Summary stats table \nestpost summarize \nesttab, cells(\"count mean sd min max\") nomtitle nonumber \n\n* Balance table \nby treat_var: eststo: estpost summarize \nesttab, cells(\"mean sd\") label nodepvar\n```\n</div>\n<div>\n\n```r\n# Summary stats table \ndatasummary_skim(dat) \n\n\n# Balance table \ndatasummary_balance(~treat_var, dat)\n```\n</div>\n</div>\n\n\n### Regression Table\n\n<div class='code--container'>\n<div>\n\n```stata\nreg Y X Z \neststo est1 \nesttab est1b\n\nreg Y X Z, vce(hc3) \neststo est1b \nesttab est1b \n\nesttab est1 est1b\n\nreg Y X Z A, vce(hc3)\neststo est2\nesttab est1 est1b est2\n```\n</div>\n<div>\n\n```r\nest1 = lm(Y ~ X + Z, dat) \nmsummary(est1) # msummary() = alias for modelsummary()\n\n# Like fixest::etable(), SEs for existing models can\n# be adjusted on-the-fly \nmsummary(est1, vcov='HC3')\n\n# Multiple SEs for the same model\nmsummary(est1, vcov=list('iid', 'HC3')) \n\nest3 = lm(Y ~ X + Z + A, dat) \nmsummary(list(est1, est1, est3),\n         vcov = list('iid', 'HC3', 'HC3'))\n```\n</div>\n</div>\n\n\n## lme4: Random effects and mixed models\n\n`fixest` can do a lot, but it can't do everything. This site isn't even going to attempt to go into how to translate every single model into R. But we'll quick highlight random-effects and mixed models. The <a href = \"https://cran.r-project.org/web/packages/lme4/index.html\">lme4</a> package and its `lmer()` function covers not just random-intercept models but also hierarchical models where slope coefficients follow random distributions. (**Aside:** If you prefer Bayesian models for this kind of thing, check out the <a href = \"https://paul-buerkner.github.io/brms/\">brms</a> package.)\n\n           \n### Random Effects and Mixed Models\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset group time\nxtreg Y X, re\nmixed lifeexp || countryn: gdppercap\n```\n</div>\n<div>\n\n```r\n# No need for an xtset equivalent\nm = lmer(Y~(1|group) + X, data = dat)\nnm = lmer(Y~(1+x|group) + X, data = dat)\n```\n</div>\n</div>\n\n\n\n## marginaleffects: Marginal effects, constrasts, etc.\n\n \nThe Stata `margins` command is great. To replicate it in R, we recommend the <a href = \"https://vincentarelbundock.github.io/marginaleffects/\">marginaleffects</a> package. Individual marginal effects or average marginal effects for nonlinear models, or models with interactions or transformations, etc. It's also very fast.\n\n\n### Basic Logit Marginal Effects\n\n<div class='code--container'>\n<div>\n\n```stata\n* A logit:\nlogit Y X Z\nmargins, dydx(*)\n```\n</div>\n<div>\n\n```r\n# This example incorporates the fixest function feglm()\nm = feglm(Y ~ X + Z, family = binomial, data = mtcars)\nsummary(marginaleffects(m))\n```\n</div>\n</div>\n\n\n\n## multcomp and nlWaldTest: Joint coefficient tests\n\nStata provides a number of inbuilt commands for (potentially complex) postestimation coefficient tests like `testparm`, `lincom`, and `nlcom`. We've already seen that `fixest` covers the `testparm` equivalent with its `wald()` function. But what about combinations of coefficients? The <a href = \"http://multcomp.r-forge.r-project.org/\">multcomp</a> package handles a variety of linear tests and combinations, while <a href = \"https://cran.r-project.org/web/packages/nlWaldTest/index.html\">nlWaldTest</a> has you covered for nonlinear combinations.\n\n\n### Test other null hypotheses and coefficient combinations\n\n<div class='code--container'>\n<div>\n\n```stata\nregress y x z \n\n\n\n\n* One-sided test \ntest _b[x]=0 \nlocal sign_wgt = sign(_b[x]) \ndisplay \"H0: coef &lt;= 0  p-value = \" ttail(r(df_r),`sign_wgt'*sqrt(r(F))) \n\n* Test linear combination of coefficients \nlincom x + z \n\n\n* Test nonlinear combination of coefficients \nnlcom _b[x]/_b[z]\n```\n</div>\n<div>\n\n```r\nm = feols(y ~ x + z, dat)\n\n# Note: we recommend the dev version of multcomp \n# install.packages(\"multcomp\", repos=\"http://R-Forge.R-project.org\") \n\n# One-sided test \nm2 = multcomp::ghlt(m, 'x&lt;=0')\nsummary(m2) \n\n\n# Test linear combination of coefficients \nm3 = multcomp::glht(m, 'x + z = 0') \nsummary(m3) # or confint(m3) \n\n# Test nonlinear combination of coefficients \nnlWaldtest::nlWaldtest(m, 'b[2]/b[3]') # or nlWaldtest::nlConfint()\n```\n</div>\n</div>\n\n\n## sf: Geospatial operations\n\nR has outstanding support for geospatial computation and mapping. There are a variety of packages to choose from here, depending on what you want (e.g. interactive maps, high-dimensional data cubes, etc.) But the workhorse geospatial tool for most R users is the incredibly versatile <a href = \"https://r-spatial.github.io/sf/\">sf</a> package. We'll only provide a simple mapping example below. The `sf` <a href = \"https://r-spatial.github.io/sf/\">website</a> has several in-depth tutorials, and we also recommend the <a href = \"https://geocompr.robinlovelace.net/\">Geocomputation with R</a> book by Robin Lovelace, Jakub Nowosad, and Jannes Muenchow.\n\n### Simple Map\n\n<div class='code--container'>\n<div>\n\n```stata\n* Mapping in Stata requires the spmap and shp2dta \n* commands, and also that you convert your (say) \n* shapefile to .dta format first. We won't go through \n* all that here, but see: \n* https://www.stata.com/support/faqs/graphics/spmap-and-maps/\n```\n</div>\n<div>\n\n```r\n# This example uses the North Carolina shapefile that is\n# bundled with the sf package. \nnc = st_read(system.file(\"shape/nc.shp\", package = \"sf\")) \nplot(nc[, 'BIR74'])\n# Or, if you have ggplot2 loaded: \nggplot(nc, aes(fill=BIR74)) + geom_sf()\n```\n</div>\n</div>\n\n\n\n\n\n                     \n\n"
    ]
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": [
      ""
    ]
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
