const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')

environment.loaders.append('html', {
    test: /\.html$/,
    exclude: /node_modules/,
    loaders: ['html-loader']
});

// environment.loaders.append('style', {
//     test: /\.(scss|sass|css)$/,
//     use: [{
//         loader: "to-string-loader"
//     }, {
//         loader: "css-loader"
//     }, {
//         loader: "resolve-url-loader"
//     }, {
//         loader: "sass-loader"
//     }]
// });

//"insert" overwrites the previously included sass-loader
environment.loaders.insert('sass', {
    test: /\.scss$/,
    use: [
        "to-string-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS
    ]
});

environment.loaders.append('typescript', typescript)
module.exports = environment
