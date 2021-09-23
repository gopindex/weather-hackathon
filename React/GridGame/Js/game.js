/*
Function : createTable
Type : Primary
Purpose : Generates a HTML Table Dynamically
*/
function createTable() {
    let tableData = cellData();
    let table = document.getElementById("myTable");
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");
            td.id = tableData[i][j];
            td.innerText = tableData[i][j];
            tr.appendChild(td);
            td.addEventListener('click', (e) => {
                checkMultiple(e, tableData);
            });
        }
    }
}
/*
Function : checkMultiple
Purpose :Finds all the multiples of the given element
Return Value : 
*/

function checkMultiple(e, tableData) {
    let attempts = Number(document.getElementById('score').innerText);
    const bugs = [2, 3, 5, 7];

    let clickedElement = Number(e.target.innerText);
    let sounds = document.getElementById('sound');
    sounds.play();
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    //Implementing Winning Logic
    if (clickedElement === 1) {
        //YOu guys needs to implement modal pop up logic
        //Add the user attempts count to leaderboard
        //reload the app
        modal.style.display = "block";
        document.getElementById("status").innerText = "Hurray! you won the game";
        document.getElementById('score').innerText = ++attempts;
        //document.getElementById('win').innerText = 'Hurray! You won the game.';

    } else if (bugs.includes(clickedElement)) {
        //document.getElementById('lost').innerText = 'You are a Looser. Try Again';
        modal.style.display = "block";
        document.getElementById("status").innerText = "you are a looser. Try Again";
    }
    else {
        document.getElementById('score').innerText = ++attempts;
        tableData.forEach(row => {
            row.forEach(ele => {
                if (ele % clickedElement === 0) {
                    document.getElementById(ele).style.backgroundImage.src = "url('../Assets/brick.png')";
                }
            })
        });
    }
}
/*
Function : cellData
Purpose : Generates CellData(2D Array) with shuffled elements
Return Value : Shuffled 2D Array
*/
function cellData() {
    //Create an Empty 2D Array
    const tableData = new Array(10);
    for (let i = 0; i < 10; i++) {
        tableData[i] = new Array(10);
    }
    //Assign values from 1-100 to the 2D Array
    let a = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            tableData[i][j] = ++a;
        }
    }
    // Shuffle the Row Array Elements
    tableData.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 10; i++) {
        tableData[i].sort(() => Math.random() - 0.5);
    }
    return tableData;
}

window.addEventListener('DOMContentLoaded', createTable);