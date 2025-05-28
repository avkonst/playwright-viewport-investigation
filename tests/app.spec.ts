import { test, expect } from '@playwright/test';

test('should load the app and display items and react to viewport size change', async ({ page }) => {
    console.log('If you see this message console log from playwright test works!');
    
    // Navigate to the app
    //await page.goto('http://localhost:5173');
    // use the deployed version
    await page.goto('https://playwright-viewport-investigation.vercel.app/');    

    // capture logs from the browser
    await page.on('console', (msg) => {
        if (msg.type() === 'log') {
            console.log(`Browser log: ${msg.text()}`);
        }
    });

    // subscribe within browser to the resize event
    await page.evaluate(() => {
        window.addEventListener('resize', () => {
            // log current viewport size
            console.log(`Viewport size: ${window.innerWidth}x${window.innerHeight}`);
        });
    });

    // Verify that 20 divs are rendered
    const items = await page.locator('div.Item');
    await expect(items).toHaveCount(25);
    
    // await page.waitForTimeout(10000);

    // await page.setViewportSize({ width: 800, height: 800 });

    // await page.waitForTimeout(10000);
    
    // await page.setViewportSize({ width: 800, height: 300 });

    await page.waitForTimeout(10000);
        
    const lastItem = items.nth(24); // 0-based index for the last item
    await expect(lastItem).toHaveText('25');
    // click on the last item
    await lastItem.click();
});
