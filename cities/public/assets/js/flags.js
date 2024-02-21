const appFlag = {
    data() {
        return {
            countries: []
        };
    },
    mounted() {
        this.fetchCountries();
    },
    methods: {
        fetchCountries() {
            fetch('https://flagsapi.com/json')
            .then(response => response.json())
            .then(data => {
                this.countries = data;
            })
            .catch(error => console.error('Erreur lors de la récupération des données :', error));
        },
    
    getFlagUrl(codePays) {
      
      return `https://flagsapi.com/api/v1/${codePays.toLowerCase()}?size=32`;
    }
}
}