import { test, expect, type Locator } from '@playwright/test';
import { link } from 'fs/promises';

test('Verify the title of the app.vwo.com', async ({ page }) => {

    // Navigate to the QA profile form page
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice");

    // Fill the First Name and Last Name fields
    await page.getByTestId('first-name').fill("Roopa");
    await page.getByTestId('last-name').fill("R");

    // Select the Gender as Male
    await page.getByTestId('gender-female').click();

    // Select the Profession as Automation Tester
    await page.getByTestId('profession-automation').click();

    // Technical skills - Automation Tools - Selenium WebDriver
    await page.getByTestId('tool-selenium').click();

    // Select the Continent as Asia, Europe and Africa
    await page.getByTestId('continent-asia').click();
    await page.getByTestId('continent-europe').click();
    await page.getByTestId('continent-africa').click();

    //Click on the Submit button
    await page.getByTestId('profile-submit').click();

    



}); 