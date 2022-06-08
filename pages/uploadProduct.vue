<template>
  <div>
       <div class="row login_layout">
           <div class="col-md-6 mt-5 mx-auto">
               <form action="">
                <h2 class="h3 mb-3 font-weight-normal"> SigN in</h2>

                <div class="form-group">
                    <label for="email">Correo</label>
                    <input type="email" class="form-control" name="email" placeholder="ingrese correo">
                </div>

                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" class="form-control" name="password" placeholder="ingrese contraseña">
                </div>
                 
                 <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
               </form>

           </div>

       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>