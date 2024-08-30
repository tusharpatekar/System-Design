export const typeDefs = `
type Author {
    id: ID!
    name: String!
    books: [Book]
}

type Book {
    id: ID!
    title: String!
    publishedYear: Int!
    author: Author
}

type MyFav {
    myFavBook : myfav
}

type Query {
    myBooks: [MyFav]
    authors: [Author]
    books: [Book]
 }

`;
