// Function to generate the table// Function to update the totals in the footer row
function updateTotals() {
  var table = document.getElementById('dataTable');
  var footerRow = table.tFoot.rows[0];
  var columnTotals = Array.from({ length: footerRow.cells.length }, () => 0);
  var maxTotal = -Infinity;
  var minTotal = Infinity;
  var maxIndex = -1;
  var minIndex = -1;

  // Iterate over the rows and update totals
  for (var i = 0; i < table.rows.length - 1; i++) {
    var row = table.rows[i];
    for (var j = 0; j < row.cells.length; j++) {
      var cell = row.cells[j];
      var value = parseInt(cell.textContent.trim()) || 0;
      columnTotals[j] += value;

      // Update max and min totals
      if (value > maxTotal) {
        maxTotal = value;
        maxIndex = j;
      }
      if (value < minTotal) {
        minTotal = value;
        minIndex = j;
      }
    }
  }

  // Update the footer row with totals and apply styling
  for (var i = 0; i < footerRow.cells.length; i++) {
    footerRow.cells[i].textContent = columnTotals[i];

    // Remove previous styling
    footerRow.cells[i].classList.remove('highest', 'lowest');

    // Apply styling for max and min values
    if (columnTotals[i] === maxTotal) {
      footerRow.cells[i].classList.add('highest');
    }
    if (columnTotals[i] === minTotal) {
      footerRow.cells[i].classList.add('lowest');
    }
  }
}


function generateTable(playerCount, playerNames, rowCount) {
  // Create table header row with player names
  var tableHTML = '<table id="dataTable"><thead><tr>';
  for (var i = 0; i < playerCount; i++) {
    tableHTML += '<th>' + playerNames[i] + '</th>';
  }
  tableHTML += '</tr></thead><tbody>';

  // Create table body rows
  for (var i = 1; i <= rowCount; i++) {
    tableHTML += '<tr>';
    for (var j = 0; j < playerCount; j++) {
      tableHTML += '<td contenteditable="true"></td>';
    }
    tableHTML += '</tr>';
  }

  // Create the footer row for totals
  tableHTML += '<tfoot><tr>';
  for (var i = 0; i < playerCount; i++) {
    tableHTML += '<td></td>';
  }
  tableHTML += '</tr></tfoot>';

  tableHTML += '</tbody></table>';

  // Return the table HTML
  return tableHTML;
}

// Function to update the totals in the footer row
function updateTotals() {
  var table = document.getElementById('dataTable');
  var footerRow = table.tFoot.rows[0];
  var columnTotals = Array.from({ length: footerRow.cells.length }, () => 0);
  var maxTotal = -Infinity;
  var minTotal = Infinity;
  var maxIndex = -1;
  var minIndex = -1;

  // Iterate over the rows and update totals
  for (var i = 0; i < table.rows.length - 1; i++) {
    var row = table.rows[i];
    for (var j = 0; j < row.cells.length; j++) {
      var cell = row.cells[j];
      var value = parseInt(cell.textContent.trim()) || 0;
      columnTotals[j] += value;

      // Update max and min totals
      if (value > maxTotal) {
        maxTotal = value;
        maxIndex = j;
      }
      if (value < minTotal) {
        minTotal = value;
        minIndex = j;
      }
    }
  }

  // Update the footer row with totals
  for (var i = 0; i < footerRow.cells.length; i++) {
    footerRow.cells[i].textContent = columnTotals[i];

    // Remove previous styling
    footerRow.cells[i].classList.remove('highest', 'lowest');

    // Apply styling for max and min values
    if (i === maxIndex) {
      footerRow.cells[i].classList.add('highest');
    }
    if (i === minIndex) {
      footerRow.cells[i].classList.add('lowest');
    }
  }
}

// Event listener for Add button click
document.getElementById('addButton').addEventListener('click', function() {
  var playerCount = parseInt(document.getElementById('playerCountInput').value);
  var playerNames = document.getElementById('playerNamesInput').value.split(/\n/);
  var rowCount = parseInt(document.getElementById('gameNumberInput').value);

  // Generate the table
  var tableHTML = generateTable(playerCount, playerNames, rowCount);

  // Append table to tableContainer
  var tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = tableHTML;

  // Add event listeners to cells for real-time updates
  var cells = document.querySelectorAll('#dataTable tbody td');
  cells.forEach(function(cell) {
    cell.addEventListener('input', updateTotals);
  });
});
