# ------------------------------------------------------------------------------
# fixest
# ------------------------------------------------------------------------------

source(here::here("helpers.R"))

# Splash Section
splash <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
            "Running regressions using ",
            a(href = "https://lrberge.github.io/fixest/index.html", class = "text-[#4c807b] italic font-semibold", "fixest")
        )
    ),
    create_splash_body(
        p(
            a(href="https://lrberge.github.io/fixest/index.html", class="text-[#4c807b] font-semibold underline", "fixest"),
            " (by Laurent Berge) is a package designed from the ground up in C++ to make running regressions fast and incredibly easy. It provides in-built support for a variety of linear and non-linear models, as well as regression tables and plotting methods."
        ),
        p(
            "Before continuing, make sure that you have installed ",
            span(class = "font-semibold", "fixest"), ". You only have to do this ", span(class = "italic", "once"), " (or as often as you want to update the package)."
        ),
        p(
            code_block("language-r", "# Install from CRAN (recommended) \ninstall.packages(fixest)\n\n# Install the development version from GitHub (advanced) \n# Requires Rtools and the remotes package \n# remotes::install_github('lrberge/fixest')")
        ),
        p(
            "Once ", span(class = "font-semibold", "fixest"), " is installed, don't forget to load it whenever you want to use it. Unlike Stata, you have to re-load a package every time you start a new R session."
        ),
        p(
            code_block("language-r", "# Load fixest into our current R session \nlibrary(fixest)")
        )
    )
)

# Tutorial
tutorial <- create_section(
    create_splash_header(
        h1(class = "text-black text-4xl font-bold", 
            "Introduction to fixest"
        )
    ),
    create_splash_body(
        HTML(r"(
             <p>The <a href="https://lrberge.github.io/fixest/index.html" class="text-[#4c807b] font-semibold underline">fixest</a> package contains a highly flexible set of tools that allow you to estimate a fairly large set of standard regression models. While the package certainly doesn't cover <span class="italic">every</span> model that exists, there is a non-negligible subset of Stata users for whom every model they've ever needed to run is covered by <span class="font-semibold">fixest.</span></p>
             <p>This includes regular ol' linear regression in the <span class="font-semibold">feols()</span> function, which builds off of the Base R standard regression function <span class="font-semibold">lm(),</span> but also includes things like instrumental variables via 2SLS, and of course support for as many fixed effects as you'd like. <span class="font-semibold">fixest</span> isn't limited to linear regression either, covering IV and fixed-effects support for a wide range of GLM models like logit, probit, Poisson, negative binomial, and so on in <span class="font-semibold">feglm()</span> and <span class="font-semibold">fepois().</span></p>
             <p><span class="font-semibold">fixest</span> covers all of this while being very fast. If you felt a speed boost going from Stata's <span class="font-semibold">xtreg</span> to <span class="font-semibold">reghdfe,</span> get ready for another significant improvement when moving to <span class="font-semibold">fixest.</span></p>
             <p>You also get a fair amount of convenience. Adjusting your standard errors to be heteroskedasticity-robust or clustered can be a pain in other R regression functions, but it is easy in <span class="font-semibold">fixest</span> with the <span class="font-semibold">vcov</span> option. Regression tables, coefficient and interaction-margin plots, selecting long lists of controls without having to type them all in, lagged variables, retrieving estimated fixed effects, Wald tests, and the choice of reference for categorical variables are all made easy. You even get some stuff that's rather tricky in Stata, like automatically iterating over a bunch of model specifications, basic and staggered difference-in-difference support, or Conley standard errors.</p>
             <p>Using <span class="font-semibold">fixest</span> for regression starts with writing a formula. While there are plenty of bells and whistles to ad d, at its core regression formulas take the form <span class="font-semibold">y ~ x1 + x2 | fe1 + fe2</span> where y is the outcome, x1 and x2 are predictors, and fe1 and fe2 are your sets of fixed effects.</p>
             <p>To begin, we will use a modified dataset from the CPS with some added variables for demonstration purposes. To load the data run the following:</p>
             <div class="grid grid-cols-1 justify-start gap-y-4 mt-8 text-sm">
             <pre class="bg-white border-2 rounded-lg shadow-lg flex flex-col justify-start px-4 py-4 language-stata"><code class=" language-stata">import delimited using "https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv", clear</code></pre>
             <pre class="bg-white border-2 rounded-lg shadow-lg flex flex-col justify-start px-4 py-4 language-r"><code class=" language-r">library(data.table); dat = fread('https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv')</code></pre>
             </div>
        )")
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
            fixest_cheatsheet
        ),
    )   
) |> 
  as.character() |> 
  cat(file = "regression.html")
