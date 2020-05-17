const express = require("express");
const router = express.Router();
const physicsController = require("../controllers/physics");

router
  .get('/', physicsController.get_all)
  .post('/', physicsController.create_project)
  .get('/:id', physicsController.get_project)
  .patch('/:id', physicsController.update_project)
  .delete('/:id', physicsController.remove_project);

module.exports = router;
