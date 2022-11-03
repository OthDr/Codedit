const express = require('express');
const router = express.Router();
const { readFolder, fileContent } = require('../controller/file');

router.post('/', readFolder);
router.post('/file', fileContent);

module.exports = router;
