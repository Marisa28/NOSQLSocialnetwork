const router = require('express').Router();
const {
    allThought,
    singleThought,
    newThought,
    updateThought,
    removeThought,
    addReply,
    removeReply,

} = require('../../controllers/thought-controller');
router.route('/').get(allThought).post(newThought);

router.route('/:thoughtId').get(singleThought).put(updateThought).delete(removeThought);

// /api/comments/<thoughtId>/reaction>
router
.route('/:thoughtId/reaction')
.post(addReply)


// /api/comments/<thoughtId>/reaction>/<replyId>
router.route('/:thoughtId/reaction/:reactionId').delete(removeReply);

module.exports = router;
