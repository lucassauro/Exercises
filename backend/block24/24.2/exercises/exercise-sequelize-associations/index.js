const express = require('express');
const models = require('./models')

require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 5
app.get('/patientsplans', async (_req, res) => {
  const patients = await models.Patient.findAll({
    include: { model: models.Plan },
  })
  res.status(200).json(patients);
})
// 6
app.get('/patientssurgeries', async (req, res) => {
  const patients = await models.Patient.findAll({
    include: {
      model: models.Surgery,
    }
  })
  res.status(200).json(patients);
})

// 7
app.get('/patientsplans/:id', async (req, res) => {
  const { id } = req.params;
  const patients = await models.Plan.findAll({
    where: { plan_id: id },
    include: {
      model: models.Patient,
    }
  })
  res.status(200).json(patients);
})

app.post('/patients', async (req, res) => {
  const { fullName, planId } = req.body;
  const patients = await models.Patient.create({ fullName, planId });
  res.status(200).json(patients);
})

app.get('/patientssurgeriesWOdoctor', async (req, res) => {
  const patients = await models.Patient.findAll({
    include: {
      model: models.Surgery,
      attributes: { exclude: ['doctor'] }
    }
  })
  res.status(200).json(patients);
})


app.get('/surgeries/:doctor', async (req, res) => {
  const { doctor } = req.params;
  const surgery = await models.Surgery.findOne({
    where: { doctor },
    include: {
      model: models.Patient,
    }
  })
  res.status(200).json(surgery);
})

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});