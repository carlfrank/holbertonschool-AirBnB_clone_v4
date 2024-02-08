$(document).ready(function() {
  let selectedAmenities = {};

  $('input[type="checkbox"]').change(function() {
      if (this.checked) {
          selectedAmenities[$(this).data('id')] = $(this).data('name');
      } else {
          delete selectedAmenities[$(this).data('id')];
      }
      $('.amenities h4').text(Object.values(selectedAmenities).join(', '));
  });

  // Checking API status
  $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
      if (data.status === 'OK') {
          $('#api_status').addClass('available');
      } else {
          $('#api_status').removeClass('available');
      }
  });

  // Fetch places
  function fetchPlaces() {
      $.ajax({
          url: 'http://0.0.0.0:5001/api/v1/places_search/',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({}),
          success: function(places) {
              $('.places .placesh1').empty(); // Ensure the section is empty before adding new content
              $.each(places, function(index, place) {
                  let article = `<article>
                      <div class="title_box">
                          <h2>${place.name}</h2>
                          <div class="price_by_night">$${place.price_by_night}</div>
                      </div>
                      <div class="information">
                          <div class="max_guest">${place.max_guest} Guests</div>
                          <div class="number_rooms">${place.number_rooms} Bedroom(s)</div>
                          <div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>
                      </div>
                      <div class="description">
                          ${place.description}
                      </div>
                  </article>`;
                  $('.places .placesh1').append(article);
              });
          }
      });
  }

  fetchPlaces(); // Call fetchPlaces on document ready to load places initially
});
