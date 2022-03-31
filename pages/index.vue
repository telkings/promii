<template>
  <div>
          <Card :value="categories" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {}
  },
   async asyncData({$axios, store }) {
   
   const categories = await $axios.get("/categories", {

    });
      //console.log(categories.data)
     return {
       categories: categories.data
    };
  },
  methods:{
    volverInicio(){
      console.log("Volviendo al inicio")
    }
  }
}
</script>
