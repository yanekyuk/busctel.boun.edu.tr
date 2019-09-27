<template>
  <div id="main">
    <vue-particles class="particles fullscreen" color="#3CB4C2" linesColor="#D4BA63" />
    <div class="main-menu fullscreen">
      <a href="/" class="teko">busctel '20</a>
      <a href="/">home</a>
      <a href="/about">about</a>
      <a href="/program">program</a>
      <a href="/registration">registration</a>
      <a href="/transportation">transportation</a>
      <a href="/useful-links">useful links</a>
    </div>
    <nuxt v-bar/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Dosis|Teko&display=swap&subset=latin-ext');

  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 500ms;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .teko {
    font-family: 'Teko', sans-serif;
    font-size: 22px;
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
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .particles {
    z-index: -1000;
    opacity: .75;
  }


  .links {
    padding-top: 15px;
  }

  .container {
    margin: 0 auto;
    position: fixed !important;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 50;
    padding-top: 60px;
    padding-bottom: 60px;
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
    background-image: linear-gradient(180deg, white, transparent);
    z-index: 100;

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
    right: 0
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