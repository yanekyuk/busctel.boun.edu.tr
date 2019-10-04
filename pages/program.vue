<template>
  <div class="container">
    <div class="page program">
      <h1 class="title">
        TENTATIVE PROGRAM & ABSTRACTS
      </h1>
      <div class="content">
        <div class="block" v-for="(program, i) in programs" :key="i">
          <table>
            <h3>{{ program.date }}</h3>
            <tr>
              <th>Time</th>
              <th>Title</th>
              <th>Speaker</th>
              <th>Location</th>
              <th>Chair</th>
            </tr>
            <tr v-for="(item, j) in program.schedule" :key="j">
              <td :class="!item.time && programs ? 'blank' : ''" class="time">{{ item.time }}</td>
              <td :class="!item.title && programs ? 'blank' : ''">{{ item.title }}</td>
              <td :class="!item.speaker && programs ? 'blank' : ''">{{ item.speaker }}</td>
              <td :class="!item.location && programs ? 'blank' : ''">{{ item.location }}</td>
              <td :class="!item.chair && programs ? 'blank' : ''">{{ item.chair }}</td>
            </tr>
          </table>
        </div>
      </div>
      <hr class="footer">
    </div>
  </div>
</template>

<script>
  import data from '../data/index.js'
  export default {
    name: 'Program',
    data() {
      return {
        programs: data.programs
      }
    },
    // mounted () {
    //   this.programs = data.programs
    // }
  }
</script>

<style lang="scss">
  .program {
    .content {
      display: flex;
      justify-items: center;
      flex-direction: column;
      .block {
        max-width: 680px;
        margin: auto;
        .program-list {
          text-align: left;
          list-style-type: none;
        }
        table {
          background: rgba(21,21,21,.75);
          padding: 15px;
          margin: 5px 0px;
          color: white;
          th {
            border-bottom: 3px solid rgba(255,255,255,0.25);
          }
          td {
            border: 1px solid rgba(255,255,255,0.25);
            padding: 3px;
            &.blank {
              background: rgba(255,255,255,0.25);
            }
            &.time {
              white-space: nowrap;
              padding: 0 5px;
            }
          }
        }
      }

      .divider {
        width: 0px;
        margin: 0 30px;
        border: 3px solid #424242;
      }
    }
  }
</style>