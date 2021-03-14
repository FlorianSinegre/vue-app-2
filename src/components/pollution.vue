
    <template>
      <div id="pollutionVue">
        <v-text-field
            placeholder="latidude"
            :rules="rules"
            hide-details="auto"
            v-model="query" @keypress="fetchWeather"
        ></v-text-field>
        <v-text-field  placeholder="longitude" v-model="query2" @keypress="fetchWeather"></v-text-field>

        <div class="weather-wrap" v-if="typeof weather.coord !='undefined'">
          <v-card
              class="mx-auto"
              max-width="400"
          >

            <v-list-item two-line>
              <v-list-item-content>
                Сoncentration de Monoxide de carbone: {{ weather.list[0].components.co }} μg/m3
                Сoncentration de Monoxide de nitrogène: {{ weather.list[0].components.no }} μg/m3
                Сoncentration de Nitrogène dioxide : {{ weather.list[0].components.no2 }} μg/m3
                Сoncentration d'Ozone : {{ weather.list[0].components.o3}} μg/m3
                Сoncentration de sulphur de dioxide : {{ weather.list[0].components.so2 }} μg/m3
                Сoncentration de fines particules : {{ weather.list[0].components.pm2_5 }} μg/m3
                <v-list-item-title class="headline">


                </v-list-item-title>

              </v-list-item-content>
            </v-list-item>
            <v-card-text>
            <v-row align="center">
              <v-col
                  class="display-5"
                  cols="6"
              >
                qualité de l'air : {{ weather.list[0].main.aqi }}
              </v-col>
              <v-col cols="6">
              </v-col>
            </v-row>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </template>

    <script>
    export default  {
      name: 'pollutionVue',
      data: () => ({
        rules: [
          value => !!value || 'Required.',
          value => (value && value.length >= 3) || 'Min 3 characters',
        ],
        api_key: 'b0cd5ffd3f9f23b811c95a7947e83c80',
        url_base: 'http://api.openweathermap.org/data/2.5/',
        query: '',
        query2: '',
        weather: {},

      }),
        methods: {
          fetchWeather (e){
            if (e.key == "Enter"){
              fetch(`${this.url_base}air_pollution?lat=${this.query}&lon=${this.query2}&appid=${this.api_key}`)
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
          }
        }


    }
    </script>