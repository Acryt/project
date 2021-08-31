module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Тестовое задание";
      return args;
    });
  },
};
