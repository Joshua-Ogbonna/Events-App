
const app = new Vue({
  el: '#events',
  data: {
    message: 'Welcome to Events Management',
    event: {
      name: '',
      description: '',
      date: ''
    },
    events: [
      {
        name: 'Wedding Ceremony',
        description: 'Wedding of Bro Blessing and Sis Iwuchukwu',
        date: '18-04-2020'
      },
      {
        name: 'Women Meeting',
        description: 'Women meeting in commemoration of the Annual August Women Meeting',
        date: '27-08-2020'
      },
      {
        name: 'International Youth Day',
        description: 'In commemoration of the International Youth day, this event will be holding',
        date: '15-08-2020'
      }
    ],
    eventEdit: false
  },
  methods: {
    addEvent () {
      if (this.event.name) {
        this.events.push(this.event)
        console.log(this.event)
      }
      this.event = {
        name: '',
        description: '',
        date: ''
      }
    },
    deleteEvent (event) {
      if(confirm('Do you really want to delete the event?')) {
        this.events.splice(event, 1)
      }
    },
    editEvent () {
      this.eventEdit = true
    }
  }

})
