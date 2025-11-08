const Issue = require("../models/issueModel");

// Add new issue
exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create(req.body);
    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all issues
exports.getIssues = async (req, res) => {
  try {
    const issues = await Issue.find();
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update issue status
exports.updateIssueStatus = async (req, res) => {
  try {
    const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
