const express = require('express');
const router = express.Router();
const { readFolder, fileContent } = require('../controller/file');

router.post('/', readFolder);
router.post('/file', fileContent);
router.post('/keywords', keyWords);

module.exports = router;
