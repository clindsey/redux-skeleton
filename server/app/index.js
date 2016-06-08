import express from 'express';
import bodyParser from 'body-parser';
import fallback from 'express-history-api-fallback';
import config from './config';

const app = express();

const root = `${__dirname}/${config.appAssetsLocation}`;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(root));
app.use(fallback('index.html', {root}));
app.listen(config.port);

console.log(`listening on port ${config.port}`);
