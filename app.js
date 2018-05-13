/* globals locationList CookieLocation*/

const operationHrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const totalCookiesPerDay = [];
let rowCounter = 0;
let columnTotal = [];
const sum = (accumulator, currentValue) => accumulator + currentValue;

function cookieBI(array) {
    for(let i = 0; i < array.length; i++) {
        const tBody = document.querySelector('tbody');
        const tRow = document.createElement('tr');
        tRow.id = 'tr-' + rowCounter.toString();
        tRow.textContent = array[i].location;
        tBody.appendChild(tRow);
        
        for(let j = 0; j < operationHrs.length; j++) {
            const tRow = document.querySelector('#tr-' + rowCounter.toString());
            const tData = document.createElement('td');
            tData.classList = 'td-' + j.toString();
            const cookiesPerHr = Math.round(array[i].totalNeeded());
            tData.textContent = cookiesPerHr;
            tRow.appendChild(tData);
            totalCookiesPerDay[j] = cookiesPerHr;

            if(j === operationHrs.length - 1) {
                const totalPerDay = document.createElement('td');
                totalPerDay.classList = 'td-' + (j + 1).toString();
                totalPerDay.textContent = totalCookiesPerDay.reduce(sum);
                tRow.appendChild(totalPerDay);
            }
        }
        rowCounter++;
    }

    for(let i = 0; i < operationHrs.length + 1; i++) {
        for(let k = 0; k < document.querySelectorAll('.td-' + i).length; k++) {
            columnTotal[k] = parseInt(document.querySelectorAll('.td-' + i)[k].innerText);
        }

        document.getElementById('tf-' + i.toString()).innerText = columnTotal.reduce(sum);
        /*
        const tFooter = document.querySelector('#table-footer');
        const tCell = document.createElement('td');
        tCell.textContent = columnTotal.reduce(sum);
        tFooter.appendChild(tCell); */
    }
}

cookieBI(locationList);

function newCookieLocation(e) {
    e.preventDefault();
    const location = e.target.location.value;
    const min = parseInt(e.target.min.value);
    const max = parseInt(e.target.max.value);
    const avgcookies = parseInt(e.target.cookies.value);
    
    const newObject = new CookieLocation(location, min, max, avgcookies);
    const newArray = [newObject];
    cookieBI(newArray);

}
const cookieShop = document.getElementById('cookie-form');
cookieShop.addEventListener('submit', newCookieLocation);