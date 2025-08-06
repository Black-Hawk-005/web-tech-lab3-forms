let response = {};

function checkName() {
    let name = document.forms["form-1"]["name-input"].value;
    document.getElementById('error-row-1').innerText = '';
    let nameRegex = /^[a-zA-Z\s]+$/;
    if (name==="") {
        document.getElementById('error-row-1').innerText = 'Enter a valid name.'
        return false;
    }
    else if (!nameRegex.test(name)) {
        document.getElementById('error-row-1').innerText = 'Name should contain letters and spaces'
        return false;
    }
    return true;
}

function checkPhone() {
    let phone = String(document.forms["form-1"]["phone-input"].value);
    const phoneRegex = /^[0-9]{5}\s?[0-9]{5}$/;
    if (!phoneRegex.test(phone)) {
        console.log('Invalid phone number')
        document.getElementById('error-row-2').innerText = 'Enter a valid phone number.';
        return false;
    }
    return true;
}

function checkEmail() {
    let email = document.forms['form-1']['email-input'].value;
    let emailRegex = /^[a-z]+2[\d]{1}110[\d]{3}@snuchennai.edu.in$/;
    document.getElementById('error-row-2').innerText = '';
    if (! emailRegex.test(email)) {
        let error_text = ""
        if (! document.getElementById('error-row-2').innerText === '') {
            error_text += '\n';
        }
        document.getElementById('error-row-2').innerText += error_text+'Enter a valid email id.';
        return false;
    }
    return true;
}

function checkYear() {
    let yearRadio = document.forms['form-2a']
    let validation = false;
    for (let i=0; i<yearRadio.length; i++) {
        validation = validation || yearRadio[i].checked;
    }
    if (! validation) {
        document.getElementById('error-row-3').innerText = "Select a valid choice for the year of study.";
        return false;
    }
    return true
}

function checkBranch() {
    let branchRadio = document.forms['form-2b']
    let validation = false;
    for (let i=0; i<branchRadio.length; i++) {
        validation = validation || branchRadio[i].checked;
    }
    if (! validation) {
        document.getElementById('error-row-3').innerText = "Select a valid choice for branch.";
        return false;
    }
    return true
}

function checkTnC() {
    document.getElementById('error-row-4').innerText = '';
    if (! document.getElementById('terms-and-conditions').checked) {
        document.getElementById('error-row-4').innerText = 'Please check the box to agree terms and condition. Terms and Conditions can be viewed in the link attached.';
        return false;
    }
    return true;
} 


function validateForm() {
    document.getElementById('error-row-2').innerText = '';
    let validation = checkName() &&  checkPhone() && checkEmail() && checkYear() && checkBranch() && checkTnC();
    if (validation) {
        document.getElementById('success-text').innerText = 'Your responses are submitted successfully!';
    }
}