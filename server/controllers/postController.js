const getAllPostsController = async (req, res) => {
  console.log(req._id);
  return res.send("These are all the post");
};
module.exports = { getAllPostsController };
