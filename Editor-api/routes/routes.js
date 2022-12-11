const express = require('express');
const router = express.Router();
const { readFolder, fileContent, createFile } = require('../controller/file');

router.post('/', readFolder);
router.post('/file', fileContent);
router.post('/create', createFile);

module.exports = router;
