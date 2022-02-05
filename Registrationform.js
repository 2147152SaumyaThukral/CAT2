let Name, PhoneNumber, Password, Email, Age, Username;

successStatus = {
    validName: 0,
    validPhoneNumber: 0,
    validPassword: 0,
    validEmail: 0,
    validAge: 0,
    validUsername: 0,

};

Digits = (event) => {
    var input = Event.which || Event.keycode;
    if((input >=48 && input<=57) || input == 8 ||
    (input>=35 && input <=40) || input==46)
    return true;
    else return false;
  };


Char = (Event) => {
    var input = Event.which || Event.keycode;
    if((input>67 && input<91) || (input>96 && input<123))
    return true;
    else return false;
}

REValidate = (Event) => {
    Event.preventDefault();
    NameCheck("Name");
    EmailCheck();
    NumberCheck();
    UsernameCheck();
    PasswordCheck();
    AgeCheck();
    if (statusChecker()===2) {
        userInfo ={
            Name: Name,
            Email: email.value.trim(),
            PhoneNumber: PhoneNumber.value.trim(),
            Username: Username.value.trim(),
            Age: Age,
        };
        console.log(userInfo);
    }
};

PasswordCheck = () => {
    Password= document.getElementById("Password");
    let PasswordVal = password.value.trim();
    let Regex1= /[a-z]/;
    let Regex2 = /[A-Z]/;
    let Regex3 = /[0-9]/;
    let Regex4 = /[~`!@#$%^&*()-_+={}[]|[\];:"<>,.?]/;

    if (
        PasswordVal.length>= 5 &&
        PasswordVal.length <10 &&
        Regex1.test(PasswordVal) &&
        Regex2.test(PasswordVal) &&
        Regex3.test(PasswordVal) && 
        Regex4.test(PasswordVal)
    ) {
        successStatus.validPassword=1;
        return success(Password);

    } else{
        successStatus.validPassword=0;
        return error(
            Password, 'Should contain minimum 1 [a-z], minimum 1 [A-Z], minimum 1 [0-9], minimum 1 special character'
        );
    }
    
};

EmailCheck = () => {
    Email=document.getElementById("Email");
    let EmailVal = Email.value.trim();

    const EmailReg = /([a-z0-9\.\-_]{5,25})@([a-z0-9]{5,25})university.in$/;
    if (EmailReg.test(EmailVal))
    {
        successStatus.validEmail=1;
        return success(Email);
    }
    else {
        successStatus.validEmail =0;
        return error(Email, "Please use university mail ID");
    }
};

success = (input) => {
    const Control = input.parentElement;
  
    Control.className = "control success";
  };
  
  error = (input, message) => {
    const Control = input.parentElement;
  
    const small = Control.querySelector("small");
    small.innerText = message;
  
    if (document.getElementById("Username") === input) {
      Control.className = "control error username";
      //console.log(formControl.className);
    } else if (document.getElementById("Password") === input) {
      Control.className = "control error Password";
    } else {
      Control.className = "control error";
    }
  };
  


  statusChecker = () => {
    let sum = 0;
    const objectKeys = Object.keys(successStatus);
    objectKeys.forEach((key) => {
      sum += successStatus[key];
    });
    console.log(sum);
    return sum;
  };

