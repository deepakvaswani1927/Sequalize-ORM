const express = require('express');
const router = express.Router()
const Course = require('./models');

router.get('/getCourses' , (req,res)=>{
    Course.findAll()
        .then(Course=>{
            console.log('All courses are : ' ,Course);
            res.send(Course)
        })
        .catch(err =>console.log(err))
    });
    
router.post('/newCourse',(req,res)=>{
    Course.create({
    courseid: req.body.courseid,
    courseName: req.body.courseName,
    courseCharges: req.body.courseCharges
  })
  .then(newCourse => {
    console.log(`New course with id ${newCourse.courseid} has been created.`);
    res.send("Course inserted");
  });
});

router.delete('/removeCourse' , (req,res)=>{
    Course.destroy({
        where: { courseid: req.body.courseid }
      })
      .then(deletedCourse => {
        console.log(`deleted course had id : ${req.body.courseid}`);
        res.send("course was deleted");
      });
})

router.put('/updateCourse',(req,res)=>{
    Course.findOne({
    courseName: req.body.courseName
  })
  .then(Course => {
    Course.updateAttributes({
      courseName: req.body.courseName ,
      courseCharges: req.body.courseCharges
    });
    console.log(`Updated course with course name : ${courseName} successfully`);
    res.send("Updated course Info");
  })
  .catch(err => console.log('Error :' +err))
})

module.exports = router;
