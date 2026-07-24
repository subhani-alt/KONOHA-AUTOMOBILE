const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Security and CORS middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/vehicles', require('./routes/vehicleRoutes'));
app.use('/api/configurator', require('./routes/configRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/dealers', require('./routes/dealerRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    brand: 'VALENCE AUTOMOBILI',
    system: 'AAA Hypercar Unified Server v1.0',
    timestamp: new Date(),
  });
});

// Serve Client Static Build Files (Unified Production Frontend + Backend)
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// React SPA Fallback Route for non-API requests
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[VALENCE ERROR]', err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`[VALENCE AUTOMOBILI] UNIFIED PLATFORM IS LIVE!`);
  console.log(`👉 Access Unified App: http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
