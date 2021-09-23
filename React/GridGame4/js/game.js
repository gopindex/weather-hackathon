/*
Function : createTable
Type : Primary
Purpose : Generates a HTML Table Dynamically
*/
function createTable(level) {
    console.log(level);
    if (!localStorage.getItem('winners')) {
        localStorage.setItem('winners', JSON.stringify([]));
    }
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
                checkMultiple(e, tableData, level);
            });
        }
    }
}
/*
Function : checkMultiple
Purpose :Finds all the multiples of the given element
*/
function checkMultiple(e, tableData, level) {

    //Here conditionally create bug array based on level value
    //if (e.target.innerText) {
    let clickedElement = Number(e.target.innerText);
    let bug = [];
    if (level == 'Easy') {
        bug = [2, 3, 5, 7];
    }
    else if (level == 'Medium') {
        bug = [2, 3, 5, 7, 11, 13, 17, 19];
    }
    else if (level = 'Hard') {
        bug = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    }
    let attempts = document.getElementById('score').innerText;
    let user = document.getElementById('user').innerText;

    // implementing winning logic
    if (clickedElement === 1) {
        document.getElementById('score').innerText = ++attempts;
        document.querySelector('.modal-container-won').style.display = 'flex';
        document.querySelector('.closeW').addEventListener('click', function () {
            document.querySelector('.modal-container-won').style.display = 'none'
            location.reload();
        })
        let soundWin = document.getElementById('soundWinner');
        soundWin.play();
        //Pushing the user into LocalStorage
        // let attempts = document.getElementById('score').innerText;
        let winners = JSON.parse(localStorage.getItem('winners'));
        let allwinners = true;
        for (let x = 0; x < winners.length; x++) {
            if (winners[x].score !== 1) {
                allwinners = false;
            }
        }
        if (winners.length < 3) {
            winners.push({ name: user, score: attempts });
            winners.sort((a, b) => { return a.score - b.score });
            localStorage.setItem('winners', JSON.stringify(winners));
        } else if (allwinners && attempts === 1) {
            winners.push({ name: user, score: attempts });
            localStorage.setItem('winners', JSON.stringify(winners));
        }
        else {
            let mostAttempts = 0;
            for (let i = 0; i < winners.length; i++) {
                if (mostAttempts < winners[i].score) {
                    mostAttempts = winners[i].score;
                }
            }
            let index = winners.findIndex(function (winner) {
                return winner.score === mostAttempts;
            })
            console.log(index);
            console.log(mostAttempts);
            if (mostAttempts > attempts) {
                winners.push({ name: user, score: attempts });
                winners.splice(index, 1);
                localStorage.setItem('winners', JSON.stringify(winners));
            }
        }
        // let leaderboard = [];
        // let temp=[];
        // for(let i =0;i<winners.length;i++){
        //     //console.log(winners[i]);
        //     temp = temp + ''+(Object.entries(winners[i]))+':';
        //     // leaderboard.push(Object.entries(winners[i]));
        // }
        // let player = [];
        // let players = [];
        // console.log(temp);
        // leaderboard = temp.split(':');
        // for(let i = 0;i <leaderboard.length;i++){
        // player = leaderboard[i].split(',');
        // if(player[1]<=attempts){
        //     player[0]=user;
        //     player[1]=attempts;
        // }

        // console.log("player");
        // console.log(player);
        // players.push({ player[0]: player[1]});
        // }

        // console.log(players);
        // console.log(leaderboard);

        // if(winners.length < 3){
        //     winners.push({ [user]: attempts });
        //     leaderboard.sort(compare_item);
        // }
        // if((winners[0].user >= winners[1].user)&&winners[0].user>=winners[2].user){

        // }else if((winners[0].user<=winners[1].user)&&(winners[1].user >= winners[2].user)){
        //     let temp = [];
        //     temp = winners[0];
        //     winners[0] = winners[1];
        //     winners[1] = temp;
        // }
        // else if(((winners[0].user<=winners[1].user)&&(winners[1].user <= winners[2].user))){
        //     let temp = [];
        //     temp = winners[1];
        //     winners[1] = winners[2];
        //     winners[2] = temp;
        // }

        localStorage.setItem('winners', JSON.stringify(winners));
    }
    else if (bug.includes(clickedElement)) {
        //reload the page
        document.querySelector('.modal-container-lost').style.display = 'flex';
        document.querySelector('.closeL').addEventListener('click', function () {
            document.querySelector('.modal-container-lost').style.display = 'none'
            location.reload();
        })
        let soundLost = document.getElementById('soundLost');
        soundLost.play();
    }
    else {
        if (clickedElement == 0) {
            let samespot = document.getElementById('samespot');
            samespot.play();
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

//Level Logic

function easyGame() {
    let level = 'Easy';
    createTable(level);
    document.getElementById("mediumGame").style.display = "none";
    document.getElementById("hardGame").style.display = "none";
    document.getElementById("easyGame").style.display = "none";
}

function mediumGame() {
    let level = 'Medium';
    createTable(level);
    document.getElementById("mediumGame").style.display = "none";
    document.getElementById("hardGame").style.display = "none";
    document.getElementById("easyGame").style.display = "none";
}
function hardGame() {
    let level = 'Hard';
    createTable(level);
    document.getElementById("mediumGame").style.display = "none";
    document.getElementById("hardGame").style.display = "none";
    document.getElementById("easyGame").style.display = "none";
}

function leaderboard() {

    let content = "<div class=\"closeBoard\">+</div><h1>WINNERS</h1>";
    let winners = JSON.parse(localStorage.getItem('winners'));
    for (let i = 0; i < winners.length; i++) {
        content = content + "<p>" + winners[i].name + "  ---------->" + winners[i].score + "</p>";
        if (i > 7) {
            break;
        }
    }
    let leaders = document.getElementById("leaders");
    leaders.innerHTML = "<p>" + content + "</p>" + "</div>";
    document.querySelector('.leaderboard').style.display = 'flex';
    document.querySelector('.closeBoard').addEventListener('click', function () {
        document.querySelector('.leaderboard').style.display = 'none'
    })
}
//window.addEventListener('DOMContentLoaded', easyGame);


