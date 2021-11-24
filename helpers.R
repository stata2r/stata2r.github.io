library(htmltools)

create_body = function(...) {
  tags$body(div(
    class="min-h-screen bg-gray-50 flex flex-col justify-center items-center pb-96", 
    ...
  ))
}

create_splash = \(...) 
  div(class = "w-full max-w-5xl mx-auto px-8 pt-36 pb-24 divide-y", ... )
create_splash_header = \(...) 
  div(class="pb-4 border-b-2 border-gray-600", ...)
create_splash_body = \(...) 
  div(class = "max-w-prose pt-12 flex flex-col gap-y-4 text-gray-700 text-xl", ...)

create_row = function(name, stata_code, r_code, subitem = FALSE, top = FALSE, bottom = FALSE) {
  code_class = glue::glue("lg:col-span-3 bg-white border-2 rounded-lg shadow-lg flex flex-col justify-center")

  h2_class = ifelse(subitem, "lg:ml-4 italic", "font-semibold")

  h2_class = glue::glue("lg:col-span-2 lg:py-4 self-center text-gray-600 text-lg {h2_class}")

  div(
    class = "grid grid-row lg:grid-col lg:grid-cols-8 gap-y-4 lg:gap-y-0 lg:gap-x-8 py-4 items-stretch",
    h2(class = h2_class, name),
    pre(
      class = code_class,
      code(class = "language-text", stata_code)
    ),
    pre(
      class = code_class,
      code(class = "language-r", r_code)
    )
  )
}

create_section = function(...) {
  div(class = "px-4 divide-y", ...)
}

create_section_header = function(name) {
  div(
    class = "grid grid-cols-8 gap-x-8 py-4 items-stretch my-4",
    h2(class = "col-span-8 lg:col-span-2 font-bold text-2xl text-emerald-700", name),
    div(class = "lg:col-span-3"),
    div(class = "lg:col-span-3")
  )
}

head = function(title){ 
  htmltools::tagList(
      HTML('<!DOCTYPE html>\n<html lang="en">\n\n<head>'),
      tags$meta(charset="UTF-8"),
      tags$meta('http-equiv'="X-UA-Compatible", content="IE=edge"),
      tags$meta(name="viewport", content="width=device-width, initial-scale=1.0"),
      tags$title(title),
      HTML("\n<!-- prism.js -->"),
      tags$link(
          href="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/themes/prism.css",
          rel="stylesheet"
      ),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/components/prism-core.min.js"),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/plugins/autoloader/prism-autoloader.min.js"),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/plugins/normalize-whitespace/prism-normalize-whitespace.js"),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/components/prism-r.js"),
      tags$script(src="https://cdn.jsdelivr.net/npm/prismjs@1.25.0/components/prism-stan.js"),
      HTML("\n<!-- tailwindCSS -->"),
      tags$script(src="https://cdn-tailwindcss.vercel.app/3.0.0-alpha.2?plugins=forms@0.4.0-alpha.2,typography@0.5.0-alpha.3,aspect-ratio@0.3.0,line-clamp@0.2.2"),
      tags$style(type="text/tailwindcss", '\npre[class*="language-"] {\n@apply bg-white px-4 py-4 lg:py-2 m-0;\n}\n'),
      HTML("</head>")
  )
}

prism_init = tags$script(type="text/javascript", "Prism.plugins.NormalizeWhitespace.setDefaults({'remove-trailing': true, 'remove-indent': true, 'left-trim': true, 'right-trim': true});")