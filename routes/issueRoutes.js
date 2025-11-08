const express = require("express");
const {
  createIssue,
  getIssues,
  updateIssueStatus,
} = require("../controllers/issueController");

const router = express.Router();

router.post("/", createIssue);       // POST: /api/issues
router.get("/", getIssues);          // GET: /api/issues
router.put("/:id", updateIssueStatus); // PUT: /api/issues/:id

module.exports = router;
