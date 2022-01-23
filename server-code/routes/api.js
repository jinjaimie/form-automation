import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('hi');
});

// to do
router.get('/cards', async (req, res) => {
    let cards = await req.db.Card.find();

});

// to do
router.get('/card/:cardID', async (req, res) => {
    try {
        let card = await req.db.Card.findById(req.params.cardID);
        res.json(card);
    } catch(e) {
        let jsonErrorResponse = {
            status: "error",
            error: "error: " + e
        }
        res.type('json');
        res.send(JSON.stringify(jsonErrorResponse));
    }
});

router.delete('/card/:cardID', async (req, res) => {
    try{
        const cardToDelete = await req.db.Post.findById(req.param.cardID);
        let cardID = cardToDelete.id;
        let deletedCardInfo = await req.db.Post.deleteOne({_id: cardID});

        res.type('json');
        res.send("{status: 'success'}");
    }catch(e){
        let jsonErrorResponse = {
            status: "error",
            error: "error: " + e
        }
        res.type('json');
        res.send(JSON.stringify(jsonErrorResponse));
    }
});

// to do
router.patch('/card/:cardID', async (req, res) => {
    try {
        let card = req.db.Card.findOne(req.params.cardID);
        // to do
    } catch(e) {
        let jsonErrorResponse = {
            status: "error",
            error: "error: " + e
        }
        res.type('json');
        res.send(JSON.stringify(jsonErrorResponse));
    }
});

// to do
router.post('/card', async (req, res) => {
    try{
        const newPost = new req.db.Post({
            submitter_name: req.body.submitter_name,
            submitter_email: req.body.submitter_email,
            paper_title: req.body.paper_title,
            authors: req.body.authors,
            domain: req.body.domain,
            subject: req.body.subject,
            tech_system: req.body.tech_system,
            goal: req.body.goal,
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
        let response = await newPost.save();

        res.type('json');
        res.send("{status: 'success'}");
    }catch(error){
        let jsonErrorResponse = {
            status: "error",
            error: "error: " + error
        }
        res.type('json');
        res.send(JSON.stringify(jsonErrorResponse));
    }

});

export default router;



