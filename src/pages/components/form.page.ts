import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=500;

class Form extends BasePage {
    
    private formButton: string = '//li[@class="btn btn-light active"]'

    private firstNameForm: string = '#firstName'
    private lastNameForm: string = '#lastName';
    private emailForm: string = '#userEmail';
    private genderForm: string = '//label[@class="custom-control-label" and text()="GÉNERO"]/following-sibling::div//label[text()="${genero}"]';
    //private genderForm: string = '#gender-radio-3';
    private phoneForm: string = '#userNumber';
    private dateBirth: string = '//*[@id="dateOfBirthInput"]';
    private subjectsForm: string = '//*[@id="subjectsContainer"]/div/div[1]';
    //private subjectsForm: string = '#subjectsContainer input[value="Maths"]';
    private hobbiesForm: string = '#hobbies-checkbox-3';
    private addressForm: string = '#currentAddress'
    private submit: string = '//*[@id="submit"]';
    constructor(){
        super();
    }

    async clickFormButton() {
        await sleep(500);
        await ElementActions.click(this.formButton);
        // await sleep(1500);
    }

    async setFirstName(textFirstName: string): Promise<void> {
        await ElementActions.setText(this.firstNameForm, textFirstName);
      }

    async setLastName(textLastName: string): Promise<void> {
        await ElementActions.setText(this.lastNameForm, textLastName);
      }
    
    async setEmail(textEmail: string) {
        await sleep(500)
        await ElementActions.setText(this.emailForm, textEmail);
    }

      async setPhone(textPhone: string) {
        await sleep(500)
        await ElementActions.setText(this.phoneForm, textPhone);
    }

    async setDateBirth(textBrirth: string) {
        await sleep(500)
        await ElementActions.setText(this.dateBirth, textBrirth);
    }

    async setSubjects(textSubjects: string) {
        await sleep(500)
        await ElementActions.setText(this.subjectsForm, textSubjects);
    }

    async setHobbies(textHobbies: string) {
        await sleep(500)
        await ElementActions.setText(this.hobbiesForm, textHobbies);
    }

    async setAddress(textAddress: string) {
        await sleep(500)
        await ElementActions.setText(this.addressForm, textAddress);
    }
    
    async clickSubmit2() {
        await sleep(500)
        await ElementActions.click(this.submit);
    }

}

export const form = new Form();