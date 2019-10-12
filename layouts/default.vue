<template>
  <div id="main">
    <client-only>
      <vue-particles 
        style="position: absolute; z-index: 100; width: 100%; height: 100%"
        color="#0FB0AA"
        linesColor="#0FB0AA"
        :particlesNumber="80"
        shapeType="circle"
        :hoverEffect="true"
        hoverMode="grab" />
    </client-only>
    <div class="main-menu" v-if="!mobile">
      <nuxt-link to="/" class="teko">busctel '20</nuxt-link>
      <nuxt-link v-for="(item, i) in menuItems" :key="i" class="main-menu-item" :to="item.slug">{{ item.title }}</nuxt-link>
    </div>
    <div class="main-menu mobile" v-if="mobile">
      <div v-if="mobileMenu" class="menu">
        <nuxt-link v-for="(item, i) in menuItems" :key="i" class="main-menu-item" :to="item.slug">{{ item.title }}</nuxt-link>
      </div>
      <div v-else class="menu-button">
        <nuxt-link to="/menu">
          <font-awesome-icon icon="bars" />        
        </nuxt-link>
      </div>
      <nuxt-link to="/" class="teko">busctel '20</nuxt-link>
    </div>
    <div class="main-menu-gradient" />
    <nuxt v-bar :style="mobileMenu ? 'filter:blur(5px)' : ''"/>
  </div>
</template>
<script>
export default {
  name: 'Default',
  metaInfo: {
    title: 'BUSCTEL',
    titleTemplate: '%S | BUSCTEL'
  },
  data () {
    return {
      mobile: false,
      menuItems: [
        { title: 'home', slug: '/' },
        { title: 'about', slug: '/about' },
        { title: 'call for papers', slug: '/callforpapers' },
        { title: 'program', slug: '/program' },
        { title: 'registration', slug: '/registration' },
        { title: 'transportation', slug: '/transportation' },
      ]
    }
  },
  computed: {
    mobileMenu: function () {
      return this.$route.path === '/menu'
    }
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.isMobile, { passive: true })
    }
  },
  mounted () {
    this.isMobile()
    window.addEventListener('resize', this.isMobile, { passive: true })
    const menuwidth = document.getElementsByClassName('main-menu')[0].offsetWidth
    const gradient = document.getElementsByClassName('main-menu-gradient')[0]
    gradient.setAttribute("style", `width: ${menuwidth}px`)
    // console.log(document.getElementsByClassName('main-menu-gradient')[0].style.width)
  },
  methods: {
    isMobile () {
      this.mobile = window.innerWidth < 1024
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Dosis|Inconsolata|Teko&display=swap&subset=latin-ext');
  .teko {
    font-family: 'Teko', sans-serif;
    font-size: 22px;
  }

  .__nuxt-error-page {
    display: none!important;
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
    background-image: linear-gradient(to bottom, #fff6ed, #F1EAD8);
    body {
      margin: 0;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(180deg,#fff6ed,#f1ead8);
    }
  }

  a {
    color: #212121;
    font-weight: bold;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .links {
    padding-top: 15px;
  }

  #main {
    display: flex;
    justify-content: center;
  }

  .page {
    padding: 0 2em!important;
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
    top: 0; bottom: -60px;
    scrollbar-width: none;
  }

  .footer {
    margin-top: 30px;
    margin-bottom: 15px;
    border: none;
  }

  .title {
    font-family: 'Teko', sans-serif;
    display: block;
    font-weight: 300;
    font-size: 5em;
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
    align-items: flex-start;
    height: 60px;
    z-index: 200;
    .teko {
      padding: 15px 30px 10px;
      text-decoration: none;
      font-weight: bold;
      color: #212121;
      text-transform: uppercase;
      transition: all ease-in-out .3s;
      border-top: 0px solid #212121;
      font-family: 'Teko', sans-serif;
      font-size: 22px;
    }
    .main-menu-item {
      padding: 15px 5px 10px;
      margin: 0 25px;
      text-decoration: none;
      font-weight: bold;
      color: #212121;
      text-transform: uppercase;
      transition: all ease-in-out .3s;
      border-top: 0px solid #212121;
      &:hover {
        padding-top: 0;
        border-top: 15px solid #212121;
      }
      &.nuxt-link-exact-active {
        padding-bottom: 0px;
        border-bottom: 5px solid #212121;
        margin-bottom: 25px;
        &:hover {
          padding-top: 15px;
          border-top: 0px solid #212121;
        }
      }
    }
    &.mobile {
      position: fixed;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      .menu {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        align-items: center;
        background: rgba(42,42,42,.25);
        .main-menu-item {
          margin: 15px 0;
          border-top: none;
          border-left: 0px solid #212121;
          border-right: 0px solid #212121;
          padding-left: 15px;
          padding-right: 15px;
          &:hover {
            border-top: none;
            padding-top: 15px;
            padding-left: 5px;
            padding-right: 5px;
            border-left: 10px solid #212121;
            border-right: 10px solid #212121;
          }
        }
      }
      .menu-button {
        position: fixed;
        top: 1em;
        left: 1em;
      }
    }
  }

  .main-menu-gradient {
    position: fixed;
    top: 0;
    height: 120px;
    z-index: 190;
    background: linear-gradient(to bottom, #FEF5EC 0%, #FDF4EB 60%, rgba(253, 244, 235, 0) 100%);
  }

  .vb-content {
    scrollbar-width: none;
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