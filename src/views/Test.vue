<template>
  <div>
    <button @click="Test">click</button>
    <div>{{ data }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {
        body: 'hello'
      }
    }
  },
  name: "Test",
  methods: {
    // Test() {
    //   this.data.body = 'You'
    //   axios.get('http://localhost:3000/data').then((data) => {
    //     this.data = data;
    //     console.log(data);
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // }

    Test(){
     axios({
       method: 'post',
       url: 'http://localhost:3000/data',
       data: 'title=msg'
     }).then((res)=>{
       console.log(res)
     })

    }
  }
}
</script>

<style scoped>

</style>