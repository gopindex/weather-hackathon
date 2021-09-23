/*
Function : createTable
Type : Primary
Purpose : Generates a HTML Table Dynamically
*/
function gamestart() {
    let instructions = document.getElementById("instructions");
    let table = document.getElementById("myTable");
    let inputform = document.getElementById("inputform");
    table.style.display="none";
    inputform.style.display="block";
    instructions.style.display="block";
    if(instructions.style.display==="block"){
        instructions.style.display="none";
        inputform.style.display="none";
        //document.getElementById("instructions").style.removeProperty("display");
        table.style.display="block";
    }
}
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
*/
function checkMultiple(e, tableData) {
    if (e.target.innerText) {
        let clickedElement = Number(e.target.innerText);
        let bug = [2, 3, 5, 7];
        let user = JSON.parse(localStorage.getItem("user"));
        user.score =document.getElementById('score').innerText;
        let attempts = user.score
     
        // implementing winning logic
        if (clickedElement === 1) {
            //Task to Reload the Page once game is over
            document.getElementById('score').innerText = ++attempts;
            document.querySelector('.modal-container-won').style.display = 'flex';
            document.querySelector('.closeW').addEventListener('click', function () {
                document.querySelector('.modal-container-won').style.display = 'none'
            })
            user.score = attempts;
            localStorage.setItem("user", JSON.stringify(user));
        }
        else if (bug.includes(clickedElement)) {
            document.getElementById('score').innerText = ++attempts;

            document.querySelector('.modal-container-lost').style.display = 'flex';
            document.querySelector('.closeL').addEventListener('click', function () {
                document.querySelector('.modal-container-lost').style.display = 'none';
                location.reload();
            });
            let soundLost = document.getElementById('soundLost');
            soundLost.play();
            user.score=attempts;
            localStorage.setItem("user", JSON.stringify(user));

        }
        else {
            document.getElementById('score').innerText = ++attempts;
            let sounds = document.getElementById('sound');
            sounds.play();
            tableData.forEach(row => {
                row.forEach((ele) => {
                    if (ele % clickedElement === 0) {
                        document.getElementById(ele).style.backgroundImage = "url('../assets/images/brickPhoto.png')";
                        document.getElementById(ele).innerText = null;
                    }
                });
            });
        }
    }
}
/*
Function : cellData
Purpose : Generates CellData(2D Array) with shuffled elements
Return Value : Shuffled 2D Array
*/
function cellData() {
    let user = { name: "Prash", score: 0 };
    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById('score').innerText = 0;
    const tableData = new Array(10);
    for (let i = 0; i < 10; i++) {
        tableData[i] = new Array(10);
    }
    let a = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            tableData[i][j] = ++a;
        }
    }
    tableData.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 10; i++) {
        tableData[i].sort(() => Math.random() - 0.5);
    }
    return tableData;
}


window.addEventListener('DOMContentLoaded', createTable);


