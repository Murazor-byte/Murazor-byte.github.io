
function updateCurrentPage(page){

    updateCurrentPageTitle(page);
    updateExampleList(page);
    
    switch(page){
        case 'Home': break;
        case "About Me": break;
        case "Projects": break;
        case "Experience": break;
        case "Resume": break;
        default:
    }
    return false;
}


function updateCurrentPageTitle(title){
    var currentPageTitle = document.getElementById("current_page_title");
    currentPageTitle.innerHTML = title;
}



function updateHomePage(){
   
}

function updateAboutPage(){
    
}

function updateProjectsPage(){
    updateExampleList("Projects");
}

function updateExperiencePage(){
    
}

function updateResumePage(){
    
}





function updateExampleList(page){

    switch(page){
        case 'Home': updateHomeExampleList(); break;
        case "About Me": updateAboutExampleList(); break;
        case "Projects": updateProjectsExampleList(); break;
        case "Experience": updateExpereienceExampleList(); break;
        case "Resume": updateResumeExampleList(); break;
        default:
    }
}

function updateHomeExampleList(){

}

function updateAboutExampleList(){

}

function updateProjectsExampleList(){
    var contentSelection1 = document.getElementById("content_selection_1");
    var contentSelection2 = document.getElementById("content_selection_2");
    var contentSelection3 = document.getElementById("content_selection_3");
    var contentSelection4 = document.getElementById("content_selection_4");
    var contentSelection5 = document.getElementById("content_selection_5");

    contentSelection1.innerText = "baldorf 2.0";
    contentSelection2.innerText = "Cards";
    contentSelection3.innerText = "Into the Deep";
}

function updateExpereienceExampleList(){

}

function updateResumeExampleList(){
    
}