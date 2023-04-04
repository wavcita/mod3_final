import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { books } from "../../src/pages/components/books.page";
//const { browser, $, element, by } = require('protractor');

setDefaultTimeout(60 * 1000);


const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };



Given('I am on the Books page', async () => {
    await browser.get('https://demoqa.com/books');
  });
  
  When('I search for {string} in the {string} category', async (searchText: string, category: string) => {
    const categoryDropdown = element(by.css('#searchBoxWrapper select#searchCategory'));
    await categoryDropdown.click();
    const categoryOption = element(by.cssContainingText('option', category));
    await categoryOption.click();
    const searchBox = element(by.css('#searchBoxWrapper input#searchBox'));
    await searchBox.sendKeys(searchText);
    const searchButton = element(by.css('#searchBoxWrapper span#basic-addon2'));
    await searchButton.click();
  });