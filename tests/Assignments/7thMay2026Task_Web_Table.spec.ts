
// open : https://app.thetestingacademy.com/playwright/webtable
// click on the search box and enter the employee name Kabir to search
// verify that the employee name is Kabir.Khan is visible and click on the checkbox for that employee

import { test, expect } from '@playwright/test';
import { asyncWrapProviders } from 'node:async_hooks';

test('Web Table Practice', async ({ page }) => {

    const BASE_URL = "https://app.thetestingacademy.com/playwright/webtable";

    // Navigate to below URL
    await page.goto(BASE_URL);

    //click on the search box and enter the employee name Kabir to search
   await page.locator('#employee-search').click();
   await page.locator('#employee-search').fill("Kabir");   
   await page.locator('#select-cloud-qa').click();

   //validate that the employee name is Kabir.Khan is visible and click on the checkbox for that employee
    const usernameRow = await page.locator('tr[data-username="Kabir.Khan"]');
    await expect(usernameRow.locator('td', { hasText: "Kabir.Khan" })).toBeVisible();

    // Click on the checkbox for the employee
    const KabirKhanCheckbox = await usernameRow.locator('td').first();
    await KabirKhanCheckbox.click();
    await expect(KabirKhanCheckbox.locator('input[type="checkbox"]')).toBeChecked();

     // Validate if selected username appears
    const selectedOutput = await page.locator('.selected-output');
    await expect(selectedOutput).toContainText("Kabir.Khan");
    




});


