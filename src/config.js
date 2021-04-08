export default {
    API_ENDPOINT: 'postgresql:dunder_mifflin@localhost/make-a-plan',
    API_KEY: process.env.API_KEY,
    TOKEN_KEY: 'make-a-plan-auth-token',
    NODE_ENV: process.env.NODE_ENV || 'development'
}