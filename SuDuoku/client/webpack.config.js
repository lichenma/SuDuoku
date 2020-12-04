const path = require('path'); 
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public')
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
  				use: ['@svgr/webpack'],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public')
	}
};
