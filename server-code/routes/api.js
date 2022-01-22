import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('hi');
});

router.get('/cards', async (req, res) => {
    let cards = await req.db.Card.find();

});

router.get('/card/:cardID', async (req, res) => {
    try {
        let card = await req.db.Card.findById(req.params.cardID);
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

router.patch('/card/:cardID', async (req, res) => {
    try {
        let card = req.db.Card.findOne(req.params.cardID);
    } catch(e) {
        let jsonErrorResponse = {
            status: "error",
            error: "error: " + e
        }
        res.type('json');
        res.send(JSON.stringify(jsonErrorResponse));
    }
});

router.post('/card', async (req, res) => {

});

export default router;



