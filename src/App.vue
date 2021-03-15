<template>
  <div id="app">
    <div id="nav">
      <router-link class="header-button" to="/">Metéo</router-link> |
      <router-link class="header-button" to="/about">Localisation</router-link>  |
      <router-link class="header-button" to="/pollution">Pollution</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  background-image: url('https://pixabay.com/photos/thunderstorm-ocean-twilight-clouds-3440450/');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
#nav {
  padding: 30px;
  background-color: white;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}
#nav a:hover {
  background-color: #474;
}
.header-button{
  background-color: #444;
  padding: 12px;
  border-radius: 5px;
  margin: 20px;
}



</style>
