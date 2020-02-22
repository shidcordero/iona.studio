import { catService } from "../_services"

const state = {
    loading: false,
    all: {
        isLoadMore: false,
        breeds: [],    
        cats: [],
        error: null
    },
    view: {
        cat: null
    }
}

const actions = {
    getCats({ commit }, { pagination, id, isLoadMore }) {
        commit("getRequest")

        catService.getAllCats(pagination, id)
            .then(
                res => commit("getCatsSuccess", { cats: res.data, count: res.count, isLoadMore }),
                error => commit("getFailure", error)
            )
    },
    getBreeds({ commit }) {
        commit("getRequest")

        catService.getBreeds()
            .then(
                res => commit("getBreedsSuccess", res.data),
                error => commit("getFailure", error)
            )
    },
    getCatById({ commit }, id){
        commit("getRequest")

        catService.getCatById(id)
            .then(
                res => commit("getCatByIdSuccess", res.data),
                error => commit("getFailure", error)
            )
    }
}

const mutations = {
    getRequest(state) {
        state.loading = true
    },
    getBreedsSuccess(state, data) {
        state.all.breeds = data.map(({ id, name }) => { return { id, name } })
    },
    getCatsSuccess(state, { cats, count, isLoadMore} ) {
        if (isLoadMore && cats.length > 0)
            state.all.cats = state.all.cats.concat(cats)
        else
            state.all.cats = cats

        state.all.isLoadMore = (count > state.all.cats.length)
    },
    getCatByIdSuccess(state, cat) {
        state.view.cat = cat
    },
    getFailure(state, error) {
        state.all.error = error
    }
}

export const cats = {
    namespaced: true,
    state,
    actions,
    mutations
}
