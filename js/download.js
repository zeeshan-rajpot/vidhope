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
let download =result.text
console.log(`${download}`)
document.getElementById("download").innerHTML = download;
})

.catch(error => {
  console.error('Error:', error);
});


