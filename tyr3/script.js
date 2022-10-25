var config = {
    // Easily just add extensions bellow and the program will go through them
    "Internal1": [
        "php",
        "sql",
        "sqlite",
        "pdb",
        "idb",
        "cdb",
        "sis",
        "odb"
    ],
    "Internal2": [
        "env",
        "cfg",
        "conf",
        "config",
        "cfm",
        "log",
        "inf"
    ],
    "Internal3": [
        "-www",
    ]
};
//--------------------------------------------------------------
//get checkbox elements
var checkInternal1 = document.getElementById("searchInternal1");
var checkInternal2 = document.getElementById("searchInternal2");
var checkInternal3 = document.getElementById("searchInternal3");

var counter = 0; //global counter for blocked popups

//get text placeholders
var site = document.getElementById('site');

//--------------------------------------------------------------
function search() {
    counter = 0; //reset counter on every click 
    console.log(counter);
    //Checking if none of the checkboxes are checked and alerts the user
    if (!checkInternal1.checked && !checkInternal2.checked && !checkInternal3.checked) {
        alert("You have to check one option");
    }

    //Depending on the checkbox checked, run that query with array provided
    if (checkInternal1.checked) {
        searchQuery(config.Internal1);
    }
    if (checkInternal2.checked) {
        searchQuery(config.Internal2);
    }
    if (checkInternal3.checked) {
        searchQuery(config.Internal3);
    }
    // Check if it detected blocked popups
    if (counter > 0) {
        alert(`Our checker says ${counter} popups might have been blocked, please allow popups and try again!`);
    }
}
function searchQuery(array) {
    array.forEach(extension => {
        isBlocked(window.open(`http://google.com/search?q=site%3A${site.value}+filetype%3A${extension}+%22`, "_blank"));
    });
}
function isBlocked(popupWindow){
    if (!popupWindow || popupWindow.closed || typeof popupWindow.closed == 'undefined') {
        counter += 1;
    }
}
