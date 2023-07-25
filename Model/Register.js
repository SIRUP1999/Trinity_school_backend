const mongoose = require('mongoose')

const StudentRegisteration = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      // required: true,
    },
    Surname: {
      type: String,
      // required: true,
    },
    Gender: {
      type: String,
      // required: true,
    },

    Date_Of_Birth: {
      type: String,
      // required: true,
    },
    Place_Of_Birth: {
      type: String,
      // required: true,
    },
    Mother_Tongue: String,
    Religion_And_Denomination: String,
    Ghanaian_Language_Spoken: String,
    Home_Town: String,
    Nationality: String,
    Region: String,
    Year_In_Which_Admission_Is_Sought: Number,

    Name_Of_School: String,
    Admittion_details: String,
    Last_Attendance_Date: String,
    How_Did_You_Hear_About_Trinity_Christian_Mission_School: String,
    What_Are_Your_Reasons_For_Leaving_Your_Previous_School: String,

    Child_Lives_With: {
      Both_Parents: Boolean,
      Mother: Boolean,
      Father: Boolean,
      Other_Person: Boolean,
      Guardian: Boolean,
    },
    number_Of_Other_Children_Living_In_The_House: {
      Older_Children: Number,
      Younger_Children: Number,
    },
    Details_Of_Persons_Relationship_To_The_Child_Living_with: String,

    Details_Of_Father: {
      Firstname: {
        type: String,
        // required: true,
      },
      surname: {
        type: String,
        // required: true,
      },
      Occupation: {
        type: String,
        // required: true,
      },
      Nationality: {
        type: String,
        // required: true,
      },
      Education_level: {
        type: String,
        // required: true,
      },

      Religion: String,
      Name_And_Adress_Of_Place_Of_Work: String,
      Home_Address: String,
      Tel_Number: {
        Office: Number,
        Mobile: Number,
      },
      Email_Address: String,
      Number_Of_Wifes: Number,
      If_Deceased_State_Date_Of_Death: Date,
    },

    Health_Details: {
      Smallpox: Boolean,
      Diptheria: Boolean,
      Whooping_Cou: Boolean,
      Teta: Boolean,
      Measles: Boolean,
      Polio: Boolean,
      Tuberculosis: Boolean,
      Futher_details_About_the_Childs_Health: String,
      In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done:
        String,
    },

    Details_Of_Mother: {
      Firstname: {
        type: String,
        // required: true,
      },
      surname: {
        type: String,
        // required: true,
      },
      Occupation: {
        type: String,
        // required: true,
      },
      Nationality: {
        type: String,
        // required: true,
      },
      Education_level: {
        type: String,
        // required: true,
      },

      Religion: String,
      Name_And_Address_Of_Place_Of_Work: String,
      Home_Adress: String,
      Tel_Number: {
        Office: Number,
        Mobile: Number,
      },
      Email_Address: String,
      If_Deceased_State_Date_Of_Death: Date,
    },
    Details_Of_Guardian: {
      Firstname: {
        type: String,
        // required: true,
      },
      surname: {
        type: String,
        // required: true,
      },
      Occupation: {
        type: String,
        // required: true,
      },
      Nationality: {
        type: String,
        // required: true,
      },
      Education_level: {
        type: String,
        // required: true,
      },

      Religion: String,
      Name_And_Address_Of_Place_Of_Work: String,
      Home_Adress: String,
      Tel_Number: {
        Office: Number,
        Mobile: Number,
      },
      Email_Address: String,
      Number_Of_Wifes: Number,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Register', StudentRegisteration)
