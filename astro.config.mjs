import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://stata2r.github.io/",
  redirects: {
    "/data.table": "/data_table",
  },
  // outDir: 'docs',
  integrations: [
    starlight({
      title: "stata2R",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/stata2r/stata2r.github.io/",
        },
      ],
      customCss: ["./src/styles/main.css"],
      sidebar: [
        {
          label: "Guides",
          items: [
            {
              label: "Intro",
              link: "/",
            },
            {
              label: "data.table",
              link: "/data_table/",
            },
            {
              label: "fixest",
              link: "/fixest/",
            },
            {
              label: "extras",
              link: "/extras/",
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
