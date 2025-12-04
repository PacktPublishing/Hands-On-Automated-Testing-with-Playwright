let downloadedFilePath;

afterAll(async () => {
  if (downloadedFilePath) {
    await fs.unlink(downloadedFilePath);
  }
});
