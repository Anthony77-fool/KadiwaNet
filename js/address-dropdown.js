$(document).ready(function () {

  // Load provinces (Region I)
  $.getJSON("https://psgc.gitlab.io/api/provinces", function (data) {
    data.forEach(function (province) {
      if (province.regionCode === '010000000') {
        $('#provinceDropdown').append(`<li><a class="dropdown-item" href="#" data-code="${province.code}">${province.name}</a></li>`);
      }
    });
  });

  // Province selection
  $('#provinceDropdown').on('click', 'a', function (e) {
    e.preventDefault();
    var provCode = $(this).data('code');
    $('#provinceDropdownButton span').text($(this).text());

    // Reset municipality & barangay
    $('#municipalityDropdown').empty();
    $('#municipalityDropdownButton span').text('Select Municipality');
    $('#barangayDropdown').empty();
    $('#barangayDropdownButton span').text('Select Barangay');

    // Load municipalities
    if (provCode) {
      $.getJSON(`https://psgc.gitlab.io/api/provinces/${provCode}/municipalities`, function (data) {
        data.forEach(function (mun) {
          $('#municipalityDropdown').append(`<li><a class="dropdown-item" href="#" data-code="${mun.code}">${mun.name}</a></li>`);
        });
      });
    }
  });

  // Municipality selection
  $('#municipalityDropdown').on('click', 'a', function (e) {
    e.preventDefault();
    var munCode = $(this).data('code');
    $('#municipalityDropdownButton span').text($(this).text());

    // Reset barangay
    $('#barangayDropdown').empty();
    $('#barangayDropdownButton span').text('Select Barangay');

    // Load barangays
    if (munCode) {
      $.getJSON(`https://psgc.gitlab.io/api/municipalities/${munCode}/barangays`, function (data) {
        data.forEach(function (barangay) {
          $('#barangayDropdown').append(`<li><a class="dropdown-item" href="#" data-code="${barangay.code}">${barangay.name}</a></li>`);
        });
      });
    }
  });

  // Barangay selection
  $('#barangayDropdown').on('click', 'a', function (e) {
    e.preventDefault();
    $('#barangayDropdownButton span').text($(this).text());
  });

});
