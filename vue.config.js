// vue.config.js
const path = require('path');

module.exports = {

    css: {
        loaderOptions: {
        	// pass options to sass-loader
            sass: {
                data: `@import "./src/admin/stylesheets/_variables.scss"; @import "./src/admin/stylesheets/_mixins.scss"; `
            }
        }
    }

};
