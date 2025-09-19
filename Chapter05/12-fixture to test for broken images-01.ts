// fixtures/image-validator.fixture.ts
import { test as base, expect } from '@playwright/test';

/**
* Provides a function to check for broken images by examining src
* attributes, HTTP status codes, and image content validity.
*/
export const test = base.extend({
  imageValidator: async ({ page }, use) => {
    const validateImages = async () => {
      const allImages = await page.locator('img').all();
      const brokenImages = [];

      for (const img of allImages) {
        const src = await img.getAttribute('src');

        if (!src) {
          brokenImages.push({ 
            src: 'Missing src attribute', 
            status: 'N/A' 
          });
          continue;
        }

        const absoluteSrc = new URL(src, page.url()).href;
        
        try {
          const response = await page.request.get(absoluteSrc);

          if (!response.ok()) {
            brokenImages.push({ 
              src: absoluteSrc, 
              status: response.status() 
            });
          } else {
            const isCorrupted = await img.evaluate(image => image.naturalWidth === 0);
            if (isCorrupted) {
              brokenImages.push({ 
                src: absoluteSrc, 
                status: 'OK but corrupted (naturalWidth is 0)' 
              });
            }
          }
        } catch (error) {
          brokenImages.push({ 
            src: absoluteSrc, 
            status: `Error: ${error.message}` 
          });
        }
      }

      const errorMessage = `Found ${brokenImages.length} broken images:\n${JSON.stringify(brokenImages, null, 2)}`;
      expect(brokenImages, errorMessage).toEqual([]);
    };

    await use(validateImages);
  },
});
