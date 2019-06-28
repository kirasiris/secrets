const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
// Models
const Secret = require('../../models/Secrets');

// @route       POST api/secrets
// @description Create a secret
// @access      Public
router.post(
  '/',
  [
    [
      check('age', 'Age is required')
        .not()
        .isEmpty(),
      check('sex', 'Sex is required')
        .not()
        .isEmpty(),
      check('text', 'Text is required')
        .not()
        .isEmpty(),
      check('nsfw', 'NSFW is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newSecret = new Secret({
        age: req.body.age,
        sex: req.body.sex,
        text: req.body.text,
        nsfw: req.body.nsfw
      });

      const secret = await newSecret.save();
      res.json(secret);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route       GET api/secrets
// @description Get all secrets
// @access      Public

router.get('/', async (req, res) => {
  try {
    const secrets = await Secret.find().sort({ date: -1 });
    res.json(secrets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       GET api/secrets/male
// @description Get all male secrets
// @access      Public
router.get('/male', async (req, res) => {
  try {
    const secrets = await Secret.find({ sex: 'male' }).sort({ date: -1 });
    res.json(secrets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       GET api/secrets/female
// @description Get all female secrets
// @access      Public
router.get('/female', async (req, res) => {
  try {
    const secrets = await Secret.find({ sex: 'female' }).sort({ date: -1 });
    res.json(secrets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       GET api/secrets/other
// @description Get all other secrets
// @access      Public
router.get('/other', async (req, res) => {
  try {
    const secrets = await Secret.find({ sex: 'other' }).sort({ date: -1 });
    res.json(secrets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       GET api/secrets/nsfw
// @description Get all NSFW secrets
// @access      Public
router.get('/nsfw', async (req, res) => {
  try {
    const secrets = await Secret.find({ nsfw: 'yes' }).sort({ date: -1 });
    res.json(secrets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       GET api/secrets/:id
// @description Get secret by :id
// @access      Public
router.get('/:id', async (req, res) => {
  try {
    const secret = await Secret.findById(req.params.id);

    if (!secret) {
      return res.status(404).json({ msg: 'Secret not found' });
    }

    res.json(secret);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Secret not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route       DELETE api/secrets/:id
// @description Delete a secret
// @access      Public........function not needed
router.delete('/:id', async (req, res) => {
  try {
    const secret = await Secret.findById(req.params.id);
    // Check post
    if (!secret) {
      return res.status(404).json({ msg: 'Secret not found' });
    }

    await secret.remove();
    res.json({ msg: 'Secret removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Secret not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route       PUT api/secrets/like/:id
// @description Like a secret
// @access      Public
router.put('/like/:id', async (req, res) => {
  try {
    const secret = await Secret.findById(req.params.id);

    if (!secret) {
      return res.status(400).send(`no secret with id ${req.params.id} exists`);
    }

    secret.likes.push(1);

    await secret.save();
    res.json(secret.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       PUT api/secrets/unlike/:id
// @description Unlike a secret
// @access      Public
router.put('/unlike/:id', async (req, res) => {
  try {
    const secret = await Secret.findById(req.params.id);

    // Get remove index
    const removeIndex = secret.likes
      .map(like => like.id)
      .indexOf(req.params.id);

    secret.likes.splice(removeIndex, 1);

    await secret.save();
    res.json(secret.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       PUT api/secrets/like/:id
// @description Like a comment
// @access      Public
router.put('/like/:id', async (req, res) => {
  try {
    const secret = await Secret.findById(req.params.id);

    while (secret.likes <= 0) {
      secret.likes++;
    }

    await secret.save();
    res.json(secret.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       PUT api/secrets/unlike/:id
// @description Unlike a comment
// @access      Public
router.put('/unlike/:id', async (req, res) => {
  try {
    const secret = await Secret.findById(req.params.id);

    // Get remove index
    const removeIndex = secret.likes
      .map(like => like.id)
      .indexOf(req.params.id);

    secret.likes.splice(removeIndex, 1);

    await secret.save();
    res.json(secret.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       POST api/secrets/comment/:id
// @description Comment on a secret
// @access      Public
router.post(
  '/comment/:id',
  [
    [
      check('age', 'Age is required')
        .not()
        .isEmpty(),
      check('sex', 'Sex is required')
        .not()
        .isEmpty(),
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const secret = await Secret.findById(req.params.id);

      const newComment = {
        age: req.body.age,
        sex: req.body.sex,
        text: req.body.text
      };

      secret.comments.unshift(newComment);

      await secret.save();
      res.json(secret.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route       DELETE api/secrets/comment/:id/:comment_id
// @description Delete comment
// @access      Public
router.delete('/comment/:id/:comment_id', async (req, res) => {
  try {
    const secret = await Secret.findById(req.params.id);

    // Pull out comment
    const comment = secret.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exists' });
    }

    secret.comments.splice(1);

    await secret.save();
    res.json(secret.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;
