<template>
  <div class="container">
    <div class="page transportation">
      <div class="map-frame" />
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12029.16218974347!2d29.050697!3d41.084498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9ff47fbad73%3A0xbd6495985c46cd0e!2zQm_En2F6acOnaSBVbml2ZXJzaXR5!5e0!3m2!1sen!2sus!4v1569849834545!5m2!1sen!2sus" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        <div class="transportation-list">
          <div class="transportation-list-item">
            <div class="card">
              <div class="card-time">
                <font-awesome-icon icon="university" />
                <span>
                  <a href="https://harita.boun.edu.tr/goster/22" target="_blank">
                  Click here for official Boğaziçi University Map
                  </a>
                </span>
              </div>
            </div>
            <hr>
          </div>
          <div class="transportation-list-item">
            <div class="card">
              <div class="card-time">
                <font-awesome-icon icon="map-signs" />
                <span>
                  <a href="http://www.boun.edu.tr/Assets/Documents/Dosyalar/Metroline.pdf" target="_blank">
                  Click here for detailed instruction
                  </a>
                </span>
              </div>
            </div>
            <hr>
          </div>
          <div class="transportation-list-item" v-for="(item, i) in transportations" :key="i">
            <div class="card">
              <div class="card-time" v-if="item.type">
                <font-awesome-icon :icon="item.type" />
                <span>{{ item.type === 'subway' ? 'Metro' : 'Bus' }}</span>
              </div>
              <div class="card-chair" v-if="item.code && item.name">
                <strong>{{ item.code }}</strong> | 
                <span>{{ item.name }}</span>
              </div>
            </div>
            <hr>
          </div>
        </div>
      <div class="transportation-container">
        .
      </div>
      <hr class="footer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transportation',
  data () {
    return {
        transportations: [
          { type: 'subway', name: 'Levent-Boğaziçi Üniversitesi', code: 'M6' },
          { type: 'bus', name: 'Taksim-Rumelihisarüstü', code: '559C' },
          { type: 'bus', name: 'Şişli-Rumelihisarüstü', code: '59R' },
          { type: 'bus', name: 'Kabataş-Rumelihisarüstü', code: '43R' },
          { type: 'bus', name: 'Sarıyer-Rumelihisarüstü', code: '59RS' },
          { type: 'bus', name: 'Kadıköy-Rumelihisarüstü', code: '125' },
          { type: 'bus', name: 'Hacıosman Metro-İstinye-Rumelihisarüstü', code: '59RH' }
        ]
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

.map {
  padding: 15px;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
}
.map-frame {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  height: 8px;
  margin-top: 60px;
  background: rgb(33, 33, 33);
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
}

.transportation-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  font-family: 'Inconsolata', monospace;
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  & > div {
    margin: 2.5px 5px;
    border: 1px solid #424242;
    padding: 5px;
    &.card-time {
      background: #424242;
      color: white;
    }
  }
  svg {
    min-width: 16px;
    max-width: 16px;
  }
}

.card-time a {
  color: white;
  text-decoration: none;
}

</style>