var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path")
// var node_modules = path.resolve(__dirname,"node_modules")
module.exports = {
    entry:[
        "./src/app.js"
    ],
    output:{
        path:__dirname,
        filename:"bundle.js"
    },
    resolve:{
        alias:{
            "react":"react-lite",
            "react-dom":"react-lite"
        },
        extensions:["",".js",".jsx",".css",".scss"]

    },
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                loader:"babel",
                exclude:[/node_modules/],
                query:{
                    presets:["es2015","react","stage-0"]
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader?limit=8192"
            }
        ]
    },
    devtool:"source-map",
    plugins:[]
}