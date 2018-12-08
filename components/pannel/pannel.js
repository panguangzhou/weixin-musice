// components/pannel/pannel.js
import store from '../../utils/store.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    arr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle(){
      var that =this;
      wx.request({
        url: 'http://tingapi.ting.baidu.com/v1/restserver/ting', //仅为示例，并非真实的接口地址
        data: {
          method: "baidu.ting.billboard.billList",
          type: 1,
          size: 10,
          offset: 0
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          that.setData({
            arr:that.data.arr.concat(res.data.song_list)
          })
        }
      })
    }
  },
  attached: function () { 
  },
  ready: function () {
    this.toggle();
    store.on("onReachBottom",(data)=>{
      this.toggle();
    })
   },
})