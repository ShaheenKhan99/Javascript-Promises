
let favNumber = 9;

let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
  console.log(data.text);
  $("body").append(`<p>${data.text}</p>`); 
});


// 2. 
let favNumbers = [5, 10, 15];

$.getJSON(`${baseURL}/${favNumbers}?json`, function(data) {
    for (let key in data) { 
    $("body").append(`<p>${data[key]}</p>`); 
    } 
});


// 3. 
let facts = [];
$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
  facts.push(data.text);
  $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
      facts.push(data.text);
      $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
        facts.push(data.text);
        facts.forEach(fact => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});
