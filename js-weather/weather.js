var place = document.getElementById('place');

place.addEventListener('change', function(place) {
  place = document.getElementById('place');
  weather(place);
});

weather(place);

function weather(place) {
  var appid = '4b5774e9f3d2a07b84f0f2f88e486224';
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + place.value + '&units=metric&lang=ja&APPID=' + appid;
  fetch(requestUrl)
    .catch(error => console.log(error))
    .then(response => response.json())
    .then(data => {
      document.getElementById('description')
        .textContent = data['weather'][0]['description'];
      document.getElementById('weather_icon')
        .src = 'img/' + data['weather'][0]['icon'] + '.png';
      document.getElementById('temp')
        .textContent = Math.round(data['main']['temp'] * 10)/ 10 + ' ℃';
      document.getElementById('pressure')
        .textContent = data['main']['pressure'] + ' hPa';
      document.getElementById('humidity')
        .textContent = data['main']['humidity'] + ' ％';
      document.getElementById('wind_icon')
        .src = 'img/wind1.png';
      document.getElementById('wind_icon')
        .style.transform = 'rotate(' + data['wind']['deg'] + 'deg)';
      document.getElementById('wind_speed')
        .textContent = data['wind']['speed'] + ' m/s';
    });
}
