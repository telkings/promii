<template>
<div class="container p-4">
    <div class="row">
      <div class="col-md-6">
         <div class="card">
             <div class="card-body">

                   <div enctype="multipart/form-data">
                       
                        <div class="float-right message">
                            <h5>{{message2}}</h5>
                        </div>
                        <div class="input-group mb-3">
                                <div class="custom-file">
                                    <input 
                                    type="file" 
                                    ref="file"
                                    @change="onSelect()" 
                                    class="custom-file-input" 
                                    id="inputGroupFile02">
                                    <label 
                                    class="custom-file-label" 
                                    for="inputGroupFile02" 
                                    aria-describedby="inputGroupFileAddon02">
                                    Buscar imagen en mi computadora
                                   </label>
                                </div>
                        </div>

                         <div class="message">
                                <h5>{{message}}</h5>
                         </div>

                         <div class="form-group">
                                <input  
                                name="title"
                                v-model="product.name" 
                                placeholder="Nombre Producto" 
                                class="form-control">
                          </div>

                          <div class="form-group">
                                <input  
                                name="description"
                                v-model="product.description" 
                                placeholder="Descripcion" 
                                class="form-control">
                            </div>
                          

                            <div class="form-group">
                                 <input  
                                        type="number" 
                                        v-model="product.price"
                                        placeholder="Ingrese Precio"
                                        class="form-control"
                                        >
                          </div>


                            <div class="fields">
                              <button
                               class="btn btn-lg btn-primary btn-block"
                               @click="onSubmit()"
                               >Crear</button>
                            </div>

                    </div>
        
            </div>
         </div>
      </div>
   </div>
 <notifications group="auth" position="top" width="500px"/>
</div>

</template>

<script>

export default {

 data() {
    return {
      
      message:"",
      message2:"",
      product: {
                fileobject: "",
                name: "",
                description: "",
                price: ""
               }
    }
  },
  methods: {
    onSelect(){
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.product.fileobject = file;
      if(!allowedTypes.includes(file.type)){
        this.message = "El tipo de archivo es incorrecto!!"

        setTimeout(() => {
               this.message= ""
               this.message2 = ""
               return;
               }, 3000);
        
      }
      if(file.size>500000){
        this.message = 'Demasiado grande, el tamaño máximo permitido es de 500 kb'
      }
      this.message2 = file.name
    },
    async onSubmit(){

     
          if (this.product.fileobject == "") {
          this.$notify({
                  'group': 'auth',
                  'title': 'Alerta',
                  'text': 'Ingrese Imagen',
                  'type': 'warning',
                  'duration': 4000
                 })
                 this.message = "Por favor Ingrese una Imagen"
        return;
      }
          if (this.product.name == "") {
                this.message = ""
          this.$notify({
                  'group': 'auth',
                  'title': 'Alerta',
                  'text': 'Ingrese Nombre',
                  'type': 'warning',
                  'duration': 4000
                 })
        return;
      }
          if (this.product.description == "") {
          this.$notify({
                  'group': 'auth',
                  'title': 'Alerta',
                  'text': 'Ingrese Descripcion',
                  'type': 'warning',
                  'duration': 4000
                 })
        return;
      }
          if (this.product.price == "") {
          this.$notify({
                  'group': 'auth',
                  'title': 'Alerta',
                  'text': 'Ingrese Precio',
                  'type': 'warning',
                  'duration': 4000
                 })
        return;
      }

      //console.log("Esta cargado asi => "+ JSON.stringify( this.product))  
      const formData = new FormData();
      formData.append('name',this.product.name);
      formData.append('description',this.product.description);
      formData.append('price',this.product.price);
      formData.append('file',this.product.fileobject);
      
        await this.$axios.post("/upload-files", formData)
        .then(res => {
                //veo que me responde el backend
                console.log(res.data);
                //notifico por pantalla que envio una imagen
                this.$notify({
                  'group': 'auth',
                  'title': 'Imagen Subida',
                  'text': `${this.message2} Enviando`,
                  'type': 'success',
                  'duration': 4000
                 })
                //nuestras variables quedan vacias para otro producto nuevo 
                this.product.fileobject = ""
                this.product.description = ""
                this.product.price = ""
                this.product.name = ""
                this.message = ""
                this.message2 = ""
                           
             }) 
             .catch(error => {
                 console.log({ error });
             });
               
    }
  }
 
};
</script>

<style>

</style>