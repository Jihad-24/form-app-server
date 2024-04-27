var express = require('express');
const Forms = require('../../modals/Forms/Forms');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/formDetails/:id',verifyToken, async (req, res) => {
    const id = req.params.id
    const result = await Forms.findById(id)
    res.send(result)
})
module.exports = router