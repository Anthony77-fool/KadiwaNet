$(document).ready(function () {
  const activeClasses = "border-success border-3 bg-success text-white fw-semibold";
  const inactiveClasses = "border border-3 fw-normal";

  $(".btn-role").on("click", function () {
    // Remove active styling from all buttons
    $(".btn-role")
      .removeClass(activeClasses)
      .addClass(inactiveClasses);

    // Add active styling to the clicked one
    $(this)
      .removeClass(inactiveClasses)
      .addClass(activeClasses);
  });

  // Make sure "Seller" is set as default (active)
  $(".btn-role").first()
    .removeClass(inactiveClasses)
    .addClass(activeClasses);
});