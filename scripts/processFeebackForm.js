

function processForm(){
    var formObj = document.getElementById("FeedbackForm");

    if(validateForm(formObj)){
        formStats();
    }
}

function validateForm(formObj){

    var feedback_msg = formObj.feedaback_message;   
    var emailAddress = formObj.email.value;

    var validEmail = emailValid(emailAddress);
    var validRating = radioValid();
    var validMessage = messageValid(feedback_msg);

    if(validEmail && validRating && validMessage) return true;
    else return false;
}

function radioValid(){
    var radio1 = document.getElementById("rating1").checked;
    var radio2 = document.getElementById("rating2").checked;
    var radio3 = document.getElementById("rating3").checked;
    var radio4 = document.getElementById("rating4").checked;
    var radio5 = document.getElementById("rating5").checked;
    if(radio1 || radio2 || radio3 || radio4 || radio5){
        return true;
    }else{
        console.log("Please select a rating");
        alert("Error: Please select a ratiing");
        return false;
    }
}

function messageValid(message){
    if(message.value != ""){
        return true;
     }
    else{
        alert("Error: Please submit feedback");
        return false;
    }
}

function emailValid(address)
{
    var p = address.search(/.+@.+/);
    if (p == 0)
        return true;
    else
    {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}

function formStats(){
    var messageLength = document.getElementById("feedaback_message").value.length;

    var ratingValue;

    var radio1 = document.getElementById("rating1").checked;
    var radio2 = document.getElementById("rating2").checked;
    var radio3 = document.getElementById("rating3").checked;
    var radio4 = document.getElementById("rating4").checked;
    var radio5 = document.getElementById("rating5").checked;

    if(radio1) ratingValue = "Terrible";
    else if(radio2) ratingValue = "Bad";
    else if(radio3) ratingValue = "Average";
    else if(radio4) ratingValue = "Good";
    else if(radio5) ratingValue = "Excellent";

    alert("Form Submission:\n" +
            "Inputted characters within message: " + messageLength + "\n" +
            "Rating Give: " + ratingValue + "\n" +
            "Email Address: Valid");

}