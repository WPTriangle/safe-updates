/**
 * Safe Updates Webpack Configuration
 */

/*
 * Internal Dependencies
 */

const path = require( 'path' );

/*
 * Plugins
 */

const UnminifiedWebpackPlugin = require( 'unminified-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

/*
 * Configuration
 */

module.exports = {
	entry: {
		popper: './node_modules/popper.js/dist/popper.js',
		bootstrap: './node_modules/bootstrap/dist/js/bootstrap.js',
		main: './assets/src/js/main.js',
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve( __dirname, './assets/dist/js/' )
	},

	module: {
		rules: [
			{
				test:/\.(s*)css$/,
				use: [
					"style-loader",
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
			{
		    test: /\.(woff2?|ttf|otf|eot|svg)$/,
			    loader: 'file-loader',
			    options: {
			        name: '[name].[ext]',
			        outputPath: '../fonts/'
			    }
			},
			{
		    test: /\.(jpg|png|jpeg)$/,
			    exclude: /node_modules/,
			    loader: 'file-loader',
			    options: {
			        name: '[name].[ext]',
			        outputPath: '../images/'
			    }
			}
		]
	},

	plugins: [
		new UnminifiedWebpackPlugin(),
		new MiniCssExtractPlugin( {
			filename: '../css/[name].min.css',
		} )
	],

	externals: {
		jquery: 'jQuery'
	}
};
