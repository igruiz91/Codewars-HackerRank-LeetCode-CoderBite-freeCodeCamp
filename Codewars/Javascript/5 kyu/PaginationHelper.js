<<<<<<< HEAD
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  return pageIndex < this.pageCount()
    ? Math.min(
        this.itemsPerPage,
        this.collection.length - pageIndex * this.itemsPerPage
      )
    : -1;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
};

var helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

console.log(helper.itemCount());
console.log(helper.pageCount());
=======
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  
}
>>>>>>> c2af91535e2b7890338915f9852464db4e63d7b2
