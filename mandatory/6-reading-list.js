/**

The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [{
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        read: false,
    },
    {
        title: 'Welcome to Britain',
        author: 'Colin Yeo',
        read: true,
    },
    {
        title: 'The Windrush Betrayal',
        author: 'Amelia Gentleman',
        read: false,
    },
    {
        title: 'Fake Law',
        author: 'The Secret Barrister',
        read: false,
    },
    {
        title: 'Journey to the West',
        author: 'Cheng\'en Wu',
        read: true,
    },
];


for (book of books) {
    if (book.read === true) {
        console.log(`You have read ${book.title} by ${book.author}`);
    } else {
        console.log(`You still need to read ${book.title} by ${book.author}`);
    };
};