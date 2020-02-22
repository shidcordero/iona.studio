<template>
	<div class="col-md-12">
		<b-card no-body="">
			<template v-slot:header>
				<b-button href="#" variant="primary" @click="$router.go(-1)">Back</b-button>
			</template>
			<b-card-img-lazy :src="data.cat ? data.cat.url : 'null'"></b-card-img-lazy>
			 <b-card-body v-if="data.cat">
				<b-card-title>{{ data.cat.breeds[0].name }}</b-card-title>
				<b-card-sub-title class="mb-2">Origin: {{ data.cat.breeds[0].origin }}</b-card-sub-title>
				<b-card-text><em>{{ data.cat.breeds[0].temperament }}</em></b-card-text>
				<b-card-text>{{ data.cat.breeds[0].description }}</b-card-text>
			</b-card-body>
		</b-card>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex"

	export default {
		name: "CatView",
		computed: {
			...mapState({
				data: state => state.cats.view,
			}),
		},
		created () {
			this.data.cat = null
			this.getCatById(this.$route.params.id)
		},
		methods: {
			...mapActions("cats", {
				getCatById: "getCatById"
			})
		}
	}
</script>