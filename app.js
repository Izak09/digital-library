// script.js

// Define the Media class
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
  }
  
  // Create a media item instance
  const mediaItem = new Media('Example Title', 'Book', 'CD', 'Movie');
  
  // Update the UI with media item details
  function updateUI() {
    document.getElementById('title').textContent = mediaItem.title;
    document.getElementById('status').textContent = mediaItem.isCheckedOut ? 'Checked Out' : 'Available';
  }
  
  // Toggle button event listener
  document.getElementById('toggleButton').addEventListener('click', () => {
    mediaItem.toggleCheckOutStatus();
    updateUI();
  });
  
  // Initial UI update
  updateUI();
  