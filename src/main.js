function validateZip(zipcode) {
  const api = 'AIzaSyAX6KJo_fn4rvGYMbZ_ZBpm9vDiDIVZTHk';
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&${api}`;
  $.get(url).success(function(response) {
    if(response.status === 'OK') {
      // display the address specified by zipcode
      const address = response.results[0].formatted_address;
      let $address = $("#address-check");
      if($address.length !== 0){
        $address.text(address);
      } else {
        const $zipAddress = $(`<p id='address-check'>${address}</p>`)
        $("#zip").after($zipAddress);
      }
  
      // if the address is in USA, select the state by the result and show submit button
      if(address.includes("USA")){
        response.results[0].address_components.forEach( function(comp) {
          if(comp.types[0] == "administrative_area_level_1") {
            let state = comp.short_name;
            $("#state").val(state)
          }
        })
  
        //and reveal submit button
        const $submit = $("#submit");
        if ($submit.hasClass("hidden")){
          $submit.toggleClass("hidden");
        }
      }
    }
    
  })
}

$(document).on('ready', function(){
  //add event litener to zip input
  $("#zip").bind('input', function(event) {
    //only check 5 digit zip codes
    if(event.target.value.length == 5) {
      validateZip(event.target.value);
    }
  })
})