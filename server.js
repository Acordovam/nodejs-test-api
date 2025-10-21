import express from 'express';
import 'dotenv/config'; 

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Desplegado en Render!');
});
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ESM corriendo en el puerto ${PORT}`);
});