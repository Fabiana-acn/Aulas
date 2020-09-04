import mongoose from 'mongoose';

import podcastModel from './podcastModel.js';

const db = {};
//variaveis
db.url = process.env.MONGO_URL;
db.mongoose = mongoose;
db.podcast = podcastModel(mongoose);

export { db };
