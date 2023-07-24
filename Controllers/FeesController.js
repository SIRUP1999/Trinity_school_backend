const Fees = require('../Model/Fees')

const getAllFees = async (req, res) => {
  const StudentFS = await Fees.find().lean().exec()

  if (!StudentFS.length) return res.status(400).send('No fees Found')
  res.status(200).json(StudentFS)
}

const CreateFees = async (req, res) => {
  const {
    student_name,
    Received_From,
    The_Sum_Of,
    Being,
    GHC,
    Balance,
    Signature,
  } = req.body

  if (
    !student_name ||
    !Received_From ||
    !The_Sum_Of ||
    !Being ||
    !GHC ||
    !Balance ||
    !Signature
  )
    return res.status(403).json({ message: 'All fields Are Required' })

  const duplicate = await Fees.findOne({ student_name })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec()
  if (duplicate)
    return res.status(403).json({
      message:
        'duplicate Student,please be careful,this place is about finances',
    })

  const fees = await Fees.create({
    student_name,
    Received_From,
    The_Sum_Of,
    Being,
    GHC,
    Balance,
    Signature,
  })
  if (fees) {
    res.status(200).json({
      message:
        'Fees Record Created SucessFully,please keep your ID safe for future reference',
    })
  } else {
    res.status(200).json({
      message: 'Something Went Wrong',
    })
  }
}

const UpdateFees = async (req, res) => {
  const {
    id,
    student_name,
    Received_From,
    The_Sum_Of,
    Being,
    GHC,
    Balance,
    Signature,
  } = req.body

  if (
    (!student_name,
    !Received_From || !The_Sum_Of || !Being || !GHC || !Balance || !Signature)
  )
    return res.status(403).json({ message: 'All fields Are Required' })

  const StudentFs = await Fees.findOne({ student_name }).exec()

  if (!StudentFs)
    return res
      .status(403)
      .json({ message: 'please provide an id or a correct id' })
  ;(StudentFs.Received_From = Received_From),
    (StudentFs.The_Sum_Of = The_Sum_Of),
    (StudentFs.Being = Being),
    (StudentFs.GHC = GHC),
    (StudentFs.Balance = Balance),
    (StudentFs.Signature = Signature)

  await StudentFs.save()
  res
    .status(200)
    .json({ message: `student ${student_name}  fees Record updated` })
}

const deleteFeess = async (req, res) => {
  const { id } = req.body
  const StudentFs = await Fees.findById(id).exec()

  if (!StudentFs)
    return res.status(400).json({ message: 'no Student with this ID' })
  await StudentFs.deleteOne()

  res
    .status(200)
    .json({ message: `student  wit ID ${StudentFs._id} deleted sucessfully` })
}
module.exports = {
  getAllFees,
  CreateFees,
  UpdateFees,
  deleteFeess,
}
