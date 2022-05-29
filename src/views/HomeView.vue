<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <div>
    <el-link href="https://element.eleme.io" target="_blank">default</el-link>
    <el-link @click="toButton" type="primary">primary</el-link>
    <el-link type="success">success</el-link>
    <el-link type="warning">warning</el-link>
    <el-link type="danger">danger</el-link>
    <el-link type="info">info</el-link>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import router from "@/router";

export default {
  components: {
    HelloWorld
  },
  methods:{
    toButton() {
      router.push({
        path: "button"
      })
    }
  }
}
</script>
