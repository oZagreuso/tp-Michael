import { PaysRepository } from "./paysRepository.js";
import { Pays } from "./Pays.js";


const app = {
    data() {
        return {
            paysList: [],
            selectedPays: null
        }
    },
    async mounted() {
        await this.loadData();
    },
    methods: {
        async loadData() {
            const apiBaseUrl = 'http://localhost:3000/api';
            const paysRepository = new PaysRepository(apiBaseUrl);

            try {
                const apiData = await paysRepository.fetchDataFromApi();
                this.paysList = apiData.map(pays => new Pays(pays));
                console.log(this.paysList);
            } catch (error) {
                console.error('Erreur lors du chargement des données:', error.message);
            }
        },
        openModal(event) {
            let countryId = event.target.dataset.id;
            this.selectedPays = this.paysList.find(x => x.id == countryId);
            console.log(this.$refs);
            this.$refs.modal.style.display = 'block';
        },
        closeModal() {
            this.$refs.modal.style.display ='none';
        }    
          

    }
};

Vue.createApp(app).mount('#app');
