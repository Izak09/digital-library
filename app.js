class Media {
    constructor(Media, Book, CD, Movie) {
      this._Media = Media;
      this._Book = Book;
      this._CD = CD;
      this._Movie = Movie;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._Media;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        return ratingsSum / this._ratings.length;
    }

    addRating(rating) {
        this.ratings.push(rating);
    }
  }

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this.pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this.director;
    }

    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book ('The Pragmatic Programmer', 'Andrew Hunt', 352);
const historyOfNewBooks = new Book('Come and Get It', 'Kiley Reid', 400);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating();
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('The Playlist', 'Daniel Ek', 23);

speed.toggleCheckOutStatus();
console.log(speed.isCheckOutStatus);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());






























