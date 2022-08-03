<template>
<div>
  <br>
     
        <Search
      @list="search($event)"
      />

  <br>
  
<v-flex xs12 sm12>
  <v-layout row>
   <v-card 
     v-for="product in data[0].products" :key="product._id"
     class="mx-auto my-3" max-width="250" style="line-height:1; ">
    <v-img
      :src="product.img"
      width="100%"
      height="200px"
    ></v-img>

    <h4 style="text-align:center; padding:2px">
     {{product.name}}
    </h4>
    
    <h4 style="text-align:center; padding 3px">
      {{product.shortDescription}}
    </h4>
    <h3 class="price">
      ${{product.price}}
    </h3>
    <h3 v-if="product.priceDiscount" class="price2">
      ${{product.priceDiscount}}
    </h3>
    <!-- <h3 v-if="product.stock" class="price2">
      ${{product.stock}}
    </h3> -->
      <div class="div-button-p">
          <div class="div-button-h">
              <v-btn block color="#a31c6b" dark @click="addCart(product.name)">Agregar</v-btn>
        </div>
      </div>
  </v-card>

   </v-layout>
    
</v-flex> 


<notifications group="auth" position="top center" width="300px"/>
  </div>
</template>

<script>
export default {
    name:'product',
    props: ["data"],
    data: () => ({
      show: false,
      moviess:[],
      empty: null,
    }),
  methods:{
    search(incomingParameter){
         this.data[0].products = incomingParameter
    },
    addCart(product){
      console.log(product +" Agregado")
      this.$notify({
        'group': 'auth',
        'title': 'Actualizo carrito',
        'text': `${product} Agregado`,
        'type': 'success',
        'duration': 2000
      })
    }
  }
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
    font-size: 25px;
    /*text-decoration: none;*/ /*sin ningun cambio*/ 
    /*text-decoration: line-through;*/ /*Solo linea encima del texto*/ 
    /*text-decoration: line-through red;*/ /*Linea encima del texto con color*/ 
    /*Si tiene descuento adicional mostrar line-through en price si no mostrar none*/
}
.price2 {
    text-align:center; 
    color:rgb(208, 0, 255);
    font-size: 25px;
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

    