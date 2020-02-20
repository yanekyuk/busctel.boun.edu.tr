<template>
  <div class="container">
    <div class="page">
      <template v-if="registration">
        <span class="form-loading" :class="formLoaded ? 'passive' : ''">
          <h3 class="subtitle">
            The form is loading. Please wait...
          </h3>
        </span>
        <iframe class="form" id="registration-form" @load="frameload()"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeeSm-6DO70GmeLieHxLTGdI4zeSClw0AeeJM59PpdZJVN0YQ/viewform?embedded=true"
          height="1280" frameborder="0" marginheight="0" marginwidth="0">
        </iframe>
      </template>
      <template v-else>
        <br><br><br><br>
        <h2>Registration for BUSCTEL is closed</h2>
        <hr>
        <h3>Please email <a href="mailto:busctel@boun.edu.tr">busctel@boun.edu.tr</a></h3>
        <h4>or</h4>
        <h3>contact us via <a href="https://twitter.com/bounlingcircle" target="_blank">twitter</a></h3>
      </template>
      <hr class="footer">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Registration',
    data() {
      return {
        formLoaded: false,
        registration: false
      }
    },
    methods: {
      frameload() {
        this.formLoaded = true
      }
    }
  }
</script>

<style lang="scss">
  .page-enter-active,
  .page-leave-active {
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 500ms;
  }

  .page-enter,
  .page-leave-to {
    opacity: 0;
  }

  .form {
    height: 100%;
    min-height: 1280px;
    margin-top: 60px;
    margin-bottom: 30px;
    width: 600px;
    max-width: 100vw;
  }

  .form-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    opacity: 1;
    transition: all ease-in-out .5s;

    &.passive {
      height: 0px;
      opacity: 0;
    }
  }
</style>