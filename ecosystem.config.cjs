module.exports = {
  apps: [
    {
      name: process.env.APP_NAME || 'jessie-portfolio',
      script: 'server.cjs',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
