import { PaysRepository } from "./PaysRepository.js";
import { Pays } from "./Pays.js";


const app = {
    data() {
        return {
            paysList: []
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
        }
    //     },
    //     modal() {
    //     var modal = document.querySelector(".modal");
    //   var trigger = document.querySelector(".open");
    //   var closeButton = document.querySelector(".close-button");

    //   function toggleModal() {
    //     modal.classList.toggle("show-modal");
    //   }

    //   function windowOnClick(event) {
    //     if (event.target === modal) {
    //       toggleModal();
    //     }
    //   }

    //   trigger.addEventListener("click", toggleModal);
    //   closeButton.addEventListener("click", toggleModal);
    //   window.addEventListener("click", windowOnClick);
    //     }

        

    }
};

Vue.createApp(app).mount('#app');
