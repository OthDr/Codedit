const { readdir, readFile } = require('node:fs/promises');

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
    const data = content.toString();
    return res.json({ message: 'File Found.', data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error Reading File Content', error });
  }
};

module.exports = {
  readFolder,
  fileContent,
};
