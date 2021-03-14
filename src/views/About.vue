<template>
  <div id="app">

    <div class="search-box">
      <input type="text"  class="search-bar" placeholder="Rechercher..." v-model="query" @keypress="fetchWeather"/>
    </div>

    <div class="weather-wrap" v-if="typeof weather.main !='undefined'">
      <v-card
          class="mx-auto"
          max-width="400"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">
              {{weather.name}},{{weather.sys.country}}
            </v-list-item-title>
            <v-list-item-subtitle>{{dateBuilder()}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col
                class="display-3"
                cols="6"
            >
              {{Math.round(weather.main.temp)}}°C
            </v-col>
            <v-col cols="6">
              <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                  alt="Sunny image"
                  width="92"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{weather.wind.speed}} Km/H</v-list-item-subtitle>
        </v-list-item>

        <v-card-actions>
          <v-btn text>
            {{ weather.weather[0].description }}
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn text>
            longitude : {{ weather.coord.lon }}
            latitude  : {{ weather.coord.lat }}
          </v-btn>
        </v-card-actions>
      </v-card>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){

    return{
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
      time: 0,
      forecast: [
        { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
      ],



      api_key: 'b0cd5ffd3f9f23b811c95a7947e83c80',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query:'',
      weather:{},

    }
  },

  methods: {
    fetchWeather (e){
      if (e.key == "Enter"){
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}&lang=fr`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
      }
    },
    setResults(results){
      this.weather = results;
    },
    dateBuilder (){

      let d = new Date();
      let months = ["Janvier","Février", "Mars","Avril","Mai","Juin","Juillet","Aout","septembre","octobre","novmbre","Decembre"];
      let days =["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

      let day = days[d.getDay()];
      let month = months[d.getMonth()];
      let date = d.getDate();
      let year= d.getFullYear();

      return `${day} ${date} ${month} ${year}`
    },

    fetchWeatherlat (e){
      if (e.key == "Enter"){
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}&lang=fr`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
      }
    },
    setResultslat(results){
      this.weather = results;
    },


  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body{
  font-family: 'montserrat', sans-serif;
}

#app{
  background-image: url('https://pixabay.com/photos/thunderstorm-ocean-twilight-clouds-3440450/');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}


main{
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0,0,0, 0.25), rgba(0,0,0,0.75));
}

.search-box{

  margin: auto;
  width: 70%;
  margin-bottom: 90px;
}

.search-box .search-bar{
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  margin-top: 30px;

  background-color: rgba(255,255,255,0.5);
  border-radius: 0px;
  transition: 0.4s;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);

}

.search-bar .search-box:focus{
  box-shadow: 0px 0px 16px;
  background-color: rgba(255,255,255,0.75);
  border-radius: 16px 0px 16px 0px;
}
.location-box .location{
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0,0,0,0.25);
}

.location-box .date{
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;

}
.weather-box{
  text-align: center;
}

.weather-box .temp{
  display: inline-block;
  padding: 10px 25px;
  color: #FFFFFF;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0,0,0,0.25);
}
.weather-box .weather{
  color: #FFFFFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0,0,0,0.75);
}
</style>

