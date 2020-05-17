const express = require("express");
const Projects = require("../models/projects");

exports.get_all = (req, res) => {
  Projects.find({ projectType: "physics" }, "projectTitle")
    .exec()
    .then((doc) => {
      if (doc.length != 0) res.status(200).json(doc);
      else res.status(404).json({ message: "Project not found" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.create_project = (req, res) => {
  const project = new Projects({
    projectType: req.body.projectType,
    projectTitle: req.body.projectTitle,
    itemsRequired: req.body.itemsRequired,
    steps: req.body.steps,
    cost: req.body.cost,
  });
  project
    .save()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.get_project = (req, res) => {
  const id = req.params.id;
  Projects.find({ projectType: "physics", projectTitle: id })
    .then((doc) => {
      if (doc.length != 0) res.status(200).json(doc);
      else
        res
          .status(404)
          .json({ message: "Project with the given id not found" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.update_project = (req, res) => {
  const id = req.params.id;
  Projects.updateMany({ projectTitle: id }, { $set: req.body })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Project updated",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.remove_project = (req, res) => {
  const id = req.params.id;
  Projects.remove({ projectTitle: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Project deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};