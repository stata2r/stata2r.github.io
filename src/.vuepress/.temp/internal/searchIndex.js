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
            "title": "Import and prep secondary dataset",
            "slug": "import-and-prep-secondary-dataset",
            "children": []
          },
          {
            "level": 3,
            "title": "Inner merge",
            "slug": "inner-merge",
            "children": []
          },
          {
            "level": 3,
            "title": "Full merge",
            "slug": "full-merge",
            "children": []
          },
          {
            "level": 3,
            "title": "Left merge",
            "slug": "left-merge",
            "children": []
          },
          {
            "level": 3,
            "title": "Right merge",
            "slug": "right-merge",
            "children": []
          },
          {
            "level": 3,
            "title": "Anti merge",
            "slug": "anti-merge",
            "children": []
          },
          {
            "level": 3,
            "title": "Appending data",
            "slug": "appending-data",
            "children": []
          },
          {
            "level": 3,
            "title": "Advanced data.table merges (tips and tricks)",
            "slug": "advanced-data-table-merges-tips-and-tricks",
            "children": []
          }
        ]
      }
    ],
    "path": "/data.table/",
    "pathLocale": "/",
    "extraFields": [
      "\n## Introduction to data.table\n\nThe [**data.table**](https://rdatatable.gitlab.io/data.table) package centers \naround _data.tables_, which are highly efficient data frames that can be \nmanipulated using the package's concise syntax. For example, say we have a \ndata.table called `dat` (you can call it whatever you want). Then we can \nmanipulate it by putting arguments into its square brackets, i.e. `dat[]`. The \nthree main components of a **data.table** operation are `i`, `j`, and `by`, \nwhich go in the order **`dat[i, j, by]`**. Note you don't have to specify the \nlatter two if you're not currently using them.\n\n- **`i`**, the first component, selects the rows of the data.table that you'll be working with, like how in Stata the `if` or `in` command options let you refer to certain rows.\n- **`j`**, the second component, both selects and operates on the columns of the data.table, like how in Stata the `keep` or `drop` commands select specific columns of your data, or how `generate` or `replace` create or modify columns in your data.\n- **`by`**, the third component, gives the variable(s) designating groups that you'll be doing your calculations within, like how in Stata you can precede a command with `bysort`.\n\n**data.table** uses these simple components very flexibly. The upshot is that \nyou can perform complicated operations in a single line of concise **data.table** \ncode, which may have required multiple commands in other languages or libraries \nto accomplish. But even if you aren't doing anything fancy, **data.table** has \nyou covered with a stable set of functions that can be deployed on virtually \nany data wrangling task.\n\nLike Stata, **data.table** also provides some special shortcut symbols for \ncommon operations. For example, `_N` in Stata is equivalent to `.N` in \n**data.table**, while `.(x1, x2)` is short for `list(x1, x2)`. We'll see more \nexamples in cheatsheat that follows. But we do want to quickly highlight one \nspecial symbol in particular: `.SD` refers to the (S)ubset of (D)ata you're \nworking with. This can be used to do complex within-group calculations when you \nhave by specified, but more generally it's a way to perform operations on lots \nof columns with one line of code. By default, `.SD` refers to all columns in the\ndataset (excepting those in `by`). But you can specify the columns you want with \nthe `.SDcols` argument. Again, we'll see a bunch of examples below.\n\nFinally, **data.table** is extremely fast. It has long set the standard for \nin-memory data wrangling [benchmarks](https://h2oai.github.io/db-benchmark) \nacross a variety of libraries and languages. You will likely see an order(s) of \nmagnitude performance difference as you compare the code chunks below. As a \nbonus for Stata users, who are used to operations changing a single dataset in \nmemory, many **data.table** operations can be done _in-place_. This means that \nyou don't have to (re)assign the result to a new **data.table**. In-place \nmodifications are also very efficient, since they will only affect the parts \nyou're actually changing, without wasting memory and time on the parts that \naren't being changed. Any time in the below cheat sheet you see a function with \nthe word `set` in it, or the `:=` operator, that's an in-place operation.\n\n## Data I/O\n\nLike Stata's `.dta` format, R has its own native `.rds` binary file storage\ntype. (See also the [**fst**](http://www.fstpackage.org/) package.) However, we\ngenerally recommend that users avoid native—especially proprietary—data types\nsince they hamper interoperability and reproducibility. We'll hence concentrate\non common open-source file types below. We'll make an exception for `.dta` given\nour target audience, but we still recommend avoiding it if possible.\n\n### Read and write .csv\n\n<div class=\"code--container\">\n<div>\n\n```stata\nimport delimited using \"https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv\", clear\nexport delimited using \"flightdata.csv\", replace\n```\n</div>\n<div>\n\n```r\ndat = fread('https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv')\nfwrite(dat, 'flightdata.csv')\n```\n</div>\n</div>\n\n\n### Read and write .parquet\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Stata currently has limited support for parquet files\n* (and Linux/Unix only).\n* See: https://github.com/mcaceresb/stata-parquet\n\n```\n</div>\n<div>\n\n```r\n## These commands require the `arrow` package\npfiles = dir(pattern = \".parquet\")\nrbindlist(lapply(pfiles, arrow::read_parquet))\nrbindlist(lapply(pfiles, arrow::read_parquet, col_select=1:10))\n```\n</div>\n</div>\n\n\n### Read and write .dta\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* .dta is Stata's native (proprietary) file format\nuse \"filename.dta\", clear\n\nsave \"filename.dta\", replace\n```\n</div>\n<div>\n\n```r\n## These commands require the `haven` package\ndat = haven::read_dta('filename.dta')\nsetDT(dat) ## Or: dat = as.data.table(dat)\nhaven::write_dta(dat, 'filename.dta')\n```\n</div>\n</div>\n\n\n\n## Order\n\n### Sort rows\n\n<div class=\"code--container\">\n<div>\n\n```stata\nsort air_time\nsort air_time dest\ngsort -air_time\n```\n</div>\n<div>\n  \n```r\nsetorder(dat, air_time)\nsetorder(dat, air_time, dest)\nsetorder(dat, -air_time)\n```\n</div>\n</div>\n\n\n### Sort columns\n\n<div class=\"code--container\">\n<div>\n\n```stata\norder month day\n```\n</div>\n<div>\n  \n```r\nsetcolorder(dat, c('month','day'))\n```\n</div>\n</div>\n\n\n### Rename columns\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* rename (old) (new)\n\nrename arr_delay arrival_delay\nrename (carrier origin) (carrier_code origin_code)\nrename arr_* arrival_*\n```\n</div>\n<div>\n  \n```r\n## setnames(dat, old = ..., new = ...)\n\nsetnames(dat, 'arr_delay', 'arrival_delay')\nsetnames(dat, c('carrier','origin'), c('carrier_code','origin_code'))\nsetnames(dat, gsub('arr_', 'arrival_', names(dat)))\n```\n</div>\n</div>\n\n\n## Subset\n\nIn newer versions of Stata, it's possible to keep multiple datasets in memory,\nor \"frames\" as Stata calls them. However, this still requires extra steps that\nwould be unusual to users of other languages. It's also not the typical way that\nmost peope use Stata. In contrast, keeping multiple datasets in memory is\nextremely common in R. Moreover, subsetting and collapsing operations don't\noverwrite your original dataset. The upshot is that you don't need to wrap \neverything in `preserve/restore`. However, it also means that you'll need to \n(re)assign your subsetted/collapsed data if you want to use it again later. E.g.\n`dat1 = dat[origin=='LGA']`.\n\n### Subset rows\n\n<div class=\"code--container\">\n<div>\n\n_Reminder: You'll need to use `preserve/restore` if you want to retain the\noriginal dataset in the examples that follow._\n\n```stata\nkeep in 1/200\nkeep if day > 5 & day < 10\nkeep if inrange(day,5,10)\nkeep if origin==\"LGA\"\nkeep if regex(origin,\"LGA\")\nkeep if inlist(month,3,4,11,12)\nkeep if inlist(origin,\"JFK\",\"LGA\")\ndrop if month==1\n```\n</div>\n<div>\n  \n_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it\nlater, e.g. `dat1 = dat[1:200]`._\n\n```r\ndat[1:200]\ndat[day > 5 & day < 10]\ndat[between(day,5,10)] ## Or: dat[day %in% 5:10]\ndat[origin=='LGA']\ndat[origin %like% 'LGA']\ndat[month %in% c(3,4,11,12)]\ndat[origin %chin% c(\"JFK\",\"LGA\")] ## %chin% is a fast %in% for (ch)aracter strings\ndat[month!=1]\n```\n</div>\n</div>\n\n### Subset columns\n\n<div class=\"code--container\">\n<div>\n  \n_Reminder: You'll need to use `preserve/restore` if you want to retain the\noriginal dataset in the examples that follow._\n\n```stata\nkeep month day carrier\n\n\n\nkeep year-arr_delay\nkeep *_delay\n\ndrop origin dest\n\n\nds, has(type string)\ndrop `r(varlist)'\n\nds, has(type int)\nkeep `r(varlist)'\n```\n</div>\n<div>\n  \n_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it\nlater, e.g. `dat1 = dat[, .(month)]`._\n\n```r\ndat[, .(month, day, carrier)]\ndat[, list(month, day, carrier)] ## same as above\ndat[, c('month', 'day', 'carrier')] ## ditto\n\ndat[, year:arr_delay]\ndat[, .SD, .SDcols=patterns('*_delay')]\n\ndat[, -c('origin', 'dest')]\ndat[, c('origin', 'dest') := NULL] ## same, but in-place\n\n## Matches the two lines on the left:\ndat[, .SD, .SDcols=!is.character]\n\n## Matches the two lines on the left:\ndat[, .SD, .SDcols=is.integer]\n```\n</div>\n</div>\n\n\n### Subset rows and columns\n\n<div class=\"code--container\">\n<div>\n\n_Reminder: You'll need to use `preserve/restore` if you want to retain the\noriginal dataset in the examples that follow._\n  \n```stata\nkeep if origin==\"LGA\"\nkeep month day carrier\n```\n</div>\n<div>\n\n_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it\nlater, e.g. `dat1 = dat[...]`._\n\n```r\n## Matches the two lines on the left:\ndat[origin==\"LGA\", .(month, day, carrier)]\n```\n</div>\n</div>\n\n\n### Drop duplicates\n\n<div class=\"code--container\">\n<div>\n\n_Reminder: You'll need to use `preserve/restore` if you want to retain the\noriginal dataset in the examples that follow._\n  \n```stata\nduplicates drop\nduplicates drop month day carrier, force\n```\n</div>\n<div>\n\n_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it\nlater, e.g. `dat1 = unique(dat)`._\n\n```r\nunique(dat)\nunique(dat, by = c('month', 'day', 'carrier'))\n```\n</div>\n</div>\n\n\n### Drop missing\n\n<div class=\"code--container\">\n<div>\n\n_Reminder: You'll need to use `preserve/restore` if you want to retain the\noriginal dataset in the examples that follow._\n  \n```stata\nkeep if !missing(dest)\n\n* Requires: ssc inst missings\nmissings dropvars, force\nmissings air_time dest, force\n```\n</div>\n<div>\n\n_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it\nlater, e.g. `dat = dat[!is.na(dest)]`._\n  \n```r\ndat[!is.na(dest)]\n\n\nna.omit(dat)\nna.omit(dat, cols = c('air_time', 'dest'))\ndat[!is.na(air_time) & !is.na(dest)] ## Same as above\n```\n</div>\n</div>\n\n\n\n## Modify\n\n### Create new variables\n\n<div class=\"code--container\">\n<div>\n\n```stata\ngen dist_sq = distance^2\ngen tot_delay = dep_delay + arr_delay\ngen first_letter = substr(origin, 1,1)\ngen flight_path = origin + '_' + dest\n```\n</div>\n<div>\n  \n```r\ndat[, dist_sq := distance^2]\ndat[, tot_delay := dep_delay + arr_delay]\ndat[, first_letter := substr(origin,1,1)]\ndat[, flight_path := paste(origin, dest, sep='_')]\n```\n</div>\n</div>\n\n_Aside: These next operations don't have a great Stata equivalent, although you could \nimplement a loop._\n\n<div class=\"code--container\">\n<div>\n\n```stata\n*?\n```\n</div>\n<div>\n  \n```r\n## Multiple variables can be created at once.\n## These next three lines all do the same thing.\n## Just pick your favourite.\ndat[, c('dist_sq', 'dist_cu') := .(distance^2, distance^3)]\ndat[, ':=' (dist_sq=distance^2, dist_cu=distance^3)]\ndat[, let(dist_sq=distance^2, dist_cu=distance^3)] ## dev version only\n\n## We can also chain back-to-back dat[...][...]\n## (this holds for any data.table operation)\ndat[, dist_sq := distance^2][\n    , dist_cu := distance*dist_sq)]\n```\n</div>\n</div>\n\n### Create new variables within groups\n\n_Aside: In R, any missing (i.e. \"NA\") values will propagate during aggregating\nfunctions. If you have NA values in your real-life dataset — we don't in this\nexample dataset — you probably want to add `na.rm=TRUE` to remove these on the\nfly. E.g. `mean(var1, na.rm=TRUE)` or `lapply(.SD, mean, na.rm=TRUE)`._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nbysort origin: egen mean_dep_delay = mean(dep_delay)\nbysort origin dest: egen mean_dep_delay2 = mean(dep_delay)\n\n* Multiple grouped variables (manual demean example)\nforeach x of varlist dep_delay arr_delay air_time {\n    egen mean_`x'=mean(`x'), by(origin)\n    gen `x'_dm = `x` - mean_`x'\n    drop mean*\n}\n\n* Some short-cut symbols\nbysort carrier: g rows_per_carrier = _N\nbysort carrier: g index_within_carrier = _n\negen origin_index = group(origin)\n\n* Refer to other rows (uses generic data set)\nsort group time\nby group: gen growth = X/X[_n-1]\nby group: gen growth_since_first = X/X[1]\n```\n</div>\n<div>\n  \n```r\ndat[, mean_dep_delay := mean(dep_delay), by=origin]\ndat[, mean_dep_delay2 := mean(dep_delay), by=.(origin, dest)]\n\n## Multiple grouped variables (manual demean example)\ndmcols = c('dep_delay', 'arr_delay', 'air_time')\ndat[,\n    paste0(dmcols,'_dm') := lapply(.SD, \\(x) x-mean(x)),  ## before R 4.1 you'll need function(x) instead of the \\(x) shorthand\n    .SDcols = dmcols,\n    by = origin]\n\n## Some short-cut symbols\ndat[, rows_per_carrier := .N, by = carrier]\ndat[, index_within_carrier := .I, by = carrier]\ndat[, origin_index := .GRP, by = origin]\n\n## Refer to other rows (uses generic data set)\nsetorder(dat, group, time)\ndat[, growth := X/shift(X, 1), by = group]\ndat[, growth_since_first := X/first(X), by = group]\n```\n</div>\n</div>\n\n\n### Work with dates\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Give ourselves a date variable to work with\ntostring year month day, replace\ngen day_string = year + \"/\" + month + \"/\" + day\ngen date = date(day_string, \"YMD\")\nformat date %td\n\n* Pull out year (quarter, month, etc. work too)\ngen the_year = year(date)\n\n* Shift forward 7 days\nreplace date = date + 7\n```\n</div>\n<div>\n  \n```r\n## Make ourselves a date variable\ndat[, date := as.IDate(paste(year, month, day, sep='-'))]\n\n\n\n\n## Pull out year (quarter, month, etc. work too)\ndat[, the_year := year(date)]\n\n## Shift forward 7 days\ndat[, date := date + 7]\n```\n</div>\n</div>\n\n\n### Modify existing variables\n\n_Aside: We don't normally use a gen -> replace workflow in R, the way we do in Stata. See the 'Using Booleans & control-flow' section below for a more idiomatic approach._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nreplace tot_delay = dep_delay + arr_delay\n\n* Conditional modification\nreplace distance = distance + 1 if month==9\nreplace distance = 0 in 1\n\n* Modify multiple variables (same function)\nforeach x of varlist origin dest {\n    replace `x' = `x' + \" Airport\"\n}\n```\n</div>\n<div>\n  \n```r\ndat[, tot_delay := dep_delay + arr_delay]\n\n## Conditional modification\ndat[month==9, distance := distance + 1]\ndat[1, distance := 0]\n\n## Modify multiple variables (same function)\ncols = c('origin','dest')\ndat[, (cols) := lapply(.SD, \\(x) paste(x,'Airport')),  ### Note: before R 4.1 you need function(x) instead of the \\(x) shorthand\n    .SDcols = cols]\n```\n</div>\n</div>\n\n\n### Using Booleans & control-flow\n\n<div class=\"code--container\">\n<div>\n\n```stata\ngen long_flight = air_time>500 & !missing(air_time)\n\ngen flight_length = \"Long\" if air_time>500 & !missing(air_time)\nreplace flight_length = \"Short\" if missing(flight_length) & !missing(air_time)\n\n\ngen flight_length2 = \"Long\" if !missing(air_time)\nreplace flight_length2 = \"Med\" if air_time<=500\nreplace flight_length2 = \"Short\" if air_time<=120\n```\n</div>\n<div>\n  \n```r\ndat[, long_flight := air_time>500]\n\ndat[, flight_length := fifelse(air_time>500, 'Long', 'Short')]\n## fifelse is like base-R ifelse, but (f)aster!\n\n## for nested ifelse, easier to use fcase\ndat[, flight_length2 := fcase(air_time<=120, 'Short',\n                              air_time<=500, 'Med',\n                              default = 'Long')]\n```\n</div>\n</div>\n\n### Row-wise calculations\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Pre-packaged row calculations:\negen tot_delay = rowtotal(*_delay)\negen any_delay = rowfirst(*_delay)\n\n* Custom row calculations:\n* ?\n```\n</div>\n<div>\n  \n```r\n## Pre-packaged row calculations:\ndat[, tot_delay := rowSums(.SD), .SDcols = patterns('*_delay')]\ndat[, any_delay := fcoalesce(.SD), .SDcols = patterns('*_delay')]\n\n## Custom row calculations:\ndat[, new_var := mapply(custom_func, var1, var2)]\ndat[, new_var := custom_func(var1, var2)), by=.I] ## dev version only\n```\n</div>\n</div>\n\n### Fill in Time Series/Panel Data\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Carry forward the last-known observation\nsort id time\nby id: replace x = x[_n-1] if missing(x)\n* Carry back the next-known observation\ngsort id -time\nby id: replace x = x[_n-1] if missing(x)\n```\n</div>\n<div>\n  \n```r\n## Carry forward the last-known observation\nsetorder(dat, id, time)\ndat[, x := nafill(x, type = 'locf'), by = id]\n## Carry back the next-known observation\ndat[, x := nafill(x, type = 'nocb'), by = id]\n\n```\n</div>\n</div>\n\n\n## Collapse\n\nIn newer versions of Stata, it's possible to keep multiple datasets in memory,\nor \"frames\" as Stata calls them. However, this still requires extra steps that\nwould be unusual to users of other languages. It's also not the typical way that\nmost peope use Stata. In contrast, keeping multiple datasets in memory is\nextremely common in R. Moreover, subsetting and collapsing operations don't\noverwrite your original dataset. The upshot is that you don't need to wrap \neverything in `preserve/restore`. However, it also means that you'll need to \n(re)assign your subsetted/collapsed data if you want to use it again later. E.g.\n`dat1 = dat[, mean(var1)]`. Finally, remember our earlier note about aggregating\nfunctions on columns that have missing values: Use `na.rm=TRUE` to remove these\non the fly. E.g. `dat[, mean(var1, na.rm=TRUE)]`.\n\n### Collapse with no grouping\n\n<div class=\"code--container\">\n<div>\n\n_Reminder: You'll need to use `preserve/restore` if you want to retain the\noriginal dataset in the examples that follow._\n  \n```stata\ncollapse (mean) dep_delay\ncollapse (mean) mean_ddel=dep_delay\n\n\n\ncollapse (mean) mean_ddel=dep_delay mean_adel=arr_delay\n\n\n\ncollapse (mean) *delay\n\nds, has(type long)\ncollapse (mean) `r(varlist)'\n```\n</div>\n<div>\n  \n_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it\nlater, e.g. `dat1 = dat[, mean(dep_delay)]`._\n\n```r\ndat[, mean(dep_delay)] ## Just give me the number! As a scalar.\ndat[, .(mean_ddel=mean(dep_delay))] ## Give me back a data.table (note the .() here, that's what does it)\n\n## These next three lines all do the same thing.\n## Just pick your favourite.\ndat[, .(mean_ddel=mean(dep_delay), mean_adel=mean(arr_delay))]\ndat[, lapply(.SD, mean), .SDcols=c('arr_delay','dep_delay')] \ndat[, lapply(.SD, mean), .SDcols=arr_delay:dep_delay]\n\ndat[, lapply(.SD, mean), .SDcols=patterns('delay')]\n\n ## Matches the two lines on the left\ndat[, lapply(.SD, mean), .SDcols=is.numeric]\n```\n</div>\n</div>\n\n### Collapse by group\n\n<div class=\"code--container\">\n<div>\n  \n_Reminder: You'll need to use `preserve/restore` if you want to retain the\noriginal dataset in the examples that follow._\n\n```stata\ncollapse (mean) arr_delay, by(carrier)\ncollapse (mean) mean_adel = arr_delay, by(carrier)\n\ncollapse (mean) arr_delay, by(carrier month)\n\ncollapse \\\\\\ \n   (min) min_d = distance (max) max_d = distance, \\\\\\\n   by(origin)\n\ncollapse (mean) *_delay, \\\\\\\n   by(origin)\n\ncollapse \\\\\\\n   (mean) dep_delay arr_delay air_time distance, \\\\\\\n   by(origin)\n\n\negen unique_dest = tag(dest origin)\ncollapse (sum) unique_dest, by(origin)\n```\n</div>\n<div>\n  \n_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it\nlater, e.g. `dat1 = dat[, ...]`._\n\n```r\ndat[, .(arr_delay = mean(arr_delay)), by=carrier]\ndat[, .(mean_adel = mean(arr_delay)), by=carrier]\n\ndat[, .(arr_delay = mean(arr_delay)), by=.(carrier, month)]\n\ndat[, \n    .(min_d = min(distance), max_d = max(distance)), \n    by = origin]\n\ndat[, lapply(.SD, mean), .SDcols=patterns('_delay'), \n    by = origin]\n\ndat[, \n    lapply(.SD, mean), \n    .SDcols=c('dep_delay','arr_delay','air_time','distance'),\n    by = origin]\n\n## Matches the final two lines on the left:\ndat[, .(unique_dest = uniqueN(dest)), by = origin]\n```\n</div>\n</div>\n\n\n\n<div class=\"code--container\">\n<div>\n\n```stata\n\n\n```\n</div>\n<div>\n<i>Bonus: You can also do complicated (grouped) aggregations as part of a `dcast`\n(i.e. reshape wide) call. E.g. Get the min, mean and max departure and arrival\ndelays, by origin airport.</i>\n\n```r\ndcast(dat, origin~., fun=list(min,mean,max),\n      value.var=c('dep_delay','arr_delay'))\n```\n</div>\n</div>\n\n### Count rows\n\n<div class=\"code--container\">\n<div>\n\n```stata\ncount\ncount if month==10\n\n* Count rows by group:\ntabulate origin\n```\n</div>\n<div>\n\n```r\ndat[, .N] ## Or: nrow(dat)\ndat[month==10, .N] ## Or: nrow(dat[month==10]\n\n## Count rows by group:\ndat[, .N, by = origin])\n```\n</div>\n</div>\n\n\n### Grouped calculations and complex objects inside a data.table\n\n_Note: data.tables support list columns, so you can have complex objects like regression models inside a data.table. Among many other things, this means you can nest simulations inside a data.table as easily as you would perform any other (grouped) operation._\n\n```r\n## Example: Grouped regression\n\n## Let's run a separate regression of arrival delay on\n## departure delay for each month, inside our dataset\n\n## Just the coefficients\ndat[,\n    .(beta = coef(lm(arr_delay ~ dep_delay, .SD))[2]),\n    by = month]\n\n## Keep the whole model for each month\nmods = dat[,\n           .(mod = list(lm(arr_delay ~ dep_delay, .SD))),\n           by = month]\n## Now you can do things like put all 10 models in a\n## regression table or coefficient plot\nmodelsummary::msummary(mods$mod)\nmodelsummary::modelplot(mods$mod, coef_omit = 'Inter')\n```\n\n\n\n## Reshape\n\n### Reshape prep (this dataset only)\n\n_Note: We need to do a bit of prep to our air-traffic dataset to better demonstrate the reshape examples in this section. You probably don't need to do this for your own dataset._\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* We'll generate row IDs to avoid the (reshape) ambiguity\n* of repeated entries per date\ngen id = _n\n\n* For the Stata reshape, it's also going to prove\n* convenient to rename the delay vars.\nrename (dep_delay arr_delay) (delay_dep delay_arr)\n```\n</div>\n<div>\n  \n```r\n## We'll generate row IDs to avoid the (reshape) ambiguity\n## of repeated entries per date\ndat[, id := .I]\n```\n</div>\n</div>\n\n### Reshape long\n\n<div class=\"code--container\">\n<div>\n\n```stata\nreshape long delay_, i(id) j(delay_type) s\n```\n</div>\n<div>\n  \n```r\nldat = melt(dat, measure=patterns('_delay'))\n\n## Aside: you can also choose different names for your\n## new reshaped columns if you'd like, e.g.\nmelt(dat, measure=patterns('_delay'), variable='d_type')\n```\n</div>\n</div>\n\n\n### Reshape wide\n\n_Note: These examples use the reshaped-long data from above._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nreshape wide delay_, i(id) j(delay_type) s\n```\n</div>\n<div>\n  \n```r\nwdat = dcast(ldat, ... ~ variable)\n\n## Aside 1: If you only want to keep the id & *_delay cols\ndcast(ldat, id ~ variable)\n\n## Aside 2: It's also possible to perform complex and\n## powerful data aggregating tasks as part of the dcast\n## (i.e. reshape wide) call.\ndcast(dat, origin~., fun=list(min,mean,max),\n      value.var=c('dep_delay','arr_delay'))\n```\n</div>\n</div>\n\n\n## Merge\n\n### Import and prep secondary dataset\n\n_Note: Our secondary dataset for demonstrating the merges in this section will be one on airport characteristics._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nimport delimited using \"https://vincentarelbundock.github.io/Rdatasets/csv/nycflights13/airports.csv\", clear\n\n* Stata requires that merge ID variables have the same name  \n* across datasets. Let's do that before saving to disk.\nrename faa dest\nsave dat2.dta, replace\n\n* Now bring our original dataset back into memory\nimport delimited using \"https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv\", clear\n```\n</div>\n<div>\n  \n```r\ndat2 = fread(\"https://vincentarelbundock.github.io/Rdatasets/csv/nycflights13/airports.csv\")\n\n## R doesn't require that merge ID variables share the same\n## same name across datasets. But we'll add this anyway.\ndat2[, dest := faa]\n```\n</div>\n</div>\n\n### Inner merge\n\n_Only keep the matched rows across both datasets._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, keep(3) nogen\n```\n</div>\n<div>\n  \n```r\nmdat = merge(dat, dat2, by='dest')\n```\n</div>\n</div>\n\n\n### Full merge\n\n_Keep all rows of both datasets, regardless of whether matched._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, nogen\n```\n</div>\n<div>\n  \n```r\nmdat = merge(dat, dat2, by='dest', all=TRUE)\n```\n</div>\n</div>\n\n### Left merge\n\n_Keep all rows from the \"main\" dataset._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, keep(1 3) nogen\n```\n</div>\n<div>\n  \n```r\nmdat = merge(dat, dat2, by='dest', all.x=TRUE)\n```\n</div>\n</div>\n\n### Right merge\n\n_Keep all rows from the \"seconday\" dataset._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, keep(2 3) nogen\n```\n</div>\n<div>\n  \n```r\nmdat = merge(dat, dat2, by='dest', all.y=TRUE)\n```\n</div>\n</div>\n\n### Anti merge\n\n_Keep non-matched rows only._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nmerge m:1 dest using dat2.dta, keep(1 2) nogen\n```\n</div>\n<div>\n  \n```r\nmdat = dat[!dat2, on='dest']\n```\n</div>\n</div>\n\n### Appending data\n\n_This example just appends the flights data to itself. But the same principle would carry over to appending multiple, different datasets._\n\n<div class=\"code--container\">\n<div>\n\n```stata\nsave data_to_append.dta, replace\nappend using data_to_append.dta\n```\n</div>\n<div>\n  \n```r\nrbindlist(list(dat, dat)) ## Or rbind(dat, dat)\n```\n</div>\n</div>\n\n### Advanced data.table merges (tips and tricks)\n\n_These next few examples are meant to highlight some specific data.table merge tricks. They don't really have good Stata equivalents (that we're aware of)._\n\n##### Merge on different ID names\n\n<div class=\"code--container\">\n<div>\n\n```r\nmdat = merge(dat, dat2, by.x='dest', by.y='faa')\n```\n</div>\n<div>\n</div>\n</div>\n\n\n##### Set keys for even faster merges and syntax shortcuts\n\n<div class=\"code--container\">\n<div>\n\n```r\nsetkey(dat, dest); setkey(dat2, dest)\nmdat = merge(dat, dat2) ### note: don't need 'by'\n```\n</div>\n<div>\n</div>\n</div>\n\n##### Non-equi joins\n\nNon-equi joins are a bit hard to understand if you've never seen them before.\nBut they are incredibly powerful and solve a suprisingly common problem: Merging\ndatasets over a range (e.g. start to end dates), rather than exact matches.\nHere follows a simple example where we want to subset the first quarter flights\nfor American Airlines and second quarter flights for United Airlines:\n\n<div class=\"code--container\">\n<div>\n\n```r\ndat3 = data.table(carrier     = c('AA', 'UA'),\n                  start_month = c(1, 4),\n                  end_month   = c(3, 6))\n                  \ndat[dat3, on = .(carrier,\n                 month >= start_month,\n                 month <= end_month)]\n```\n</div>\n<div>\n</div>\n</div>\n\n##### Rolling joins \n\nRolling join are similar and allow you to match a set of dates forwards or\nbackwards. For example, our `dat` datset ends in October. So let's say we want\nto carry the last known entries for American and United Airlines forward to\n(random) future dates.\n\n<div class=\"code--container\">\n<div>\n\n```r\ndat4 = data.table(carrier  = c('AA', 'UA'),\n                  new_date = as.IDate(c('2014-11-01', '2014-11-15')))\n                  \ndat[, date := as.IDate(paste(year, month, day, sep='-'))]\n\ndat[dat4, on = .(carrier, date=new_date), roll='nearest']\n```\n</div>\n</div>\n<div>\n</div>\n\n\n\n"
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
        "title": "car and nlWaldTest for Coefficient Combinations",
        "slug": "car-and-nlwaldtest-for-coefficient-combinations",
        "children": [
          {
            "level": 3,
            "title": "Basic Combinations",
            "slug": "basic-combinations",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "modelsummary for Regression Tables",
        "slug": "modelsummary-for-regression-tables",
        "children": [
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
        "title": "marginaleffects for Marginal Effects",
        "slug": "marginaleffects-for-marginal-effects",
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
        "title": "sandwich for Additional Standard Error Adjustments",
        "slug": "sandwich-for-additional-standard-error-adjustments",
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
        "title": "lme4 for Random Effects",
        "slug": "lme4-for-random-effects",
        "children": [
          {
            "level": 3,
            "title": "Random Effects Models",
            "slug": "random-effects-models",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "collapse for Even Faster Grouped Calculations",
        "slug": "collapse-for-even-faster-grouped-calculations",
        "children": [
          {
            "level": 3,
            "title": "Means of Everything",
            "slug": "means-of-everything",
            "children": []
          }
        ]
      }
    ],
    "path": "/extras/",
    "pathLocale": "/",
    "extraFields": [
      "\n# Other Packages\n\nWhile we think you can get pretty darn far in R with just **data.table** and \n**fixest**, of course those two don't cover everything.\n\nThis page covers a small list of packages you may find especially useful when \ngetting started with R. We won't try to cover everything under the sun here. \nJust a few places to get going. For the rest, well, that's what Google is for \n(or, indeed, to learn about each of these in more detail).\n\nAll of the below packages have far more applications than is shown here. We'll \njust provide one or two examples of how each can be used. Finally, don't forget \nto install them with `install.packages('PKGNAME')` and load them with \n`library(PKGNAME)`. The former command you only have to run once per package (or \nas often as you want to update it); the latter whenever you want to use a \npackage in a new R session.\n\n## ggplot2: Beautiful and customizable plots\n\n[**ggplot2**](https://ggplot2.tidyverse.org/) is widely considered one of the \npreeminent plotting libraries available in any language. It provides an \nintuitive syntax that applies in the same way across many, many different kinds \nof vizualisations, and with a deep level of customization. Plus, endless \nadditional plugins to do what you want, including easy interactivity, animation, \nmaps, etc. We thought about giving **ggplot2** its own dedicated page like \n**data.table** and **fixest**. But instead we'll point you to the \n[Figures](https://lost-stats.github.io/Presentation/Figures/Figures.html) \nsection of the _Library of Statistical Techniques_, which already shows how to \ndo many different graphing tasks in both Stata and **ggplot2**. For a more \nin-depth overview you can always consult the excellent \n[package documentation](https://ggplot2.tidyverse.org/), or a book like Kieran \nHealy's wonderful [_Data Visualization_](https://socviz.co/).\n\n### Basic scatterplot\n\n<div class=\"code--container\">\n<div>\n\n```stata\ntwoway scatter yvar xvar\n twoway (scatter yvar xvar if group == 1, mc(blue)) \\\\\\\n        (scatter yvar xvar if group == 2, mc(red))\n```\n</div>\n<div>\n\n```r\nggplot(dat, aes(x = xvar, y = yvar)) + geom_point()\nggplot(dat, aes(x = xvar, y = yvar, color = group)) + \n  geom_point()\n```\n</div>\n</div>\n\n\n## tidyverse\n\nThe [**tidyverse**](https://www.tidyverse.org/) provides an extremely popular\nframework for data science tasks in R. This meta-package is actually a\ncollection of smaller packages that are all designed to work together, based on\na shared philosophy and syntax. We've already covered **ggplot2** above, but\nthere are plenty more. These include **dplyr** and **tidyr**, which offer an\nalternative syntax and approach to data wrangling tasks. While we personally\nrecommend **data.table**, these **tidyverse** packages have many ardent fans\ntoo. You may find that you prefer their modular design and verbal syntax. But\ndon't feel bound either way: it's totally fine to combine them. Some other\n**tidyverse** packages worth knowing about include **purrr**, which contains a suite\nof functions for automating and looping your work, **lubridate** which makes\nworking with date-based data easy, and **stringr** which offers functions with\nstraightforward syntax for working with string variables.\n\n### Data wrangling with dplyr\n\n_Note: **dplyr** doesn't modify data in place. So you'll need to (re)assign if you want to keep your changes. E.g. `dat = dat %>% group_by...`_\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Subset by rows and then columns\nkeep if var1==\"value\"\nkeep var1 var2 var3\n* Create a new variable by group\nbysort group1: egen mean_var1 = mean(var1)\n* Collapse by group\ncollapse (mean) arr_delay, by(carrier)\n```\n</div>\n<div>\n\n```r\n# Subset by rows and then columns\n dat %>%   # `%>%` is the tidyverse \"pipe\" operator\n   filter(var1==\"value\") %>%\n   select(var1, var2, var3)\n# Create a new variable by group\ndat %>%\n  group_by(group1) %>%\n  mutate(mean_var1 = mean(var1))\n# Collapse by group\ndat %>%\n  group_by(group1) %>%\n  summarise(mean_var1 = mean(var1))\n```\n</div>\n</div>\n\n### Manipulating dates with lubridate\n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Shift a date forward one month (not 30 days, one month)\n* ???\n```\n</div>\n<div>\n\n```r\n# Shift a date forward one month (not 30 days, one month)\nshifted_date = date + months(1)\n```\n</div>\n</div>\n\n### Iterating with purrr \n\n<div class=\"code--container\">\n<div>\n\n```stata\n* Read in many files and append them together\nlocal filelist: dir \"Data/\" files \"*.dta\"\nlocal firsttime = 1\nforeach f in filelist {\n    use `f', clear\n    if `firsttime' == 0 {\n        append using compiled_data.dta\n    }\n    save compiled_data.dta, replace\n}\n```\n</div>\n<div>\n\n```r\n# Read in many files and append them together\n# (this combines purrr with the data.table function fread)\nfilelist = list.files('Data/', pattern = '.csv')\ndat = filelist %>%\n    map_df(fread)\n```\n</div>\n</div>\n\n### String operations with stringr \n\n<div class=\"code--container\">\n<div>\n\n```stata\nsubinstr(string, \"remove\", \"replace\", .)\nsubstr(string, start, length)\nregex(string, \"regex\")\n\n```\n</div>\n<div>\n\n```r\nstr_replace_all(string, \"remove\", \"replace\")\nstr_sub(string, start, end)\nstr_detect(string, \"regex\")\n# Note all the stringr functions accept regex input\n```\n</div>\n</div>\n\n                     \n## car and nlWaldTest for Coefficient Combinations\n\nOne deficiency in R that can be surprising for Stata switchers is the lack of immediate access to complex postestimation coefficient tests like <span class=\"font-semibold\">testparm</span>, <span class=\"font-semibold\">lincom</span>, and <span class=\"font-semibold\">nlcom</span> in Stata. <span class=\"font-semibold\">fixest</span> already covers the <span class=\"font-semibold\">testparm</span> equivalent with its <span class=\"font-semibold\">wald()</span> function. But what about combinations of coefficients? <span class=\"font-semibold\">multcomp</span> is a nice package that does both with <span class=\"font-semibold\">glht()</span>, but isn't yet compatible with <span class=\"font-semibold\">fixest</span>. So instead we have the <span class=\"font-semibold\">car</span> package with <span class=\"font-semibold\">linearHypothesis()</span> for tests of linear combinations of coefficients (although not confidence intervals), and <span class=\"font-semibold\">nlWaldTest</span> for nonlinear combinations and confidence intervals.\n\n           \n### Basic Combinations\n\n<div class='code--container'>\n<div>\n\n```stata\n\nregress y x z\nlincom x + z\nnlcom _b[x]/_b[z]\n```\n</div>\n<div>\n\n```r\n# This example incorporates the fixest function feols()\nm = feols(y ~ x + z, data = dat)\nlinearHypothesis(m, 'x + z')\nnlWaldtest(m, 'b[2]/b[3]') # or nlConfint() instead for the confidence interval\n```\n</div>\n</div>\n                     \n                     \n## modelsummary for Regression Tables\n\nThe <span class=\"font-semibold\">fixest</span> package already has the <span class=\"font-semibold\">etable()</span> function for generating regression tables. However, it only exports to text or LaTeX, and isn't intended to be highly customizable. That's where <span class=\"font-semibold\">modelsummary</span> comes in! It works with all sorts of models, including those not from <span class=\"font-semibold\">fixest</span>, it's highly customizable, and outputs in all sorts of formats. It also has a <span class=\"font-semibold\">datasummary</span> function which works in similar ways to Stata's <span class=\"font-semibold\">table</span>. How about for summary statistics tables? There's a wealth of options (which is nice; Stata makes exporting summary statistics tables a pain). Check out <a href = \"https://lost-stats.github.io/Presentation/Tables/Summary_Statistics_Tables.html\" class=\"font-semibold\">this page</a> for an overview of some of them.\n\n           \n### Regression Table\n\n<div class='code--container'>\n<div>\n\n```stata\n\nreghdfe Y X Z \neststore est1 \nesttab est1\n\nreghdfe Y X Z A\neststore est2\nesttab est1 est2\n```\n</div>\n<div>\n\n```r\n# This example incorporates the fixest function feols()\nest1 = feols(Y ~ X + Z, dat) \netable(est1)\n\n\nest2 = feols(Y ~ X + Z + A, dat) \nmodelsummary(list(est1,est2))\n```\n</div>\n</div>\n                     \n                     \n## marginaleffects for Marginal Effects\n\nThe Stata <span class=\"font-semibold\">margins</span> command is an impressive piece of work! How can you replicate it in R? Well, there's the <span class=\"font-semibold\">marginaleffects</span> package for that. Individual marginal effects or average marginal effects for nonlinear models, or models with interactions or transformations. Done!\n\n           \n### Basic Logit Marginal Effects\n\n<div class='code--container'>\n<div>\n\n```stata\n* A logit:\nlogit Y X Z\nmargins, dydx(*)\n```\n</div>\n<div>\n\n```r\n# This example incorporates the fixest function feglm()\nm = feglm(Y ~ X + Z, family = binomial, data = mtcars)\nsummary(marginaleffects(m))\n```\n</div>\n</div>\n                     \n                     \n## sandwich for Additional Standard Error Adjustments\n\nThe <span class=\"font-semibold\">fixest</span> package comes with plenty of shortcuts for accessing standard-error adjustments like HC1 heteroskedasticity-robust standard errors, Newey-West, Driscoll-Kraay, or clustered standard errors. But there is, of course, more than that! Many additional options are covered by the <span class=\"font-semibold\">sandwich</span> package, which comes with a long list of functions like <span class=\"font-semibold\">vcovBS()</span> for bootstrapped standard errors, or <span class=\"font-semibold\">vcovHAC()</span> for HAc. These can slot right into <span class=\"font-semibold\">fixest</span> estimates, too! You shouldn't be using those \", robust\" errors for smaller samples anyway... you knew that right?\n\n           \n### Linear Model Adjustments\n\n<div class='code--container'>\n<div>\n\n```stata\n* \", robust\" uses hc1 which isn't great for small samples\nregress Y X Z, vce(hc3)\n```\n</div>\n<div>\n\n```r\n# vcov = 'hetero' uses hc1 which isn't great for small samples, but sandwich's vcovHC uses HC3 by default\nm = feols(Y ~ X + Z, vcov = vcovHC)\n```\n</div>\n</div>\n                     \n                     \n## lme4 for Random Effects\n\n<span class=\"font-semibold\">fixest</span> can do a lot, but it can't do everything. This site isn't even going to attempt to go into how to translate every single model into R. But we'll cover one class of models: random-effects models with <span class=\"font-semibold\">lme4</span> (there's also  <span class=\"font-semibold\">Rstan</span> if that floats your boat, in which case the translation from  <span class=\"font-semibold\">statastan</span> is pretty straightforward).  <span class=\"font-semibold\">lme4</span> and its <span class=\"font-semibold\">lmer()</span> function covers not just random-intercept models but also hierarchical models where slope coefficients follow random distributions.\n\n           \n### Random Effects Models\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset group time\nxtreg Y X, re\nmixed lifeexp || countryn: gdppercap\n```\n</div>\n<div>\n\n```r\n# No need for an xtset equivalent\nm = lmer(Y~(1|group) + X, data = dat)\nnm = lmer(Y~(1+x|group) + X, data = dat)\n```\n</div>\n</div>\n                     \n                     \n## collapse for Even Faster Grouped Calculations\n\nSure, we've gone on and on about how fast <span class=\"font-semibold\">data.table</span> is compared to just about everything besides, like, learning C yourself (and sometimes even then). But there is one package that can boast even faster times than <span class=\"font-semibold\">data.table</span>, at least at some tasks, and that's <span class=\"font-semibold\">collapse</span>, which is just about as fast as it gets at computing by-group calculations like means or standard deviations.\n\n           \n### Means of Everything\n\n<div class='code--container'>\n<div>\n\n```stata\ncollapse (mean) varlist, by(group)\n```\n</div>\n<div>\n\n```r\nfmean(dat, dat$group)\n```\n</div>\n</div>\n"
    ]
  },
  {
    "title": "fixest",
    "headers": [
      {
        "level": 2,
        "title": "Formula Creation",
        "slug": "formula-creation",
        "children": [
          {
            "level": 3,
            "title": "Fixed Effects",
            "slug": "fixed-effects",
            "children": []
          },
          {
            "level": 3,
            "title": "Categorical Variables",
            "slug": "categorical-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Interact Categoricals",
            "slug": "interact-categoricals",
            "children": []
          },
          {
            "level": 3,
            "title": "Interact Categorical and Continuous",
            "slug": "interact-categorical-and-continuous",
            "children": []
          },
          {
            "level": 3,
            "title": "Macros",
            "slug": "macros",
            "children": []
          },
          {
            "level": 3,
            "title": "Wildcard",
            "slug": "wildcard",
            "children": []
          },
          {
            "level": 3,
            "title": "Variables x1 ... x4",
            "slug": "variables-x1-x4",
            "children": []
          },
          {
            "level": 3,
            "title": "Regex",
            "slug": "regex",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Standard Errors",
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
            "title": "Cluster",
            "slug": "cluster",
            "children": []
          },
          {
            "level": 3,
            "title": "Two-way",
            "slug": "two-way",
            "children": []
          },
          {
            "level": 3,
            "title": "Conley Standard Errors",
            "slug": "conley-standard-errors",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Postestimation",
        "slug": "postestimation",
        "children": [
          {
            "level": 3,
            "title": "Regression Table",
            "slug": "regression-table",
            "children": []
          },
          {
            "level": 3,
            "title": "Coefficient Plot",
            "slug": "coefficient-plot",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Panel Data",
        "slug": "panel-data",
        "children": [
          {
            "level": 3,
            "title": "Lag Variables",
            "slug": "lag-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "Lead Variables",
            "slug": "lead-variables",
            "children": []
          },
          {
            "level": 3,
            "title": "First Difference",
            "slug": "first-difference",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Instrumental Variables",
        "slug": "instrumental-variables",
        "children": [
          {
            "level": 3,
            "title": "Instrumental Variables",
            "slug": "instrumental-variables-1",
            "children": []
          },
          {
            "level": 3,
            "title": "with Fixed Effects",
            "slug": "with-fixed-effects",
            "children": []
          }
        ]
      }
    ],
    "path": "/fixest/",
    "pathLocale": "/",
    "extraFields": [
      "\n# Regression analysis with fixest\n\n[**fixest**](https://lrberge.github.io/fixest) (by Laurent Bergé) is a package \ndesigned from the ground up in C++ to make running regressions fast and \nincredibly easy. It provides in-built support for a variety of linear and \nnon-linear models, as well as regression tables and plotting methods. \nWhile the package certainly doesn't cover every\nmodel that exists, there is a non-negligible subset of Stata users for whom\nevery model they've ever needed to run is covered by **fixest**.\n\nThis includes regular ol' linear regression in the `feols()` function, which\nbuilds off of the Base R standard regression function `lm()`, but also includes\nthings like instrumental variables via 2SLS, and of course support for as many\nfixed effects as you'd like. **fixest** isn't limited to linear regression\neither, covering IV and fixed-effects support for a wide range of GLM models\nlike logit, probit, Poisson, negative binomial, and so on in `feglm()` and\n`fepois()`.\n\n**fixest** covers all of this while being very fast. If you felt a speed boost\ngoing from Stata's `xtreg` to `reghdfe`, get ready for another significant \nimprovement when moving to **fixest**.\n\nYou also get a _lot_ of convenience features. **fixest** makes it easy to \nproduce publication-ready regression tables, as well as coefficient and\ninteraction-margin plots. You can select long lists of controls without having\nto type them all in, adjust standard errors for existings model on-the-fly,\nretrieve estimated fixed effects from your high-dimensional models, conduct Wald\ntests, adjust reference categories for factor variables, etc. etc.  You even get\nsome stuff that's rather tricky in Stata, like multi-model estimations, basic\nand staggered difference-in-difference support, or Conley standard errors.\n\nUsing fixest for regression starts with writing a formula. While there are\nplenty of bells and whistles to add, at its core regression formulas take the\nform `y ~ x1 + x2 | fe1 + fe2` where `y` is the outcome, `x1` and `x2` are\npredictors, and `fe1` and `fe2` are fixed effects.\n\nBefore continuing, make sure that you have installed **fixest**. You only \nhave to do this once (or as often as you want to update the package).\n<div class=\"code--container\">\n<div>\n\n```r\n# Install from CRAN (recommended)\ninstall.packages('fixest')\n```\n</div>\n<div>\n</div>\n</div>\n\nOnce **fixest** is installed, don't forget to load it whenever you want to \nuse it. Unlike Stata, you have to re-load a package every time you start a new R \nsession.\n\n<div class=\"code--container\">\n<div>\n\n```r\n# Load fixest into our current R session\nlibrary(fixest)\n```\n</div>\n<div>\n</div>\n</div>\n\n\nIn the examples that follow, we will use a modified dataset from the CPS (plus\nsome added variables for demonstration purposes). To load the data run the \nfollowing:\n\n<div class=\"code--container\">\n<div>\n\n```stata\n\nimport delimited using \"https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv\", clear\n```\n</div>\n<div>\n\n```r\n# Base R reads CSVs too, but we'll use data.table here\ndat = data.table::fread('https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv')\n```\n</div>\n</div>\n\n\n                     \n                     \n## Formula Creation\n\n           \n### Fixed Effects\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ i.fe\nreghdfe wage educ, absorb(fe)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + factor(countyfips), data = dat)\nfeols(wage ~ educ | countyfips, dat)\n```\n</div>\n</div>\n           \n### Categorical Variables\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ i.treat\n* Specifying a baseline:\nreghdfe wage educ ib1.treat\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + factor(treat), dat)\n# Specifying a baseline:\nfeols(wage ~ educ + i(treat, ref = 1), dat)\n```\n</div>\n</div>\n           \n### Interact Categoricals\n\n<div class='code--container'>\n<div>\n\n```stata\n\n\nreghdfe wage educ i.treat#i.hisp\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + treat*hisp, data = dat) # base-R approach\n# Approach specific to fixest that makes iplot() work later if desired:\nfeols(wage ~ educ + i(treat, i.hisp), dat)\n```\n</div>\n</div>\n           \n### Interact Categorical and Continuous\n\n<div class='code--container'>\n<div>\n\n```stata\n\nreghdfe wage educ c.age#i.treat\n\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educt + treat*age, data = dat) # base-R approach\n# Approach specific to fixest that makes iplot() work later if desired:\nfeols(wage ~ educ + i(treat, age), dat)\n```\n</div>\n</div>\n           \n### Macros\n\n<div class='code--container'>\n<div>\n\n```stata\nlocal vars age black hisp marr \nreghdfe wage educ `vars'\n```\n</div>\n<div>\n\n```r\nvars = c(\"age\", \"black\", \"hisp\", \"marr\") \nfeols(wage ~ educ + .[vars], dat)\n```\n</div>\n</div>\n           \n### Wildcard\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ x*\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + ..('x'), dat)\n```\n</div>\n</div>\n           \n### Variables x1 ... x4\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ x1-x4\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + x.[1:4], dat)\n```\n</div>\n</div>\n           \n### Regex\n\n<div class='code--container'>\n<div>\n\n```stata\n \n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + ..('regex_exp'), dat)\n```\n</div>\n</div>\n                     \n                     \n## Standard Errors\n\n           \n### HC\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ, vce(hc1)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ, dat, vcov = 'hc1')\n```\n</div>\n</div>\n           \n### HAC\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset id year\nivreghdfe wage educ, bw(auto) robust\n```\n</div>\n<div>\n\n```r\nfeols(y ~ x, dat, vcov = 'NW', panel.id = ~unit + time)\nfeols(wage ~ educ, dat, vcov = 'NW') # if panel id is already set (see below)\n```\n</div>\n</div>\n           \n### Cluster\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ, cluster(countyfips)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ, dat, vcov = ~countyfips)\n```\n</div>\n</div>\n           \n### Two-way\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ, cluster(countyfips year)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ, dat, vcov = ~countyfips + year)\n```\n</div>\n</div>\n           \n### Conley Standard Errors\n\n<div class='code--container'>\n<div>\n\n```stata\n* Figuring this out: http://www.trfetzer.com/conley-spatial-hac-errors-with-fixed-effects/\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ, dat, vcov = conley(\"25 mi\"))\n```\n</div>\n</div>\n                     \n                     \n## Postestimation\n\n           \n### Regression Table\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ age black hisp marr \neststore est1 \nesttab est1\n\nreghdfe wage educ age black hisp\neststore est2\nesttab est1 est2\n```\n</div>\n<div>\n\n```r\nest1 = feols(wage ~ educ + age + black + hisp + marr, dat) \netable(est1)\n\n\nest2 = feols(wage ~ educ + age + black + hisp, dat) \netable(est1,est2)\n```\n</div>\n</div>\n           \n### Coefficient Plot\n\n<div class='code--container'>\n<div>\n\n```stata\nreghdfe wage educ age black hisp marr  \neststore est1 \ncoefplot ...\n```\n</div>\n<div>\n\n```r\nest1 = feols(wage ~ educ + age + black + hisp + marr, dat) \ncoefplot(est1)\n```\n</div>\n</div>\n                     \n                     \n## Panel Data\n\nNote you don't need to specify panel.vars if you make your data a panel dataset before running the regression using the `panel` function. For example, you can use `panel(dat, ~ id + var)`.\n\n           \n### Lag Variables\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset id year \n reg wage educ l1.wage\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + l(wage, 1), dat, panel.id = ~id+year)\n```\n</div>\n</div>\n           \n### Lead Variables\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset id year \nreg wage educ f1.wage\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + l(wage, -1), dat, panel.id = ~id+year)\n```\n</div>\n</div>\n           \n### First Difference\n\n<div class='code--container'>\n<div>\n\n```stata\nxtset id year \nreg wage educ D.x\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ educ + d(wage), dat, panel.id = ~id+year)\n```\n</div>\n</div>\n                     \n                     \n## Instrumental Variables\n\n           \n### Instrumental Variables\n\n<div class='code--container'>\n<div>\n\n```stata\nivreghdfe 2sls wage (educ = age)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ 1 | educ ~ age, dat)\n```\n</div>\n</div>\n           \n### with Fixed Effects\n\n<div class='code--container'>\n<div>\n\n```stata\nivreghdfe 2sls wage (educ = age), absorb(countyfips)\n```\n</div>\n<div>\n\n```r\nfeols(wage ~ 1 | countyfips | educ ~ age, dat)\n```\n</div>\n</div>\n"
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
