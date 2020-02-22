const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".vue"]
    },
    module: {
        rules: [
            {
                test: /\.vue?$/,
                exclude: /(node_modules)/,
                use: "vue-loader"
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader" ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }), 
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery",
            bootbox: "bootbox"
        })
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: "https://api.thecatapi.com/v1/",
            apiKey: "c2021d27-c3c1-4037-9510-d45b7ef79c85"
        })
    },
    optimization: {
        namedModules: true,
        namedChunks: true,
        splitChunks: {
            chunks: "all"
        }
    }
}