const express = require("express");
const router = express.Router();
const {
  getGoodFirstIssues,
  getHelpWantedIssues,
  getFirstTimersOnly,
  getAllIssues,
  healthCheck,
} = require("../controllers/issues");

router.get("/", healthCheck);
router.get("/goodfirstissues/:org/:repo", getGoodFirstIssues);
router.get("/helpwantedissues/:org/:repo", getHelpWantedIssues);
router.get("/firsttimersonly/:org/:repo", getFirstTimersOnly);
router.get("/all/:org/:repo", getAllIssues);

module.exports = router;
