module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: process.env.PORT,
  url: env('https://amatak-api.pages.dev'),
  app: { 
    keys: env.array('APP_KEYS')
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
})