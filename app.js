import express from 'express';
import sequelize from './models/sequelize.js';
import productRoutes from './routes/productRoutes.js';
import consumerRoutes from './routes/consumerRoutes.js';


// kebutuhan untuk template anggine
import path from 'path';
import {
    fileURLToPath
} from 'url';

// Mendapatkan __dirname menggunakan fileURLToPath
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000

// Set EJS as template engine
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.static('public')); //memabaca file static dari folde public

// Routes
app.use(productRoutes);
app.use(consumerRoutes);

// Home route
app.get('/', (req, res) => {
    res.render('dashboard');
});

app.get('/products', (req, res) => {
    res.render('product');
});

app.get('/consumers', (req, res) => {
    res.render('consumer');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});