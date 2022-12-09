require('dotenv-safe').config();
const jwt = require('jsonwebtoken');
const http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');

const app = express();

// Proxy
const usuariosServiceProxy = httpProxy('http://localhost:5000');
const boisServiceProxy = httpProxy('http://localhost:5001');

// Configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(helmet());
app.use(cookieParser());

function verifyJWT(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'Token não fornecido.' });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar o token.' });
    req.userId = decoded.id;
    next();
  });
}

app.post('/login', (req, res, next) => {
  if (req.body.user === 'admin' && req.body.password === 'admin') {
    // auth ok
    const id = 1; // deveria vir do serviço de autenticação
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300,
    });
    return res.json({ auth: true, token });
  }

  res.status(500).json({ message: 'Login inválido!' });
});

app.post('/logout', (req, res) => {
  res.json({ auth: false, token: null });
});

app.get('/usuarios', verifyJWT, (req, res, next) => {
  usuariosServiceProxy(req, res, next);
});

app.get('/bois', verifyJWT, (req, res, next) => {
  boisServiceProxy(req, res, next);
});

const server = http.createServer(app);
server.listen(3000, () => console.log('Server running on port 3000'));
