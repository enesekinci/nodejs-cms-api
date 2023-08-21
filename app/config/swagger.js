const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API Dokümantasyonu',
            version: '1.0.0',
            description: 'Express API Dokümantasyonu',
            //logoyu değiştirmek için
            customCss: '.swagger-ui .topbar { display: none }' // Logoyu gizlemek için
        },
    },
    apis: ['./app/routes/routes.js'], // Rotalarınıza göre güncelleyin
};

module.exports = swaggerOptions;