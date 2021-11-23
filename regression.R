# ------------------------------------------------------------------------------
# fixest
# ------------------------------------------------------------------------------

source(here::here("helpers.R"))

# ------------------------------------------------------------------------------
# Cheat Sheet
# ------------------------------------------------------------------------------

# ---- Formula Creation --------------------------------------------------------
section_formula <- div(class="max-w-[84rem] w-[95%]",
    create_section(
        create_section_header("Formula Creation")
    ),
    create_section(
        create_row(
            "Fixed Effects",
            "reghdfe y x, absorb(fe)",
            "feols(y ~ x | fe, data)"
        ),
        create_row(
            "Categorical Variables",
            "reghdfe y x i.cat",
            "feols(y ~ x + i(cat), data)"
        ),
        create_row("With Baseline",
                   "reghdfe y x ib1.cat",
                   "feols(y ~ x + i(cat, ref = 1), data)",
                   subitem = T
        ),
        create_row("Interact Categoricals",
                   "reghdfe y x i.cat#i.cat2",
                   "feols(y ~ x + i(cat, i.cat2), data)",
                   subitem = T
        ),
        create_row("Categorical and Continuous",
                   "reghdfe y x c.cont#i.cat",
                   "feols(y ~ x + i(cat, cont), data)",
                   subitem = T
        ),
        create_row(
            "Macros",
            "local vars varlist \n reghdfe y x `vars'",
            "vars = c(...) \n feols(y ~ x + .[vars], data)"
        ),
        create_row("Wildcard",
                   "reghdfe y x age_*",
                   "feols(y ~ x + ..('age_'), data)",
                   subitem = T
        ),
        create_row("Variables v1 ... v4",
                   "reghdfe y x v1-v4",
                   "feols(y ~ x + v.[1:4], data)",
                   subitem = T
        ),
        create_row("Regex",
                   "",
                   "feols(y ~ x + ..('regex_exp'), data)",
                   subitem = T
        ),
    )
)

# ---- Standard Errors ---------------------------------------------------------
section_se <- div(class="max-w-[84rem] w-[95%] mt-12",
    create_section(
        create_section_header("Standard Errors")
    ),
    create_section(
        create_row(
            "Robust",
            "reghdfe y x, r",
            "feols(y ~ x, data, 'hetero')"
        ),
        create_row(
            "Cluster",
            "reghdfe y x, cluster(clust)",
            "feols(y ~ x, data, vcov = ~clust)"
        ),
        create_row("Two-way",
                   "reghdfe y x, cluster(clust1 clust2)",
                   "feols(y ~ x, data, vcov = ~clust1 + clust2)",
                   subitem = T
        ),
        create_row("Conley Standard Errors",
                   "",
                   "feols(y ~ x, data, vcov = conley('lat', 'lon', 50))"
        ),
    )
)

# ---- Postestimation ----------------------------------------------------------
section_post <- div(class="max-w-[84rem] w-[95%] mt-12",
    create_section(
        create_section_header("Post-Estimation")
    ),
    create_section(
        create_row(
            "Regression Table",
            "reghdfe ... \n eststore est1 \n estout ...",
            "est1 <- feols(...) \n etable(est1)"
        ),
        create_row(
            "Coefficient Plot",
            "reghdfe ... \n eststore est1 \n estout ...",
            "est1 <- feols(...) \n coefplot(est1)"
        )
    )
)

# ---- Panel Data --------------------------------------------------------------
section_panel <- div(class="max-w-[84rem] w-[95%] mt-12",
    create_section(
        create_section_header("Panel Data")
    ),
    create_section(
        create_row(
            "Lag Variables",
            "xtset unit time \n reg y x l1.x l2.x",
            "panel(df, ~unit + time) \n feols(y ~ x + l(x, 1:2), df)"
        ),
        create_row(
            "Lead Variables",
            "xtset unit time \n reg y x f1.x f2.x",
            "panel(df, ~unit + time) \n feols(y ~ x + l(x, -2:-1), df)"
        ),
        create_row(
            "First Difference",
            "xtset unit time \n reg y x D.x",
            "panel(df, ~unit + time) \n feols(y ~ x + d(x), df)"
        ),
    )
)


# ---- IV ----------------------------------------------------------------------
section_iv <- div(class="max-w-[84rem] w-[95%] mt-12",
    create_section(
        create_section_header("Instrumental Variables")
    ),
    create_section(
        create_row(
            "Instrumental Variables",
            "ivreghdfe 2sls y x (x1 = z1)",
            "feols(y ~ x | x1 ~ z1, df)"
        ),
        create_row("with Fixed Effects",
                   "ivreghdfe 2sls y x (x1 = z1), absorb(fe1)",
                   "feols(y ~ x | fe1 | x1 ~ z1, df)",
                   subitem = T
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
                    "Running regressions using ",
                    a(href = "https://lrberge.github.io/fixest/articles/fixest_walkthrough.html", class = "text-emerald-800 italic font-semibold", "fixest"), 
                   "."
                )
            ),
            create_splash_body(
                p(
                    a(href="https://lrberge.github.io/fixest/articles/fixest_walkthrough.html", class="text-emerald-800 font-semibold underline", "fixest"),
                    "is a package designed from the ground up in C++ to make running regressions fast and incredibly easy."
                )
            )
        ),
        # Tutorial
        create_splash(
            create_splash_header(
                h1(class = "text-black text-4xl font-bold", 
                   "Introduction to fixest"
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
        section_formula,
        section_se,
        section_post,
        section_panel,
        section_iv
    )
) |> 
    as.character() |> 
    cat(file = "regression.html")


