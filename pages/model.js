var temp = []

export default {
  watch: function (fn) {
    temp.push(fn)
  },
  fire: function () {
    temp.forEach(function (fn) {
      fn()
    })
  }
}