<template>
  <div id="main">
    <no-ssr>
      <vue-particles 
        style="position: absolute; z-index: 100; width: 100%; height: 100%"
        color="#0FB0AA"
        linesColor="#0FB0AA"
        :particlesNumber="80"
        shapeType="circle"
        :hoverEffect="true"
        hoverMode="grab" />
    </no-ssr>
    <div class="main-menu">
      <nuxt-link to="/" class="teko">busctel '20</nuxt-link>
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link to="/about">about</nuxt-link>
      <nuxt-link to="/program">program</nuxt-link>
      <nuxt-link to="/registration">registration</nuxt-link>
      <nuxt-link to="/transportation">transportation</nuxt-link>
      <nuxt-link to="/useful-links">useful links</nuxt-link>
    </div>
    <nuxt v-bar/>
  </div>
</template>
<script>
export default {
  name: 'Default'
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Dosis|Teko&display=swap&subset=latin-ext');
  .teko {
    font-family: 'Teko', sans-serif;
    font-size: 22px;
  }

  #main {
    display: flex;
    justify-content: center;
  }

  .__nuxt-error-page {
    display: none;
  }

  .fullscreen {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  html {
    font-family: 'Dosis', sans-serif;
    overflow: hidden;
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background-image: linear-gradient(to bottom, #fff6ed, #F1EAD8)
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .links {
    padding-top: 15px;
  }

  .container {
    margin: 0 auto;
    position: absolute !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 150;
    padding-top: 60px;
    padding-bottom: 60px;
    width: auto;
    height: auto;
    top: 0; bottom: 0;
  }

  .title {
    font-family: 'Teko', sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .content {
    display: flex;
    justify-content: center;
    p {
      max-width: 60ch;
      font-size: larger;
      text-align: justify;
    }
  }

  .main-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    z-index: 200;

    a {
      padding: 15px 30px;
      text-decoration: none;
      font-weight: bold;
      color: #212121;
      text-transform: uppercase;
      transition: all ease-in-out .3s;

      &:hover {
        background: #424242;
        color: white;
      }
    }
  }

  .vb>.vb-dragger {
    z-index: 5;
    width: 12px;
    position: fixed!important;
    right: 0;
  }

  .vb>.vb-dragger>.vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0, 0, 0, 0);
    transform: rotate3d(0, 0, 0, 0);
    -webkit-transition:
      background-color 100ms ease-out,
      margin 100ms ease-out,
      height 100ms ease-out;
    transition:
      background-color 100ms ease-out,
      margin 100ms ease-out,
      height 100ms ease-out;
    background-color: rgba(48, 121, 244, .1);
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
  }

  .vb.vb-scrolling-phantom>.vb-dragger>.vb-dragger-styler {
    background-color: rgba(48, 121, 244, .3);
  }

  .vb>.vb-dragger:hover>.vb-dragger-styler {
    background-color: rgba(48, 121, 244, .5);
    margin: 0px;
    height: 100%;
  }

  .vb.vb-dragging>.vb-dragger>.vb-dragger-styler {
    background-color: rgba(48, 121, 244, .5);
    margin: 0px;
    height: 100%;
  }

  .vb.vb-dragging-phantom>.vb-dragger>.vb-dragger-styler {
    background-color: rgba(48, 121, 244, .5);
  }
</style>