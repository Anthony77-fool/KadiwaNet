$(document).ready(function() {

  // Function to update selected count in header
  function updateSelectedCount() {
    let selectedCount = $('.crop-card[data-selected="1"]').length;
    $('#selected-count').text(selectedCount + ' Selected Orders');

    // Toggle select/deselect icons
    let allSelected = $('.crop-card').length === selectedCount;
    if (allSelected) {
      $('.bi-circle').addClass('d-none');          // hide unselect icon
      $('.bi-check2-circle').removeClass('d-none'); // show select all icon
    } else {
      $('.bi-check2-circle').addClass('d-none');    // hide select all icon
      $('.bi-circle').removeClass('d-none');       // show unselect icon
    }
  }

  // Individual card click: toggle selection
  $('.crop-card').click(function(e) {
    if ($(e.target).is('button') || $(e.target).is('input')) return;

    $(this).toggleClass('selected');

    let current = $(this).attr('data-selected');
    let newVal = current === '0' ? '1' : '0';
    $(this).attr('data-selected', newVal);

    updateSelectedCount();
  });

  // Click Select All icon
  $('.bi-circle, .bi-check2-circle').click(function() {
    let allSelected = $('.crop-card.selected').length === $('.crop-card').length;

    if (allSelected) {
      // Deselect all
      $('.crop-card').removeClass('selected').attr('data-selected', '0');
    } else {
      // Select all
      $('.crop-card').addClass('selected').attr('data-selected', '1');
    }

    updateSelectedCount();
  });

  // Quantity Increment / Decrement
  $('.increment-btn').click(function() {
    let input = $(this).siblings('.quantity-input');
    input.val(parseInt(input.val()) + 1);
    updateTotal($(this).closest('.crop-card'));
  });

  $('.decrement-btn').click(function() {
    let input = $(this).siblings('.quantity-input');
    if (parseInt(input.val()) > 1) {
      input.val(parseInt(input.val()) - 1);
      updateTotal($(this).closest('.crop-card'));
    }
  });

  // Update total price
  function updateTotal(card) {
    let qty = parseInt(card.find('.quantity-input').val());
    let priceText = card.find('.text-success').text();
    let price = parseInt(priceText.replace(/[^0-9]/g, ''));
    let total = qty * price;
    card.find('.total-price').text('Total: ₱' + total);
  }

  // Remove item
  $('.remove-btn').click(function() {
    $(this).closest('.col-12').remove();
    updateSelectedCount(); // update header count after removal
  });

});