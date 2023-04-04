import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { book } from "../../src/pages/components/book.page";

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