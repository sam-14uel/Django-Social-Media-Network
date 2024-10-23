const bootstrap_5 = require("./bootstrap_5");

// START: 04 Tooltip
// Enable tooltips everywhere via data-toggle attribute
function toolTipFunc () {
    var tooltipTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}
    // END: Tooltip

    // START: 05 Popover
    // Enable popover everywhere via data-toggle attribute
function popOverFunc () {
    var popoverTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap_5.Popover(popoverTriggerEl);
    });
}
// END: Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap_5.Popover(popoverTriggerEl)
})