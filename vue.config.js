// vue.config.js
const path = require('path');

module.exports = {

    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                data: `
                    @import "@/stylesheets/_variables.scss"; 
                    @import "@/stylesheets/_mixins.scss"; 
                `
            }
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
	                })
    },


};