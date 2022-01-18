export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Stata2R",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://fonts.googleapis.com/css?family=Source+Code+Pro"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
