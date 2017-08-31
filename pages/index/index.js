import model from '../model'

console.log(model)

var app = getApp()
Page({
  data: {
    inputFocus: false
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  setInputFocus: function () {
    this.setData({ inputFocus: true })
  },
  onLoad: function () {
    var self = this
    model.watch(function () {
      setTimeout(function () {
        self.setData({ inputFocus: true })
      }, 1000)
    })
  }
})
