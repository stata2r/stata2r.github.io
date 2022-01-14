module.exports = {
	plugins: [
		["@vuepress/plugin-shiki", { theme: "rose-pine" }],
		["vuepress-plugin-clipboard"],
        [
            '@vuepress/plugin-search',
            { getExtraFields: (page) => [page.content] },
        ],
      
	],
    head : [
        ['link', {rel:'stylesheet', href:"https://fonts.googleapis.com/css?family=Source+Code+Pro"}],
    ],
	markdown: {code: {lineNumbers: true}},
	title: "Stata2R",
	themeConfig: {
		repo: "stata2r/stata2r.github.io",
		editLinks: true,
		search: true,
		sidebarDepth: 2,
		sidebar: [
			{ text: "data.table", link: "/data.table/" },
			{ text: "fixest", link: "/fixest/" },
			{ text: "extras", link: "/extras/" },
		],
	},
}
