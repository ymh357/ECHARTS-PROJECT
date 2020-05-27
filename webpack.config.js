const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    entry: './main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devServer:  {
        port: 8088,
        host: '127.0.0.1',
        contentBase: './dist',
        //hot: true,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({template:'index.html'}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true
                        }
                    }
                ]
            },{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:[
                    {
                        loader:'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                ]
            }
        ]
    }

}