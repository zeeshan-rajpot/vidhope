// const formData = new FormData();
// const fileField = document.querySelector('input[type="file"]');

// formData.append('get', 'get');
// formData.append('id', '1');


// fetch('https://videhope.azurewebsites.net/api/videhope-features/get-by-position/1', {
//   method: 'POST',
//   body: formData
// })
// .then(response => response.json()
//   )
// .then(result => {
// let text1 = result.path;
// let headline1 =result.text
// // let headline1ds =result.description_english
// let result_string = text1.concat(result.pic);
// console.log(`${headline1}`)
// console.log(`${result.pic}`)
// document.getElementById("image1").src = result_string;
// document.getElementById("heading1").innerHTML = headline1;
// // document.getElementById("headline1ds").innerHTML = headline1ds;
// })

// .catch(error => {
//   console.error('Error:', error);
// });

////////////////////////////////////////////////////////////
const fileField = document.querySelector('input[type="file"]');
fetch('https://videhope.azurewebsites.net/api/videhope-features/get-by-position/1', {
  method: 'GET',

})
.then(response => response.json()
  )
.then(data => {
let text1 =' https://videhope.azurewebsites.net/VidehopeImages/';


console.log(data);

console.log(data["data"]["title"])
console.log(data["data"]["path"])
console.log(data["data"]["englishDescription"])
var pic =(data["data"]["path"])
let result_string = text1.concat(pic);
console.log(result_string)
var title1 = (data["data"]["title"])
document.getElementById("heading1").innerHTML = title1;

document.getElementById("image1").src = result_string;
})

.catch(error => {
  console.error('Error:', error);
});

////////////////////////////////////////////////////////////
const fileField2 = document.querySelector('input[type="file"]');
fetch('https://videhope.azurewebsites.net/api/videhope-features/get-by-position/2', {
  method: 'GET',

})
.then(response => response.json()
  )
.then(data => {
let text1 =' https://videhope.azurewebsites.net/VidehopeImages/';


console.log(data);

console.log(data["data"]["title"])
console.log(data["data"]["path"])
console.log(data["data"]["englishDescription"])
var pic =(data["data"]["path"])
let result_string = text1.concat(pic);
console.log(result_string)
var title1 = (data["data"]["title"])
document.getElementById("heading2").innerHTML = title1;

document.getElementById("image2").src = result_string;
})

.catch(error => {
  console.error('Error:', error);
});




////////////////////////////////////////////////////////////
const fileField3 = document.querySelector('input[type="file"]');
fetch('https://videhope.azurewebsites.net/api/videhope-features/get-by-position/3', {
  method: 'GET',

})
.then(response => response.json()
  )
.then(data => {
let text1 =' https://videhope.azurewebsites.net/VidehopeImages/';


console.log(data);

console.log(data["data"]["title"])
console.log(data["data"]["path"])
console.log(data["data"]["englishDescription"])
var pic =(data["data"]["path"])
let result_string = text1.concat(pic);
console.log(result_string)
var title1 = (data["data"]["title"])
document.getElementById("heading3").innerHTML = title1;

document.getElementById("image3").src = result_string;
})

.catch(error => {
  console.error('Error:', error);
});




////////////////////////////////////////////////////////////
const fileField4 = document.querySelector('input[type="file"]');
fetch('https://videhope.azurewebsites.net/api/videhope-features/get-by-position/4', {
  method: 'GET',

})
.then(response => response.json()
  )
.then(data => {
let text1 =' https://videhope.azurewebsites.net/VidehopeImages/';


console.log(data);

console.log(data["data"]["title"])
console.log(data["data"]["path"])
console.log(data["data"]["englishDescription"])
var pic =(data["data"]["path"])
let result_string = text1.concat(pic);
console.log(result_string)
var title1 = (data["data"]["title"])
document.getElementById("heading4").innerHTML = title1;

document.getElementById("image4").src = result_string;
})

.catch(error => {
  console.error('Error:', error);
});












/////////////////////////////////////////////////////////////

