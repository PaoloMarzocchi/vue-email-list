
const { createApp } = Vue
createApp({
    data() {
        return {
            listMail: []
        }
    },
    methods:{
        getMailApi(){
            for (let i = 0; i <= 9; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {

                    this.listMail.push(response.data.response)   
            })
        }
        }
    },
    mounted(){
        this.getMailApi();
    }
}).mount('#app')