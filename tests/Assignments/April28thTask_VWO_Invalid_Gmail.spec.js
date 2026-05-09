import { test, expect } from '@playwright/test';

test('Verify the title of the app.vwo.com', async ({ page }) => {

    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    await page.getByRole('textbox', { name: 'Business Email' }).click();
    await page.getByRole('textbox', { name: 'Business Email' }).fill("asdsd@gmail.com");
    await page.getByRole('checkbox', { name: 'I agree to VWO\'s Privacy' }).click();
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();
    const errorMessage = await page.getByText('gmail.com doesn\'t look like a');
    await page.waitForTimeout(2000);
    await expect(errorMessage).toContainText("gmail.com doesn't look like a business domain. Please use your business email.");
   

});