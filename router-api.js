const apiRouter = require("express").Router();
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");
const followController = require("./controllers/followController");

apiRouter.post("/login", function (req, res) {
  userController.apiLogin(req, res);
});

apiRouter.post(
  "/create-post",
  userController.apiMustBeLoggedIn,
  postController.apiCreate
);

apiRouter.delete(
  "/post/:id",
  userController.apiMustBeLoggedIn,
  postController.apiDelete
);

apiRouter.get("/postsByAuthor/:username", function (req, res) {
  userController.apiGetPostsByUsername(req, res);
});

module.exports = apiRouter;
