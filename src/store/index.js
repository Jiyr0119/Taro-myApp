// src/store/counter.js
import {
  observable
} from 'mobx'

const counterStore = observable({
  counter: 0,
  keepscreenon: false,
  systeminfo: {},
  isIPhoneX: false,
  key: '993bbb5910a8440bbc7d433c622ecdd5',
  weatherIconUrl: 'https://cdn.heweather.com/cond_icon/',
  requestUrl: {
    weather: 'https://free-api.heweather.com/s6/weather',
    hourly: 'https://free-api.heweather.com/s6/weather/hourly',
  },
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
})

export default counterStore
