let newDate = new Date();
let todayDate = new Date();
let currentDate = new Date();

function renderDate() {
    newDate.setDate(1);
    let day = newDate.getDay();
    let endDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate();
    let prevDate = new Date(newDate.getFullYear(), newDate.getMonth(), 0).getDate();
    

    // display year
    if(newDate.getFullYear() == todayDate.getFullYear()){
        todayDate.setFullYear(newDate.getFullYear());
        let dateStr = document.getElementById('dateStr').innerHTML = todayDate.getFullYear();
    }
    else{
        todayDate.setFullYear(newDate.getFullYear());
        let dateStr = document.getElementById('dateStr').innerHTML = todayDate.getFullYear();
    }

    let month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    let currentMonth = document.getElementById('currentMonth').innerHTML = month[newDate.getMonth()];

    let cells = "";
    
    for (let j = day; j > 0; j--) {
        cells += "<span class='prev_date'>" + (prevDate - j + 1) + "</span>";
    }
    
    for (let i = 1; i <= endDate; i++) {
        if (i == todayDate.getDate() && newDate.getMonth() == todayDate.getMonth() && currentDate.getFullYear() == todayDate.getFullYear()) {
            cells += "<span class='today'>" + i + "</span>";
        }
        else {
            cells += "<span>" + i + "</span>";
        }
    }

    let dates = document.getElementsByClassName('dates')[0].innerHTML = cells;
}

function moveMonth(pera) {
    if (pera === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
    }
    else if(pera === 'next'){
        newDate.setMonth(newDate.getMonth() + 1);
    }
    renderDate();
}