await page.locator('input[type="file"]').setInputFiles([
  {
    name: 'file1.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('Hey, this is the first file’s content!')
  },
  {
    name: 'file2.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('Yo, this is the second file’s content!')
  }
]);
