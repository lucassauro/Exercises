var WishList = /** @class */ (function () {
    function WishList(wishlist) {
        if (wishlist === void 0) { wishlist = []; }
        this.wishlist = wishlist;
    }
    WishList.prototype.addToWishlist = function (book) {
        this.wishlist.push(book);
    };
    WishList.prototype.showWishlist = function () {
        console.log(this.wishlist);
    };
    return WishList;
}());
var ReadingTracker = /** @class */ (function () {
    function ReadingTracker(readingGoal) {
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }
    ReadingTracker.prototype.trackReadings = function (readsCount) {
        this.booksRead += readsCount;
        if (this.booksRead >= this.readingGoal) {
            this.progressNotification("Congratulations! You've reached your reading goal!");
            return;
        }
        this.progressNotification("There are still some books to go!");
    };
    ReadingTracker.prototype.progressNotification = function (message) {
        console.log(message);
    };
    return ReadingTracker;
}());
var readTracker = new ReadingTracker(20);
var wishes = new WishList();
wishes.showWishlist();
wishes.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishes.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);
