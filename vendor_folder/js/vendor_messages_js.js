// Mobile chat navigation
$('.chat-item').on('click', function () {
  // Remove active class from all items
  $('.chat-item').removeClass('active');
  // Add active class to clicked item
  $(this).addClass('active');

  // Mobile view transition
  if ($(window).width() <= 991) {
    $('.chat-sidebar').addClass('hidden');
    $('.chat-area').addClass('active');
  }
});

// Back button functionality
$('.back-btn').on('click', function () {
  $('.chat-sidebar').removeClass('hidden');
  $('.chat-area').removeClass('active');
});

// Auto-scroll to bottom of messages
const $chatMessages = $('.chat-messages');
if ($chatMessages.length) {
  $chatMessages.scrollTop($chatMessages[0].scrollHeight);
}
