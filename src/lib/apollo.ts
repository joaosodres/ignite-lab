import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r2gtb70jrn01z6het992f3/master',
    cache: new InMemoryCache()
});