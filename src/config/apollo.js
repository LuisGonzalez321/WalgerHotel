import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: "https://hotelgraphql.azurewebsites.net"
   /* uri:"https://1jzxrj179.lp.gql.zone/graphql"*/
});

export default client;