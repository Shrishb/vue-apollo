import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

Vue.use(VueApollo);

Vue.config.productionTip = false;

//creating apollo client
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: { authorization: "Bearer " + "" }
    });
  }
});

const apolloProvider = new VueApollo({
  defaultClient: client,
})

new Vue({
  render: h => h(App),
  apolloProvider
}).$mount("#app");
