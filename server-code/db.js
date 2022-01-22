import mongoose from 'mongoose';

main().catch(err => console.log(err));

let db = {};

async function main() {
  console.log("connecting to mongodb")
  console.log(process.env.MONGODB_PWD)
  await mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PWD}@capstone.66pej.mongodb.net/idctoolkit?retryWrites=true&w=majority`);
  console.log("connected to mongodb")
  
  const cardSchema = new mongoose.Schema({
    url: String,
    description: String,
    created_date: Date
  });
  db.Card = mongoose.model('Card', cardSchema);

  
  console.log("finished mongodb schema");
}

export default db;