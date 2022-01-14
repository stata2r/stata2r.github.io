---
title: fixest
---

# Regression analysis with fixest

[**fixest**](https://lrberge.github.io/fixest) (by Laurent Bergé) is a package 
designed from the ground up in C++ to make running regressions fast and 
incredibly easy. It provides in-built support for a variety of linear and 
non-linear models, as well as regression tables and plotting methods. 
While the package certainly doesn't cover every
model that exists, there is a non-negligible subset of Stata users for whom
every model they've ever needed to run is covered by **fixest**.

This includes regular ol' linear regression in the `feols()` function, which
builds off of the Base R standard regression function `lm()`, but also includes
things like instrumental variables via 2SLS, and of course support for as many
fixed effects as you'd like. **fixest** isn't limited to linear regression
either, covering IV and fixed-effects support for a wide range of GLM models
like logit, probit, Poisson, negative binomial, and so on in `feglm()` and
`fepois()`.

**fixest** covers all of this while being very fast. If you felt a speed boost
going from Stata's `xtreg` to `reghdfe`, get ready for another significant 
improvement when moving to **fixest**.

You also get a _lot_ of convenience features. **fixest** makes it easy to 
produce publication-ready regression tables, as well as coefficient and
interaction-margin plots. You can select long lists of controls without having
to type them all in, adjust standard errors for existings model on-the-fly,
retrieve estimated fixed effects from your high-dimensional models, conduct Wald
tests, adjust reference categories for factor variables, etc. etc.  You even get
some stuff that's rather tricky in Stata, like multi-model estimations, basic
and staggered difference-in-difference support, or Conley standard errors.

Using fixest for regression starts with writing a formula. While there are
plenty of bells and whistles to add, at its core regression formulas take the
form `y ~ x1 + x2 | fe1 + fe2` where `y` is the outcome, `x1` and `x2` are
predictors, and `fe1` and `fe2` are fixed effects.

Before continuing, make sure that you have installed **fixest**. You only 
have to do this once (or as often as you want to update the package).
<div class="code--container">
<div>

```r
# Install from CRAN (recommended)
install.packages('fixest')
```
</div>
<div>
</div>
</div>

Once **fixest** is installed, don't forget to load it whenever you want to 
use it. Unlike Stata, you have to re-load a package every time you start a new R 
session.

<div class="code--container">
<div>

```r
# Load fixest into our current R session
library(fixest)
```
</div>
<div>
</div>
</div>


In the examples that follow, we will use a modified dataset from the CPS (plus
some added variables for demonstration purposes). To load the data run the 
following:

<div class="code--container">
<div>

```stata

import delimited using "https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv", clear
```
</div>
<div>

```r
# Base R reads CSVs too, but we'll use data.table here
dat = data.table::fread('https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv')
```
</div>
</div>


                     
                     
## Formula Creation

           
### Fixed Effects

<div class='code--container'>
<div>

```stata
reghdfe wage educ i.fe
reghdfe wage educ, absorb(fe)
```
</div>
<div>

```r
feols(wage ~ educ + factor(countyfips), data = dat)
feols(wage ~ educ | countyfips, dat)
```
</div>
</div>
           
### Categorical Variables

<div class='code--container'>
<div>

```stata
reghdfe wage educ i.treat
* Specifying a baseline:
reghdfe wage educ ib1.treat
```
</div>
<div>

```r
feols(wage ~ educ + factor(treat), dat)
# Specifying a baseline:
feols(wage ~ educ + i(treat, ref = 1), dat)
```
</div>
</div>
           
### Interact Categoricals

<div class='code--container'>
<div>

```stata


reghdfe wage educ i.treat#i.hisp
```
</div>
<div>

```r
feols(wage ~ educ + treat*hisp, data = dat) # base-R approach
# Approach specific to fixest that makes iplot() work later if desired:
feols(wage ~ educ + i(treat, i.hisp), dat)
```
</div>
</div>
           
### Interact Categorical and Continuous

<div class='code--container'>
<div>

```stata

reghdfe wage educ c.age#i.treat

```
</div>
<div>

```r
feols(wage ~ educt + treat*age, data = dat) # base-R approach
# Approach specific to fixest that makes iplot() work later if desired:
feols(wage ~ educ + i(treat, age), dat)
```
</div>
</div>
           
### Macros

<div class='code--container'>
<div>

```stata
local vars age black hisp marr 
reghdfe wage educ `vars'
```
</div>
<div>

```r
vars = c("age", "black", "hisp", "marr") 
feols(wage ~ educ + .[vars], dat)
```
</div>
</div>
           
### Wildcard

<div class='code--container'>
<div>

```stata
reghdfe wage educ x*
```
</div>
<div>

```r
feols(wage ~ educ + ..('x'), dat)
```
</div>
</div>
           
### Variables x1 ... x4

<div class='code--container'>
<div>

```stata
reghdfe wage educ x1-x4
```
</div>
<div>

```r
feols(wage ~ educ + x.[1:4], dat)
```
</div>
</div>
           
### Regex

<div class='code--container'>
<div>

```stata
 
```
</div>
<div>

```r
feols(wage ~ educ + ..('regex_exp'), dat)
```
</div>
</div>
                     
                     
## Standard Errors

           
### HC

<div class='code--container'>
<div>

```stata
reghdfe wage educ, vce(hc1)
```
</div>
<div>

```r
feols(wage ~ educ, dat, vcov = 'hc1')
```
</div>
</div>
           
### HAC

<div class='code--container'>
<div>

```stata
xtset id year
ivreghdfe wage educ, bw(auto) robust
```
</div>
<div>

```r
feols(y ~ x, dat, vcov = 'NW', panel.id = ~unit + time)
feols(wage ~ educ, dat, vcov = 'NW') # if panel id is already set (see below)
```
</div>
</div>
           
### Cluster

<div class='code--container'>
<div>

```stata
reghdfe wage educ, cluster(countyfips)
```
</div>
<div>

```r
feols(wage ~ educ, dat, vcov = ~countyfips)
```
</div>
</div>
           
### Two-way

<div class='code--container'>
<div>

```stata
reghdfe wage educ, cluster(countyfips year)
```
</div>
<div>

```r
feols(wage ~ educ, dat, vcov = ~countyfips + year)
```
</div>
</div>
           
### Conley Standard Errors

<div class='code--container'>
<div>

```stata
* Figuring this out: http://www.trfetzer.com/conley-spatial-hac-errors-with-fixed-effects/
```
</div>
<div>

```r
feols(wage ~ educ, dat, vcov = conley("25 mi"))
```
</div>
</div>
                     
                     
## Postestimation

           
### Regression Table

<div class='code--container'>
<div>

```stata
reghdfe wage educ age black hisp marr 
eststore est1 
esttab est1

reghdfe wage educ age black hisp
eststore est2
esttab est1 est2
```
</div>
<div>

```r
est1 = feols(wage ~ educ + age + black + hisp + marr, dat) 
etable(est1)


est2 = feols(wage ~ educ + age + black + hisp, dat) 
etable(est1,est2)
```
</div>
</div>
           
### Coefficient Plot

<div class='code--container'>
<div>

```stata
reghdfe wage educ age black hisp marr  
eststore est1 
coefplot ...
```
</div>
<div>

```r
est1 = feols(wage ~ educ + age + black + hisp + marr, dat) 
coefplot(est1)
```
</div>
</div>
                     
                     
## Panel Data

Note you don't need to specify panel.vars if you make your data a panel dataset before running the regression using the `panel` function. For example, you can use `panel(dat, ~ id + var)`.

           
### Lag Variables

<div class='code--container'>
<div>

```stata
xtset id year 
 reg wage educ l1.wage
```
</div>
<div>

```r
feols(wage ~ educ + l(wage, 1), dat, panel.id = ~id+year)
```
</div>
</div>
           
### Lead Variables

<div class='code--container'>
<div>

```stata
xtset id year 
reg wage educ f1.wage
```
</div>
<div>

```r
feols(wage ~ educ + l(wage, -1), dat, panel.id = ~id+year)
```
</div>
</div>
           
### First Difference

<div class='code--container'>
<div>

```stata
xtset id year 
reg wage educ D.x
```
</div>
<div>

```r
feols(wage ~ educ + d(wage), dat, panel.id = ~id+year)
```
</div>
</div>
                     
                     
## Instrumental Variables

           
### Instrumental Variables

<div class='code--container'>
<div>

```stata
ivreghdfe 2sls wage (educ = age)
```
</div>
<div>

```r
feols(wage ~ 1 | educ ~ age, dat)
```
</div>
</div>
           
### with Fixed Effects

<div class='code--container'>
<div>

```stata
ivreghdfe 2sls wage (educ = age), absorb(countyfips)
```
</div>
<div>

```r
feols(wage ~ 1 | countyfips | educ ~ age, dat)
```
</div>
</div>
