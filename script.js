//sets var in gobal scope
var x = 1;
function addRow() {
  //sets var that is passed into table in HTML
    var table = document.querySelector("#dynamic-table");
  //sets var that is passes a row into table
    var row = table.insertRow(-1);
  //sets var that passes cell into row 1
    var cell1 = row.insertCell(0);
  //sets var that passes cell into row 2
    var cell2 = row.insertCell(1);
  //passes string as var x into cells
    cell1.innerHTML = "cell" + x++;
    cell2.innerHTML = "cell" + x++;
}

//sets var that is passed into button in HTML
var event = document.querySelector("input");
//event listener that triggers function when button in var event is clicked
event.addEventListener('click', addRow);


