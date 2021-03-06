// vue.config.js
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                data: `
                    @import "@/stylesheets/default.scss/_index.scss";
                    @import "@/stylesheets/_variables.scss";

                `
            }
        },
        extract: {
            filename: 'style.css',
            chunkFilename: 'style.css',
        }
    },
    chainWebpack: (config) => {

        const svgRule = config.module.rule('svg')
		// clear all existing loaders.
		// if you don't do this, the loader below will be appended to
			 // existing loaders of the rule.
		svgRule.uses.clear()

		// add replacement loader(s)
		svgRule
 			.use('vue-svg-loader')
    			.loader('vue-svg-loader')
    			.options({
                    name: "[name]-[hash:7]",
                    prefixize: true
                });


        /*config
            .entry("app")
                .clear()
                .add("./src/client/main.js")
                .end();
        config.resolve.alias
                .set("@", path.join(__dirname, "./src/client"));*/
        
    },
};