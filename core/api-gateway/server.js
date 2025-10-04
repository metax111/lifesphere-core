const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // load .env

const app = express();
const SECRET_KEY = process.env.JWT_SECRET || "SECRET_KEY";

// Middleware to protect routes
function authenticateToken(req, res, next) {
    let token = null;

    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }

    if (!token && req.query.token) {
        token = req.query.token;
    }

    if (!token) return res.status(401).json({ error: 'Token required' });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
}

// Helper to create proxy with optional JWT protection
function proxy(path, target, protectedRoute = true) {
    const middleware = createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: (p) => p.replace(path, ''),
        logLevel: 'debug',
    });

    if (protectedRoute) {
        app.use(path, authenticateToken, middleware);
    } else {
        app.use(path, middleware);
    }
}

// ====== Public services ======
proxy('/auth', `http://auth-service:${process.env.AUTH_SERVICE_PORT}`, false);
proxy('/health', `http://health-service:${process.env.HEALTH_SERVICE_PORT}`, false);

// ====== Core services ======
proxy('/users', `http://user-service:${process.env.USER_SERVICE_PORT}`);
proxy('/life', `http://life-os-service:${process.env.LIFE_OS_SERVICE_PORT}`);
proxy('/cognitive', `http://cognitive-service:${process.env.COGNITIVE_SERVICE_PORT}`);
proxy('/recommend', `http://recommendation-service:${process.env.RECOMMENDATION_SERVICE_PORT}`);
proxy('/finance', `http://finance-service:${process.env.FINANCE_SERVICE_PORT}`);
proxy('/learning', `http://learning-service:${process.env.LEARNING_SERVICE_PORT}`);
proxy('/worklife', `http://worklife-service:${process.env.WORKLIFE_SERVICE_PORT}`);
proxy('/relationship', `http://relationship-service:${process.env.RELATIONSHIP_SERVICE_PORT}`);
proxy('/health-ai', `http://health-ai-service:${process.env.HEALTH_AI_SERVICE_PORT}`);
proxy('/notify', `http://notification-service:${process.env.NOTIFICATION_SERVICE_PORT}`);
proxy('/logs', `http://logging-service:${process.env.LOGGING_SERVICE_PORT}`);

// ====== Specialized services ======
proxy('/marketplace', `http://marketplace-service:${process.env.MARKETPLACE_SERVICE_PORT}`);
proxy('/social_feed', `http://social_feed-service:${process.env.SOCIAL_FEED_SERVICE_PORT}`);
proxy('/video_streaming', `http://video_streaming-service:${process.env.VIDEO_STREAMING_SERVICE_PORT}`);
proxy('/chat_messaging', `http://chat_messaging-service:${process.env.CHAT_MESSAGING_SERVICE_PORT}`);
proxy('/gaming', `http://gaming-service:${process.env.GAMING_SERVICE_PORT}`);
proxy('/content_hub', `http://content_hub-service:${process.env.CONTENT_HUB_SERVICE_PORT}`);
proxy('/events_ticketing', `http://events_ticketing-service:${process.env.EVENTS_TICKETING_SERVICE_PORT}`);
proxy('/travel_location', `http://travel_location-service:${process.env.TRAVEL_LOCATION_SERVICE_PORT}`);
proxy('/ar_ai_experience', `http://ar_ai_experience-service:${process.env.AR_AI_EXPERIENCE_SERVICE_PORT}`);
proxy('/groups_community', `http://groups_community-service:${process.env.GROUPS_COMMUNITY_SERVICE_PORT}`);
proxy('/influencer_creator', `http://influencer_creator-service:${process.env.INFLUENCER_CREATOR_SERVICE_PORT}`);
proxy('/social_commerce', `http://social_commerce-service:${process.env.SOCIAL_COMMERCE_SERVICE_PORT}`);
proxy('/viral_engagement', `http://viral_engagement-service:${process.env.VIRAL_ENGAGEMENT_SERVICE_PORT}`);
proxy('/multimedia', `http://multimedia-service:${process.env.MULTIMEDIA_SERVICE_PORT}`);
proxy('/rtc', `http://rtc-service:${process.env.RTC_SERVICE_PORT}`);

app.get('/', (req, res) => {
    res.send('<h3>LifeSphere Dev Gateway</h3><p>Use /auth, /users, /marketplace, etc.</p>');
});

const PORT = process.env.API_GATEWAY_PORT || 4000;
app.listen(PORT, () =>
    console.log(`API Gateway running on port ${PORT} — open http://localhost:${PORT}`)
);
