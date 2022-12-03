const { readdir, readFile } = require('node:fs/promises');
const path = require('path');

const readFolder = async (req, res) => {
  const { folderPath } = req.body;
  if (!folderPath) {
    return res.status(404).json({ message: 'NO Path were provided.' });
  }
  try {
    const files = await readdir(folderPath);
    const folder = folderPath.slice('/');
    // for (const file of files) console.log(file);
    return res.json({ message: 'Folder Found.', files, folder });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Folder not found.', err });
  }
};

const fileContent = async (req, res) => {
  const { fileName, folderPath } = req.body;
  if (!folderPath) {
    return res.status(404).json({ message: 'NO Path were provided.' });
  }
  if (!fileName) {
    return res.status(404).json({ message: 'File does not exists.' });
  }
  try {
    const content = await readFile(folderPath + '/' + fileName);
    const fileContent = content.toString();
    const fileExtension = path.extname(`${folderPath}/${fileName}`);
    return res.json({ message: 'File Found.', fileContent, fileExtension });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: 'Error Reading File Content', error });
  }
};

const keyWords = (req, res) => {
  return [
    'await',
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'import',
    'in',
    'instanceof',
    'new',
    'null',
    'return',
    'super',
    'switch',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
  ];
};

module.exports = {
  readFolder,
  fileContent,
};
