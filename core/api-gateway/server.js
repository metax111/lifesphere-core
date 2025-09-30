const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

function proxy(path, target) {
    app.use(
        path,
        createProxyMiddleware({
            target,
            changeOrigin: true,
            pathRewrite: (p) => p.replace(path, ''), // safer than regex
            logLevel: 'debug',
        })
    );
}

// Services
proxy('/auth', 'http://auth-service:4001');
proxy('/users', 'http://user-service:4002');
proxy('/health', 'http://health-service:4003');
proxy('/life', 'http://life-os-service:4004');
proxy('/cognitive', 'http://cognitive-service:4007');
proxy('/recommend', 'http://recommendation-service:4101');
proxy('/finance', 'http://finance-service:4102');
proxy('/learning', 'http://learning-service:4103');
proxy('/worklife', 'http://worklife-service:4104');
proxy('/relationship', 'http://relationship-service:4105');
proxy('/health-ai', 'http://health-ai-service:4106');
proxy('/notify', 'http://notification-service:4006');
proxy('/logs', 'http://logging-service:4005');

app.get('/', (req, res) => {
    res.send('<h3>LifeSphere Dev Gateway</h3><p>Use /cognitive, /auth, /users etc.</p>');
});

const PORT = 4000;
app.listen(PORT, () =>
    console.log(`API Gateway running on port ${PORT} — open http://localhost:8080`)
);
