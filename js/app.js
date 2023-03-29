// const formData = new FormData();
// const fileField = document.querySelector('input[type="file"]');

// formData.append('get', 'get');
// formData.append('id', '1');


// fetch('https://ali.karenj10.sg-host.com/triumph/triumph/demo/api/pic.php', {
//   method: 'POST',
//   body: formData
// })
// .then(response => response.json()
//   )
// .then(result => {
// let text1 = result.path;
// let headline1 =result.heading_english
// let headline1ds =result.description_english
// let result_string = text1.concat(result.pic);
// console.log(`${headline1}`)
// console.log(`${result.pic}`)
// document.getElementById("image1").src = result_string;
// document.getElementById("heading1").innerHTML = headline1;
// document.getElementById("headline1ds").innerHTML = headline1ds;
// })

// .catch(error => {
//   console.error('Error:', error);
// });
// /////////////////////////////////////////////////////////////


//  const formData2 = new FormData();
// const fileField2 = document.querySelector('input[type="file"]');

// formData2.append('get', 'get');
// formData2.append('id', '2');


// fetch('https://ali.karenj10.sg-host.com/triumph/triumph/demo/api/pic.php', {
//   method: 'POST',
//   body: formData2
// })
// .then(response => response.json()
//   )
// .then(result => {
// let text1 = result.path;
// let headline2 =result.heading_english
// let result_string = text1.concat(result.pic);
// console.log(`${headline2}`)
// console.log(`${result.pic}`)
// document.getElementById("image2").src = result_string;
// document.getElementById("heading2").innerHTML = headline2;
// })

// .catch(error => {
//   console.error('Error:', error);
// });
// ////////////////////////////////////////////////////////////////////////////
//  const formData3 = new FormData();
// const fileField3 = document.querySelector('input[type="file"]');

// formData3.append('get', 'get');
// formData3.append('id', '3');


// fetch('https://ali.karenj10.sg-host.com/triumph/triumph/demo/api/pic.php', {
//   method: 'POST',
//   body: formData3
// })
// .then(response => response.json()
//   )
// .then(result => {
// let text1 = result.path;
// let headline3 =result.heading_english
// let result_string = text1.concat(result.pic);
// console.log(`${headline3}`)
// console.log(`${result.pic}`)
// document.getElementById("heading3").innerHTML = headline3;
// document.getElementById("image3").src = result_string;

// })

// .catch(error => {
//   console.error('Error:', error);
// });

// ////////////////////////////////////////////////////////////////////////////


const fileField = document.querySelector('input[type="file"]');
fetch('https://videhope.azurewebsites.net/api/videohope-images/get-by-position/1', {
  method: 'GET',

})
.then(response => response.json()
  )
.then(data => {
let text1 =' https://videhope.azurewebsites.net/VidehopeImages/';


console.log(data);

console.log(data["data"]["englishHeading"])
console.log(data["data"]["path"])
console.log(data["data"]["englishDescription"])
var pic =(data["data"]["path"])
let result_string = text1.concat(pic);
console.log(result_string)
var englishHeading = (data["data"]["englishHeading"])
document.getElementById("heading1").innerHTML = englishHeading;
var englishDescription = (data["data"]["englishDescription"])
document.getElementById("headline1ds").innerHTML = englishDescription;
document.getElementById("image1").src = result_string;
})

.catch(error => {
  console.error('Error:', error);
});

/////////////////////////////////////////////////////////
const fileField1 = document.querySelector('input[type="file"]');
fetch('https://videhope.azurewebsites.net/api/videohope-images/get-by-position/2', {
  method: 'GET',

})
.then(response => response.json()
  )
.then(data2 => {
let text1 =' https://videhope.azurewebsites.net/VidehopeImages/';


console.log(data2);

console.log(data2["data"]["englishHeading"])
console.log(data2["data"]["path"])
console.log(data2["data"]["englishDescription"])
var pic =(data2["data"]["path"])
let result_string = text1.concat(pic);
console.log(result_string)
var englishHeading = (data2["data"]["englishHeading"])
document.getElementById("heading2").innerHTML = englishHeading;

document.getElementById("image2").src = result_string;
})

.catch(error => {
  console.error('Error:', error);
});

/////////////////////////////////////////////////////////

const fileField2 = document.querySelector('input[type="file"]');
fetch('https://videhope.azurewebsites.net/api/videohope-images/get-by-position/3', {
  method: 'GET',

})
.then(response => response.json()
  )
.then(data3 => {
let text1 =' https://videhope.azurewebsites.net/VidehopeImages/';


console.log(data3);

console.log(data3["data"]["englishHeading"])
console.log(data3["data"]["path"])
console.log(data3["data"]["englishDescription"])
var pic =(data3["data"]["path"])
let result_string = text1.concat(pic);
console.log(result_string)
var englishHeading = (data3["data"]["englishHeading"])
document.getElementById("heading3").innerHTML = englishHeading;

document.getElementById("image3").src = result_string;
})

.catch(error => {
  console.error('Error:', error);
});