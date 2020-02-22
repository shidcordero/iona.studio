import Vue from "vue";
import Vuex from "vuex";

import { cats } from "./cat.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        cats
    }
});
