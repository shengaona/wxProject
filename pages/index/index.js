//引入本地json数据，这里引入的就是第一步定义的json数据
var getData = require('../../data/data.js');

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    toView: 'red',
    scrollTop: 100,
    author: 'oreo是我呀',
    leassonList: [],
    actIndex: 'first',
    leassonId: ''
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  // tab切换事件
  changeMenu: function(e) {
    this.setData({
      actIndex: e.currentTarget.id
    })
    if (this.data.actIndex == 'first') {
      var arr = []
      for (var i = 0; i < getData.detailList.length; i++) {
        console.log(getData.detailList[i].leassonType)
        if (getData.detailList[i].leassonType == 1) {
          arr.push({
            id: getData.detailList[i].id,
            imgUrl: getData.detailList[i].imgUrl,
            title: getData.detailList[i].title,
            leassonType: getData.detailList[i].leassonType,
          })
        }
      }
      this.setData({
        leassonList: arr.reverse()
      })
    } else if (this.data.actIndex == 'second') {
      var arr = []
      for (var i = 0; i < getData.detailList.length; i++) {
        console.log(getData.detailList[i].leassonType)
        if (getData.detailList[i].leassonType == 2) {
          arr.push({
            id: getData.detailList[i].id,
            imgUrl: getData.detailList[i].imgUrl,
            title: getData.detailList[i].title,
            leassonType: getData.detailList[i].leassonType,
          })
        }
      }
      this.setData({
        leassonList: arr.reverse()
      })
    } else if (this.data.actIndex == 'third') {
      var arr = []
      for (var i = 0; i < getData.detailList.length; i++) {
        console.log(getData.detailList[i].leassonType)
        if (getData.detailList[i].leassonType == 3) {
          arr.push({
            id: getData.detailList[i].id,
            imgUrl: getData.detailList[i].imgUrl,
            title: getData.detailList[i].title,
            leassonType: getData.detailList[i].leassonType,
          })
        }
      }
      this.setData({
        leassonList: arr.reverse()
      })
    }
  },
  onLoad: function() {
    console.log(getData)
    var arr = []
    for (var i = 0; i < getData.detailList.length; i++) {
      console.log(getData.detailList[i].leassonType)
      if (getData.detailList[i].leassonType == 1) {
        arr.push({
          id: getData.detailList[i].id,
          imgUrl: getData.detailList[i].imgUrl,
          title: getData.detailList[i].title,
          leassonType: getData.detailList[i].leassonType,
        })
      }
    }
    this.setData({
      imgUrls: getData.bannerList,
      leassonList: arr.reverse()
    })
  },
  //详情页面
  seeDetail: function(e) {
    console.log(e)
    this.setData({
      leassonId: e.currentTarget.dataset.id
    })
    wx.navigateTo({
      url: '../detail/detail?id=' + this.data.leassonId
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '跟我零基础学彩铅',
      path: 'pages/index/index'
    }
  }
})