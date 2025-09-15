$(document).ready(function() {

  // Function to truncate text conditionally
  function truncateFileName(fileName, maxLength = 28) {
    if (fileName.length > maxLength) {
      return fileName.substring(0, maxLength - 3) + '...';
    }
    return fileName;
  }

  // Authentication ID
  const authIdDefault = "Upload Authentication ID";
  $('#authIdBox').click(function() {
    $('#authIdInput').click();
  });

  $('#authIdInput').change(function() {
    if (this.files && this.files[0]) {
      const fileName = this.files[0].name;
      const truncatedName = truncateFileName(fileName, 25);
      $('#authIdBox h6')
        .text(truncatedName)
        .attr('title', fileName) // full name on hover
        .removeClass('opacity-50')
        .addClass('text-success');
    }
  });

  // Farmer Authentication Certificate
  const authCertDefault = "Upload Farmer Authentication Certificate";
  $('#authCertBox').click(function() {
    $('#authCertInput').click();
  });

  $('#authCertInput').change(function() {
    if (this.files && this.files[0]) {
      const fileName = this.files[0].name;
      const truncatedName = truncateFileName(fileName, 25);
      $('#authCertBox h6')
        .text(truncatedName)
        .attr('title', fileName) // full name on hover
        .removeClass('opacity-50')
        .addClass('text-success');
    }
  });



  // Toggle caret rotation on dropdown show/hide
  $('#landOwnershipDropdownButton').on('click', function() {
    $(this).find('i').toggleClass('rotate-up');
  });

  // Handle dropdown item selection
  $('#landOwnershipDropdown').on('click', 'a', function(e) {
    e.preventDefault();
    const selectedText = $(this).text();
    const selectedValue = $(this).data('value');

    // Update button text
    $('#landOwnershipDropdownButton span').text(selectedText);

    // Remove rotation after selection
    $('#landOwnershipDropdownButton i').removeClass('rotate-up');

    // Optional: store the selected value somewhere, e.g., hidden input
    // $('#landOwnershipInput').val(selectedValue);
    console.log('Selected Land Ownership:', selectedValue);
  });
  

});
