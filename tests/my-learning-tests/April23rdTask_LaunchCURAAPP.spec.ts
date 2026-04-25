import {test,expect} from '@playwright/test';

test('Click Make Appointment and verify the url', async ({page}) => { 

    const makeAppointmentButton = page.locator("#btn-make-appointment");
    const usernameField = page.locator("#txt-username");
    const passwordField = page.locator("#txt-password");
    const loginButton = page.locator("#btn-login");

    await page.goto("https://katalon-demo-cura.herokuapp.com/");   
    await expect(makeAppointmentButton).toBeVisible();
    await makeAppointmentButton.click();
    await usernameField.fill("John Doe");
    await passwordField.fill("ThisIsNotAPassword");
    await loginButton.click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");


    
    

});