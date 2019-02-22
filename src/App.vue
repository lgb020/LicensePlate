<template>
  <div id="app">
    <plateNumber @getPlateLicense="getPlateLicense"></plateNumber>
  </div>
</template>

<script>
import plateNumber from './components/plateNumber'

export default {
  name: 'App',
  components: {
    plateNumber
  },
  methods:{
    getPlateLicense(data){
      console.log('组件传出的data',data)
    }
  }
}
</script>

<style>
</style>
