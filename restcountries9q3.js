"use strict";
const xhr = new XMLHttpRequest();
{
  xhr.open("GET", "https://restcountries.com/v3/all");
  xhr.responseType = "json";

  xhr.onload = () => {
    const blogs = xhr.response; //Question 3
    function myFunc(b) {
      return console.log(b.name, b.capital, b.flag);
    }
    blogs.forEach(myFunc); //Question 3
  };
  xhr.send();
}
