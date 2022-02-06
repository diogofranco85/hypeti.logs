import mongoose from "mongoose";

const host = process.env.DB_MONGO_HOST
const dbname = process.env.DB_MONGO_NAME;

mongoose.connect(`mongodb://${host}/${dbname}`, { useNewUrlParser: true })
    .then(() => {
        console.log('Conectado ao banco mongo');
    })
    .catch(err => {
        console.log(`Error: ${err}`);
        console.log(`URL: ${host}/${dbname}`);
    });

mongoose.Promise = global.Promise;

export default mongoose;