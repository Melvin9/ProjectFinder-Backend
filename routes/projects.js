const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projects");

router
  .get('/', projectController.get_all)
  .post('/', projectController.create_project)
  .get('/:id', projectController.get_project)
  .patch('/:id', projectController.update_project)
  .delete('/:id', projectController.remove_project);

module.exports = router;
