const data = {
    authors: [
        { id: "1", name: "My fav book", bookIds: ["101", "102"] },
        { id: "2", name: "my second fav", bookIds: ["103"] },
    ],
    books: [
        { id: "101", title: "Book 1", publishedYear: 2000, authorId: "1" },
        { id: "102", title: "Book 2", publishedYear: 2010, authorId: "1" },
        { id: "103", title: "Book 3", publishedYear: 2020, authorId: "1" },
    ],
};


export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            console.log(parent);
            return data.authors.find(authorDeails => authorDeails.id === parent.authorId);
        },
    },
    MyFav: {
       myfav : () => {
           return data.books;
       }
    },

    Query: {
        authors: () => {
            return data.authors;

        },
        books: () => {
            return data.books;
        },
    },
}

