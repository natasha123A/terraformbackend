const mysql = require('mysql2');

const db = require("../../config/db.config.js");
const Student = db.student;

exports.findAll = (req, res) => {
    Student.findAll({
        where: {
            rollno: req.body.rollno,
            name: req.body.name
          }  
    })
        .then(function (dataa) {
            res.send(dataa)
        })
        .catch(error => console.log(`error occurred`, error));
};


