/* globals locationList */

const operationHrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const totalCookiesPerDay = [];
let rowCounter = 0;
const sum = (accumulator, currentValue) => accumulator + currentValue;

for(let i = 0; i < locationList.length; i++) {
    const tBody = document.querySelector('tbody');
    const tRow = document.createElement('tr');
    tRow.id = 'tr-' + rowCounter.toString();
    tRow.textContent = locationList[i].location;
    tBody.appendChild(tRow);
    
    for(let j = 0; j < operationHrs.length; j++) {
        const tRow = document.querySelector('#tr-' + rowCounter.toString());
        const tData = document.createElement('td');
        tData.classList = 'td-' + j.toString();
        const cookiesPerHr = locationList[i].totalNeeded();
        tData.textContent = cookiesPerHr;
        tRow.appendChild(tData);

        totalCookiesPerDay[j] = cookiesPerHr;

    }

    const totalPerDay = document.createElement('td');
    totalPerDay.textContent = totalCookiesPerDay.reduce(sum);
    tRow.appendChild(totalPerDay);

    const column = document.querySelector('.td-0').innerHTML;
    console.log(column);

    // need to get total cookies from all shops per hour

    rowCounter++;
}






