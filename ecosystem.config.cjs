module.exports = {
  apps: [
    {
      name: 'jessie-portfolio',
      script: 'server.cjs',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
