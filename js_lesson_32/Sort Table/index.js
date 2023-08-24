const sTable = document.getElementById('table');

sTable.onclick = function (e) {
    if (e.target.tagName !== 'TH') return
    let th = e.target;
    sortTable(th.cellIndex, th.dataset.type)
}
function sortTable(colNum, type) {
    let tbody = sTable.querySelector('tbody');
    let rowArray = Array.from(tbody.rows)
    let compare;
    switch (type) {
        case 'number' :
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
            }
            break;
        case 'string' :
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
            }
            break;
    }
    rowArray.sort(compare)
    tbody.append(...rowArray)
}