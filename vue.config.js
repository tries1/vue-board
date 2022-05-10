module.exports = {
  devServer: {
    proxy: 'http://localhost:8081',
  },

  transpileDependencies: [
    'vuetify',
  ],
};

/*
module.exports = {
  devServer: {
    '/api': {
      // 프록시 요청을 보낼 서버의 주소
      target: 'http://localhost:8081',
      changeOrigin: true,
    },
  },
};
*/
