
import fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import connection from './dbconfig.js';

const app = express();
app.use(cors());
const fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);
app.use(express.static(path.resolve(__dirname, '../src/dist')))


// Get the absolute path to index.html
const html = path.resolve(__dirname, '../src/dist/index.html');
console.log(html);

// Get the absolute path to product.json
const filePath = path.join(__dirname, 'product.json');

// Read and parse the file
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading JSON file:', err);
//         return;
//     }
//     const jsonData = JSON.parse(data);
//     jsonData.products.forEach((keyboard) => {
//         const insertQuery =
//             'INSERT INTO product_table (title, des, price, img, hotswap, size) VALUES (?, ?, ?, ?, ?, ?)';
//         const values = [
//             keyboard.name,
//             keyboard.description,
//             keyboard.price,
//             keyboard.image,
//             keyboard.hotSwap,
//             keyboard.size,
//         ];
//         connection.query(insertQuery, values, (err, result) => {
//             if (err) throw err;
//         });
//     });
// });

app.get('/', (req, res) => {
    res.sendFile(html); // Serve the index.html file
});

app.get('/api/products', (req, res) => {
    const productsQuery = 'SELECT * FROM sql5759865.product_table LIMIT 12;'

    connection.query(productsQuery, (err, result) =>{
        if (err) throw err;
        return res.send(result); 
    })
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
