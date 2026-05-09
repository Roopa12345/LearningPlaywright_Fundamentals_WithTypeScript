import { test, expect, type Locator } from '@playwright/test';
import { link } from 'fs/promises';

test('Verify the title of the app.vwo.com', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const linksText: string[]  = await page.locator('a.list-group-item').allInnerTexts();
    console.log(linksText.length);
    console.log(linksText);

    for(const linktext of linksText){
        if(linktext === "My Account"){
            await page.getByText(linktext).first().click();
            await page.waitForTimeout(2000);
            break;  

        }
    }

    const linksLocator: Locator[] = await page.locator('a.list-group-item').all();
    for(const linkLocator of linksLocator){        
        console.log(await linkLocator.getAttribute('href'));
    }

});