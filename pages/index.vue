<template>
  <div>
    {{categories}}
    <Card></Card>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
   async asyncData({$axios, store }) {
   
   const categories = await $axios.get("/categories", {

    });
      //console.log(categories.data)
     return {
       categories: categories.data
    };
  },
}
</script>
