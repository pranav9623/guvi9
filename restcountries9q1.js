"use strict";
const xhr = new XMLHttpRequest();
{
  xhr.open("GET", "https://restcountries.com/v3/all");
  xhr.responseType = "json";

  xhr.onload = () => {
    const blogs = xhr.response; //Question 1
    // console.log(blogs[1].region);
    function asian(b) {
      if (b.region === "Asia") {
        return console.log(b.name);
      }
    }
    blogs.filter(asian); //Question 1
  };
  xhr.send();
}
