
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
		wholeCart: [0] // なぜか配列にいれないとcartBtnComponentでreactiveに取り出せない
	}),
	changeLike(isbn) {
		console.log('call like', isbn);
		this.state.books.forEach(book => {
			if (book.isbn == isbn) {
				book.like = !book.like;
			}
		})
	},
	changeCart(isbn, calc) {
		console.log(this.state.wholeCart)
		this.state.books.forEach(book => {
			if (book.isbn == isbn) {
				if (calc === 'add') {
					book.cart++;
					this.state.wholeCart[0]++;
				} else if (calc === 'remove') {
					if (book.cart > 0) {
						book.cart--;
						this.state.wholeCart[0]--;
					} else {
						book.cart = 0;
						this.state.wholeCart[0] = here.state.wholeCart[0];
					}
				}
			}
		})
		console.log(this.state.wholeCart)
	},
	filterByLike(books) {
		return books.filter(book => book.like);
	},
	filterByCart(books) {
		return books.filter(book => { return book.cart > 0 });
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


}