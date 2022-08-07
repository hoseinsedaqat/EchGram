const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Echgram design by Hosein Sedaqat',
    themeColor: "#4DBA87",
    iconPaths: {
      favicon32: 'img/icons/icon-72x72.png',
      favicon16: 'img/icons/icon-72x72.png',
      appleTouchIcon: 'img/icons/icon-72x72.png',
      msTileImage: 'img/icons/icon-144x144.png'
    },
    manifestOptions: {
      background_color: "#fff",
      icons: [
        {
          src: "img/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "img/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "img/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "img/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    }
  }
})
