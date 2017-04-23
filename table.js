function add() {
    let table = document.getElementById("tbody");
    let row = table.insertRow(0);
    console.log(row);
    row.insertCell(0).innerText = '0';
    row.insertCell(1).innerHTML = '1';
    row.insertCell(2).innerHTML = '2';
    row.insertCell(3).innerHTML = '3';
   // row.deleteCell(0);　　//删除一列
}
function del() {
    let table = document.getElementById("tbody");
    table.deleteRow(0); //删除一行
}