"use strict";
const xhr = new XMLHttpRequest();
{
  xhr.open("GET", "https://restcountries.com/v3/all");
  xhr.responseType = "json";

  xhr.onload = () => {
    const blogs = xhr.response; //Question 4   //Unfortunately population of the countries wasn't given in the API
    function totalPop(b, a) {
      return b + a;
    }
    blogs.reduce(totalPop, 0); //Question 4
  };
  xhr.send();
}
