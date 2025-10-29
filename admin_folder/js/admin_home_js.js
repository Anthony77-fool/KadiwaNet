$(document).ready(function () {
  $('.dropdown-menu .dropdown-item').on('click', function (e) {
    e.preventDefault();

    const status = $(this).text().trim().toLowerCase();
    const $dropdown = $(this).closest('.dropdown');
    const $btn = $dropdown.find('.btn');

    // Update button label
    $btn.html(`<i class="fa-solid fa-filter me-2"></i> ${$(this).text()}`);

    // Filter items
    $('.account-item').each(function () {
      const itemStatus = $(this).data('status');
      if (status === 'all' || itemStatus === status) {
        $(this).fadeIn(200);
      } else {
        $(this).fadeOut(200);
      }
    });

    // Optional: highlight the active dropdown item
    $('.dropdown-item').removeClass('active bg-success text-white');
    $(this).addClass('active bg-success text-white');
  });

  //for the manual links in dropdowns
  $(".dropdown-menu a").on("click", function(e) {
    const href = $(this).attr("href");
    if (href && href !== "#") {
      e.preventDefault();
      window.location.href = href;
    }
  });

});