import mongoose from 'mongoose';

main().catch(err => console.log(err));

let db = {};

async function main() {
  console.log("connecting to mongodb")
  console.log(process.env.MONGODB_PWD)
  await mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PWD}@capstone.66pej.mongodb.net/idctoolkit?retryWrites=true&w=majority`);
  console.log("connected to mongodb")


  const fullCardSchema = new mongoose.Schema({
    submitter_name: String,
    submitter_email: String,
    paper_title: String,
    author: [String],

  });

  db.FullCard = mongoose.model('FullCard', fullCardSchema);

  const cardSchema = new mongoose.Schema({
    full_card: {type: mongoose.Schema.Types.ObjectId, ref: 'FullCard'},

  });
  db.Card = mongoose.model('Card', cardSchema);
  
  console.log("finished mongodb schema");
}

export default db;