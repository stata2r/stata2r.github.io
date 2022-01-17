module.exports = {
    base: "/",
    title: "Stata2R",
	plugins: [
		[
            "@vuepress/plugin-shiki", { 
                theme: "../../../src/rose-pine", 
                langs: [
                    {
                        id: 'r',
                        scopeName: 'source.r',
                        path: '../../src/r.tmLanguage.json',
                        aliases: []
                    },
                    {
                        id: 'stata',
                        scopeName: 'source.stata',
                        path: '../../src/stata.tmLanguage.json',
                        aliases: []
                    }
                ] 
            }
        ],
		["vuepress-plugin-clipboard"],
        [
            '@vuepress/plugin-search',
            { getExtraFields: (page) => [page.content] },
        ],
      
	],
    head : [
        ['link', {rel:'stylesheet', href:"https://fonts.googleapis.com/css?family=Source+Code+Pro"}],
    ],
	markdown: {
		code: {
			lineNumbers: true,
		},
	},
	themeConfig: {
		repo: "stata2r/stata2r.github.io",
        docsRepo: 'https://github.com/stata2r/stata2r.github.io',
        docsBranch: 'main',
        docsDir: 'docs',
        contributors: false,
        editLinkPattern: ':repo/edit/:branch/:path',
		editLinks: true,
		search: true,
		sidebarDepth: 1,
		sidebar: [
			{ text: "data.table", link: "/data.table/" },
			{ text: "fixest", link: "/fixest/" },
			{ text: "extras", link: "/extras/" },
		],
	},
}
