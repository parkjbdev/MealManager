'use strict'
Date.prototype.getFullYearString = function () {
    return this.getFullYear().toString();
}
Date.prototype.getMonthString = function() {
    return ('0' + (this.getMonth() + 1)).slice(-2).toString();
}
Date.prototype.getDateString = function() {
    return ('0' + this.getDate()).slice(-2).toString();
}
Date.prototype.toDateString = function (delimiter) {
    if(delimiter === undefined) delimiter = '';
    return this.getFullYearString() + delimiter +
        this.getMonthString() + delimiter +
        this.getDateString();
};
Date.prototype.toMonthString = function(delimiter) {
    if(delimiter === undefined) delimiter = '';
    return this.getFullYearString() + delimiter +
        this.getMonthString();
}