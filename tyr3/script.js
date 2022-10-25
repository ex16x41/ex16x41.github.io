var config = {
    // Easily just add extensions bellow and the program will go through them
    "Row1": [
        "pdf",
        "doc",
        "docx",
        "csv",
        "xls",
        "xlsx",
        "txt",
        "rtf",
        "odt",
        "ppt",
        "pptx",
        "pptm",
        "xml",
        "klm"
    ],
    "Row2": [
        "php",
        "sql",
        "sqlite",
        "pdb",
        "idb",
        "cdb",
        "sis",
        "odb"
    ],
    "Row3": [
        "env",
        "cfg",
        "conf",
        "config",
        "cfm",
        "log",
        "inf"
    ]
};
//--------------------------------------------------------------
//get checkbox elements
var check1 = document.getElementById("searchRow1");
var check2 = document.getElementById("searchRow2");
var check3 = document.getElementById("searchRow3");

var counter = 0; //global counter for blocked popups

//get text placeholders
var site = document.getElementById('site');

//--------------------------------------------------------------
function search() {
    counter = 0; //reset counter on every click 
    console.log(counter);
    //Checking if none of the checkboxes are checked and alerts the user
    if (!checkRow1.checked && !checkRow2.checked && !checkRow3.checked) {
        alert("You have to check one option");
    }

    //Depending on the checkbox checked, run that query with array provided
    if (checkRow1.checked) {
        searchQuery(config.Row1);
    }
    if (checkRow2.checked) {
        searchQuery(config.Row2);
    }
    if (checkRow3.checked) {
        searchQuery(config.Row3);
    }
    // Check if it detected blocked popups
    if (counter > 0) {
        alert(`Our checker says ${counter} popups might have been blocked, please allow popups and try again!`);
    }
}
function searchQuery(array) {
    array.forEach(extension => {
        isBlocked(window.open(`http://google.com/search?q=site%3A${site.value}+filetype%3A${extension}%22`, "_blank"));
    });
}
function isBlocked(popupWindow){
    if (!popupWindow || popupWindow.closed || typeof popupWindow.closed == 'undefined') {
        counter += 1;
    }
}
