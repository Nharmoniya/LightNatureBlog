<template>
  <div id="app" v-loading="false">
    <Header id="header"></Header>
    <main id="main">
    <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "~@/assets/base.scss";
*{
  box-sizing: border-box;
  padding: 0px;
  margin:0px;

}
a{
  text-decoration: none;
  color: $themeLighterColor;
}

html,body,#app{
  height: 100%;

}

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows:auto 1fr auto;
  grid-template-areas: "header header header"
                       ".      main  ."
                       "footer footer footer ";
}
#header{
  grid-area: header;
  padding-left: 12%;
  padding-right: 12%;
}
#main{
  grid-area: main;
}
#footer{
  grid-area: footer;
  padding-left: 12%;
  padding-right: 12%;
}
@media(max-width: 768px){
  #app{
    grid-template-colums:10% auto 10%;
  }
  #header,#footer{
    padding-left: 10px;
    padding-right: 10px;
  }

}

</style>
