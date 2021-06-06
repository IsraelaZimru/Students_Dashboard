
const students = [
    {
        pic: 'https://i.pravatar.cc/150?img=${1}', gender: "female", username: "Wawa", email: "wawa@gmail.com", address: "wawa 12 Tel-Aviv 67543", course: "Art Theory - Basis", grade: 79
    },
    {
        pic: 'https://i.pravatar.cc/150?img=${2}', gender: "male", username: "Lala", email: "lala@gmail.com", address: "lala 12 Natanya 67543", course: "Art Theory - Advanced", grade: 91
    },
    {
        pic: `https://randomuser.me/api/portraits/women/2.jpg`, gender: "female", username: "Israela", email: "israela@gmail.com", address: "israela 12 Raanana 67543", course: "Art Theory - Advanced", grade: 58
    },
    { pic: 'https://i.pravatar.cc/150?img=${4}', gender: "male", username: "Zimru", email: "zimru@gmail.com", address: "zimru 12 Haifa 62233", course: "Introduction to Art Therapy", grade: 63 }
]

const initialLst = JSON.parse(localStorage.getItem("students")) || students;


const addStudent = (obj, callback, getter) => {
    const newLst = JSON.parse(localStorage.getItem("students"));
    newLst.push(obj)
    localStorage.setItem("students", JSON.stringify(newLst));
    callback([...getter, obj])//callback-setLocalStudents, getter-localStudents-> (setLocalStudents, localStudents)
}


const choosePicByGender = (gender, rnd) => {
    let whichPic = ""
    switch (gender) {
        case "male":
            whichPic = `https://randomuser.me/api/portraits/men/${rnd}.jpg`
            break;
        case "female":
            whichPic = `https://randomuser.me/api/portraits/women/${rnd}.jpg`
            break;
        case "other":
            whichPic = "https://images.squarespace-cdn.com/content/v1/598b7d4c9f745655815eb80a/1558380623477-Z8JO1D1O7ACETDZ9XWTU/ke17ZwdGBToddI8pDm48kIu7ID3Q_rf864yJf87XFIh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0h8vX1l9k24HMAg-S2AFielfUZEyfzH2cLnl2HLSR7-WVEkGoqQDaWpNaSSFYXNdhA/gender-spectrum1.jpg"
            break;
        default:
            whichPic = "error"
            break;
    }
    return whichPic
}

const creatingStudent = (details, setLocalStudents, localStudents) => { //old name - addNewStudent
    const rnd = Math.floor(Math.random() * 80) + 20;
    let picGender = choosePicByGender(details.gender.value, rnd)
    const newPerson = {
        pic: picGender,
        gender: details.gender.value,
        username: details.username.value,
        email: details.email.value,
        address: details.address.value,
        course: details.course.value,
        grade: rnd
    }
    addStudent(newPerson, setLocalStudents, localStudents)
}




export { students, creatingStudent, initialLst }