<template>
        <div>

         <!-- <h1>↩</h1>
         	<div class="btn-whatsapp">
			     <a href="">
                     <img 
                       src="whatsappLogo.png" 
                       :alt="what">
                 </a>
		    </div> -->

        </div>
        <!-- <v-toolbar
         dense
         color="#334387"
         dark> 
              
              <v-text-field
                v-model="searchMovies"
                label="Buscar productos..." 
              />
                   <v-col cols="6" md="3"> 
                      <v-btn block color="#a31c6b" dark @click="searchMovie">Buscar</v-btn>   
                  </v-col>
              <div class="product">
              {{empty}} 
              </div> 
         </v-toolbar> -->
        
</template>

<script>
  export default {
    data: () => ({
    //   searchMovies: null,
    //   movies: [],
    //   empty: null
    what: 'https://api.whatsapp.com/send?phone=573112701507&text=Hola%2C%20ComercialCf%20Quiero%20Cotizar%20un%20Servicio%20Ahora!'
      
    }),
    methods: {
    //        async searchMovie() {
    //        this.empty = null    
    //        console.log("Buscando...")
    //        const axiosHeaders = {
    //          headers: {
    //                  name: this.searchMovies
    //                   }
    //        }
    //      const response = await this.$axios.get("/search",axiosHeaders)
          
    //       this.movies = response.data
    //       if(this.movies.length == 0){
    //          this.empty = "No se encontraron Productos"
    //          }else{
    //          this.$emit("list", this.movies);
    //          }  
    //  }
    }
  }
</script>
<style>
/* .product{
    background: red;
    border-radius: 5px;
} */

.btn-whatsapp {
       display:block;
       width:10px;
       height:10px;
       color:#fff;
       position: fixed; /* Posicion Flotante*/
       right:450px;    /* Posicion horizontal sobre el eje y */
       bottom:80px;   /* Posicion Vertical sobre el eje x*/
       border-radius:50%;
       line-height:80px;
       text-align:center;
       z-index:999;
       }
</style>