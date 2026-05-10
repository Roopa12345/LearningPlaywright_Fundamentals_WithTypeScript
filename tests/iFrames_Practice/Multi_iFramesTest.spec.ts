import { test, expect, type FrameLocator } from '@playwright/test';


test('iFrames Test', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    let mainFrame:FrameLocator = await page.frameLocator('[name="main"]');   
    const headerText = await mainFrame.locator('h2').innerText();
    console.log("Header text in main frame is : "+headerText);

    await page.waitForTimeout(2000);

    const allFrames = await page.locator('//frame').all();
    console.log("Total number of frames in the page are : "+allFrames.length);

    for(const frame of allFrames){
        console.log(await frame.getAttribute('name'), ':', await frame.getAttribute('src'));
       
    }

    let sideFrame:FrameLocator = await page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

     await page.waitForTimeout(2000);



   

});