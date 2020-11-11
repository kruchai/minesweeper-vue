module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/minesweeper-vue/'
		: '/',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/_styles.scss";`
			}
		}
	}
};
