// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
window.rootFont = (function () {
  var doc = document
  var win = window
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = doc.body.clientWidth
    // clientWidth = $(window).width()
    if (!clientWidth) return
    docEl.style.fontSize = 40 * (clientWidth / 750) + 'px'
    if (docEl.style.fontSize) {
      doc.getElementById('app').style.display = 'block'
    } else {
      doc.getElementById('app').style.display = 'block'
    }
  }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}())
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
