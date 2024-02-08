$(document).ready(function() {
    let selectedAmenities = {}; // Object to hold selected amenities
  
    $('input[type="checkbox"]').change(function() {
      if (this.checked) {
        // Add the amenity ID and name to selectedAmenities
        selectedAmenities[$(this).data('id')] = $(this).data('name');
      } else {
        // Remove the amenity ID from selectedAmenities
        delete selectedAmenities[$(this).data('id')];
      }
  
      // Update the h4 tag with selected amenities names
      $('.amenities h4').text(Object.values(selectedAmenities).join(', '));
    });

  // Make an AJAX GET request to the API status endpoint
  $.get('http://0.0.0.0:5001/api/v1/status/', function(data, status) {
      // Check if the request was successful and the API status is "OK"
      if (status === 'success' && data.status === 'OK') {
          // If so, add the 'available' class to the div#api_status
          $('#api_status').addClass('available');
      } else {
          // Otherwise, remove the 'available' class
          $('#api_status').removeClass('available');
      }
  }).fail(function() {
      // Also remove the 'available' class if the request fails
      $('#api_status').removeClass('available');
  });
});
