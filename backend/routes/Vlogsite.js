const express = require("express");
const router = express.Router();
const {
  getVlogsites,
  getVlogsite,
  createVlog,
  deleteVlog,
  updateVlog,
} = require("../controllers/VlogsiteController");

// get all vlogs
router.get("/", getVlogsites);

// get single vlog
router.get("/:id", getVlogsite);

// create vlog
router.post("/", createVlog);

// delete vlog
router.delete("/:id", deleteVlog);

// update vlog
router.patch("/:id", updateVlog);

module.exports = router;
