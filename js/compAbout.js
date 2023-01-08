const aboutPage = {
    data(){
        return{
            articles: data.about.articles,
			settings: store.state.settings,
        }
    },
    components:{
        'cv-header': headerComponent,
        'cv-articles': articlesComponent
    },
    template: `
    <cv-header v-bind="settings"></cv-header>
    <v-main>
        <router-link to="/cart">go to cart</router-link><br>
        <router-link to="/search">go to search</router-link>
        <cv-articles :articles="articles"></cv-articles>
    </v-main>
    `
}