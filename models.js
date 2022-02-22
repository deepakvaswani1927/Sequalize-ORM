const Sequelize = require('sequelize');
const db = require('./database');

const Course = db.define('Courses' ,{ 
    courseid: {
        type: Sequelize.STRING
    },
    courseName: {
        type: Sequelize.CHAR
    },
    courseCharges: {
        type: Sequelize.FLOAT
    } ,
},{ timestamps: false}
)
Course.removeAttribute('id')

module.exports = Course;
