module.exports = {
  // contentBase: './build/',
  contentBase: '../server/public',
  host: 'localhost',
  port: 8080, // 默认8080
  inline: true, // 可以监控js变化 实时刷新
  hot: true, // 热启动
  compress: true,
  watchContentBase: true
};
