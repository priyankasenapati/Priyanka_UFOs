// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Add data into table
function buildTable(data) {
    tbody.html("");                                // First, clear out any existing data
    data.forEach((dataRow) =>{                     //Next, loop through each object in the data and append a row and cells for each row value
        let row = tbody.append("tr");              //Append a row to the table body
        Object.values(dataRow).forEach((val) => {  //Loop through each row in dataRow
            let cell = row.append("td");           //Append a cell to the table row
            cell.text(val);                        //Add each dataRow value as table cell          
        });    
    });
}
