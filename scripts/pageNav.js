
var contentSelection1;
var contentSelection2;
var contentSelection3;
var contentSelection4;
var contentSelection5;
var currentContentTitle = document.getElementsByClassName("current_content_title");


function updateCurrentPage(page){

    updateCurrentPageTitle(page);
    getContentElements();
    updateExampleList(page);
    
    return false;
}


function updateCurrentPageTitle(title){
    var currentPageTitle = document.getElementById("current_page_title");
    currentPageTitle.innerHTML = title;
}




function updateExampleList(page){

    switch(page){
        case 'Home': window.open("https://murazor-byte.github.io/pages/index.php", "_self"); break;
        case "About Me":  window.open("https://murazor-byte.github.io/pages/aboutme.html", "_self"); break;
        case "Projects": updateProjectsExampleList(); break;
        case "Experience": updateExpereienceExampleList(); break;
        case "Resume": window.open("https://murazor-byte.github.io/pages/resume.html", "_self"); break;
        case "Feedback" : window.open("https://murazor-byte.github.io/pages/feeback.html", "_self"); break;
        default:
    }
}

//references the content elemnets on sidebar to update
function getContentElements(){
    contentSelection1 = document.getElementById("content_selection_1");
    contentSelection2 = document.getElementById("content_selection_2");
    contentSelection3 = document.getElementById("content_selection_3");
    contentSelection4 = document.getElementById("content_selection_4");
    contentSelection5 = document.getElementById("content_selection_5");
}


/*Following functions update the side bar selection */
function updateHomeExampleList(){
    showContentSelection(0);
}

function updateAboutMeExampleList(){
    showContentSelection(0);
}


function updateProjectsExampleList(){
    showContentSelection(4);
    contentSelection1.innerText = "baldorf";
    contentSelection2.innerText = "Cards";
    contentSelection3.innerText = "Into the Deep";
    contentSelection4.innerText = "Art";
}

function updateExpereienceExampleList(){
    showContentSelection(5);
    contentSelection1.innerText = "Software QA Engineer";
    contentSelection2.innerText = "Assistant Operator";
    contentSelection3.innerText = "Groundskeeper";
    contentSelection4.innerText = "Coding Instructor";
    contentSelection5.innerText = "Game QA";
}

function updateResumeExampleList(){
    showContentSelection(0);
}

//shows 'numberToShow' number of content selection elements on side bar, hiding the rest
function showContentSelection(numberToShow){
    switch(numberToShow){
        case 5:
            contentSelection5.style.visibility = 'visible';
        case 4:
            contentSelection4.style.visibility = 'visible';
        case 3:
            contentSelection3.style.visibility = 'visible';
        case 2:
            contentSelection2.style.visibility = 'visible';
        case 1:
            contentSelection1.style.visibility = 'visible';
        default: break;
    }

    switch(Math.abs(5 - numberToShow)){
        case 5:
            contentSelection1.style.visibility = 'hidden';
        case 4:
            contentSelection2.style.visibility = 'hidden';
        case 3:
            contentSelection3.style.visibility = 'hidden';
        case 2:
            contentSelection4.style.visibility = 'hidden';
        case 1:
            contentSelection5.style.visibility = 'hidden';
        default: break;
    }
}

//get the directory name based off the 'current_page_title' id then the page name based off the content select id => inner HTML
function openNewPage(page){
    let currentSelection = document.getElementById(page).innerText;
    let currentPageTitle = document.getElementById('current_page_title').innerHTML;

   window.open("https://murazor-byte.github.io/pages/" + currentPageTitle.replace(/\s/g, '').toLowerCase() + "/"  + currentSelection.replace(/\s/g, '').toLowerCase() + ".html", "_self");
}