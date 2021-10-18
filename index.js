console.log('Validation using Regular Expression');
//getting element by their id
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validEmail = false;
let validName = false;
let validPhone = false;
$(`#failure`).hide();                     //this to hide alert in starting of the page
$(`#success`).hide();

//console.log(name,email,phone);     //just to check whether its working or not!

name.addEventListener('blur', () => {
    console.log('Name is Blur');
    //validating name here
    //using exp like name should start with  letters capital or small not with the number and name limit is 10
    let regular = /^[a-z A-Z]([0-9 a-z A-Z]){2,10}$/;
    let str = name.value;            //value prints the value in it
    console.log(regular, str);
    if (regular.test(str)) {             //this if else of showing error in console
        console.log('Your Name is Valid');
        name.classList.remove('is-invalid');  //this for if name is valid then remove invalid section
        validName = true;         //if each character matches with the expression thne return true
    }
    else {
        console.log('Your Name is Not Valid');
        name.classList.add('is-invalid'); //name is invalid then add is valid error
        validName = false;
    }
});


email.addEventListener('blur', () => {
    console.log('Email is Blur');
    //validating email here
    //  /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let regular = /^([_\ -\. 0-9 a-z A-Z ]+)@([_\ -\. 0-9 a-z A-Z ]+)\.([a-z A-Z]){2,7}$/;
    
    //^()@()\.()$/; This means it should with _ or any character or a-z or A-Z and + for more then 
    //@ is compulsory after that same  then comes after . com or in or anything in between 2 to 7 character

    let str = email.value;            //value prints the value in it
    console.log(regular, str);
    if (regular.test(str)) {             //this if else of showing error in console
        console.log('Your Email is Valid');
        email.classList.remove('is-invalid');
        validEmail = true;

    }
    else {
        console.log('Your Email is Not Valid');
        email.classList.add('is-invalid');
        validEmail = false;

    }
});


phone.addEventListener('blur', () => {
    console.log('Phone is Blur');
    //validating phone here
    let regular = /^([0-9]{10}$)/;
    let str = phone.value;            //value prints the value in it
    console.log(regular, str);
    if (regular.test(str)) {             //this if else of showing error in console
        console.log('Your Phone no is Valid');
        phone.classList.remove('is-invalid');
        validPhone = true;

    }
    else {
        console.log('Your Phone no is Not Valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

//Event listner for submit button
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault();                   //e and e.preventDeafult() for stop reloading page after clicking submit button
    console.log('You clicked on submit');
    console.log(validEmail,validName,validPhone);
    
    //Submit your form here
    if (validEmail && validPhone && validName) {
        let failure = document.getElementById('failure');

        console.log('Everyting is Valid');
        let success = document.getElementById('success');
        success.classList.add('show');  //this for alert section 
        // failure.classList.remove('show');
        // $(`#failure`).alert('close');    //using close alert from bootstrap
        $(`#failure`).hide();       //this to show alert hide and show of jquery 
        $(`#success`).show();
    }
    else {
        console.log('Something is NOT Valid Please correct the Errors!');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');    
        // $(`#success`).alert('close');             //using close alert from bootstrap
        $(`#success`).hide();
        $(`#failure`).show();
    }

})
