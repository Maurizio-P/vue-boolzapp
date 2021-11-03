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
    },
    methods: {
        
    }
});