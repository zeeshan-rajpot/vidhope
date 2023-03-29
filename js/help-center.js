const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('get_pages', 'get_pages');
formData.append('type', 'help_centre');


fetch('https://ali.karenj10.sg-host.com/triumph/triumph/demo/api/pic.php', {
  method: 'POST',
  body: formData
})
.then(response => response.json()
  )
.then(result => {
let headline1 =result.text
console.log(`${headline1}`)
document.getElementById("heading1").innerHTML = headline1;
})

.catch(error => {
  console.error('Error:', error);
});