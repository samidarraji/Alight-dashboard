var dialog = document.getElementById('dialog-ref01');
var closeDialog = document.getElementById('dialog-ref02');
var vacationTypeDial = document.querySelector('#vacation-type');
var startDateDial = document.querySelector('#start-date-dial');
var requestDateDial = document.querySelector('#request-date');
var approvalDateDial = document.querySelector('#approval-date');
var endDateDial = document.querySelector('#end-date-dial');
var numbDaysDialog = document.querySelector('#num-days');
var approvalStatusDial = document.querySelector('#approval-status');
var interimDialog = document.querySelector('#interim');
var user = "SAMI";
var reqDateValue = "22/05/2023"; 
var approvalDateValue = "23/05/2023"; 

function getDialog(paidleade,sdate,edate,nbdays,status){
    
    if(dialog.classList.contains('remove-dialog')){
        dialog.classList.remove('remove-dialog');
        dialog.classList.add('show-dialog');
    }

    var paidLeade = document.getElementById(paidleade).textContent;
    var startDate = document.getElementById(sdate).textContent;
    var endDate   = document.getElementById(edate).textContent;
    var numDays   = document.getElementById(nbdays).textContent;
    var approvalStatus = document.getElementById(status).textContent;
    
    // Select vacation type on dialog 
    if(paidLeade === "Paid leave"){
        vacationTypeDial.selectedIndex = 1;
    }else{
        vacationTypeDial.selectedIndex = 0;
    }
    // set start date
    if(startDate === ""){
        startDateDial.value = "";
    }else{
        startDateDial.value = convDat(startDate);
    }
    // set end date
    if(startDate === ""){
        endDateDial.value = "";
    }else{
        endDateDial.value = convDat(endDate);
    }
    // Request’s Date
    if(reqDateValue === ""){
        requestDateDial.value = "";
    }else{
        requestDateDial.value = convDat(reqDateValue);
    }
    // Approval Date
    if(approvalDateValue === ""){
        approvalDateDial.value = "";
    }else{
        approvalDateDial.value = convDat(approvalDateValue);
    }

    // Select approval status on dialog
    if(approvalStatus === "Current"){
        approvalStatusDial.selectedIndex = 1;
    }else{
        approvalStatusDial.selectedIndex = 2;
    }
    // Set number of days
    if(numDays === ""){
        numbDaysDialog.value = 0 ;
    }else{
        numbDaysDialog.value = numDays ;
    }
    // Set intérim
    if(user === "SAMI"){
        interimDialog.selectedIndex = 3;
    }else if(user === "Amed"){
        interimDialog.selectedIndex = 4;
    }


}

closeDialog.addEventListener("click", function() {
    if(dialog.classList.contains('show-dialog')){
        dialog.classList.remove('show-dialog');
        dialog.classList.add('remove-dialog');
    }
  });


   


function convDat(s){
  date2 = s.split("/").reverse().join("-");
  return date2;
}

