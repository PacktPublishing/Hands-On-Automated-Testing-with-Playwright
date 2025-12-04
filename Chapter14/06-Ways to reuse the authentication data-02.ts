const config = {
  projects: [
    {
      name: 'authenticated',
      use: {
        storageState: './.auth/standard_user.json',
      },
    },
  ],
  // other settings
};

export default config;
