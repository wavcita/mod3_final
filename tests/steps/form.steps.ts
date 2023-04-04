
import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { form } from "../../src/pages/components/form.page";
//const { browser, $, element, by } = require('protractor');

setDefaultTimeout(60 * 1000);


const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  Given('the user clicks the add button form', async function () {
    await form.clickFormButton();
});

Given('the user sets {string} as First Name form', async function (inputFirstName) {
    await form.setFirstName(inputFirstName);
    await sleep(1500);
});

Given('the user sets {string} as Last Name form', async function (inputLastName) {
await form.setLastName(inputLastName);
await sleep(1500);
});

Given('the user sets {string} as email form', async function (inputEmail) {
await form.setEmail(inputEmail);
await sleep(1500);
});

// Given('the user select Female as the gender form', async function (Gender) {
//     await form.clickGender(Gender);
//     await sleep(1500);
//     });

    /*When('I select {string} as the gender', async function (gender) {
        if (gender.toLowerCase() === 'male') {
          await element(by.cssContainingText('#gender-radio-1 + label', 'Male')).click();
        } else {
          await element(by.cssContainingText('#gender-radio-2 + label', 'Female')).click();
        }
      });*/

Given('the user sets {string} as phone form', async function (inputPhone) {
    await form.setPhone(inputPhone);
    await sleep(1500);
    });

// Given('the user sets {string} as dateBirth', async function (inputBrirth) {
//         await form.setDateBirth(inputBrirth);
//         await sleep(1500);
//         });
    
/*When('I select {string} as the language', async function (language) {
    await $('#subjectsInput').sendKeys(language);
    await element(by.cssContainingText('#react-select-2-option-0', language)).click();
        });*/
        
// Given('the user sets {string} as hobbies form', async function (inputHobbies) {
//     await form.setHobbies(inputHobbies);
//     await sleep(1500);
//     });

// Given('the user sets {string} as address form', async function (inputAddress) {
//     await form.setAddress(inputAddress);
//     await sleep(1500);
//     });

// Given('the user sets {string} as subjects', async function (inputSubjects) {
//     await form.setSubjects(inputSubjects);
//     await sleep(1800);
//     });


// Given('the user clicks as Submit2 button form', async function () {
//     await form.clickSubmit2();
//     await sleep(1800);
//     });