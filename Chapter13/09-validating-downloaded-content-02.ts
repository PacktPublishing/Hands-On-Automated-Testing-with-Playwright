const content = await fs.readFile(filePath, 'utf8');
await expect(content).toContain('Expected text in file');
