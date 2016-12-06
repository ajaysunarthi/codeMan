var express = require('express');

var router = express.Router();

var Card = require('./model.js');

// router.use(function(req, res, next) {
//     console.log('Some request is used !');
//     next();
// });

router.route('/cards')

	.post(function(req, res) {
        var card = new Card();
        card.title = req.body.title;
        card.description = req.body.description;
        card.code = req.body.code;

        card.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Card created!' });
        });

    })
    .get(function(req, res) {
    	Card.find(function(err, cards) {
			if (err)
				res.send(err);

			res.json(cards);
		});
    });

router.route('/cards/:card_id')

    .get(function(req, res) {
    	Card.findById(req.params.card_id, function(err, card) {
			if (err)
				res.send(err);
			res.json(card);
		});
    })

    .put(function(req, res) {
		Card.findById(req.params.card_id, function(err, card) {

			if (err)
				res.send(err);

			card.name = req.body.name;
			card.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'card updated!' });
			});

		});
	})
	.delete(function(req, res) {
		Card.remove({
			_id: req.params.card_id
		}, function(err, card) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted card' });
		});
	});

module.exports = router;