// const { setRole, allow } = require("../controllers/adminController")
// const { login, updatePassword, verifyToken } = require("../controllers/authController")
// const express = require('express')
// const { createAppointment, deleteAppointment, getAllAppointments, getAllStudents, approveAppointment, dissapproveAppointment, getAllPendingStudents } = require("../controllers/teacherController")
// const router = express.Router()

// router.route('/').get(getAllStudents);
// router.post('/login', login)
// router.patch('/updatePassword', verifyToken, updatePassword)

// router.route('/schedule').get(verifyToken, allow('admin', 'teacher'), getAllAppointments).post(verifyToken, allow('admin', 'teacher'), createAppointment)

// router.route('/reschedule/:id').delete(verifyToken,allow('teacher'),deleteAppointment);

// router.route('/changeApprovalStatus/:id/:studentId').delete(verifyToken, allow('admin', 'teacher'), dissapproveAppointment).patch(verifyToken,allow('admin','teacher'),approveAppointment)

// router.route('/getAllPendingStudents').get(verifyToken,allow('teacher'),getAllPendingStudents);
// module.exports = router

const { setRole, allow } = require("../controllers/adminController");
const { login, updatePassword, verifyToken } = require("../controllers/authController");
const express = require('express');
const {
    createAppointment,
    deleteAppointment,
    getAllAppointments,
    getAllStudents,
    approveAppointment,
    dissapproveAppointment,
    getAllPendingStudents
} = require("../controllers/teacherController");

const router = express.Router();

// ✅ Get all students
router.route('/').get(getAllStudents);

// ✅ Teacher/Admin login
router.post('/login', login);

// ✅ Update teacher password
router.patch('/updatePassword', verifyToken, updatePassword);

// ✅ Create or get appointments
router.route('/schedule')
    .get(verifyToken, allow('admin', 'teacher'), getAllAppointments)
    .post(verifyToken, allow('admin', 'teacher'), createAppointment);

// ✅ Delete an appointment
router.route('/reschedule/:id')
    .delete(verifyToken, allow('teacher'), deleteAppointment);

// ✅ Approve or Disapprove student for an appointment
router.route('/changeApprovalStatus/:id/:studentId')
    .delete(verifyToken, allow('admin', 'teacher'), dissapproveAppointment)
    .patch(verifyToken, allow('admin', 'teacher'), approveAppointment);

// ✅ Get all pending students
router.route('/getAllPendingStudents')
    .get(verifyToken, allow('teacher'), getAllPendingStudents);

module.exports = router;
