// Function to create table with input values
function createTable(players, gameNumbers) {
    var numRows = gameNumbers.length;
    var numColumns = players.length;
    
    var tableHTML = '<table id="dataTable">';
    for (var i = 0; i < numRows; i++) {
      tableHTML += '<tr>';
      for (var j = 0; j < numColumns; j++) {
        tableHTML += '<td>' + players[j] + '</td>';
      }
      tableHTML += '</tr>';
    }
    tableHTML += '</table>';
  
    var tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = tableHTML;
  }
  