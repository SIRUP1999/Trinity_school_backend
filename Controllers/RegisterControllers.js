const StudentRegisteration = require('../Model/Register')

const getAllStudents = async (req, res) => {
  const students = await StudentRegisteration.find().lean().exec()
  if (!students.length) return res.status(400).send('No User Found')
  res.status(201).json(students)
}

const createNewStudent = async (req, res) => {
  const {
    id,
    photo,
    firstname,
    Surname,
    Date_Of_Birth,
    Place_Of_Birth,
    Gender,
    Year_In_Which_Admission_Is_Sought,
    Ghanaian_Language_Spoken,
    Region,
    Nationality,
    Home_Town,
    Religion_And_Denomination,
    Mother_Tongue,
    Name_Of_School,
    // Admittion_details,
    // Last_Attendance_Date,
    // How_Did_You_Hear_About_Trinity_Christian_Mission_School,
    // What_Are_Your_Reasons_For_Leaving_Your_Previous_School,
  } = req.body

  if (
    !photo ||
    !firstname ||
    !Surname ||
    !Date_Of_Birth ||
    !Place_Of_Birth ||
    !Gender ||
    !Year_In_Which_Admission_Is_Sought ||
    !Ghanaian_Language_Spoken ||
    !Region ||
    !Nationality ||
    !Home_Town ||
    !Religion_And_Denomination ||
    !Mother_Tongue ||
    !Name_Of_School
    // !Admittion_details ||
    // !Last_Attendance_Date ||
    // !How_Did_You_Hear_About_Trinity_Christian_Mission_School ||
    // !What_Are_Your_Reasons_For_Leaving_Your_Previous_School
  )
    return res.json({ message: 'error' })
  const duplicate = await StudentRegisteration.findById(id).exec()
  if (duplicate) return res.status(409).send('Student already exist')

  const newStudent = {
    photo,
    firstname,
    Surname,
    Gender,
    Date_Of_Birth,
    Place_Of_Birth,
    Mother_Tongue,
    Religion_And_Denomination,
    Ghanaian_Language_Spoken,
    Home_Town,
    Nationality,
    Region,
    Year_In_Which_Admission_Is_Sought,
    Name_Of_School,
    // Admittion_details: Previouse_School_Attended.Admittion_details,
    // Last_Attendance_Date: Previouse_School_Attended.Last_Attendance_Date,
    // How_Did_You_Hear_About_Trinity_Christian_Mission_School:
    //   Previouse_School_Attended.How_Did_You_Hear_About_Trinity_Christian_Mission_School,
    // What_Are_Your_Reasons_For_Leaving_Your_Previous_School:
    //   Previouse_School_Attended.What_Are_Your_Reasons_For_Leaving_Your_Previous_School,
  }

  await StudentRegisteration.create(newStudent)
  res.status(201).json({ message: 'Student Registered successfully!' })
}

const UpdateStudent = async (req, res) => {
  const Student = await StudentRegisteration.findById(id).exec()
  if (!Student) return res.sendStatus(403) //forbidden
  const foundStudent = await StudentRegisteration.findOne({
    firstname,
    surname,
  })
  if (!foundStudent)
    return res.status(400).json({ message: 'no student found' })
  ;(photo = Details_Of_pupil.photo),
    (firstname = Details_Of_pupil.firstname),
    (Surname = Details_Of_pupil.Surname),
    (Gender = Details_Of_pupil.Gender)
  ;(Date_Of_Birth = Details_Of_pupil.Date_Of_Birth),
    (Place_Of_Birth = Details_Of_pupil.Place_Of_Birth)
  ;(Mother_Tongue = Details_Of_pupil.Mother_Tongue),
    (Religion_And_Denomination = Details_Of_pupil.Religion_And_Denomination),
    (Ghanaian_Language_Spoken = Details_Of_pupil.Ghanaian_Language_Spoken),
    (Home_Town = Details_Of_pupil.Home_Town),
    (Nationality = Details_Of_pupil.Nationality),
    (Region = Details_Of_pupil.Region),
    (Year_In_Which_Admission_Is_Sought = Details_Of_pupil.year)
  //end 1
  ;(Name_Of_School = Previouse_School_Attended.Name_Of_School),
    (Admittion_details = Previouse_School_Attended.Admittion_details),
    (Last_Attendance_Date = Previouse_School_Attended.Last_Attendance_Date),
    (How_Did_You_Hear_About_Trinity_Christian_Mission_School =
      Previouse_School_Attended.How_Did_You_Hear_About_Trinity_Christian_Mission_School),
    (What_Are_Your_Reasons_For_Leaving_Your_Previous_School =
      Previouse_School_Attended.What_Are_Your_Reasons_For_Leaving_Your_Previous_School),
    //end2
    (Both_Parents = Other_Significant_Data.Child_Lives_With.Both_Parents),
    (Mother = Other_Significant_Data.Child_Lives_With.Mother),
    (Father = Other_Significant_Data.Child_Lives_With.Father),
    (Other_Person = Other_Significant_Data.Child_Lives_With.Other_Person),
    (Guardian = Other_Significant_Data.Child_Lives_With.Guardian),
    (Older_Children =
      Other_Significant_Data.number_Of_Other_Children_Living_In_The_House
        .Older_Children),
    (Younger_Children =
      Other_Significant_Data.number_Of_Other_Children_Living_In_The_House
        .Younger_Children)
  ;(Details_Of_Persons_Relationship_To_The_Child_Living_with =
    Other_Significant_Data.number_Of_Other_Children_Living_In_The_House
      .Details_Of_Persons_Relationship_To_The_Child_Living_with),
    (FFirstname = Deatails_Of_Father.firstname)
  Fsurname = Deatails_Of_Father.surname
  ;(FOccupation = Deatails_Of_Father.Occupation),
    (FNationality = Deatails_Of_Father.Nationality),
    (FEducation_level = Deatails_Of_Father.Educational_lever),
    (FReligion = Deatails_Of_Father.Religion)
  ;(FName_And_Address_Of_Place_Of_Work =
    Deatails_Of_Father.Name_And_Address_Of_Place_Of_Work),
    (FHome_Adress = Deatails_Of_Father.Home_Adress),
    (FOffice = Deatails_Of_Father.Tel_Number.FOffice),
    (FMobile = Deatails_Of_Father.Tel_Number.Mobile),
    (FEmail_Address = Deatails_Of_Father.Email_Address),
    (FNumber_Of_Wifes = Deatails_Of_Father.Number_Of_Wifes),
    (FIf_Deceased_State_Date_Of_Death =
      Deatails_Of_Father.If_Deceased_State_Date_Of_Death),
    (Smallpox = Health_Details.Smallpox),
    (Diptheria = Health_Details.Diptheria),
    (Whooping_Cou = Health_Details.Whooping_Cou),
    (Teta = Health_Details.Teta),
    (Measles = Health_Details.Measles),
    (Polio = Health_Details.Polio),
    (Tuberculosis = Health_Details.Tuberculosis),
    (Futher_Details_About_the_Childs_Health =
      Health_Details.Futher_Details_About_the_Childs_Health),
    (In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done =
      Health_Details.In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done),
    (MFirstname = Details_Of_Mother.Firstname),
    (Msurname = Deatils_Of_Mother.surname),
    (MOccupation = Deatils_Of_Mother.Occupation),
    (MNationality = Deatils_Of_Mother.Nationality),
    (MEducation_level = Deatils_Of_Mother.Education_level),
    (MReligion = Details_Of_Mother.Religion),
    (MName_And_Address_Of_Place_Of_Work =
      Deatils_Of_Mother.Name_And_Address_Of_Place_Of_Work),
    (MHome_Adress = Details_Of_Mother.Home_Adress),
    (MOffice = Details_Of_Mother.Office),
    (MMobile = Deatils_Of_Mother.Mobile),
    (MEmail_Address = Detils_Of_Mother.Email_Address),
    (MIf_Deceased_State_Date_Of_Death =
      Details_Of_Mother.If_Deceased_State_Date_Of_Death),
    (GFirstname = Details_Of_Guardian.Firstname),
    (Gsurname = Details_Of_Guardian.surname),
    (GOccupation = Details_Of_Guardian.Occupation),
    (GNationality = Details_Of_Guardian.Nationality),
    (GEducation_level = Details_Of_Guardian.Education_level),
    (GReligion = Details_Of_Guardian.Religion),
    (GName_And_Address_Of_Place_Of_Work =
      Deatails_Of_Guardian.Name_And_Address_Of_Place_Of_Work),
    (GHome_Adress = Details_Of_Guardian.Home_Adress),
    (GOffice = Details_Of_Guardian.Tel_Number.Office),
    (GMobile = Details_Of_Guardian.Tel_Number.Mobile),
    (GEmail_Address = Details_Of_Guardian.Email_Address),
    (GNumber_Of_Wifes = Details_Of_Guardian.Number_Of_Wifes)

  await StudentRegisteration.save()

  res.json({ message: 'Student Updated successfully' })
}

const deleteStudent = async (req, res) => {
  const { id } = req.body
  const deletedStudent = await StudentRegisteration.findById(id).exec()
  if (!deletedStudent) return res.send('check your id please')
  await deletedStudent.deleteOne()
  res
    .status(200)
    .json(`Student  ${deletedStudent.firstname} was deleted sucessfully`)
}

module.exports = {
  getAllStudents,
  createNewStudent,
  UpdateStudent,
  deleteStudent,
}
