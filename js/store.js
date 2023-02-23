
const { reactive } = Vue

const store = {
	debug: true,
	state: reactive({
		settings: {
			title: "",
			date: "",
			place: "",
			fontFamily: ""
		},

		books: [],
		booksInCart: [],
		booksLiked: [],
		wholeCart: [0], // なぜか配列にいれないとcartBtnComponentでreactiveに取り出せない
		likes: [0]
	}),
	changeLike(isbn) {
		// console.log('call like', isbn);
		this.state.books.forEach(book => {
			if (book.isbn == isbn) {
				book.like = !book.like;
			}
		})
		this.filterByLike();
		this.state.likes[0] = this.state.booksLiked.length;
	},
	changeCart(isbn, calc) {
		// console.log(this.state.wholeCart)
		this.state.books.forEach(book => {
			if (book.isbn == isbn) {
				if (calc === 'add') {
					book.cart++;
					this.state.wholeCart[0] ++;
				} else if (calc === 'remove') {
					if (book.cart > 0) {
						book.cart--;
						this.state.wholeCart[0] --;
				} else {
						book.cart = 0;
					}
				}
			}
		})
		this.filterByCart();
		// console.log(this.state.wholeCart)
	},
	filterByLike() {
		// return books.filter(book => book.like);
		// this.state.booksLiked = [];
		for(let i = 0; i < this.state.likes; i++){
			this.state.booksLiked.pop();
		}
		this.state.books.forEach(book => {
			if(book.like){
				this.state.booksLiked.push(book);
			}
		})
		this.saveInfo2Cookie();
	},
	filterByCart() {
		// return books.filter(book => { return book.cart > 0 });
		// for(let i = 0; i < this.state.booksInCart.length; i++){
		// 	this.state.booksInCart.pop();
		// }
		this.state.booksInCart.splice(0, this.state.booksInCart.length);
		this.state.books.forEach(book => {
			if(book.cart > 0){
				this.state.booksInCart.push(book);
			}
		})
		this.saveInfo2Cookie();
	},
	search(conditions, keyWord) {
		// keyWordに合うものを各検索方法で返す
		let booksByKey = [];
		const regExp = new RegExp(keyWord, 'i');

		if (keyWord !== "") {
			if (conditions.method === "教科書名") {
				this.state.books.forEach(book => {
					if (book.title.match(regExp) !== null) {
						booksByKey.push(book);
					}
				})
			} else if (conditions.method === "ISBN") {
				this.state.books.forEach(book => {
					if (book.isbn.match(regExp) !== null) {
						booksByKey.push(book);
					}
				})
			} else if (conditions.method === ("フリーワード" || "")) {
				this.state.books.forEach(book => {
					Object.values(book).forEach(value => {
						if ((value || "").toString().match(regExp) !== null) {
							booksByKey.push(book);
							return;
						}
					})
				})
			}
		} else {
			booksByKey = this.state.books;
		}

		// さらに分野で絞り込んで返す
		let booksByGenre = []
		if (conditions.genres.length !== 0) {
			booksByGenre = booksByKey.filter(book => {
				return conditions.genres.includes(book.genre);
			})
		} else {
			booksByGenre = booksByKey;
		}

		// 検索結果を返す
		return booksByGenre;
	},
	
	saveInfo2Cookie(){
		let booksActive = [];
		this.state.books.forEach(book => {
			if(book.cart > 0 || book.like){
				booksActive.push(book);
			}
		})
		setCookie("booksActive", booksActive);
	},

}