$(document).ready(function () {
  // Generate a random 6-digit code
  let generatedPin = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("Generated PIN:", generatedPin); // for testing

  // Open modal
  $("#openPinModal").on("click", function () {
    const modal = new bootstrap.Modal($("#pinModal")[0]);
    modal.show();
  });

  // Auto focus next box
  $(".pin-box").on("input", function () {
    if ($(this).val() && $(this).next(".pin-box").length) {
      $(this).next(".pin-box").focus();
    }
  });

  $(".pin-box").on("keydown", function (e) {
    if (e.key === "Backspace" && !$(this).val() && $(this).prev(".pin-box").length) {
      $(this).prev(".pin-box").focus();
    }
  });

  // Submit PIN
  $("#submitPinBtn").on("click", function () {
    let enteredPin = "";
    $(".pin-box").each(function () {
      enteredPin += $(this).val();
    });

    console.log("Entered PIN:", enteredPin);

    if (enteredPin === generatedPin) {
      // ✅ Correct PIN → redirect
      window.location.href = "nextpage.html"; 
    } else {
      // ❌ Incorrect PIN → show toast
      const toast = new bootstrap.Toast($("#pinToast")[0]);
      toast.show();
    }
  });
});