<template>
	<div class="col-md-12">
		<div class="col-md-12">
			<b-form-select 
				v-model="selectedBreed" 
				:options="data.breeds"
				class="mb-3 col-md-3"
				value-field="id"
				text-field="name"
				@change="loadCats(false)">
			<template v-slot:first>
				<option value="null" selected disabled>Select breed</option>
			</template>
			</b-form-select>
		</div>
		<div class="col-md-12">
			<div v-if="data.cats.length > 0" class="text-center">
				<b-card-group columns class="mb-4">
					<b-card v-for="cat in data.cats"
							v-bind:data="data.cats"
           					v-bind:key="cat.id"
							:img-src="cat.url"
							img-alt="Img"
							img-top
							class="text-center">
						<b-button href="#" variant="primary" @click="viewCat(cat.id)">View Details</b-button>
					</b-card>
				</b-card-group>
				<b-button v-if="data.isLoadMore" href="#" variant="success" @click="loadCats(true)">Load More</b-button>
			</div>
			<span v-if="data.cats.length === 0">No cats available</span>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex"

	export default {
		name: "CatList",
		data() {
		    return {
		      	pagination: { 
					page: 0,
					perPage: 10
				},
				selectedBreed: null
		    }
	  	},
		computed: {
			...mapState({
				data: state => state.cats.all,
			}),
			formattedRow() {
				return this.data.cats.reduce((c, n, i) => {
					if (i % 4 === 0) c.push([]);
					c[c.length - 1].push(n);
					return c;
				}, []);
			}
		},
		created() {
			this.getBreeds()
		},
		methods: {
			...mapActions("cats", {
				getCats: "getCats",
				getBreeds: "getBreeds"
			}),
		  	loadCats(isLoadMore) {
				if (isLoadMore)
					this.pagination.page++
				else 
					this.pagination.page = 0
		    	this.getCats({ pagination: this.pagination, id: this.selectedBreed, isLoadMore: isLoadMore })
			},
			viewCat(id) {
      			this.$router.push({ name: 'catview', params : { id } })
			}
		}
	}
</script>