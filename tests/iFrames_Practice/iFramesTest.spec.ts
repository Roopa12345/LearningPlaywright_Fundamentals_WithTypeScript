import { test, expect } from '@playwright/test';


test('iFrames Test', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    const vehicleRegisrationFrame = await page.frameLocator('#frame-one');

    await vehicleRegisrationFrame.locator('#RESULT_TextField-1').fill("Test Automation Engineer");
    await vehicleRegisrationFrame.locator('#RESULT_TextField-2').fill("Sharma");
    await vehicleRegisrationFrame.locator('#RESULT_TextField-3').fill("1234567890");
    await vehicleRegisrationFrame.locator('#RESULT_TextField-4').fill("2026");
    await vehicleRegisrationFrame.locator('#RESULT_TextArea-1').fill("Testing notes registration form in iFrame");

    await vehicleRegisrationFrame.getByText('Submit registration', { exact: true }).click();

    const result =  await vehicleRegisrationFrame.locator('#vehicle-output');
    console.log(await result.textContent());

});