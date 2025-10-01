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

// Existing services
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

// New specialized services
proxy('/marketplace', 'http://marketplace-service:4200');
proxy('/social_feed', 'http://social_feed-service:4201');
proxy('/video_streaming', 'http://video_streaming-service:4202');
proxy('/chat_messaging', 'http://chat_messaging-service:4203');
proxy('/gaming', 'http://gaming-service:4204');
proxy('/content_hub', 'http://content_hub-service:4205');
proxy('/events_ticketing', 'http://events_ticketing-service:4206');
proxy('/travel_location', 'http://travel_location-service:4207');
proxy('/ar_ai_experience', 'http://ar_ai_experience-service:4208');
proxy('/groups_community', 'http://groups_community-service:4209');
proxy('/influencer_creator', 'http://influencer_creator-service:4210');
proxy('/social_commerce', 'http://social_commerce-service:4211');
proxy('/viral_engagement', 'http://viral_engagement-service:4212');
proxy('/multimedia', 'http://multimedia-service:4213');
proxy('/rtc', 'http://rtc-service:4214');

app.get('/', (req, res) => {
    res.send('<h3>LifeSphere Dev Gateway</h3><p>Use /cognitive, /auth, /users, /marketplace, etc.</p>');
});

const PORT = 4000;
app.listen(PORT, () =>
    console.log(`API Gateway running on port ${PORT} — open http://localhost:8080`)
);
