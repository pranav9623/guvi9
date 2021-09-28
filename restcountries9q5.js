"use strict";
const xhr = new XMLHttpRequest();
{
  xhr.open("GET", "https://restcountries.com/v3/all");
  xhr.responseType = "json";

  xhr.onload = () => {
    const blogs = xhr.response; //Question 5
    for (let i = 0; i < blogs.length; i++) {
      var fam = blogs[i].currencies;
      for (var j in fam) {
        if (fam[j].name === "United States dollar") {
          console.log(blogs[i].name);
        }
      }
    }
  };
  xhr.send();
}
