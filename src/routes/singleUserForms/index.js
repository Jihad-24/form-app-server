var express = require('express');
const Forms = require('../../modals/Forms/Forms');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/singleUserForm/:email', verifyToken, async (req, res) => {
    const query = { userEmail: req.params.email }
    const result = await Forms.find(query)
    const reverseData = result.reverse()
    res.send(reverseData)
})
module.exports = router