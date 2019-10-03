<template>
  <div class="container">
    <div class="page program">
      <h1 class="title">
        TENTATIVE PROGRAM & ABSTRACTS
      </h1>
      <div class="content">
        <div class="block" v-for="(program, i) in programs" :key="i">
          <table>
            <caption>{{ program.date }}</caption>
            <tr>
              <th>Time</th>
              <th>Title</th>
              <th>Speaker</th>
              <th>Location</th>
              <th>Chair</th>
            </tr>
            <tr v-for="(item, i) in program.schedule" :key="i">
              <td class="time">{{ item.time }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.speaker }}</td>
              <td>{{ item.location }}</td>
              <td>{{ item.chair }}</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- <div class="content">
        <div class="block" v-for="(program, i) in programs" :key="i">
          <h2 class="subtitle">{{ program.date }}</h2>
          <div class="program-list">
            <div class="program-list-item" v-for="(item, i) in program.schedule" :key="i">
              <div class="card">
                <div class="card-time" v-if="item.time">
                  <font-awesome-icon icon="clock" />
                  <span>{{ item.time }}</span>
                </div>
                <div class="card-chair" v-if="item.chair">
                  <font-awesome-icon icon="chair" />
                  <span>{{ item.chair }}</span>
                </div>
                <div class="card-speaker" v-if="item.speaker">
                  <font-awesome-icon icon="user" />
                  <span>{{ item.speaker }}</span>
                </div>
                <div class="card-location" v-if="item.location">
                  <font-awesome-icon icon="map-marker-alt" />
                  <span>{{ item.location }}</span>
                </div>
                <div class="card-title" v-if="item.title">
                  <font-awesome-icon icon="file-alt" />
                  <span>{{ item.title }}</span>
                </div>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div> -->
      <hr class="footer">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Program',
    data() {
      return {
        programs: [
          {
            date: 'February 15',
            schedule: [
              { time: '09:00', title: 'Registration', location: 'Demir Demirgil Auditorium' },
              { time: '09:45', title: 'Welcome, Announcements, and Opening Remarks', location: 'Demir Demirgil Auditorium' },
              { time: '10:00', title: 'Invited Talk', location: 'Demir Demirgil Auditorium', speaker: 'Nilüfer Şener (İstanbul Kültür University)', chair: 'Noyan Dokudan'},
              { time: '11:00', title: 'Break' },
              { time: '11:15-12:45', title: 'First Sessions', chair: 'Zeynep Burak', location: 'Demir Demirgil Auditorium' },
              { time: '11:15', title: 'Effects of L2-English on first L1 Narrative Skills', speaker: 'Işıl Doğan, Orhan Ilhan, Nurgül Arslan, Ayşe Doğan, Ezgi Sarıdaş, Aslı Aktan' },
              { time: '11:45', title: 'Information Structure in Turkish Nominal Phrases', speaker: 'Özlem Ergelen' },
              { time: '12:15', title: 'Assessing and Comparing Verbal Fluency in Turkish Sign Language and Turkish', speaker: 'Onur Keleş' },
              { time: '12:45', title: 'Lunch' },
              { time: '13:45', title: 'Poster Session', location: 'Özge Arnas Hall' },
              { time: '15:00', title: 'TID/Turkish Sign Language Workshop', location: 'Demir Demirgil Auditorium', speaker: 'Elvan Tamyürek Özparlak, Burcu Saral, Noyan Dokudan' },
              { time: '17:00-18:00', title: 'Second Sessions', chair: 'Yiğit Kasal', location: 'Demir Demirgil Auditorium' },
              { time: '17:00', title: 'Veya and Ya Da: Marking the distinction between the inclusive and exclusive disjunctive "or" in Turkish language', speaker: 'Kağan Yasin Porsuk, Tilbe Göksun' },
              { time: '17:30', title: 'On Nominalizers in Turkish Embedded Clauses', speaker: 'Mehmet İlteriş Bozkurt' },
              { time: '18:00', title: 'Boğaziçi University Music Club Classical Music Choir Concert', location: 'Demir Demirgil Auditorium' }
            ]
          },
          {
            date: 'February 16',
            schedule: [
              { time: '09:00', title: 'Registration', location: 'Demir Demirgil Auditorium' },
              { time: '09:45', title: 'Welcome, Announcements, and Opening Remarks', location: 'Demir Demirgil Auditorium' },
              { time: '10:00', title: 'Invited Talk', location: 'Demir Demirgil Auditorium', speaker: 'Serkan Şener (Yeditepe University)', chair: 'Demet Kayabaşı'},
              { time: '11:00', title: 'Break' },
              { time: '11:15-12:45', title: 'First Sessions', chair: 'Furkan Atmaca', location: 'Demir Demirgil Auditorium' },
              { time: '11:15', title: 'The (non)effects of the age of acquisition of TİD: Evidence from classifiers and argument expressions ', speaker: 'Hande Sevgi' },
              { time: '11:45', title: 'Contribution of grammatical function and semantic role to discourse prominence: Evidence from language comprehension and language production in Turkish', speaker: 'Gökben Konuk' },
              { time: '12:15', title: 'Kazakh Es-Words are Strict Negative Concord Items', speaker: 'Assem Amirzhanova, Elena Guerzoni' },
              { time: '12:45', title: 'Lunch' },
              { time: '13:45', title: 'Flash Presentations and Discussions', location: 'Özge Arnas Hall' },
              { time: '15:00-16:30', title: 'Second Sessions', chair: 'Gökçe Güneyi', location: 'Demir Demirgil Auditorium' },
              { time: '15:00', title: 'Is Accusative Case Really the Case?', speaker: 'Utku Türk' },
              { time: '15:30', title: 'L2 Comprehension in bilinguals after translating into L1 and L2', speaker: 'Ecenur Çağırıcı' },
              { time: '16:00', title: 'Closing Remarks', location: 'Demir Demirgil Auditorium' },
              { time: '19:00', title: 'Social Get-Together' },

            ]
          }          
        ]
      }
    }
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
            &.time {
              white-space: nowrap;
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
</style>