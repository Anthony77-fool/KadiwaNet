$(document).ready(function () {
  const $productImageInput = $('#productImage');
  const $imagePreview = $('#imagePreview');
  const $hashtagBox = $('#hashtagBox');

  // === IMAGE UPLOAD + PREVIEW ===
  $productImageInput.on('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $imagePreview.attr('src', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  $imagePreview.on('click', function () {
    $productImageInput.trigger('click');
  });

  // === HASHTAGS ===
  $hashtagBox.on('keydown', function (event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      const text = $(this).text().trim().replace(/\s+/g, '');

      if (text.length > 0) {
        const $tag = $('<span>')
          .addClass('badge bg-success text-white px-2 py-1 rounded-pill me-1 mb-1')
          .text('#' + text)
          .on('click', function () {
            $(this).remove();
            togglePlaceholder();
          });

        $(this).empty().append($tag);
        togglePlaceholder();
      }
    }
  });

  // === PLACEHOLDER HANDLING ===
  function togglePlaceholder() {
    if ($hashtagBox.children().length === 0) {
      $hashtagBox.attr('data-placeholder', 'Type hashtags here...');
    } else {
      $hashtagBox.removeAttr('data-placeholder');
    }
  }

  // Init placeholder
  togglePlaceholder();

  function enforceMin($input) {
    let value = parseInt($input.val(), 10);
    if (isNaN(value) || value < 1) {
      $input.val(1);
    }
  }

  $('#priceInput, #quantityInput').on('input change', function () {
    enforceMin($(this));
  });
  
});