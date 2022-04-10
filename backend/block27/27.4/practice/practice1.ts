// ReadingTracker.ts
type Book = {
  book: string;
  author: string;
  genre: string;
}

class WishList {
  private wishlist: Book[];

  constructor(wishlist: Book[] = []) {
    this.wishlist = wishlist;
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }

}

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.progressNotification(
        "Congratulations! You've reached your reading goal!"
      );
      return;
    }
    this.progressNotification(
      "There are still some books to go!"
    );
  }

  progressNotification(message: string): void {
    console.log(message);
  }
}

const readTracker = new ReadingTracker(20);
const wishes = new WishList();
wishes.showWishlist();
wishes.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia'});
wishes.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);