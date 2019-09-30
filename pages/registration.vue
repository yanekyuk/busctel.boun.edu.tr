<template>
  <div class="container">
    <div class="page">
      <iframe class="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSf09EYcN_oQ0ForoDg7-gRTcfjAWTDO7Qo9xxD1mL33bBFiyw/viewform?embedded=true"
        width="760" height="1048" frameborder="0" marginheight="0" marginwidth="0">
        <span class="form-loading">
          <p>
            The form is loading. Please wait...
          </p>
        </span>
      </iframe>
      <hr class="footer">
    </div>
  </div>
</template>

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
    min-height: 1110px;
    margin-top: 60px;
    margin-bottom: 30px;
    .form-loading {
      position: absolute;
      top: 0; bottom: 0;
      left: 0; right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      color: white;
      padding: 60px;
    }
  }
</style>