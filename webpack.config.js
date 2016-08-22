var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path")
var webpack = require("webpack")
// var node_modules = path.join(__dirname,"/node_modules")
module.exports = {
    entry:{
        bundle:"./src/app.js",
        vendor:["react","react-dom","redux"]
    },
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
        // noParse: [
        //     path.join(node_modules, '/react/dist/react.min'),
        //     path.join(node_modules, '/react-dom/dist/react-dom.min'),
        //     path.join(node_modules, '/redux/dist/redux.min'),
        // ],
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
                loader:ExtractTextPlugin.extract('style-loader','css-loader')
            },
            {
                test:/\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader?sourceMap')
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader?limit=8192"
            }
        ]
    },
    devtool:false,
    'display-error-details': true,
     // 外部依赖（不会打包到bundle.js里）
    externals: { 
         
    },   
    plugins:[
        
        new ExtractTextPlugin("index.css",{
            allChunks:true,
            disable:false
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
        // // 比对id的使用频率和分布来得出最短的id分配给使用频率高的模块
         new webpack.optimize.OccurenceOrderPlugin(),
        // //去重
        // new webpack.optimize.DedupePlugin()   

    ]
}