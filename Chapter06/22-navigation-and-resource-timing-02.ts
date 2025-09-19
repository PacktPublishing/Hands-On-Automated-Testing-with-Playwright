const resources = await page.evaluate(() => {
  return performance.getEntriesByType('resource').map(r => ({
    name: r.name,
    startTime: r.startTime,
    duration: r.duration,
    decodedBodySize: r.decodedBodySize,
    transferSize: r.transferSize, 
  }));
});
console.log('Resource timings:', resources);
