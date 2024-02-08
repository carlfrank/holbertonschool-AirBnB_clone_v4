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
});
