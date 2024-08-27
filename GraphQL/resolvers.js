

export const resolvers = {
    Query: {
        authors: () => {
            return [
                { id: '1', name: 'J.K. Rowling' },
                { id: '2', name: 'Michael Crichton' },  
            ];
        },
        books: () => {
            return [
                { id: '1', title: 'Harry Potter and the Chamber of Secrets', publishedYear: 1998 },
                { id: '2', title: 'Jurassic Park', publishedYear: 1990 },
            ];
        },
    },
}
    