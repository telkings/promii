<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <!-- ********************* Barra superior ******************** -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
                <!-- <a href="">
                     <img 
                       src="whatsapp2.png" 
                       alt="https://api.whatsapp.com/send?phone=573112701507&text=Hola%2C%20ComercialCf%20Quiero%20Cotizar%20un%20Servicio%20Ahora!">
                 </a> -->
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->

      
      
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      > -->
        <!-- <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon> -->
      <!-- </v-btn> -->

    
      <!-- <NuxtLink to="/">
       Volver
      </NuxtLink> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer /> -->
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
     <!-- *********************  Cierre Barra superior ******************** -->



      <!-- ********************* CONTENIDO PRINCIPAL ******************** -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- ********************* CONTENIDO PRINCIPAL ******************** -->
    

        <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Inicio',
          to: '/'
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Cervezas',
        //   to: '/cervezas'
        // },
        //  {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Gaseosas',
        //   to: '/inspire'
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
