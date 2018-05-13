/* globals locationList */

const operationHrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const rowTotal = [];
let columnTotal = [];
let cookieShop = 0;

// used to calculate total # of cookies within array rowTotal and columnTotal
const sum = (accumulator, currentValue) => accumulator + currentValue;

// 
function cookieBI(array) {
    // inserts location of each cookie shop in table
    for(let i = 0; i < array.length; i++) {
        const tBody = document.querySelector('tbody');
        const tRow = document.createElement('tr');
        tRow.id = 'tr-' + cookieShop.toString();
        tRow.textContent = array[i].location;
        tBody.appendChild(tRow);
        
        // inserts the number of cookies needed per hour per shop
        for(let j = 0; j < operationHrs.length; j++) {
            const tRow = document.querySelector('#tr-' + cookieShop.toString());
            const tCell = document.createElement('td');
            tCell.classList = 'td-' + j.toString();
            const cookiesPerHr = Math.round(array[i].totalNeeded());
            rowTotal[j] = cookiesPerHr;
            tCell.textContent = cookiesPerHr;
            tRow.appendChild(tCell);

            // inserts the total # of cookies needed per day per shop
            if(j === operationHrs.length - 1) {
                const totalPerDay = document.createElement('td');
                totalPerDay.classList = 'td-' + (j + 1).toString();
                totalPerDay.textContent = rowTotal.reduce(sum);
                tRow.appendChild(totalPerDay);
            }
        }
        // keeps count of the # of cookie shops we have
        cookieShop++;
    }

    // inserts total number of cookies needed between all shops per hour
    for(let i = 0; i < operationHrs.length + 1; i++) {
        for(let k = 0; k < document.querySelectorAll('.td-' + i).length; k++) {
            columnTotal[k] = parseInt(document.querySelectorAll('.td-' + i)[k].innerText);
        }

        document.getElementById('tf-' + i.toString()).innerText = columnTotal.reduce(sum);
    }
}
// initiates table on page load
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
const newCookieShop = document.getElementById('cookie-form');
newCookieShop.addEventListener('submit', newCookieLocation);