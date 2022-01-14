import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"intro"},["/index.html","/index.md"]],
  ["v-77f0ef68","/data.table/",{"title":"data.table"},["/data.table/index.html","/data.table/README.md"]],
  ["v-37b893e5","/fixest/",{"title":"fixest"},["/fixest/index.html","/fixest/README.md"]],
  ["v-1c385113","/extras/",{"title":"extras"},["/extras/index.html","/extras/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
