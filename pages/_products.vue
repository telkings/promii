<template>
<div>
    <Flotante/> 
    <Product :data="products"/>
    
</div>
</template>

<script>
export default {

    async asyncData({ params, $axios, store }) {
    const products = await $axios.get("/products", {
      params: { url: params.products },
    });
    
    return {
      products: products.data,
    };
  },

}
</script>

<style>

</style>