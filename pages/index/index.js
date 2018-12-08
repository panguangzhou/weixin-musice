//index.js
//获取应用实例
const app = getApp()
import store from '../../utils/store.js'

Page({
  data: {
  },
  onLoad: function () {
  },
  onReachBottom() {
    store.emit("onReachBottom", {
      name: "llll"
    })
  }
})
