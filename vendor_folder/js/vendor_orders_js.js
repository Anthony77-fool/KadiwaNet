$(document).ready(function() {
  // Filter Orders
  $('.dropdown-item').click(function (e) {
  e.preventDefault();

  const status = $(this).data('status');
  const statusText = $(this).text();

  // Update dropdown button label
  $('#statusDropdown').html(`<i class="bi bi-funnel me-2"></i> ${statusText}`);

  // Update active state in dropdown
  $('.dropdown-item').removeClass('active text-success bg-success text-white');
  $(this).addClass('active bg-success text-white');

  // Filter orders
  let visible = 0;
  $('.order-card').each(function () {
    if (status === 'all' || $(this).data('status') === status) {
      $(this).show();
      visible++;
    } else {
      $(this).hide();
    }
  });

  // Show empty message if no visible orders
  if (visible === 0) {
    $('#no-orders').removeClass('d-none');
  } else {
    $('#no-orders').addClass('d-none');
  }
});


  // Cancel Order
  $('.cancel-btn').click(function() {
    const card = $(this).closest('.order-card');
    const orderName = card.find('.card-title').text();

    if (confirm(`Cancel ${orderName}?`)) {
      card.attr('data-status', 'cancelled');
      card.find('.fw-semibold')
          .first()
          .removeClass('text-warning text-secondary text-info')
          .addClass('text-danger')
          .text('Status: Cancelled');
      card.find('.cancel-btn').remove();
      card.addClass('cancelled')
          .removeClass('border-warning border-info border-secondary')
          .addClass('border-danger');
      card.find('.step').removeClass('active');
      card.find('.step').first().addClass('active');
      card.find('.text-muted.small').first().html(`
        <i class="bi bi-x-circle text-danger me-1"></i>
        Order Cancelled — Not in Transit
      `);
      card.find('.text-muted.small').eq(1).html(`
        <i class="bi bi-calendar-x text-danger me-1"></i>
        No Delivery (Order Cancelled)
      `);
    }
  });
});