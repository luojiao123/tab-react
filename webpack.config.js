module.exports = {
	entry:'./index.js',
	output:{
		filename:'bundle.js'
	},
	devServer:{
		port:1289,   
		open:true,   // 运行就在浏览器打开
		inline:true,   // 自动刷新
		// contentBase:'./app', // 指定服务器目录
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.js$/,
				use:['react-hot-loader','babel-loader'],
				exclude:/node_modules/
			}
		]
	}
}