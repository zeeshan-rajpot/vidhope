const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('get_pages', 'get_pages');
formData.append('type', 'blog');


fetch('https://ali.karenj10.sg-host.com/triumph/triumph/demo/api/pic.php', {
  method: 'POST',
  body: formData
})
.then(response => response.json()
  )
.then(result => {
// let text1 = result.path;
let headline1 =result.text
// let headline1ds =result.description_english
// let result_string = text1.concat(result.pic);
console.log(`${headline1}`)
// console.log(`${result.pic}`)
// document.getElementById("image1").src = result_string;
document.getElementById("heading1").innerHTML = headline1;
// document.getElementById("headline1ds").innerHTML = headline1ds;
})

.catch(error => {
  console.error('Error:', error);
});