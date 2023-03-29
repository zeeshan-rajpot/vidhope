// const formData = new FormData();
// const fileField = document.querySelector('input[type="file"]');

// formData.append('get_pages', 'get_pages');
// formData.append('type', 'FAQ');


// fetch('https://ali.karenj10.sg-host.com/triumph/triumph/demo/api/pic.php', {
//   method: 'POST',
//   body: formData
// })
// .then(response => response.json()
//   )
// .then(result => {
// let headline1 =result.text
// console.log(`${headline1}`)
// document.getElementById("text").innerHTML = headline1;
// })

// .catch(error => {
//   console.error('Error:', error);
// });


const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('get', 'get');
// formData.append('id', '9');


fetch('https://videhope.azurewebsites.net/api/videohope-pages/get-all', {
  method: 'GET',
  headers: {
    'Accept': 'application/json, text/plain, */*',  
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
  },
  // body: formData
})

.then(response => response.json()
  )
.then(result => {
// let headline1 =result.text
// console.log(`${headline1}`)
// document.getElementById("text").innerHTML = headline1;
console.log('right' );
})

.catch(error => {
  console.error('Error:', error);
});


