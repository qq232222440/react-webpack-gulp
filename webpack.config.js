var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:[
        "./src/app.js"
    ],
    output:{
        path:__dirname,
        filename:"bundle.js"
    },
    resolve:{
        extensions:["",".js",".jsx",".css"]
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel",
                exclude:[/node_modules/],
                query:{
                    presets:["es2015","react","stage-0"]
                }
            },
            {
                test:/\.scss/,
                loader:ExtractTextPlugin.extract("style-loader","css-loader?sass-loader!cssnext-loader")
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader?limit=8192"
            }
        ]
    }
}