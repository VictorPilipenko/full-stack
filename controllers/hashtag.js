  
const Hashtag = require('../models/hashtag');

const hashtag_post = (req, res) => {
  Hashtag.add(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json({ message: "cannot add hashtag" });
    });
}

module.exports = {
  hashtag_post, 
}
