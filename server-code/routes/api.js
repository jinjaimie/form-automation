import express from 'express';

var router = express.Router();

/* GET test. */
router.get('/', function(req, res) {
  res.send('hi');
});

router.get('/cards', async (req, res) => {
    try {
        let cards = await req.db.Card.find();
        let summary = cards.map(card => {
            return {min_age: card.min_age,
                max_age: card.max_age,
                sub_domain: card.sub_domain,
                platform: card.platform,
                context: card.context,
                research_title: card.research_title,
                key_words: card.key_words,
                summary: card.summary}
        })
        res.json(summary);
    } catch(e) {
        let jsonErrorResponse = {
            status: "error",
            error: "error: " + e
        }
        res.type('json');
        res.send(JSON.stringify(jsonErrorResponse));
    }

});

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

// // to do
// router.patch('/card/:cardID', async (req, res) => {
//     try {
//         let card = req.db.Card.findOne(req.params.cardID);
//         // to do
//     } catch(e) {
//         let jsonErrorResponse = {
//             status: "error",
//             error: "error: " + e
//         }
//         res.type('json');
//         res.send(JSON.stringify(jsonErrorResponse));
//     }
// });

// to do
router.post('/card', async (req, res) => {
    try{
        const newCard = new req.db.Card({
            submitter_name: req.body.submitter_name,
            submitter_email: req.body.submitter_email,
            paper_title: req.body.paper_title,
            authors: req.body.authors,
            domain: req.body.domain,
            subject: req.body.subject,
            tech_system: req.body.tech_system,
            goal: req.body.goal,
            goal_descr: req.body.goal_descr,
            activity: req.body.activity,
            support: req.body.support,
            interaction: req.body.interaction,
            insight: req.body.insight,
            principles: req.body.principles,
            success: req.body.success,
            unsuccess: req.body.unsuccess,
            takaways: req.body.takaways,
            min_age: req.body.min_age,
            max_age: req.body.max_age,
            sub_domain: req.body.sub_domain,
            platform: req.body.platform,
            context: req.body.context,
            research_title: req.body.research_title,
            key_words: req.body.key_words,
            summary: req.body.summary
        });

        let response = await newCard.save();

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

export default router;



