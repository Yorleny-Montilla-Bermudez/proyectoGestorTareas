const path  = require('path');

module.exports = {
    mode:'development',
    entry: '/src/index.js', //punto de entrada de l aplicacion
    output: {
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname,'dist'),//carpeta de salida
    },
    module: {
        rules:[
            {
                test: /\.css$/,// regex (expresion regular) para identificar archivos css
                use:['style-loader', 'css-loader'],//(loaders)librerias para procesar archivos css 
            },
            {
                test:/\.js$/,// identificar arcchivos JS
                exclude:/node_modules/,//excluir carpeta node_modules
                use:{
                    loader:'babel-loader',//loader para llevar JS moderno a JS antiguo para que sea compatible con todos los navegadore
                     options: {
                        presets:['@babel/preset-env']
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //generar source maps para facilitar la depuracion
    devServer: {
        static:{
           directory: path.resolve(__dirname, 'dist')
        },
        compress: true,//habilitar compresion gzip
        port: 9000,// puerto del servidor de desarrollo
    },
};