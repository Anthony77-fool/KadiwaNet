$(document).ready(function () {
  const $tableBody = $('#reportTable');
  const $rows = $tableBody.find('tr').clone(); // store original rows

  // 🔹 Filter by Role
  $('.filter-role').on('click', function (e) {
    e.preventDefault();
    const role = $(this).data('role');

    if (role === 'all') {
      $tableBody.html($rows.clone());
    } else {
      const filtered = $rows.filter(`[data-role="${role}"]`);
      $tableBody.html(filtered.clone());
    }

    // Update dropdown label
    const btn = $(this).closest('.dropdown').find('.btn');
    btn.html(`<i class="fa-solid fa-users me-2"></i> ${$(this).text()}`);
  });

  // 🔹 Sort by Name
  $('.sort-name').on('click', function (e) {
    e.preventDefault();
    const sortType = $(this).data('sort');
    let sortedRows = $rows.clone();

    if (sortType === 'asc') {
      sortedRows.sort((a, b) => $(a).find('td:nth-child(4)').text().localeCompare($(b).find('td:nth-child(4)').text()));
    } else if (sortType === 'desc') {
      sortedRows.sort((a, b) => $(b).find('td:nth-child(4)').text().localeCompare($(a).find('td:nth-child(4)').text()));
    }

    $tableBody.html(sortedRows);
    const btn = $(this).closest('.dropdown').find('.btn');
    btn.html(`<i class="fa-solid fa-user me-2"></i> ${$(this).text()}`);
  });

  // 🔹 Sort by Date
  $('.sort-date').on('click', function (e) {
    e.preventDefault();
    const sortType = $(this).data('sort');
    let sortedRows = $rows.clone();

    if (sortType === 'newest') {
      sortedRows.sort((a, b) => new Date($(b).find('td:nth-child(3)').text()) - new Date($(a).find('td:nth-child(3)').text()));
    } else if (sortType === 'oldest') {
      sortedRows.sort((a, b) => new Date($(a).find('td:nth-child(3)').text()) - new Date($(b).find('td:nth-child(3)').text()));
    }

    $tableBody.html(sortedRows);
    const btn = $(this).closest('.dropdown').find('.btn');
    btn.html(`<i class="fa-solid fa-calendar-days me-2"></i> ${$(this).text()}`);
  });
});