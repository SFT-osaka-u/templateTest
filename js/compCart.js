
const cartPage = {
	data() {
		return {
			settings: store.state.settings,
			books: store.state.books,
			wholeCart: store.state.wholeCart,
			booksInCart: store.filterByCart(store.state.books),
			booksLiked: store.filterByLike(store.state.books),
			formSelects: data.form
		}
	},
	components: {
		'cv-header': headerComponent,
		'cv-heading': headingComponent,
		'cv-sns': snsComponent,
		'cv-cart-btn': cartBtnComponent,
		'cv-cards-show-case': cardsShowCaseComponent,
		'cv-search-btn': searchBtnComponent,
		'cv-reserve-form': reserveFormComponent
	},
	template: `
		<div>
			<cv-header v-bind="settings"></cv-header>
			<v-main>
				<cv-heading
					badge="true"
					:content="wholeCart"
					color="cyan"
					textColor="white"
					icon="mdi-cart"
					heading="カート"
				></cv-heading>
				<cv-cards-show-case :books="booksInCart"></cv-cards-show-case>
				
				<cv-heading
					badge="true"
					:content="booksLiked.length"
					color="red"
					textColor="white"
					icon="mdi-heart"
					heading="気になる"
				></cv-heading>
				<cv-cards-show-case :books="booksLiked"></cv-cards-show-case>
				
				<cv-heading
					icon="mdi-book-open-variant"
					heading="予約フォーム"
				></cv-heading>
				<cv-reserve-form v-bind="formSelects"></cv-reserve-form>
				<cv-search-btn></cv-search-btn>
			</v-main>
		</div>
	`,
}
