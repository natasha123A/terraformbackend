const mysql = require('mysql2');


const db = require("../../config/db.config.js");
const Student = db.student;


// Get all books
exports.getStudent = (req, res) => {
    Student.findAll()
        .then(function (dataa) {
            res.send(dataa)
        })
        .catch(error => console.log(`error occurred`, error));
};

// Post a Book
exports.addStudent = (req, res) => {
    // Save to MySQL database  
    Student.create({
        rollno: req.body.rollno,
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        score: req.body.score
    })
        .then(function (dataa) { res.redirect('/getall') })
        .catch(function (err) {
            console.log(`error occured`, err)
        });
};


//show update form
exports.updateform = (req, res) => {
    Student.findAll({
        where: {
            rollno: req.params.id,
          }  
    }).then(function (dataa) {
        res.send(dataa)
})
}



//update
exports.updateStudent = (req, res) => {
    console.log(req.body)
    const query = {
        rollno: req.body.rollno,
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        score: req.body.score
    }
    Student.update(query, { where: { rollno: req.body.rollno } })
        .then(function (data) {
            res.send(data)
            res.redirect('/getall')
        })
        .catch(function (error) {
            console.log('error occured', error)
        });
};




// Delete a book by Id
exports.deleteStudent = (req, res) => {
    Student.destroy({ where: { rollno: req.params.id } })
        .then(function (dataa) {
            res.redirect('/getall')
        })
        .catch(function (error) {
            console.log('error occured', error)
        });

};

