module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2294fa13e611b04cb240be5e6afaae88'),
  },
});
