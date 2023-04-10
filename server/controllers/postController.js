const { success } = require("../utils/responseWrapper");
const getAllPostsController = async (req, res) => {
  console.log(req._id);
  return res.send(success(200, "These are all the post"));
};
module.exports = { getAllPostsController };
