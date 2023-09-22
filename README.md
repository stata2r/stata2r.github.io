# Stata2R

This is the GitHub repo for the **Stata2R** website:
**https://stata2r.github.io**.

You probably want to go directly to the website if you just want to browse the
rendered pages with nice formatting. On the other hand, if you want to raise an
issue or suggest edits via a pull request, then you're in the right place. For
suggested edits, the main source documents of interest can be found in the
respective `src/` sub-directories:

- `src/data.table` ([link](https://github.com/stata2r/stata2r.github.io/tree/main/src/data.table))
- `src/fixest` ([link](https://github.com/stata2r/stata2r.github.io/tree/main/src/fixest))
- `src/extras` ([link](https://github.com/stata2r/stata2r.github.io/tree/main/src/extras))

Just click on the "edit" pencil icon (top right) of the README files and a fork
of the repo will automatically be created under your account. You can then make
your suggested edits and trigger a pull request for us to look at.

On a technical note, the website is built with 
[VuePress](https://vuepress.vuejs.org/) and automatically deployed via 
[GitHub Actions](https://github.com/stata2r/stata2r.github.io/actions). But you 
can also clone the repo and serve the website locally with 
[yarn](https://classic.yarnpkg.com/en/).

```sh
git clone git@github.com:stata2r/stata2r.github.io.git
cd stata2r
yarn install # first time only
yarn docs:dev
```

## FAQ

**Who are you?** 

- The initial website is a collaborative effort between 
[Kyle Butts](https://github.com/kylebutts), 
[Nick Huntington-Klein](https://github.com/NickCH-K), and
[Grant McDermott](https://github.com/grantmcdermott). We're hoping that it won't
take much maintenance from hereon out, but welcome outside contributions and
suggestions.

**Why did you make Stata2R?**

- The short answer is that we have been asked for this kind of resource many
times, and didn't feel any of the existing options quite fit the bill.
The longer answer is that we've been through the frustrations (and joys) of 
learning a new language and want to lower the barrier-to-entry for R, 
specifically. There's an unfortunate belief among some Stata users that R is 
somehow simultaneously complex and lacking. As in, it's supposedly hard to do
simple things and unable to do hard things. This belief is quite mistaken in our 
view. But sometimes it takes seeing simple side-by-side examples to get someone 
on their way. 

**Do you think Stata users should just switch to R?**

- No. The future is multilingual and we support people using what they want. R 
does have advantages in terms of price (free) and performance (speed). 
Depending on what you want to do, a certain library may also only be available 
in R. This obviously makes it attractive for certain use cases. But Stata has
many great features too and it's perfectly fine to combine the two languages, or 
not, in whatever way works for you. We hope that 
the Stata2R website provides researchers, teachers, students, and professional 
with some additional options should they choose to use them.

## License

The materials in this repo (and associated website) are made available under the
[MIT License](https://github.com/stata2r/stata2r.github.io/blob/main/LICENSE).
