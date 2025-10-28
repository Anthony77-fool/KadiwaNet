// 🔁 Fetch market price data from sample API
function fetchMarketPrices() {
  $('#marketPriceTable').html('<tr><td colspan="4" class="text-center text-muted py-4">Loading...</td></tr>');

  // Example API — replace with your actual endpoint
  $.ajax({
    url: 'https://api.agify.io/?name=rice', // 👈 Replace with real crop API
    method: 'GET',
    success: function() {
      // Example static data for now
      const data = [
        { crop: 'Rice', region: 'Luzon', price: '₱45.20', updated: '2025-10-27 09:00 AM' },
        { crop: 'Corn', region: 'Visayas', price: '₱36.10', updated: '2025-10-27 08:45 AM' },
        { crop: 'Onion', region: 'Mindanao', price: '₱72.00', updated: '2025-10-27 09:10 AM' },
      ];
      let rows = '';
      data.forEach(item => {
        rows += `
          <tr>
            <td>${item.crop}</td>
            <td>${item.region}</td>
            <td>${item.price}</td>
            <td>${item.updated}</td>
          </tr>`;
      });
      $('#marketPriceTable').html(rows);
    },
    error: function() {
      $('#marketPriceTable').html('<tr><td colspan="4" class="text-danger text-center py-4">Failed to fetch data</td></tr>');
    }
  });
}

$(document).ready(function() {
  fetchMarketPrices();

  // Refresh button
  $('#refreshPrices').on('click', fetchMarketPrices);

  // Add/Edit/Delete button handlers (just placeholders)
  $('#addCropBtn').on('click', () => alert('Add new crop'));
  $('.edit-btn').on('click', () => alert('Edit crop'));
  $('.delete-btn').on('click', () => alert('Delete crop'));
});