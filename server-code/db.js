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
    domain: [String],
    subject: [String],
    tech_system: Boolean,
    goal: String,
    goal_descr: String,
    activity: String,
    support: String,
    interaction: String,
    insight: String,
    principles: String,
    success: String,
    unsuccess: String,
    takaways: String,
    // card summary
    min_age: Number,
    max_age: Number,
    sub_domain: [String],
    platform: String,
    context: String,
    research_title: String,
    key_words: [String],
    summary: String

  });

  db.FullCard = mongoose.model('FullCard', fullCardSchema);

//   const cardSchema = new mongoose.Schema({
//     full_card: {type: mongoose.Schema.Types.ObjectId, ref: 'FullCard'},
//     min_age: Number,
//     max_age: Number,
//     sub_domain: [String],
//     platform: String,
//     context: String,
//     research_title: String,
//     key_words: [String],


//   });
//   db.Card = mongoose.model('Card', cardSchema);
  
  console.log("finished mongodb schema");
}

export default db;