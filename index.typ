#import "/.calepin/calepin.typ" as calepin
#show: calepin.document

#set document(title: [Translating Stata to R])

#calepin.setup(fenced-chunks: false)
#set raw(syntaxes: "/stata.sublime-syntax")

#let sidebyside(..blocks) = calepin.elements.columns(
  columns: 2,
  ..blocks,
)

#title()

Welcome. This website is for Stata users who are interested in learning R.
But it could also be useful for those going the other way around. We
provide side-by-side code snippets for common tasks in both Stata and R, so that
users have a dictionary for navigating across the two languages.

There are two main pages (✌️📄) on the site:

+ Data wrangling (🗄🧹) with #link("data_table.html")[*data.table*]
+ Regression analysis (💻📈) with #link("fixest.html")[*fixest*]

There are #link("extras.html")[*other great R packages*] that work well and are easy to
use. But *data.table* and *fixest* are blazingly fast (🏃🏻💨), extremely
powerful (💪🏻😎), and flexible (👌✨). Learning just these two libraries will
help you to avoid "package bloat", enabling you to tackle an exhaustive list of
data science and econometric tasks with maximum efficiency.

See the icons in the top right corner for various site options. You can search
for keywords or commands, change the theme to light or dark mode to suit your
preferences, and go to the underlying #link("https://github.com/stata2r/stata2r.github.io")[GitHub repo] where all the source code is
located. Please let us know if you have suggestions or spot any errors.
