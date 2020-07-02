module.exports = {
	mysites: {
		description: "Justin's websites",
		options: {
			frequency: 60 * 2, // 2 hours
			freshChrome: "site",
		},
		urls: [
			"https://ami.responsivedesign.is",
			"https://responsivedesign.is",
			"https://surfthedream.com.au",
			"https://backpocket.co",
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
			"https://careers.virginmedia.com",
			"https://www.networkrail.co.uk/careers/",
			"https://sainsburys.jobs/search-apply/",
		]
	}
};
