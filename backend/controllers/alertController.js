const Alert = require("../models/Alert");

// GET /alerts?country=India&status=Active
exports.getAlerts = async(req, res) => {
    const filters = {};
    if (req.query.country) filters.country = req.query.country;
    if (req.query.status) filters.status = req.query.status;

    const alerts = await Alert.find(filters);
    res.status(200).json(alerts);
};

exports.createAlert = async(req, res) => {
    const alert = await Alert.create(req.body);
    res.status(201).json(alert);
};

exports.updateAlert = async(req, res) => {
    const alert = await Alert.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true }
    );
    res.status(200).json(alert);
};

exports.deleteAlert = async(req, res) => {
    await Alert.findByIdAndDelete(req.params.id);
    res.status(204).send();
};