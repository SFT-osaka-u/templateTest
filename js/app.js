const bookData = data.books;

const { createVuetify } = Vuetify;
const vuetify = createVuetify();


const Home = { template: '<div>landing page<br><router-link to="/search">Go to Search Page</router-link></div>' }
const About = { template: '<div>About</div>' }

const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/search', component: searchPage },
	{ path: '/cart', component: cartPage }
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})



const app = Vue.createApp({
	data() {
		return {
			settings: store.state.settings,
			books: store.state.books,
			wholeCart: store.state.wholeCart
		}
	},
	created() {
		Object.keys(data.settings).forEach(key => {
			if (this.settings[key] !== undefined) {
				this.settings[key] = data.settings[key]
			}
		})
		document.head.insertAdjacentHTML('beforeend', data.settings.fontStyle);

		bookData.forEach(book => {
			this.books.push({ ...book, like: false, cart: 0 });
		})
	},
	components:{
		'cv-search': searchPage,
	}

})
app
.use(router)
.use(vuetify)
.mount('#app')