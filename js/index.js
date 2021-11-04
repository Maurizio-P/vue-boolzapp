Vue.config.devtools = true;


const vueApp = new Vue({
    el: "#app",
    data: {
        contacts: [
            {
                name: "Matteo",
                image: "img/avatar_1.jpg",
                messages: [
                    {
                        date: '03/11/2021 16.10.07',
                        text: 'Hai portato fuori il cane?',
                        status: 'sent'
                    },
                    {
                        date: '03/11/2021 16.13.45',
                        text: 'E lava i piatti',
                        status: 'sent'
                    },
                    {
                        date: '03/11/2021 16.14.21',
                        text: 'Più tardi lo faccio',
                        status: 'riceived'
                    },
                ],
            },
            {
                name: "Andrea",
                image: "img/avatar_2.jpg",
                messages: [
                    {
                        date: '03/11/2021 15.11.00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '03/11/2021 16.12.45',
                        text: 'Hai più risolto quel problema?',
                        status: 'sent'
                    },
                    {
                        date: '03/11/2021 16.17.21',
                        text: 'Si grazie, tutto risolto',
                        status: 'riceived'
                    },
                ],
            },
            {
                name: "Valerio",
                image: "img/avatar_3.jpg",
                messages: [
                    {
                        date: '03/11/2021 17.09.49',
                        text: 'Ho comprato la macchina',
                        status: 'received'
                    },
                    {
                        date: '03/11/2021 17.13.45',
                        text: 'Che auto?',
                        status: 'sent'
                    },
                    {
                        date: '03/11/2021 17.14.21',
                        text: 'Un bel modellino lego',
                        status: 'riceived'
                    },
                ],
            },
            {
                name: "Giorgia",
                image: "img/avatar_4.jpg",
                messages: [
                    {
                        date: '03/11/2021 19.10.07',
                        text: 'Sei ancora su a Milano?',
                        status: 'sent'
                    },
                    {
                        date: '03/11/2021 19.13.45',
                        text: 'Si, torno giù a fine mese',
                        status: 'received'
                    },
                    {
                        date: '03/11/2021 20.15.00',
                        text: 'Dai ti aspetto per una pizza',
                        status: 'sent'
                    },
                ],
            },
        ],
        activeChat: {
            name: "Matteo",
            image: "img/avatar_1.jpg",
            messages: [
                {
                    date: '03/11/2021 16.10.07',
                    text: 'Hai portato fuori il cane?',
                    status: 'sent'
                },
                {
                    date: '03/11/2021 16.13.45',
                    text: 'E lava i piatti',
                    status: 'sent'
                },
                {
                    date: '03/11/2021 16.14.21',
                    text: 'Più tardi lo faccio',
                    status: 'riceived'
                },
            ],
        },
        inputTextMessage: "",
        autoResp: ["Ciao", "si certo", "no", "no, dimmi", "tra poco arrivo", "ci vediamo stasera"]
    },

    methods: {
        saveChat(object){
            this.activeChat = object
        },

        // da attivare quando premo invio
        sendMessage(){
            let textMessage = this.inputTextMessage

            if(textMessage === "") {
                return
            }

            let date = new Date().toLocaleDateString();
            let clock = new Date().toLocaleTimeString()
            let dateClock = `${date}  ${clock}`
            
            let newMessage = {
                date: dateClock,
                text: textMessage,
                status: 'sent'
            } 

            this.activeChat.messages.push(newMessage)

            this.inputTextMessage = ""

            setTimeout(() => {

                let resp = this.autoResp[Math.round(Math.random() * this.autoResp.length - 1)]

                date = new Date().toLocaleDateString();
                clock = new Date().toLocaleTimeString()
                dateClock = `${date}  ${clock}`

                newMessage = {
                    date: dateClock,
                    text: resp,
                    status: "received"
                }

                this.activeChat.messages.push(newMessage)

            }, 2000);
        },
        
    }
});