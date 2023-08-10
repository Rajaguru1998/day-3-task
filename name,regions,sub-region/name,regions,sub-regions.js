function printData(){
    const Countries = JSON.parse(this.responseText);
    Countries.forEach((country) => console.log(country.name))
    Countries.forEach((country) => console.log(country.region))
    Countries.forEach((country) => console.log(country.subregion))
}

let request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();