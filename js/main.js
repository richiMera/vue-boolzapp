var app = new Vue({

  el: "#root",
  data: {
    activeIndex: 0,
    filter: "",
    visibleEmoji: false,
    visible:false,
    visibleDeleteBox: false,
    nameArray: [],
    newMessage: "",
    activeChat: {},
    contacts: [
	{
		name: 'Michele',
		avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent'
			},
			{
				date: '10/01/2020 16:15:22',
				text: 'Tutto fatto!',
				status: 'received'
			},

		],
	},
	{
		name: 'Fabio',
		avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
		visible: true,
		messages: [
			{
				date: '20/03/2020 16:30:00',
				text: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '20/03/2020 16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '20/03/2020 16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			}
		],
	},
	{
		name: 'Samuele',
		avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
		visible: true,
		messages: [
			{
				date: '28/03/2020 10:10:40',
				text: 'La Marianna va in campagna',
				status: 'received'
			},
			{
				date: '28/03/2020 10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '28/03/2020 16:15:22',
				text: 'Ah scusa!',
				status: 'received'
			}
		],
	},
	{
		name: 'Luisa',
		avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received'
			},

		],
	},
  {
		name: 'Laura',
		avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Alla fine sei andata in palestra?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Si, ma solo per poco tempo',
				status: 'received'
			},

		],
	},

],
    icons : [
  {
    name: "fas fa-dog",
    color: "yellow"
  },
  {
    name: "fas fa-fish",
    color: "yellow"
  },
  {
    name: "fas fa-tractor",
    color: "black"
  },
  {
    name: "fas fa-hippo",
    color: "yellow"
  },
  {
    name: "fas fa-spider",
    color: "yellow"
  },
  {
    name: "fas fa-apple-alt",
    color: "red"
  },
  {
    name: "fas fa-carrot",
    color: "orange"
  },
  {
    name: "fas fa-lemon",
    color: "yellow"
  },
  {
    name: "fas fa-dragon",
    color: "red"
  },
  {
    name: "fas fa-pepper-hot",
    color: "red"
  },
  {
    name: "fas fa-space-shuttle",
    color: "black"
  },
  {
    name: " fas fa-truck-monster",
    color: "black"
  },
  {
    name: " fas fa-wheelchair",
    color: "black"
  },
  {
    name: " fas fa-tram",
    color: "orange"
  },
  {
    name: "fas fa-fighter-jet",
    color: "black"
  },
  {
    name: "fas fa-helicopter",
    color: "black"
  },
]

  },
  // created: this.activeChat = "",
  methods: {
    showActiveChat: function(index) {
      this.activeChat = this.contacts[index];
      this.activeIndex = index
    },
    answerOk: function () {
      var receivedObj = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        text: "ok",
        status: "received"
      };

       this.activeChat.messages.push(receivedObj);


    },
    sentNewMessage: function() {
      var newObj = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        text: this.newMessage,
        status: "sent"
      };


      this.activeChat.messages.push(newObj);
      this.newMessage = "";


      setTimeout(this.answerOk, 1000);
    },
    openEmoji: function() {

      if(this.visibleEmoji == false) {
        this.visibleEmoji = true
      } else{
        this.visibleEmoji = false
      };

    },
    filtterName: function () {
      // this.contacts.visible = false;
      for (var i = 0; i < this.contacts.length; i++) {
        if(this.filter == "") {
          this.contacts[i].visible = true
        } else if (this.contacts[i].name.toLowerCase().includes(this.filter) ) {
          this.contacts[i].visible = true
      } else {
          this.contacts[i].visible = false
      }


    }
  },
  showDeleteBox: function(index) {

  }

  }
});









// creare un oggetto con data-text-status(sent), dove text= newMessage
