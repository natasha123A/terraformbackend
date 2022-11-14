const mysql = require('mysql2');


const db = require("../../config/db.config.js");
const Teacher = db.teacher;


// Get all teacher
exports.getTeacher = (req, res) => {
    Teacher.findAll({
        where: {
            name: req.body.name,
            password: req.body.password,
        }
    }).then(function (dataa) {
            res.send(dataa)
    })
    .catch(err => {
       console.log("error.........")
      });
};

// add teacher
exports.addTeacher = (req, res) => {
    // Save to MySQL database  
    Teacher.create({
        name: req.body.name,
        password: req.body.password,
    })
        .then(function (dataa) { 
            res.send(dataa)
        })
        .catch(function (err) {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Teacher."
              });
        });
};


