import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=500;

class Book extends BasePage {
    
    private formButton: string = '//li[@class="btn btn-light active"]'
    private bookTitle: string = '//a[normalize-space()="Git Pocket Guide"]'
    //private bookTitle: ElementFinder = 'h1[itemprop="name"]';

    constructor(){
        super();
    }

    async clickFormButton() {
        await sleep(500);
        await ElementActions.click(this.formButton);
        // await sleep(1500);
    }

    async clickbook(){
        await sleep(500);
        await ElementActions.click(this.bookTitle);
    }

  /*public async getBookTitle(): Promise<string> {
    return await this.bookTitle.getText();
  }*/
}

export const book = new Book();