const error = await download.failure();
await expect(error).toContain('404');
