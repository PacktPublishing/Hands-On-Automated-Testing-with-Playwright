import { test, expect } from '@playwright/test';

test('should correctly find text in all nested frames', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');

  // Locate the top frame (which contains the nested frames)
  const topFrame = page.frameLocator('frame[name="frame-top"]');

  // Locate the frames nested inside the 'topFrame'
  const leftFrame = topFrame.frameLocator('frame[name="frame-left"]');
  const middleFrame = topFrame.frameLocator('frame[name="frame-middle"]');
  const rightFrame = topFrame.frameLocator('frame[name="frame-right"]');

  // Locate the bottom frame (which is at the same level as 'topFrame')
  const bottomFrame = page.frameLocator('frame[name="frame-bottom"]');

  // Assert the text content of each frame
  await expect(leftFrame.locator('body')).toHaveText('LEFT');
  await expect(middleFrame.locator('body')).toHaveText('MIDDLE');
  await expect(rightFrame.locator('body')).toHaveText('RIGHT');
  await expect(bottomFrame.locator('body')).toHaveText('BOTTOM');
});
