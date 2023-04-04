import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=500;

class Form extends BasePage {
    
    private formButton: string = '//li[@class="btn btn-light active"]'
    private urlBook: string = '//a[normalize-space()="Git Pocket Guide"]'

    constructor(){
        super();
    }

    


}