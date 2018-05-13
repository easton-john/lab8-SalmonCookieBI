/* exported locationList */

// class constructor 
class CookieLocation {
    constructor(location, minCustPerHr, maxCustPerHr, avgSoldPerCust) {
        this.location = location;
        this.minCustPerHr = minCustPerHr;
        this.maxCustPerHr = maxCustPerHr;
        this.avgSoldPerCust = avgSoldPerCust;
        
    }
    // returns total cookies needed per hour
    totalNeeded() {
        const min = Math.ceil(this.minCustPerHr);
        const max = Math.floor(this.maxCustPerHr);
        return Math.floor(Math.random() * (max - min + 1)) + min * this.avgSoldPerCust;
    }
}
// instantiating objects
let pdxAirport = new CookieLocation('PDX Airport', 23, 65, 6.3);
let pioneerSquare = new CookieLocation('Pioneer Square', 3, 24, 1.2);
let powells = new CookieLocation('Powell\'s', 11, 38, 3.7);
let stJohns = new CookieLocation('St. Johns', 20, 38, 2.3);
let waterfront = new CookieLocation('Waterfront', 2, 16, 4.6);

// An array of all our objects
const locationList = [pdxAirport, pioneerSquare, powells, stJohns, waterfront];
