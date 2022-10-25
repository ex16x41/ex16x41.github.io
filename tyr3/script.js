var config = {
    // Easily just add extensions bellow and the program will go through them
    "Intexp": [
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
        "klm",
        "php",
        "sql",
        "sqlite",
        "pdb",
        "idb",
        "cdb",
        "sis",
        "odb",
        "env",
        "cfg",
        "conf",
        "config",
        "cfm",
        "log",
        "inf"
     ],
    "Intsub": [
        "-www", + "-support",
    ]
};
//--------------------------------------------------------------
//get checkbox elements
var checkIntexp = document.getElementById("searchIntexp");
var checkIntsub = document.getElementById("searchIntsub");

var counter = 0; //global counter for blocked popups

//get text placeholders
var site = document.getElementById('site');

//--------------------------------------------------------------
function search() {
    counter = 0; //reset counter on every click 
    console.log(counter);
    //Checking if none of the checkboxes are checked and alerts the user
    if (!checkIntexp.checked && !checkIntsub.checked) {
        alert("You have to check one option");
    }

    //Depending on the checkbox checked, run that query with array provided
    if (checkIntexp.checked) {
        searchQuery(config.Intexp);
    }
    if (checkIntsub.checked) {
        searchQuery(config.Intsub);
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
