<template>
  <div class="hello">
    <p :class="$style.red" @click="fn">{{message}}</p>
  </div>
</template>

<script>
import { fetchGet } from '@/serves'
export default {
  name: 'HelloWorld',
  data() {
    return {

    }
  },
  methods: {
    fn(){
      alert('hello world')
    }
  },
  async mounted() {
    let res= await fetchGet('/people/peoplecerificatecategory/getcategorylist'); // eslint-disable-line no-unused-vars
    console.log(res)
  }
}
</script>
<style module>
.red {
  color: red;
}
</style>
