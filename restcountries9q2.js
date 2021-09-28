"use strict";
const xhr = new XMLHttpRequest();
{
  xhr.open("GET", "https://restcountries.com/v3/all");
  xhr.responseType = "json";

  xhr.onload = () => {
    const blogs = xhr.response; //Question 2   //Unfortunately population of the countries wasn't given in the API
    function pop(b) {
      if (b.population < 200000) {
        return console.log(b.name);
      }
    }
    blogs.filter(pop); //Question 2
  };
  xhr.send();
}
