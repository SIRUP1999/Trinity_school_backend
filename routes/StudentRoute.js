const express = require('express')
const router = express.Router()
const RegisterController = require('../Controllers/RegisterControllers')
router
  .route('/')
  .get(RegisterController.getAllStudents)
  .post(RegisterController.createNewStudent)
  .patch(RegisterController.UpdateStudent)
  .delete(RegisterController.deleteStudent)
module.exports = router
