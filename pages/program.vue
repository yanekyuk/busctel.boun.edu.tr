<template>
  <div class="container">
    <div class="page program">
      <h1 class="title">
        TENTATIVE PROGRAM & ABSTRACTS
      </h1>
      <h3 class="subtitle">PDF version of the program can be retrieved from <a href="/program.pdf" target="_blank">here</a>.</h3>
      <div class="content">
        <div class="block" v-for="(program, i) in programs" :key="i">
          <div class="date-and-location">
            <h3>{{ program.date }}</h3>
            <span>Venue: <strong>{{ program.location }}</strong></span>
          </div>
          <table>
            <tr>
              <th>Time</th>
              <th>Title</th>
              <th>Speaker</th>
              <!-- <th>Location</th> -->
              <!-- <th>Chair</th> -->
            </tr>
            <tr v-for="(item, j) in program.schedule" :key="j">
              <td :class="!item.time && programs ? 'blank' : ''" class="time">{{ item.time }}</td>
              <td :class="!item.title && programs ? 'blank' : ''">{{ item.title }}</td>
              <td :class="!item.speaker && programs ? 'blank' : ''">{{ item.speaker }}</td>
              <!-- <td :class="!item.location && programs ? 'blank' : ''">{{ item.location }}</td> -->
              <!-- <td :class="!item.chair && programs ? 'blank' : ''">{{ item.chair }}</td> -->
            </tr>
          </table>
        </div>
        <div class="block">
          <div class="date-and-location">
            <h3>Posters</h3>
            <span>Venue: <strong>Natuk Birkan Building, South Campus, Boğaziçi University, Bebek, 34342</strong></span>
          </div>
          <table>
            <tr>
              <th>Title</th>
              <th>Presentator</th>
              <th>Affiliation</th>
            </tr>
            <tr v-for="(poster, j) in posters" :key="j">
              <td :class="!poster.title && posters ? 'blank' : ''">{{ poster.title }}</td>
              <td :class="!poster.speaker && posters ? 'blank' : ''">{{ poster.speaker }}</td>
              <td :class="!poster.aff && posters ? 'blank' : ''">{{ poster.aff }}</td>
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
        programs: data.programs,
        posters: data.posters
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
        .date-and-location {
          display: flex;
          margin: -5px 0rem;
          background: rgba(21,21,21,.75);
          color: white;
          span, h3 {
            margin: 2rem 1rem 5px;
            flex-grow: 1;
          }
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