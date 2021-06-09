const express = require("express");
const createError = require("http-errors");
const logger = require("morgan");

const employeesController = require("./controller/employeesController");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/employees", employeesController);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  if (!err) {
    return next();
  }
  console.log("Error: ", err);
  res.status(err.status || 500).send({ message: err.message });
  return res;
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`${PORT} listening`));
