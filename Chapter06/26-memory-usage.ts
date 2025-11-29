const memoryUsage = await page.evaluate(() => {
  return performance.memory
    ? {
        usedJSHeap: performance.memory.usedJSHeapSize,
        totalJSHeap: performance.memory.totalJSHeapSize,
      }
    : null;
});
console.log('Memory usage:', memoryUsage);
