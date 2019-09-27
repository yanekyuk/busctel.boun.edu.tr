<template>
  <div id="main">
    <vue-particles
      class="particles"
      color="#3CB4C2"
      linesColor="#D4BA63"
    />
    <div class="main-menu">
      <a href="#">busctel '20</a>
      <a href="#">home</a>
      <a href="#">about</a>
      <a href="#">program</a>
      <a href="#">registration</a>
      <a href="#">transportation</a>
      <a href="#">useful links</a>
    </div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

html {
  font-family: 'Lato', sans-serif;
  overflow: hidden;
}

.particles {
  z-index: -1000;
  position: fixed;
  opacity: .75;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.main-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
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
</style>
