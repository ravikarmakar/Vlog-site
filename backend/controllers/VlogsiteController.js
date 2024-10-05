const mongoose = require("mongoose");
const Vlogsite = require("../models/VlogsiteModels");

// to get vlogsites

const getVlogsites = async (req, res) => {
  const vlogs = await Vlogsite.find({}).sort({ crearesAt: -1 });

  res.status(200).json(vlogs);
};

// to get vlogsite

const getVlogsite = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Vlogs" });
  }

  const vlog = await Vlogsite.findById(id);

  if (!vlog) {
    return res.status(404).json({ error: "No Such Vlogs" });
  }
  res.status(200).json(vlog);
};

// to create vlog

const createVlog = async (req, res) => {
  const { title, author, body } = req.body;

  try {
    const vlog = await Vlogsite.create({ title, author, body });
    res.status(200).json(vlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// to delete vlog

const deleteVlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Vlogs" });
  }

  const vlog = await Vlogsite.findByIdAndDelete(id);

  if (!vlog) {
    return res.status(404).json({ error: "No Such Vlogs" });
  }

  res.status(200).json(vlog);
};

// to update vlog

const updateVlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Vlogs" });
  }

  const vlog = await Vlogsite.findByIdAndUpdate(id, { ...req.body });

  if (!vlog) {
    return res.status(400).json({ error: "No Such Vlog" });
  }

  res.status(200).json(vlog);
};

module.exports = {
  getVlogsites,
  getVlogsite,
  createVlog,
  deleteVlog,
  updateVlog,
};
