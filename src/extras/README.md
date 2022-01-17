---
title: extras
---

# Other Packages

While we think you can get pretty darn far in R with just **data.table** and 
**fixest**, of course those two don't cover everything.

This page covers a small list of packages you may find especially useful when 
getting started with R. We won't try to cover everything under the sun here. 
Just a few places to get going. For the rest, well, that's what Google is for 
(or, indeed, to learn about each of these in more detail).

All of the below packages have far more applications than is shown here. We'll 
just provide one or two examples of how each can be used. Finally, don't forget 
to install them with `install.packages('PKGNAME')` and load them with 
`library(PKGNAME)`. The former command you only have to run once per package (or 
as often as you want to update it); the latter whenever you want to use a 
package in a new R session.

## ggplot2: Beautiful and customizable plots

[**ggplot2**](https://ggplot2.tidyverse.org/) is widely considered one of the 
preeminent plotting libraries available in any language. It provides an 
intuitive syntax that applies in the same way across many, many different kinds 
of vizualisations, and with a deep level of customization. Plus, endless 
additional plugins to do what you want, including easy interactivity, animation, 
maps, etc. We thought about giving **ggplot2** its own dedicated page like 
**data.table** and **fixest**. But instead we'll point you to the 
[Figures](https://lost-stats.github.io/Presentation/Figures/Figures.html) 
section of the _Library of Statistical Techniques_, which already shows how to 
do many different graphing tasks in both Stata and **ggplot2**. For a more 
in-depth overview you can always consult the excellent 
[package documentation](https://ggplot2.tidyverse.org/), or a book like Kieran 
Healy's wonderful [_Data Visualization_](https://socviz.co/).

### Basic scatterplot

<div class="code--container">
<div>

```stata
twoway scatter yvar xvar
twoway (scatter yvar xvar if group == 1, mc(blue)) \\\
        (scatter yvar xvar if group == 2, mc(red))
```
</div>
<div>

```r
ggplot(dat, aes(x = xvar, y = yvar)) + geom_point()
ggplot(dat, aes(x = xvar, y = yvar, color = group)) + 
  geom_point()
```
</div>
</div>


## tidyverse

The [**tidyverse**](https://www.tidyverse.org/) provides an extremely popular
framework for data science tasks in R. This meta-package is actually a
collection of smaller packages that are all designed to work together, based on
a shared philosophy and syntax. We've already covered **ggplot2** above, but
there are plenty more. These include **dplyr** and **tidyr**, which offer an
alternative syntax and approach to data wrangling tasks. While we personally
recommend **data.table**, these **tidyverse** packages have many ardent fans
too. You may find that you prefer their modular design and verbal syntax. But
don't feel bound either way: it's totally fine to combine them. Some other
**tidyverse** packages worth knowing about include **purrr**, which contains a suite
of functions for automating and looping your work, **lubridate** which makes
working with date-based data easy, and **stringr** which offers functions with
straightforward syntax for working with string variables.

### Data wrangling with dplyr

_Note: **dplyr** doesn't modify data in place. So you'll need to (re)assign if you want to keep your changes. E.g. `dat = dat %>% group_by...`_

<div class="code--container">
<div>

```stata
* Subset by rows and then columns
keep if var1=="value"
keep var1 var2 var3
* Create a new variable by group
bysort group1: egen mean_var1 = mean(var1)
* Collapse by group
collapse (mean) arr_delay, by(carrier)
```
</div>
<div>

```r
# Subset by rows and then columns
dat %>%   # `%>%` is the tidyverse "pipe" operator
   filter(var1=="value") %>%
   select(var1, var2, var3)
# Create a new variable by group
dat %>%
  group_by(group1) %>%
  mutate(mean_var1 = mean(var1))
# Collapse by group
dat %>%
  group_by(group1) %>%
  summarise(mean_var1 = mean(var1))
```
</div>
</div>

### Manipulating dates with lubridate

<div class="code--container">
<div>

```stata
* Shift a date forward one month (not 30 days, one month)
* ???
```
</div>
<div>

```r
# Shift a date forward one month (not 30 days, one month)
shifted_date = date + months(1)
```
</div>
</div>

### Iterating with purrr 

<div class="code--container">
<div>

```stata
* Read in many files and append them together
local filelist: dir "Data/" files "*.dta"
local firsttime = 1
foreach f in filelist {
    use `f', clear
    if `firsttime' == 0 {
        append using compiled_data.dta
    }
    save compiled_data.dta, replace
}
```
</div>
<div>

```r
# Read in many files and append them together
# (this combines purrr with the data.table function fread)
filelist = list.files('Data/', pattern = '.csv')
dat = filelist %>%
    map_df(fread)
```
</div>
</div>

### String operations with stringr 

<div class="code--container">
<div>

```stata
subinstr(string, "remove", "replace", .)
substr(string, start, length)
regex(string, "regex")

```
</div>
<div>

```r
str_replace_all(string, "remove", "replace")
str_sub(string, start, end)
str_detect(string, "regex")
# Note all the stringr functions accept regex input
```
</div>
</div>

  

## collapse: Extra convenience functions and super fast aggregations

p>Sure, we've gone on and on about how fast `data.table` is compared to just about everything else. But there is another R package that can boast even faster computation times for certain grouped calculations and transformations, and that's <a href = "https://sebkrantz.github.io/collapse/index.html" >collapse</a>. The `collapse` package doesn't try to do everything that `data.table` does. But the two <a href="https://sebkrantz.github.io/collapse/articles/collapse_and_data.table.html">play very well together</a> and the former offers some convenience functions like `descr` and `collap`, which essentially mimic the equivalent functions in Stata and might be particularly appealing to readers of this guide. (P.S. If you'd like to load `data.table` and `collapse` at the same time, plus some other high-performance packages, check out the <a href = "https://sebkrantz.github.io/fastverse/index.html" >fastverse</a>.)



### Quick Summaries

<div class='code--container'>
<div>

```stata
summarize
describe
```
</div>
<div>

```r
qsu(dat)
descr(dat)
```
</div>
</div>

### Multiple grouped aggregations

<div class='code--container'>
<div>

```stata
collapse (mean) var1, by(group1)
collapse (min) min_var1=var1 min_var2=var2 (max) max_var1=var1 max_var2=var2, by(group1 group2)
```
</div>
<div>

```r
collap(dat, var1 ~ group1, fmean) # 'fmean' => fast mean
collap(dat, var1 + var2 ~ group1 + group2, FUN = list(fmin, fmax))
```
</div>
</div>

                     
## sandwich: More Standard Error Adjustments

The `fixest` package comes with plenty of shortcuts for accessing standard-error adjustments like HC1 heteroskedasticity-robust standard errors, Newey-West, Driscoll-Kraay, or clustered standard errors. But there is, of course, more than that! Many additional options are covered by the `sandwich` package, which comes with a long list of functions like `vcovBS()` for bootstrapped standard errors, or `vcovHAC()` for HAC. These can slot right into `fixest` estimates, too! You shouldn't be using those ", robust" errors for smaller samples anyway... but you <a href = "http://datacolada.org/99">knew that</a>, right?

           
### Linear Model Adjustments

<div class='code--container'>
<div>

```stata
* ", robust" uses hc1 which isn't great for small samples
regress Y X Z, vce(hc3)
```
</div>
<div>

```r
# sandwich's vcovHC uses HC3 by default
feols(Y ~ X + Z, dat,vcov = sandwich::vcovHC) 

# Aside: Remember that you can also adjust the SEs 
# for existing models on the fly 
m = feols(Y ~ X + Z, dat) 
summary(m, vcov = sandwich::vcovHC)
```
</div>
</div>


## modelsummary: Summary tables, regression tables, and more

The `fixest` package already has the `etable()` function for generating regression tables. However, it is only really intended to work with models from the same package. So we also recommend checking out the fantastic <a href = "https://vincentarelbundock.github.io/modelsummary/">modelsummary</a> package. It works with all sorts of model objects, including those not from `fixest`, is incredibly customizable, and outputs to a bunch of different formats (PDF, HTML, DOCX, etc). Similarly, `modelsummary` has a wealth of options for producing publication-ready summary tables. Oh, and it produces coefficient plots too. Check out the <a href = "https://vincentarelbundock.github.io/modelsummary/">package website</a> for more.


### Summary Table

<div class='code--container'>
<div>

```stata
* Summary stats table 
estpost summarize 
esttab, cells("count mean sd min max") nomtitle nonumber 

* Balance table 
by treat_var: eststo: estpost summarize 
esttab, cells("mean sd") label nodepvar
```
</div>
<div>

```r
# Summary stats table 
datasummary_skim(dat) 


# Balance table 
datasummary_balance(~treat_var, dat)
```
</div>
</div>


### Regression Table

<div class='code--container'>
<div>

```stata
reg Y X Z 
eststo est1 
esttab est1b

reg Y X Z, vce(hc3) 
eststo est1b 
esttab est1b 

esttab est1 est1b

reg Y X Z A, vce(hc3)
eststo est2
esttab est1 est1b est2
```
</div>
<div>

```r
est1 = lm(Y ~ X + Z, dat) 
msummary(est1) # msummary() = alias for modelsummary()

# Like fixest::etable(), SEs for existing models can
# be adjusted on-the-fly 
msummary(est1, vcov='HC3')

# Multiple SEs for the same model
msummary(est1, vcov=list('iid', 'HC3')) 

est3 = lm(Y ~ X + Z + A, dat) 
msummary(list(est1, est1, est3),
         vcov = list('iid', 'HC3', 'HC3'))
```
</div>
</div>


## lme4: Random effects and mixed models

`fixest` can do a lot, but it can't do everything. This site isn't even going to attempt to go into how to translate every single model into R. But we'll quick highlight random-effects and mixed models. The <a href = "https://cran.r-project.org/web/packages/lme4/index.html">lme4</a> package and its `lmer()` function covers not just random-intercept models but also hierarchical models where slope coefficients follow random distributions. (**Aside:** If you prefer Bayesian models for this kind of thing, check out the <a href = "https://paul-buerkner.github.io/brms/">brms</a> package.)

           
### Random Effects and Mixed Models

<div class='code--container'>
<div>

```stata
xtset group time
xtreg Y X, re
mixed lifeexp || countryn: gdppercap
```
</div>
<div>

```r
# No need for an xtset equivalent
m = lmer(Y~(1|group) + X, data = dat)
nm = lmer(Y~(1+x|group) + X, data = dat)
```
</div>
</div>



## marginaleffects: Marginal effects, constrasts, etc.

 
The Stata `margins` command is great. To replicate it in R, we recommend the <a href = "https://vincentarelbundock.github.io/marginaleffects/">marginaleffects</a> package. Individual marginal effects or average marginal effects for nonlinear models, or models with interactions or transformations, etc. It's also very fast.


### Basic Logit Marginal Effects

<div class='code--container'>
<div>

```stata
* A logit:
logit Y X Z
margins, dydx(*)
```
</div>
<div>

```r
# This example incorporates the fixest function feglm()
m = feglm(Y ~ X + Z, family = binomial, data = mtcars)
summary(marginaleffects(m))
```
</div>
</div>



## multcomp and nlWaldTest: Joint coefficient tests

Stata provides a number of inbuilt commands for (potentially complex) postestimation coefficient tests like `testparm`, `lincom`, and `nlcom`. We've already seen that `fixest` covers the `testparm` equivalent with its `wald()` function. But what about combinations of coefficients? The <a href = "http://multcomp.r-forge.r-project.org/">multcomp</a> package handles a variety of linear tests and combinations, while <a href = "https://cran.r-project.org/web/packages/nlWaldTest/index.html">nlWaldTest</a> has you covered for nonlinear combinations.


### Test other null hypotheses and coefficient combinations

<div class='code--container'>
<div>

```stata
regress y x z 




* One-sided test 
test _b[x]=0 
local sign_wgt = sign(_b[x]) 
display "H0: coef &lt;= 0  p-value = " ttail(r(df_r),`sign_wgt'*sqrt(r(F))) 

* Test linear combination of coefficients 
lincom x + z 


* Test nonlinear combination of coefficients 
nlcom _b[x]/_b[z]
```
</div>
<div>

```r
m = feols(y ~ x + z, dat)

# Note: we recommend the dev version of multcomp 
# install.packages("multcomp", repos="http://R-Forge.R-project.org") 

# One-sided test 
m2 = multcomp::ghlt(m, 'x&lt;=0')
summary(m2) 


# Test linear combination of coefficients 
m3 = multcomp::glht(m, 'x + z = 0') 
summary(m3) # or confint(m3) 

# Test nonlinear combination of coefficients 
nlWaldtest::nlWaldtest(m, 'b[2]/b[3]') # or nlWaldtest::nlConfint()
```
</div>
</div>


## sf: Geospatial operations

R has outstanding support for geospatial computation and mapping. There are a variety of packages to choose from here, depending on what you want (e.g. interactive maps, high-dimensional data cubes, etc.) But the workhorse geospatial tool for most R users is the incredibly versatile <a href = "https://r-spatial.github.io/sf/">sf</a> package. We'll only provide a simple mapping example below. The `sf` <a href = "https://r-spatial.github.io/sf/">website</a> has several in-depth tutorials, and we also recommend the <a href = "https://geocompr.robinlovelace.net/">Geocomputation with R</a> book by Robin Lovelace, Jakub Nowosad, and Jannes Muenchow.

### Simple Map

<div class='code--container'>
<div>

```stata
* Mapping in Stata requires the spmap and shp2dta 
* commands, and also that you convert your (say) 
* shapefile to .dta format first. We won't go through 
* all that here, but see: 
* https://www.stata.com/support/faqs/graphics/spmap-and-maps/
```
</div>
<div>

```r
# This example uses the North Carolina shapefile that is
# bundled with the sf package. 
nc = st_read(system.file("shape/nc.shp", package = "sf")) 
plot(nc[, 'BIR74'])
# Or, if you have ggplot2 loaded: 
ggplot(nc, aes(fill=BIR74)) + geom_sf()
```
</div>
</div>





                     

