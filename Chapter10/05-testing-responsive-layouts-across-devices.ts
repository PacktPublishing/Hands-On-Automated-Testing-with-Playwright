import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Mobile', width: 390, height: 844 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1920, height: 1080 },
];

for (const viewport of viewports) {
  test(`should render correctly on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ 
      width: viewport.width, 
      height: viewport.height 
    });
    await page.goto('https://www.whatsmybrowser.org/');
    await page.screenshot({ path: `custom-emulation-${viewport.name}.png` });
  });
}
