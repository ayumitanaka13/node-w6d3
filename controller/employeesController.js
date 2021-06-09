const router = require("express").Router();

const employeeService = require("../service/employeesData");

router.get("/", (req, res) => res.json(employeeService.getAll()));

router.get("/:id", (req, res) => {
  const employeeId = req.params.id;
  return res.json(employeeService.getById(employeeId));
});
router.post("/", (req, res) => {
  const newEmployee = req.body;
  return res.json(employeeService.save(newEmployee));
});
router.delete("/", (req, res) => {
  const employeeId = req.params.id;
  return res.json(employeeService.delete(employeeId));
});

module.exports = router;
