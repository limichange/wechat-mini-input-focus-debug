import model from '../model'

Page({
  data: {
    inputFocus: false
  },
  setAllInputFocus: function () {
    model.fire()
  },
  setInputFocus: function () {
    this.setData({ inputFocus: true })
  },
  inputBlur: function () {
    this.setData({ inputFocus: false })
  },
  onLoad: function () {
    var self = this
    model.watch(function () {
      self.setData({ inputFocus: true })
    })
  }
})
