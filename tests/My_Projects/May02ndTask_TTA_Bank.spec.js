import { test, expect } from '@playwright/test';

test('Verify that the balance reduced on transfer in TTA Bank', async ({ page }) => {

    //Navigate to URL
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByRole('textbox', { name: 'John Do' }).fill("John Doe");
    await page.getByRole('textbox', { name: 'you@example.com' }).fill("your@example.com");
    await page.getByRole('textbox', { name: '••••••••' }).fill("Test@123");
    await page.getByRole('button', { name: 'Create Account' }).click();
    await page.getByRole('button', { name: 'Transfer Funds' }).click();
    await page.getByPlaceholder('0.00').fill("1000");
    await page.getByRole('textbox', { name: 'e.g. Rent for October' }).fill("Test Transfer");
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();
    await page.getByRole('button', { name: 'Dashboard' }).click();
    
    const balance = await page.getByRole('heading', { name: '$49,000.00' }).innerText();
    console.log(balance);
    
    
   

});