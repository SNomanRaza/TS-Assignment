"use strict";

class Book {
    bookID;
    title;
    author;
    isAvailable;
    constructor(bookID, title, author, isAvailable) {
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    displayBook() {
        console.log(this.bookID);
        console.log(this.title);
        console.log(this.author);
        console.log(this.isAvailable);
    }

    issueBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("Book issued successfully " + this.bookID);
        }
        else {
            console.log("Book is not available");
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log("Book returned successfully " + this.bookID);
        }
        else {
            console.log("Book not returned");
        }
    }
}
const b = new Book(21, "xyz", "abc", true);
b.displayBook();
b.issueBook();
b.returnBook();

class LibraryMember {
    memberID = 21;
    borrowedBooks = true;
    membershipType = "yearly";
    displayInfo() {
        console.log(this.memberID);
        console.log(this.borrowedBooks);
        console.log(this.membershipType);
    }
}

class A extends LibraryMember {
    showInfo() {
        console.log(this.memberID);
        console.log(this.membershipType);
    }
}
const l = new LibraryMember();
l.displayInfo();

console.log(l.memberID);
const a = new A();

a.showInfo();

class LibraryItem {
    itemID;
    title;

    constructor(itemID, title){
        this.itemID = itemID;
        this.title = title;
    }

    displayInfo() {
        console.log("Library Item");
        console.log(this.itemID);
        console.log(this.title);
    }
}
class BookItem extends LibraryItem {
    displayInfo() {
        console.log("Book");
        console.log(this.itemID);
        console.log(this.title);
    }
}
class Magazine extends LibraryItem {
    displayInfo() {
        console.log("Magazine");
        console.log(this.itemID);
        console.log(this.title);
    }
}

const li = new LibraryItem(1, "Item1");
li.displayInfo();
const bi = new BookItem(2, "The Lion King");
bi.displayInfo();
const m = new Magazine(3, "Magazine");
m.displayInfo();


class LibraryBook {
    bookID;
    title;
    constructor(bookID, title) {
        this.bookID = bookID;
        this.title = title;
    }
}

class Member {
    memberID;
    name;
    constructor(memberID, name) {
        this.memberID = memberID;
        this.name = name;
    }
}
function searchItem(items, condition) {
    return items.filter(condition);
}
const books = [
    new LibraryBook(1, "Snow White"),
    new LibraryBook(2, "The Lion King"),
    new LibraryBook(3, "Wings of Fire")
];
const members = [
    new Member(21, "abc"),
    new Member(22, "lmn"),
    new Member(23, "pqr")
];
const searchBook = searchItem(books, book => book.title === "The Lion King");
console.log("Searched Book:");
console.log(searchBook);
const searchMember = searchItem(members, member => member.memberID === 21);
console.log("Searched Member:");
console.log(searchMember);
