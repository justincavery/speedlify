module.exports = {
	mysites: {
		description: "Justin's websites",
		options: {
			frequency: 60 * 2, // 2 hours
			freshChrome: "site",
		},
		urls: [
			"http://ami.responsivedesign.is",
			"https://responsivedesign.is",
			"https://surfthedream.com.au",
			"https://laurayoga.co.uk",
		]
	},
	tmpsites: {
		description: "TMP Sites",
		options: {
			frequency: 60 * 24, // 24 hours
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "run"
		},
		urls: [
			"https://sainsburys.jobs",
			"https://sainsburys.jobs/search-apply/",
			"https://careers.virginmedia.com",
			"https://www.networkrail.co.uk/careers/",

		]
	},
	pocketnotebooks: {
		description: "Pocket Notebook Sites",
		options: {
			frequency: 60 * 24, // 24 hours
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "run"
		},
		urls: [
			"https://backpocket.co",
			"https://backpocket.co/products/colour-theory",
			"https://fieldnotesbrand.com/",
			"https://fieldnotesbrand.com/products/heavy-duty",
			"https://www.dotgrid.co/",
			"https://www.dotgrid.co/products/a6-dot-grid-notepad-white-pages",

		]
	}
};
