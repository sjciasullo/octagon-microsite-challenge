function validateZip(zipcode) {
  const api = 'AIzaSyAX6KJo_fn4rvGYMbZ_ZBpm9vDiDIVZTHk';
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&${api}`;
  $.get(url).done(function(response) {
    console.log(response);
  })
}

$(document).on('ready', function(){
  console.log("main.js connected");
  validateZip("48104");
})