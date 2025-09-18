$(document).ready(function () {
  // ==============================
  // 1️⃣ Generate a random 6-digit PIN
  // ==============================
  let generatedPin = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("Generated PIN:", generatedPin); // For testing

  // ==============================
  // 2️⃣ Open the PIN modal
  // ==============================
  $("#openPinModal").on("click", function () {
    const modal = new bootstrap.Modal($("#pinModal")[0]);
    modal.show();
  });

  // ==============================
  // 3️⃣ Handle PIN input focus/Backspace
  // ==============================
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

  // ==============================
  // 4️⃣ Submit PIN
  // ==============================
  $("#submitPinBtn").on("click", function () {
    let enteredPin = "";

    $(".pin-box").each(function () {
      enteredPin += $(this).val();
    });

    console.log("Entered PIN:", enteredPin);

    if (enteredPin === generatedPin) {
      // ✅ Correct PIN

      // Show password inputs & checkbox
      $("input[placeholder='New Password']").removeClass("d-none");
      $("input[placeholder='Confirm New Password']").removeClass("d-none");
      $("#show-password").closest("div").removeClass("d-none");

      // Hide "Send Code" button & show "Change Password" button
      $("#openPinModal").addClass("d-none");
      $("#changePassword_btn").removeClass("d-none");

      // ➡️ Close the modal
      const modalInstance = bootstrap.Modal.getInstance($("#pinModal")[0]);
      modalInstance.hide();
    } else {
      // ❌ Incorrect PIN → show toast
      const toast = new bootstrap.Toast($("#pinToast")[0]);
      toast.show();
    }
  });

  // ==============================
  // 5️⃣ Toggle password visibility
  // ==============================
  $("#show-password").on("change", function () {
    const type = $(this).is(":checked") ? "text" : "password";
    $("input[placeholder='New Password'], input[placeholder='Confirm New Password']").attr("type", type);
  });
});
