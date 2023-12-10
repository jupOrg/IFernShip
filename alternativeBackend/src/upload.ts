import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "/tmp/my-uploads");
  },
  filename: function (req, file, callback) {
    const filename = file.fieldname + "-" + Date.now()
    callback(null, filename);
  },
});

export const upload = multer({ storage: storage })
