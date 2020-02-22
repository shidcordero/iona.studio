import Vue from "vue"
import Router from "vue-router"

import CatList from "../pages/cat/CatList"
import CatView from "../pages/cat/CatView"

Vue.use(Router)

export const router = new Router({
	mode: "history",
	routes: [
		{ path: "/", component: CatList, name: "cat" },
		{ path: "/:id", component: CatView, name: "catview" },
	    // otherwise redirect to home
	    { path: "*", redirect: "/" }
	]
})

router.beforeEach((to, from, next) => {
	// handle page redirection

	next()
})