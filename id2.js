var image;
      var imageurl;
      const image_file = null


      console.log(imageurl)
      var loadFile = function (event) {
        // image_file  = document.getElementById('output');
        image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
        imageurl = URL.createObjectURL(event.target.files[0]);


      };
      function id2() {
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        var description_english = document.getElementById("description_english2").value;
        var heading_english = document.getElementById("heading_english2").value;
        // var description_english= input; 
        console.log()
        formData.append('upload', 'upload');
        formData.append('id', '2');
        formData.append('heading_english', heading_english);
        formData.append('description_english', description_english);
        formData.append('heading_french', 'test 123');
        formData.append('description_french', 'test 123');
        console.log(loadFile)
        formData.append('pic', fileField.files[0]);


        fetch('https://ali.karenj10.sg-host.com/triumph/triumph/demo/api/pic.php', {
          method: 'POST',
          body: formData
        })
          .then((response) => response.json())
          .then((result) => {
            console.log('Success:', result);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
