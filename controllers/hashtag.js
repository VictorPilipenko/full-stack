
const Hashtag = require('../models/hashtag');

const hashtag_post = (req, res) => {
  Hashtag.add(req.body)
    .then(hashtag => {
      res.status(200).json(hashtag);
    })
    .catch(() => {
      res.status(500).json({ message: "cannot add hashtag" })
    });
}

const hashtag_getAll = (req, res) => {
  Hashtag.find()
    .then(hashtags => {
      res.status(200).json(hashtags);
    })
    .catch(() => {
      res.status(500).json({ message: "unable to retrieve hashtags" })
    });
}

const hashtag_getOne = (req, res) => {
  const { id } = req.params
  Hashtag.findById(id)
    .then(hashtag => {
      hashtag ?
        res.status(200).json(data) :
        res.status(404).json({ message: "hashtag not found" })
    })
    .catch(() => {
      res.status(500).json({ message: "unable to retrieve hashtag" })
    });
}


const hashtag_delete = (req, res) => {
  const { id } = req.params
  Hashtag.remove(id)
    .then(count => {
      count > 0 ?
        res.status(200).json({ message: "hashtag successfully deleted" }) :
        res.status(404).json({ message: "unable to locate hashtag" })
    })
    .catch(() => {
      res.status(500).json({ message: "unable to delete" })
    });
}



module.exports = {
  hashtag_post,
  hashtag_getAll,
  hashtag_getOne,
  hashtag_delete,
}
