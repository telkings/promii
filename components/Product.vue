<template>
<div>
      <NuxtLink to="/"
      class="link">
       Volver
      </NuxtLink>
    
<v-flex xs12 sm12>
  <v-layout row>
   <v-card 
     v-for="product in data[0].products" :key="product._id"
     class="mx-auto my-3" max-width="250" style="line-height:1; ">
    <v-img
      :src="product.img"
      height="200px"
    ></v-img>

    <h2 style="text-align:center; padding:10px">
     {{product.name}}
    </h2>
    
    <h3 style="text-align:center; padding:10px">
      {{product.shortDescription}}
    </h3>
    <h3 class="price">
      ${{product.price}}
    </h3>
      <div class="div-button-p">
          <div class="div-button-h">
              <button class="button-css">Agregar</button>
        </div>
      </div>
  </v-card>

   </v-layout>
    
</v-flex> 


  </div>
</template>

<script>
export default {
    name:'product',
    props: ["data"],
    data: () => ({
      show: false,
    }) 

}
</script>

<style>
.button-css {
border: 1px solid #2e518b; /*anchura, estilo y color borde*/
padding: 5px; /*espacio alrededor texto*/
background-color: #8b2e2e; /*color botón*/
color: #ffffff; /*color texto*/
text-decoration: none; /*decoración texto*/
text-transform: uppercase; /*capitalización texto*/
font-family: 'Helvetica', sans-serif; /*tipografía texto*/
border-radius: 10px; /*bordes redondos*/
}
.div-button-p {
  /*background: yellow;*/
  padding: 10px;
  /*IMPORTANTE*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.div-button-h {
   width: 80px;
}

.price {
    text-align:center; 
    color:blue;
    font-size: 30px;
}
.link{
border: 1px solid #802966; /*anchura, estilo y color borde*/
padding: 2px; /*espacio alrededor texto*/
background-color: #8b2e7f; /*color botón*/
color: #ffffff; /*color texto*/
text-decoration: none; /*decoración texto*/
text-transform: uppercase; /*capitalización texto*/
font-family: 'Helvetica', sans-serif; /*tipografía texto*/
border-radius: 10px; /*bordes redondos*/
}
</style>

    