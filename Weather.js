class Weather{
    //konstruktor
    constructor($c){
        this.city = c;
        this.key = 'b1744f623eae4972e39561fb4e30def4';
    }
    //data from API
    async weatherData(){
     resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + this.key); 
        const data = await resp.json();
        console.log(data)
      // catch any errors
      return data;
    }
    // change city name
}