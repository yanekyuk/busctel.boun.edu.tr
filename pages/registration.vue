<template>
  <div class="container">
    <div class="page">
      <span class="form-loading" :class="formLoaded ? 'passive' : ''">
        <h3 class="subtitle">
          The form is loading. Please wait...
        </h3>
      </span>
      <iframe class="form" id="registration-form" @load="frameload()"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeeSm-6DO70GmeLieHxLTGdI4zeSClw0AeeJM59PpdZJVN0YQ/viewform?embedded=true"
        height="1280" frameborder="0" marginheight="0" marginwidth="0">
      </iframe>
      <!-- <iframe class="form" id="registration-form" @load="frameload()"
        src="https://docs.google.com/forms/d/e/1FAIpQLSf09EYcN_oQ0ForoDg7-gRTcfjAWTDO7Qo9xxD1mL33bBFiyw/viewform?embedded=true"
        width="760" height="1048" frameborder="0" marginheight="0" marginwidth="0">
      </iframe> -->
      <hr class="footer">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Registration',
    data() {
      return {
        formLoaded: false
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