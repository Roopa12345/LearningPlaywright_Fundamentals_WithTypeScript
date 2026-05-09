import { test, expect } from '@playwright/test';

test('Verify error message when invalid credentials are entered', async ({ page }) => {

    await page.goto("https://app.vwo.com/#/login");
    const emailField = page.getByRole('textbox', { name: 'Email' });
    const passwordField = page.getByRole('textbox', { name: 'Password' });
    const signInButton = page.getByRole('button', { name: 'Sign in', exact: true });

    await emailField.fill("invalid@example.com");
    await passwordField.fill("invalidpassword");
    await signInButton.click();
    const errorMessage = page.getByText("Your email, password, IP address or location did not match");
    await expect(errorMessage).toBeVisible(); 
    await expect(errorMessage).toHaveText("Your email, password, IP address or location did not match");  

}); 