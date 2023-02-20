const express = require("express");
const router = express.Router();

const {
  getJob,
  deleteJob,
  createJob,
  updateJob,
  getAllJobs,
} = require("../controllers/job");

router.post("/", createJob);
router.get("/", getAllJobs);
router.get("/:id", getJob);
router.delete("/:id", deleteJob);
router.patch("/:id", updateJob);

module.exports = router;
