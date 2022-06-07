<template>
        
        <v-toolbar
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
         </v-toolbar>
        
</template>

<script>
  export default {
    data: () => ({
      searchMovies: null,
      movies: [],
      empty: null
      
    }),
    methods: {
           async searchMovie() {
           this.empty = null    
           console.log("Buscando...")
           const axiosHeaders = {
             headers: {
                     name: this.searchMovies
                      }
           }
         const response = await this.$axios.get("/search",axiosHeaders)
          
          this.movies = response.data
          if(this.movies.length == 0){
             this.empty = "No se encontraron Productos"
             }else{
             this.$emit("list", this.movies);
             }  
     }
    }
  }
</script>
<style>
.product{
    background: red;
    border-radius: 5px;
}
</style>