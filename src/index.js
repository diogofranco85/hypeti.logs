import 'dotenv/config';
import express, { response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import queue from './config/rabbit';
import dtoLog from './app/request/Log';
import logService from './app/services/Log';

const app = express();
app.use(helmet());

if (process.env.NODE_ENV !== 'production')
    app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes);

app.get('/send', (request, response) => {
    queue.sendToQueue(process.env.CHANNEL_LOG, request.body);
    response.json({
        success: true,
        result: request.body
    })
})

queue.consume(process.env.CHANNEL_LOG, async message => {
    const content = JSON.parse(String(message.content));
    const dto = await dtoLog.fromMessaging(content);
    logService.create(dto);
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Service LOG started in port: ${PORT}`);
})