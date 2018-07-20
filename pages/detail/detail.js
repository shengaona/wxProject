// detail js
//引入本地json数据，这里引入的就是第一步定义的json数据
var getData = require('../../data/data.js');
let wxparse = require("../../wxParse/wxParse.js");
Page({

  data: {
    dkheight: 300,
    dkcontent: "",
    leassonTilte: '',
    time: '',
    id: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      id: options.id
    })
    // 获得高度
    let winPage = this;
    wx.getSystemInfo({
      success: function(res) {
        let winHeight = res.windowHeight;
        console.log(winHeight);
        winPage.setData({
          dkheight: winHeight - winHeight * 0.05 - 80
        })
      }
    })
    for (var i = 0; i < getData.detailList.length; i++) {
      if (options.id == getData.detailList[i].id) {
        console.log(getData.detailList[i].html)
        this.setData({
          dkcontent: getData.detailList[i].html,
          leassonTilte: getData.detailList[i].title,
          time: getData.detailList[i].time
        })
        wxparse.wxParse('dkcontent', 'html', this.data.dkcontent, this, 5)
      }
    }
  },
  onShareAppMessage: function () {
    console.log(this.data.id)
    return {
      title: '跟我零基础学彩铅',
      path: 'pages/detail/detail?id=' + this.data.id
    }
  }
})