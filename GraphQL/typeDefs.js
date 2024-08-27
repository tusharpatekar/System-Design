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

type Query {
    authors: [Author]
    books: [Book]
 }

`;
