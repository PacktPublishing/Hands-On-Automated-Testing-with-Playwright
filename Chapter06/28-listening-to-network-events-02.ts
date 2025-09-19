expect(networkRequests.length).toBeGreaterThan(0);
expect(networkRequests.some(req => req.status === 200)).toBe(true);
