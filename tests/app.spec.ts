import { test, expect } from '@playwright/test';

test('should load the app and display items', async ({ page }) => {
    // Navigate to the app
    //await page.goto('http://localhost:5173');
    // use the deployed version
    await page.goto('https://playwright-viewport-investigation.vercel.app/');
    // Verify that 20 divs are rendered
    const items = await page.locator('div.Item');
    await expect(items).toHaveCount(25);

    // Check the first item's content and style
    const firstItem = items.nth(0);
    await expect(firstItem).toHaveText('1');

    // sleep for 100 seconds
    await page.waitForTimeout(100000);
    
    const lastItem = items.nth(29);
    await expect(lastItem).toHaveText('25');
    // click on the last item
    await lastItem.click();
});
