import { driverInstance } from "./driver";

export class ElementActions {

    static async click(locator: string) {
        console.log("<<<<<< trying to find the selector: ", locator)
        await driverInstance.Page.waitForSelector(locator);

        await driverInstance.Page.click(locator);
    }

    static async setText(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.fill(locator, text);
    }
    static async ClickText(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
    }
    

    static async setColor(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
        await driverInstance.Page.click(text);
    }

    static async isElementVisible(locator: string): Promise<boolean> {
        await driverInstance.Page.waitForSelector(locator);
        return await driverInstance.Page.isVisible(locator, {
            timeout: 10000
        });
    }

    static async getElementText(locator: string): Promise<string> {
        await driverInstance.Page.waitForSelector(locator);
        return await driverInstance.Page.innerText(locator);
    }
}
