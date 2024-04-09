const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            emailsLength: 10
        };
    },
    methods: {
        getEmailFromApi() {
            for (let i = 0; i < this.emailsLength; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    const serverData = response.data;
                    const email = serverData.response;
                    this.emails.push(email)
                });
            }
        }
    },
    mounted() {
        this.getEmailFromApi()
    }
}).mount('#app');