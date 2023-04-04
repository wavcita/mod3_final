import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { book } from "../../src/pages/components/book.page";
import { TESTDATA } from "../../config.app";

setDefaultTimeout(60 * 1000);


const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

Given('the user clicks the add button book', async function () {
    await book.clickFormButton();
});

Given('the user clicks the book', async function () {
  await book.clickbook();
});

Given('the user clicks the Login button', async function () {
    await book.clickLogin();
});

Given('the user sets the user', async function () {
    //    await driverInstance.start(TESTDATA.url);
        const user = TESTDATA.userName == '' ? process.env.USER as string : TESTDATA.userName;
        await book.setUser(user);
        // await loginPage.setEmail(TESTDATA.email);
    });
    
Given('the user sets the password', async function () {
        const password = TESTDATA.password == '' ? process.env.PASSWORD as string : TESTDATA.password;
        await book.setPassword(password);
        // await loginPage.setPassword(TESTDATA.password);
    });   
    
When('the user clicks the Login button1', async function () {
        await book.clickLogin1();
    });

Then('the user clicks the AddYourCollection button', async function () {
        await book.clickAddCollection();
    });