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

                     
## car and nlWaldTest for Coefficient Combinations

One deficiency in R that can be surprising for Stata switchers is the lack of immediate access to complex postestimation coefficient tests like <span class="font-semibold">testparm</span>, <span class="font-semibold">lincom</span>, and <span class="font-semibold">nlcom</span> in Stata. <span class="font-semibold">fixest</span> already covers the <span class="font-semibold">testparm</span> equivalent with its <span class="font-semibold">wald()</span> function. But what about combinations of coefficients? <span class="font-semibold">multcomp</span> is a nice package that does both with <span class="font-semibold">glht()</span>, but isn't yet compatible with <span class="font-semibold">fixest</span>. So instead we have the <span class="font-semibold">car</span> package with <span class="font-semibold">linearHypothesis()</span> for tests of linear combinations of coefficients (although not confidence intervals), and <span class="font-semibold">nlWaldTest</span> for nonlinear combinations and confidence intervals.

           
### Basic Combinations

<div class='code--container'>
<div>

```stata

regress y x z
lincom x + z
nlcom _b[x]/_b[z]
```
</div>
<div>

```r
# This example incorporates the fixest function feols()
m = feols(y ~ x + z, data = dat)
linearHypothesis(m, 'x + z')
nlWaldtest(m, 'b[2]/b[3]') # or nlConfint() instead for the confidence interval
```
</div>
</div>
                     
                     
## modelsummary for Regression Tables

The <span class="font-semibold">fixest</span> package already has the <span class="font-semibold">etable()</span> function for generating regression tables. However, it only exports to text or LaTeX, and isn't intended to be highly customizable. That's where <span class="font-semibold">modelsummary</span> comes in! It works with all sorts of models, including those not from <span class="font-semibold">fixest</span>, it's highly customizable, and outputs in all sorts of formats. It also has a <span class="font-semibold">datasummary</span> function which works in similar ways to Stata's <span class="font-semibold">table</span>. How about for summary statistics tables? There's a wealth of options (which is nice; Stata makes exporting summary statistics tables a pain). Check out <a href = "https://lost-stats.github.io/Presentation/Tables/Summary_Statistics_Tables.html" class="font-semibold">this page</a> for an overview of some of them.

           
### Regression Table

<div class='code--container'>
<div>

```stata

reghdfe Y X Z 
eststore est1 
esttab est1

reghdfe Y X Z A
eststore est2
esttab est1 est2
```
</div>
<div>

```r
# This example incorporates the fixest function feols()
est1 = feols(Y ~ X + Z, dat) 
etable(est1)


est2 = feols(Y ~ X + Z + A, dat) 
modelsummary(list(est1,est2))
```
</div>
</div>
                     
                     
## marginaleffects for Marginal Effects

The Stata <span class="font-semibold">margins</span> command is an impressive piece of work! How can you replicate it in R? Well, there's the <span class="font-semibold">marginaleffects</span> package for that. Individual marginal effects or average marginal effects for nonlinear models, or models with interactions or transformations. Done!

           
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
                     
                     
## sandwich for Additional Standard Error Adjustments

The <span class="font-semibold">fixest</span> package comes with plenty of shortcuts for accessing standard-error adjustments like HC1 heteroskedasticity-robust standard errors, Newey-West, Driscoll-Kraay, or clustered standard errors. But there is, of course, more than that! Many additional options are covered by the <span class="font-semibold">sandwich</span> package, which comes with a long list of functions like <span class="font-semibold">vcovBS()</span> for bootstrapped standard errors, or <span class="font-semibold">vcovHAC()</span> for HAc. These can slot right into <span class="font-semibold">fixest</span> estimates, too! You shouldn't be using those ", robust" errors for smaller samples anyway... you knew that right?

           
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
# vcov = 'hetero' uses hc1 which isn't great for small samples, but sandwich's vcovHC uses HC3 by default
m = feols(Y ~ X + Z, vcov = vcovHC)
```
</div>
</div>
                     
                     
## lme4 for Random Effects

<span class="font-semibold">fixest</span> can do a lot, but it can't do everything. This site isn't even going to attempt to go into how to translate every single model into R. But we'll cover one class of models: random-effects models with <span class="font-semibold">lme4</span> (there's also  <span class="font-semibold">Rstan</span> if that floats your boat, in which case the translation from  <span class="font-semibold">statastan</span> is pretty straightforward).  <span class="font-semibold">lme4</span> and its <span class="font-semibold">lmer()</span> function covers not just random-intercept models but also hierarchical models where slope coefficients follow random distributions.

           
### Random Effects Models

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
                     
                     
## collapse for Even Faster Grouped Calculations

Sure, we've gone on and on about how fast <span class="font-semibold">data.table</span> is compared to just about everything besides, like, learning C yourself (and sometimes even then). But there is one package that can boast even faster times than <span class="font-semibold">data.table</span>, at least at some tasks, and that's <span class="font-semibold">collapse</span>, which is just about as fast as it gets at computing by-group calculations like means or standard deviations.

           
### Means of Everything

<div class='code--container'>
<div>

```stata
collapse (mean) varlist, by(group)
```
</div>
<div>

```r
fmean(dat, dat$group)
```
</div>
</div>
