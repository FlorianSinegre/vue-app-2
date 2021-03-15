
    <template>
      <div id="pollutionVue">

        <h1 style="margin-top: 50px; font-size: 30px" >Entrez les coordonnées d'une region pour afficher la concentration de pollution de celle-ci.(j'avais pas vu c'est en Http....)</h1>
        <v-text-field
            placeholder="Latidude"
            :rules="rules"
            hide-details="auto"
            v-model="query" @keypress="fetchWeather"
            style="width: 200px; margin: auto; display: block;
            margin-top: 90px;
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
            box-shadow: 0px 0px 8px rgba(0,0,0,0.25);"
        ></v-text-field>
        <v-text-field  placeholder="Longitude" v-model="query2" @keypress="fetchWeather" style="width: 200px; margin: auto; display: block;

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
            box-shadow: 0px 0px 8px rgba(0,0,0,0.25); "></v-text-field>

        <div class="weather-wrap" v-if="typeof weather.coord !='undefined'">
          <v-card
              class="mx-auto"
              max-width="450"
          >

            <v-list-item two-line>
              <v-list-item-content>
                Сoncentration de Monoxide de carbone: {{ weather.list[0].components.co }} μg/m3
                <br>
                Сoncentration de Monoxide de nitrogène: {{ weather.list[0].components.no }} μg/m3
                <br>
                Сoncentration de Nitrogène dioxide : {{ weather.list[0].components.no2 }} μg/m3
                <br>
                Сoncentration d'Ozone : {{ weather.list[0].components.o3}} μg/m3
                <br>
                Сoncentration de sulphur de dioxide : {{ weather.list[0].components.so2 }} μg/m3
                <br>
                Сoncentration de fines particules : {{ weather.list[0].components.pm2_5 }} μg/m3
                <br>
                <v-list-item-title class="headline">


                </v-list-item-title>

              </v-list-item-content>
            </v-list-item>


          </v-card>

          <v-card
              v-if=" weather.list[0].main.aqi < '3' "
              elevation="2"
              style="width: 450px; margin: auto; background-color: green; font-style: italic; font-size: 40px"
          >
            qualité de l'air : {{ weather.list[0].main.aqi }} / 5

          </v-card>

          <v-card
              v-if=" weather.list[0].main.aqi > '3' "
              elevation="2"
              style="width: 450px; margin: auto; background-color: red; font-style: italic; font-size: 40px"
          >
            qualité de l'air : {{ weather.list[0].main.aqi }} / 5

          </v-card>
        </div>
        <div class="container">

          <v-img
              style="margin: auto"
              max-height="90%"
              max-width="90%"
              src="https://cdn.discordapp.com/attachments/502484093590831129/820989612239487016/unknown.png"
          ></v-img>
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

    <style>
    .alert{
      background-color: green;
      margin: auto;
    }
    .container{
      display: flex;
    }
    </style>