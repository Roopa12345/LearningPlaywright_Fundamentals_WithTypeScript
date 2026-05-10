import { test, expect, type FrameLocator } from '@playwright/test';


test('iFrame within Iframe', async ({ page }) => {

    await page.goto("https://selectorshub.com/iframe-scenario/");

     let frame1:FrameLocator = await page.frameLocator('#pact1'); 
     let frame2:FrameLocator = await frame1.frameLocator('#pact2');
     let frame3:FrameLocator = await frame2.frameLocator('#pact3');

     frame1.locator('#inp_val').first().fill("Myself01");
     frame1.locator('#jex').fill("Myself02");
     frame1.locator('#glaf').fill("Myself03");
     await page.waitForTimeout(2000);

   

});