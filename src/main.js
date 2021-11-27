import Vue from "vue";
import App from "./App.vue";
import router from "../src/router/index";
import {store} from "./store/index";
import './index.scss';
import {actions} from "@/constants/constants";

Vue.config.productionTip = false;

let app = '';


app = new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        if (store.getters.user != null) {
            this.$store.dispatch(actions.autoSignIn, user);
        }
    }
}).$mount('#app');
