$(document).ready(function () {
  $(".nav-link-custom").click(function () {
    $(".nav-link-custom").removeClass("active");
    $(this).addClass("active");

    let section = $(this).data("section");
    $(".profile-info-card").addClass("d-none");

    if (section === "logout") {
      if (confirm("Are you sure you want to log out?")) {
        window.location.href = "logout.html";
      }
      return;
    }

    $("#section-" + section).removeClass("d-none");
  });
});