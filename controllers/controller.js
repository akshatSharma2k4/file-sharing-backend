const FileModel = require("../models/fileModel");

const uploadController = async (req, resp) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await FileModel.create(fileObj);
    console.log(file);

    resp.status(200).json({
      success: true,
      path: `${BASE_URL_BACKEND}/${file._id}`,
    });
  } catch (err) {
    console.log("Error" + err);
    resp.status(500).json({ msg: "Error here" });
  }
};
const downloadController = async (req, resp) => {
  try {
    const file = await FileModel.findById(req.params.id);
    file.downloadContent++;
    await file.save();
    resp.download(file.path, file.name);
  } catch (error) {
    console.log("Error" + error);
    resp.status(500).json({ msg: "Error" });
  }
};
module.exports = { uploadController, downloadController };
