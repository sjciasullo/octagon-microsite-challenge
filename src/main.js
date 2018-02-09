function validateZip(zipcode) {
  const api = 'AIzaSyAX6KJo_fn4rvGYMbZ_ZBpm9vDiDIVZTHk';
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&${api}`;
  $.get(url).done(function(response) {
    //prints the state
    const state = response.results[0].address_components[3].short_name
    console.log(state);
    $("#state").val(event.target.value)
  })
}

$(document).on('ready', function(){
  console.log('main.js connected');
  $("#zip").bind('input', function(event) {
    console.log(event.target.value);
    if(event.target.value == '123') {
      $("#state").val('CT');
    }
  })
})