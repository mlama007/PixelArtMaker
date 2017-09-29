//execute this code when the form is submitted
const executeForm = () => {
  return false;
};
//Define variables by selecting the DOM elements 
const submit = document.getElementById("make");
const table = document.getElementById('pixel_canvas');
const colorPicker = document.getElementById('colorPicker');
// Select color input
let changeColor = (cell) => {
  let color = colorPicker.value;
  cell.style.backgroundColor = color;
}
submit.addEventListener("click", makeGrid);
function makeGrid() {
  //reset table
  table.innerHTML = "";
  // Select size input
  let height = document.getElementById("input_height").value;
  let width = document.getElementById("input_width").value;
  console.log(height,width);
  //Making table based on size input
  for (let N = 0; N < height; N++) {
    const rows = document.createElement("tr");
    table.appendChild(rows);
    M = 0;
    while (M < width) {
      M++;
      const cells = document.createElement("td");
      rows.appendChild(cells);    
    }
  }
  //Change color on clicked cells 
  const ChangeCellColors = () => {
    for (let N = 0; N < table.rows.length; N++) {
      for (let M = 0; M < table.rows[N].cells.length; M++)
      table.rows[N].cells[M].onclick = function() {
          changeColor(this);
        };
    }
  };
  ChangeCellColors();
}