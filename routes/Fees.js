const express = require('express')
const router = express.Router()
const FeesRecord = require('../Controllers/FeesController')

router
  .route('/')
  .get(FeesRecord.getAllFees)
  .post(FeesRecord.CreateFees)
  .put(FeesRecord.UpdateFees)
  .delete(FeesRecord.deleteFeess)

module.exports = router
