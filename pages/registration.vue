<template>
  <div class="container">
    <div class="page">
      <iframe class="form" src="https://docs.google.com/forms/d/e/1FAIpQLSf09EYcN_oQ0ForoDg7-gRTcfjAWTDO7Qo9xxD1mL33bBFiyw/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
  margin-top: 60px;
  margin-bottom: 30px;
}

</style>