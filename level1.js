var width = 1080;
var height = 720;
let filter = 'none';
//change Video Size
    document.getElementById("change-size").addEventListener("click", function(){
    this.disabled = true;

     width = document.getElementById('vid-width').value;
     height = document.getElementById('vid-height').value;
    //console.log(width);
    //console.log(height);
    var supports = navigator.mediaDevices.getSupportedConstraints();

    var constraints = {};
    if (supports.width && supports.height) {
        constraints = {
            width: width,
            height: height
        };
    }

    connection.applyConstraints({
        video: constraints
    });
    this.disabled = false;
});

//filter and take photo
const video = document.getElementById('videoOutput');
const canvas = document.getElementById('canvas');
const photos = document.getElementById('photos');
const photoButton = document.getElementById('photo-button');
const clearButton = document.getElementById('clear-button');
const clearButton2 = document.getElementById('clear-button2');
const photoFilter = document.getElementById('photo-filter');

function filterVideo(e) {
   
    filter = e.target.value;
    // Set filter to video
    video.style.filter = filter;
  }

  
  function clear() {
    // Clear photos
    photos.innerHTML = '';
    // Change filter back to none
    filter = 'none';
    // Set video filter
    video.style.filter = filter;
    // Reset select list
    photoFilter.selectedIndex = 0;
  }
  
  function takePicture() {
    // Create canvas
    const context = canvas.getContext('2d');
    if (width && height) {
      // set canvas props
      canvas.width = width;
      canvas.height = height;
      // Draw an image of the video on the canvas
      context.drawImage(video, 0, 0, width, height);
  
      // Create image from the canvas
      const imgUrl = canvas.toDataURL('image/png');
  
      // Create img element
      const img = document.createElement('img');
   
      // Set image filter
      img.style.filter = filter;

      // Set img src
      img.setAttribute('src', imgUrl);
  
      // Add image to photos
      photos.appendChild(img);
    }
  }
  
  function filterVideoAdvanced_grayscale(e) {
    filter = "grayscale("+(e.target.value/100)+")";
    console.log(filter);
    // Set filter to video
    video.style.filter = filter;
  }

  function filterVideoAdvanced_sepia(e) {
    filter = "sepia("+(e.target.value/100)+")";
    // Set filter to video
    video.style.filter = filter;
  }

  function filterVideoAdvanced_invert(e) {
    filter = "invert("+(e.target.value/100)+")";
    // Set filter to video
    video.style.filter = filter;
  }

  function filterVideoAdvanced_brightness(e) {
    filter = "brightness("+(e.target.value/100)+")";
    // Set filter to video
    video.style.filter = filter;
  }

  function filterVideoAdvanced_opacity(e) {
    filter = "opacity("+(e.target.value/100)+")";
    // Set filter to video
    video.style.filter = filter;
  }

  function filterVideoAdvanced_contrast(e) {
    filter = "contrast("+(e.target.value/100)+")";
    // Set filter to video
    video.style.filter = filter;
  }

  function filterVideoAdvanced_saturate(e) {
    filter = "saturate("+(e.target.value/100)+")";
    // Set filter to video
    video.style.filter = filter;
  }
 
  
  photoButton.addEventListener('click', takePicture);
  photoFilter.addEventListener('change', filterVideo);
  clearButton.addEventListener('click', clear);
  clearButton2.addEventListener('click', clear);
  //use "input" can see immediately effect, "change" only effect when the value changed
  document.getElementById("grayscale").addEventListener('input', filterVideoAdvanced_grayscale);
  document.getElementById("sepia").addEventListener('input', filterVideoAdvanced_sepia);
  document.getElementById("invert").addEventListener('input', filterVideoAdvanced_invert);
  document.getElementById("brightness").addEventListener('input', filterVideoAdvanced_brightness);
  document.getElementById("opacity").addEventListener('input', filterVideoAdvanced_opacity);
  document.getElementById("contrast").addEventListener('input', filterVideoAdvanced_contrast);
  document.getElementById("saturate").addEventListener('input', filterVideoAdvanced_saturate);