function checkImageColor(imageSrc) {
    var img = new Image();
    img.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var numReddishPixels = 0;
      var numGreenishPixels = 0;
      var numBlueishPixels = 0;
      for(var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];
        if(r > g + b) {
          numReddishPixels++;
        }
        else if(g > r + b) {
          numGreenishPixels++;
        }
        else if(b > r + g) {
          numBlueishPixels++;
        }
      }
      var numPixels = canvas.width * canvas.height;
      if(numReddishPixels / numPixels > 0.5) {
        alert('Dominant pixels are RED');
      }
      else if(numGreenishPixels / numPixels > 0.5) {
        alert('Dominant pixels are GREEN');
      }
      else if(numBlueishPixels / numPixels > 0.5) {
        alert('Dominant pixels are BLUE');
      }
      else {
        var a=Math.max(numReddishPixels,numGreenishPixels,numBlueishPixels)
        if (a==numReddishPixels){
          alert('Dominant pixels are RED');
        }
        else if (a==numGreenishPixels){
          alert('Dominant pixels are GREEN');
        }
        else{
          alert('Dominant pixels are BLUE');
        }
      }
    };

    img.src = imageSrc;
  }

  function bright(){
    var ids = ["a1","a2","a3","a4","a5","b1","b2","b3","b4","b5","v1","v2","v3","v4"];
    for (var i = 0; i < ids.length; i++) {
      var img = document.getElementById(ids[i]);
      img.style.filter = "brightness(160%)";
    }
  }
  function dim(){
    var ids =  ["a1","a2","a3","a4","a5","b1","b2","b3","b4","b5","v1","v2","v3","v4"];
    for (var i = 0; i < ids.length; i++) {
      var img = document.getElementById(ids[i]);
      img.style.filter = "brightness(50%)";
    }
  }
  function gray(){
    var ids =  ["a1","a2","a3","a4","a5","b1","b2","b3","b4","b5","v1","v2","v3","v4"];
    for (var i = 0; i < ids.length; i++) {
      var img = document.getElementById(ids[i]);
      img.style.filter = "grayscale(1)";
    }
  }
  function remove(){
    var ids =  ["a1","a2","a3","a4","a5","b1","b2","b3","b4","b5","v1","v2","v3","v4"];
    for (var i = 0; i < ids.length; i++) {
      var img = document.getElementById(ids[i]);
      img.style.filter = "brightness(100%)";
      img.style.filter = "grayscale(0)";
    }
  }
  
  function showHiddenImages() {
    var hiddenImages = document.querySelectorAll('img[style*="display: none"]');
    for(var i = 0; i < hiddenImages.length; i++) {
      hiddenImages[i].style.display = "block";
    }
  }
  var imgs =  ["a1","a2","a3","a4","a5","b1","b2","b3","b4","b5","v1","v2","v3","v4"];
  function audi() {
    showHiddenImages()
    var ids =["b1","b2","b3","b4","b5","v1","v2","v3","v4"] // replace with your image IDs
  
    for (var i = 0; i < ids.length; i++) {
      var img = document.getElementById(ids[i]);
      if (img) {
        img.style.display = "none";
      }
    }
  }
  function bmw() {
    showHiddenImages()
    var imgIds = ["a1","a2","a3","a4","a5","v1","v2","v3","v4"] // array of image ids
    for (var i = 0; i < imgIds.length; i++) {
      var img = document.getElementById(imgIds[i]); // get image element by id
      img.style.display = "none"; // hide the image
    }
    
  } 
  function volvo() {
    showHiddenImages()
    var imgids= ["a1","a2","a3","a4","a5","b1","b2","b3","b4","b5"]// array of image ids
    for (var i = 0; i < imgids.length; i++) {
      var img = document.getElementById(imgids[i]); // get image element by id
      img.style.display = "none"; // hide the image
    }
    
  } 
  // function hulk() {
  //   showHiddenImages()
  //   var imgIds = ["a","a1", "a2", "a3","a4", "a5", "a6","a7", "a8", "a9","a10", "a11" ,"a13", "a14", "a15" , "a16", "a17", "a18" , "a19", "a20", "a21" , "a22", "a23", "a24" , "a25", "a26", "a27" ];
  //   for (var i = 0; i < imgIds.length; i++) {
  //     var img = document.getElementById(imgIds[i]); // get image element by id
  //     img.style.display = "none"; // hide the image
  //   }
    
  // } 
  // function fd() {
  //   showHiddenImages()
  //   var imgIds = ["a","a1", "a2", "a3","a4", "a5", "a6","a7", "a8", "a9","a12" ,"a13", "a14", "a15" , "a16", "a17", "a18" , "a19", "a20", "a21" ,"a24" , "a25", "a26", "a27" , "a28", "a29", "a30"];
  //   for (var i = 0; i < imgIds.length; i++) {
  //     var img = document.getElementById(imgIds[i]); // get image element by id
  //     img.style.display = "none"; // hide the image
  //   }
    
  // } 
  // function others() {
  //   showHiddenImages()
  //   var imgIds = ["a","a1", "a2", "a3","a4", "a5", "a6","a7", "a8", "a9","a10", "a11", "a12" ,"a13", "a14", "a15" , "a16", "a17", "a18" , "a19" , "a22", "a23", "a28", "a29", "a30"];
  //   for (var i = 0; i < imgIds.length; i++) {
  //     var img = document.getElementById(imgIds[i]); // get image element by id
  //     img.style.display = "none"; // hide the image
  //   }
    
  // } 

  
