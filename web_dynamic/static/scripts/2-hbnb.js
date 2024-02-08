$(document).ready(function() {
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
