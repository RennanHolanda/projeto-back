const express = require("express");
const router = express.Router();
const HomeControlller = require("../controllers/HomeController");

router.get("/", HomeControlller.index);

router.get("/home/add_user", HomeControlller.showRegister);
router.post("/home/add_user", HomeControlller.store);
router.get("/home/:id/edit_user", HomeControlller.showEdit);
router.put("/home/:id/edit_user", HomeControlller.update);
router.delete("/home/:id/delete", HomeControlller.destroy);

router.get("/home/users", HomeControlller.showUsers);
router.get("/home/show/:id/users", HomeControlller.showUser);
router.get("/home/search", HomeControlller.search);

module.exports = router;
