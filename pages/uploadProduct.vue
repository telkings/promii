<template>
<div class="container p-4">
    <div class="row">
       <!-- ************CREATED-CATEGORIES*********** -->
      <div class="col-md-6">
        <h2>Subir Categorias</h2>
         <div class="card">
             <div class="card-body">

                   <div enctype="multipart/form-data">
                       
                        <div class="float-right message">
                            <h5>{{message21}}</h5>
                        </div>
                        <div class="input-group mb-3">
                                <div class="custom-file">
                                    <input 
                                    type="file" 
                                    ref="file2"
                                    @change="onSelectCategory()" 
                                    class="custom-file-input" 
                                    id="inputGroupFile02">
                                    <label 
                                    class="custom-file-label" 
                                    for="inputGroupFile02" 
                                    aria-describedby="inputGroupFileAddon02">
                                    Imagen Categoria
                                   </label>
                                </div>
                        </div>

                         <div class="message">
                                <h5>{{message}}</h5>
                         </div>

                         <div class="form-group">
                                <input  
                                name="title"
                                v-model="category.url" 
                                placeholder="Nombre Categoria" 
                                class="form-control">
                          </div>

                            <div class="fields">
                              <button
                               class="btn btn-lg btn-primary btn-block"
                               @click="onSubmitCategory()"
                               >Crear</button>
                            </div>

                    </div>
                    <h1 style="color:blue">{{success2}}</h1>                    
            </div>
         </div>
      </div>
      <!-- ************CREATED-CATEGORIES*********** -->

       <!-- ************CREATED-PRODUCTS*********** -->
      <div class="col-md-6">
        <h2>Subir Productos</h2>
         <div class="card">
             <div class="card-body">
                  <h1 style="color:blue">{{success}}</h1>       
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
                            <div class="form-group">
                                 <input  
                                        type="number" 
                                        v-model="product.price2"
                                        placeholder="Precio con descuento (opcional)"
                                        class="form-control"
                                        >
                          </div>
                          <div class="form-group">
                                 <input  
                                        type="number" 
                                        v-model="product.stock"
                                        placeholder="Stock (opcional)"
                                        class="form-control"
                                        >
                          </div>
                                 
                           <div style="padding:3px;">
                                 <v-select
                                   v-model="selectedIndexCategory"
                                  :items="categories"
                                   label="Seleccione una categoria"
                                   item-text="url"
                                   return-object
                                   solo
                                   success
                                 ></v-select>

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
      <!-- ************CREATED-PRODUCTS*********** -->

      <!-- ************LIST*********** -->
      <!-- <div class="col-md-12">
        <h2>Lista Productos</h2>
         <v-simple-table dark>
           <template v-slot:default>
            <thead>
             <tr>
               <th class="text-left">
                Nombre
              </th>
               <th class="text-left">
                Descripcion
              </th>
               <th class="text-left">
                Precio
              </th>
               <th class="text-left">
                Eliminar
              </th>
                <th class="text-left">
                Actualizar
              </th> 
            </tr>
          </thead>
         <tbody>
          <tr
          v-for="item in products"
          :key="item._id"
           >
          <td>{{ item.name }}</td>
          <td>{{ item.shortDescription }}</td>
          <td>{{ item.price }}</td>
          <td>  <button
                        class="btn btn-lg btn btn-danger btn-block"
                        @click="deleteProduct(item._id, item.public_id)"
                        >Eliminar
                </button>
          </td>
           <td>
                <button
                        class="btn btn-lg btn btn-warning btn-block"
                        @click="updateProduct()"
                        >Actualizar
                </button>
          </td> 
        </tr>
           </tbody>
          </template>
        </v-simple-table>
      </div> -->
      <!-- ************LIST*********** -->
         <!-- ************LIST2*********** -->
      <div class="col-md-12">
        <v-card>
          <v-card-title>
            Tabla de Productos
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar Producto"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table dark
          :headers="headers"
          :items="products"
          :search="search"
          > 
              <template v-slot:top>
                <v-toolbar flat >
        <!-- Dialogo para Editar -->
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          
          <v-card>
            <v-card-title>
              <span class="text-h5">Editar Producto</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="productItem.name"
                      label="Nombre Producto"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="productItem.shortDescription"
                      label="Descripcion"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="productItem.price"
                      label="Precio"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="productItem.priceDiscount"
                      label="Precio en descuento"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="productItem.stock"
                      label="Stock"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save(productItem)"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- Dialogo para Editar -->

         <!-- Dialogo para Borrar -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">¿Quieres eliminar {{productItem.name}}</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm(productItem._id, productItem.public_id)">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- Dialogo para Borrar -->

        </v-toolbar>
        </template>

          <!-- BOTONS DE ACTIONS -->
           <template v-slot:item.actions="{ item }">
                <v-icon
                  small
                  class="mr-2"
                            @click="editItem(item)"
                >
                  mdi-pencil
                </v-icon>
              
                <v-icon
                  small
                  @click="deactivate(item)"
                >
                  mdi-block-helper
              </v-icon>

                <v-icon
                  small
                  @click="deleteItem(item)"
                >
                  mdi-delete
              </v-icon>
            </template>
            <!-- BOTONS DE ACTIONS -->

        </v-data-table>
      </v-card>
       
      </div>
 
      <!-- ************LIST2*********** -->
   </div>
 <notifications group="auth" position="top" width="500px"/>
</div>

</template>

<script>
 


export default {


 data() {
    return {
    
      categories:[],
      products: [],  
      selectedIndexCategory: null,
      message:"",
      message2:"",
      message21: "",
      success:"",
      success2:"",
      product: {
                fileobject: "",
                name: "",
                description: "",
                price: "",
                price2: "",
                stock: "",
                categoryId: ""
               },
      category: {
                 fileCategory:"",
                 url:""
                },

        search: '',
        headers: [
          {
            text: 'Nombre Producto',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Descripcion', value: 'shortDescription' },
          { text: 'Precio ($)', value: 'price' },
          { text: 'Descuento', value: 'priceDiscount' },
          { text: 'Stock', value: 'stock' },
          { text: 'acciones', value: 'actions', sortable: false },
        ],
      dialog: false,//las ventanas dialogo nacen el falso
      dialogDelete: false,
      editedIndex: -1,
      productItem: {},//almaceno el item y la posicion del array
      defaultItem: {
      },
   

    }
  },
   mounted() {
    this.getCategories();
    this.getProducts();
  },
  methods: {
    onSelect(){
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      //const otherTypes = ["application/pdf", "application/msword"];
      const file = this.$refs.file.files[0];
      if(!file){//Si no encontro ingreso archivo
          //console.log("No existe ningun archivo")
          return
      }
      //console.log("Encontro archivo Exito!!")//En caso de que seleccione un archivo
      //console.log("Mi archivo => "+ JSON.stringify( file.type ))
      this.product.fileobject = file;
      if(!allowedTypes.includes(file.type)){
        this.message = "El tipo de archivo es incorrecto!!"

        setTimeout(() => {
               this.message= ""
               this.message2 = ""
               return;
               }, 3000);
        
      }
      if(file.size>60000000){
        // this.message = 'Demasiado grande, el tamaño máximo permitido es de 500 kb'
        this.message = 'Archivo Demasiado Pesado'
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

       if(!this.selectedIndexCategory)
       {
              this.$notify({
                  'group': 'auth',
                  'title': 'Alerta',
                  'text': 'Seleccione una categoria',
                  'type': 'warning',
                  'duration': 4000
                 })
        return;
       }

      this.product.categoryId = this.selectedIndexCategory._id

      //asigno el la identificacaion de la categoria al producto
      
      const formData = new FormData();
      formData.append('name',this.product.name);
      formData.append('description',this.product.description);
      formData.append('price',this.product.price);
      formData.append('price2',this.product.price2);
      formData.append('stockData',this.product.stock);
      formData.append('category',this.product.categoryId);// El parametro que envia es 'category'
      formData.append('file',this.product.fileobject);
    
        await this.$axios.post("/upload-product", formData)
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
                 this.success = " Producto Creado con exito!!"
                 this.getProducts();
                 setTimeout(() => {
             //nuestras variables quedan vacias para otro producto nuevo 
                this.product.fileobject = ""
                this.product.description = ""
                this.product.price = ""
                this.product.price2 = ""
                this.product.stock = ""
                this.product.name = ""
                this.message = ""
                this.message2 = ""
                this.success = ""
                this.selectedIndexCategory = null
               return;
               }, 4000);
             
             }) 
             .catch(error => {
                 console.log({ error });
             });
               
    },
     onSelectCategory(){
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      //const otherTypes = ["application/pdf", "application/msword"];
      const file = this.$refs.file2.files[0];
      if(!file){//Si no encontro ingreso archivo
          //console.log("No existe ningun archivo")
          return
      }
      //console.log("Encontro archivo Exito!!")//En caso de que seleccione un archivo
      //console.log("Mi archivo => "+ JSON.stringify( file.type ))
      this.category.fileCategory = file;
      if(!allowedTypes.includes(file.type)){
        this.message = "El tipo de archivo es incorrecto!!"

        setTimeout(() => {
               this.message= ""
               this.message2 = ""
               return;
               }, 3000);
        
      }
      if(file.size>60000000){
        // this.message = 'Demasiado grande, el tamaño máximo permitido es de 500 kb'
        this.message = 'Archivo Demasiado Pesado'
      }
      this.message21 = file.name
    },
    async onSubmitCategory(){

     
          if (this.category.fileCategory == "") {
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
          if (this.category.url == "") {
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
        
      //asigno el la identificacaion de la categoria al producto
      
      const formData = new FormData();
  
      formData.append('url',this.category.url);
      formData.append('file',this.category.fileCategory);

      //console.log("CAPTURE POR FORMDATA "+ JSON.stringify( formData ))
    
        await this.$axios.post("/upload-categories", formData)
        .then(res => {
                //veo que me responde el backend
                console.log(res.data);
                //notifico por pantalla que envio una imagen
                this.$notify({
                  'group': 'auth',
                  'title': 'Imagen Subida',
                  'text': `${this.message21} Enviando`,
                  'type': 'success',
                  'duration': 4000
                 })
                 this.success2 = " CATEGORIA Creado con exito!!"
                 this.getCategories();
                 setTimeout(() => {
             //nuestras variables quedan vacias para otro producto nuevo 
                this.category.fileCategory = ""
                this.category.url = ""
                this.message = ""
                this.message2 = ""
                this.message21 = ""
                this.success2 = ""
                this.selectedIndexCategory = null
               return;
               }, 4000);
             
             }) 
             .catch(error => {
                 console.log({ error });
             });
               
    },
    async getCategories() {
        
       await this.$axios.get("/categories")
         .then(res => {
             
             //console.log(res.data); //respuesta de categorias
             this.categories = res.data //llega array de categorias

             }) 
             .catch(error => {
                 console.log({ error });
             });

    },
    async getProducts() {
        
       await this.$axios.get("/product-admin")
         .then(res => {
             
             //console.log(res.data); //respuesta de categorias
             this.products = res.data //llega array de categorias

             }) 
             .catch(error => {
                 console.log({ error });
             });

    },
    async deleteProduct(idProduct, urlCloud){
      //console.log("Eliminado producto "+ idProduct)
       this.$notify({
                  'group': 'auth',
                  'title': 'Alerta',
                  'text': 'Eliminando...',
                  'type': 'warning',
                  'duration': 4000
                 })
        const  toSend = {
                          idProduct, urlCloud
                        }      
        
       const res = await this.$axios.post("/delete-product", toSend)
        .then(res => {
                //veo que me responde el backend
                //console.log(res.data);
                if(res.data.status == "success"){
                   this.getProducts();
                }
             }) 
             .catch(error => {
                 console.log({ error });
             });
    },
      // Eliminar producto

      deleteItem (item) {
        this.productItem = Object.assign({}, item)//mete dentro de productitem el objeto que viene en item
        this.dialogDelete = true//apertura del dialogo para eliminar
      },
      async  deleteItemConfirm (idProduct, urlCloud) {
        //console.log("ID => " + idProduct)
        //console.log("URL => " + urlCloud)
         this.$notify({
                  'group': 'auth',
                  'title': 'Alerta',
                  'text': 'Eliminando...',
                  'type': 'warning',
                  'duration': 4000
                 })
        //this.desserts.splice(this.editedIndex, 1)
         const  toSend = {
                          idProduct, urlCloud
                        }      
        
       const res = await this.$axios.post("/delete-product", toSend)
        .then(res => {
                //veo que me responde el backend
                //console.log(res.data);
                if(res.data.status == "success"){
                   this.getProducts();
                }
             }) 
             .catch(error => {
                 console.log({ error });
             });
        this.closeDelete()
      },

       closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.productItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

       // Editar producto
       //funcion que habilita la edicion del producto
      editItem (item) {
        this.productItem = Object.assign({}, item)//mete dentro de productitem el objeto que viene en item
           this.$notify({
                  'group': 'auth',
                  'title': 'Alerta',
                  'text': 'Proximamente Actualizar Producto',
                  'type': 'warning',
                  'duration': 4000
                 })
        //this.dialog = true //aqui hago apertura del dialogo
      },
      close () {
        this.dialog = false//cierro el dialogo
        this.$nextTick(() => {
          this.productItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
     async save (inconming) {
        //console.log("producto valores "+ JSON.stringify(inconming))

        const toSend = inconming

         const res = await this.$axios.put("/upload-product", toSend)
        .then(res => {
                //veo que me responde el backend
                console.log(res.data);
                if(res.data.status == "success"){
                   this.getProducts();
                   //toSend = ""
                }
             }) 
             .catch(error => {
                 console.log({ error });
             });

        // if (this.editedIndex > -1) {
        //   Object.assign(this.desserts[this.editedIndex], this.productItem)
        // } else {
        //   this.desserts.push(this.productItem)
        // }
        this.close()//Al terminar cierro la ventana dialogo
      },

      //Desactivar Producto
      deactivate (item) {
        //console.log(" vamos a suspender a " + item.name)
        //console.log("Desactivando "+ JSON.stringify( item))
         this.$notify({
                  'group': 'auth',
                  'title': 'Alerta',
                  'text': 'Proximamente Suspender !!',
                  'type': 'warning',
                  'duration': 4000
                 })
      }
  },
 
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
};
</script>

<style>

</style>