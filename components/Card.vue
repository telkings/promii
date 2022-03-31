<template>
<v-flex xs12 sm12>
  <v-layout row>

   <v-card
    style="border-radius:50px;"
    v-for="category in value" :key="category._id"
    class="mx-auto my-12"
    max-width="250"  
   >
    <NuxtLink :to="category.url">
    <v-img
    style="border-radius:50px;"
      height="250"
      :src="category.image"
    ></v-img>
   </NuxtLink>
    <v-card-title style="font-size: 30px">{{category.name}}</v-card-title>

    <v-card-text>
      <div>Aguila, Poker, Club colombia.</div>
      <v-divider class="mx-4"></v-divider>
      <h2>Servicio a Domicilio.</h2>
    </v-card-text>
    
    <!-- <v-divider class="mx-4"></v-divider>

    <v-card-title>{{category.name}}</v-card-title> -->


  </v-card>

 </v-layout>
</v-flex>
 
</template>

<script>
  export default {
    name: 'card', 
    props: ["value"], 
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
       
      },
    },
  }
</script>