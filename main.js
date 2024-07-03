const submitBTN = document.getElementById("add");
const cityInput = document.getElementById("cityInput");
const cityOutput = document.getElementById("cityoutput");
const descriptionOutput = document.getElementById("description");
const tempOutput = document.getElementById("temp");
const windOutput = document.getElementById("wind");

const apiKEY = "56e4c8f99e3976b9567c29b7f097f6cf";

function tabdilDama(value){
return (value-273).toFixed(2);
}
async function getWeather(){

  var apiResult =
   await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKEY}`)).json()

   setInfo(apiResult);
}

function setInfo(data){
  var cityName = data["name"];
  var description = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
  var windSpeed = data["wind"]["speed"];

  cityOutput.innerHTML=`City: ${cityName}`;
  descriptionOutput.innerHTML=`Description: ${description}`;
  tempOutput.innerHTML=`Tempurature: ${tabdilDama(temp)}`;
  windOutput.innerHTML=`Wind Speed: ${windSpeed} km/h`;
}

submitBTN.addEventListener('click',getWeather);