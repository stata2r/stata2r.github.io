library(data.table)

set.seed(14)

cps <- fread(here::here("data/cps_mixtape.csv"))

cps <- cps[, .(id = V1, treat, age, educ, black, hisp, marr, nodegree, re74, re75, re78)]

cps <- melt(cps, 
     measure.vars = c("re74", "re75", "re78"),
     variable.name = "year", value.name = "wage"
)

cps[, year := as.numeric(stringr::str_replace(year, "re", "19"))]

# Creating a few variables

# Load state and county
state_county <- fread(here::here("data/county_centers.csv"))

state_county <- state_county[
        , countyfips := fips - 1000
    ][
        fips < 1100, .(countyfips, lon = clon00, lat = clat00)
    ]


cps = cps[, `:=`(
    treat = as.numeric(runif(.N) > 0.2),
    wage = wage + treat * -40,
    x1 = runif(.N),
    x2 = runif(.N),
    x3 = runif(.N),
    x4 = runif(.N),
    row = sample(1:nrow(state_county), .N, replace = T),
    statefips = "01"
)]

cps$countyfips = state_county[cps$row,][["countyfips"]]
cps$lon = state_county[cps$row,][["lon"]]
cps$lat = state_county[cps$row,][["lat"]]

dat = cps
