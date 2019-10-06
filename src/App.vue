<template>
  <div id="app">
      <div v-if="$apollo.loading">Loading..</div>    
      <div v-else>      
      <h1>Name: {{viewer.name}}</h1>
      <p>Email: {{viewer.email }}</p>
    </div>
  </div>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: 'app',
  data: function() {
    return {
      viewer: {}
    };
  },
   apollo: {     
     viewer: {
    query: gql`
      { viewer {
            name
            email
          }
        }`
    }
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
