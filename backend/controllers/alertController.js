const Alert = require("../models/Alert");

// GET /alerts?country=India&status=Active
exports.getAlerts = async(req, res, next) => {
    try {
        const filters = {};
        if (req.query.country) filters.country = req.query.country;
        if (req.query.status) filters.status = req.query.status;

        const alerts = await Alert.find(filters);
        res.status(200).json(alerts);
    } catch (err) {
        next(err);
    }
};

exports.createAlert = async(req, res, next) => {
    try {
        const { country, city, visaType } = req.body;

        // Input validation 
        if (!country || !city || !visaType) {
            return res.status(400).json({
                message: "country, city and visaType are required"
            });
        }

        const allowedVisaTypes = ["Tourist", "Business", "Student"];
        if (!allowedVisaTypes.includes(visaType)) {
            return res.status(400).json({
                message: "Invalid visa type"
            });
        }

        const alert = await Alert.create({ country, city, visaType });
        res.status(201).json(alert);
    } catch (err) {
        next(err);
    }
};

exports.updateAlert = async(req, res, next) => {
    try {
        const { status } = req.body;

        // Validate status if provided
        if (status) {
            const allowedStatus = ["Active", "Booked", "Expired"];
            if (!allowedStatus.includes(status)) {
                return res.status(400).json({
                    message: "Invalid status value"
                });
            }
        }

        const alert = await Alert.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );

        if (!alert) {
            return res.status(404).json({ message: "Alert not found" });
        }

        res.status(200).json(alert);
    } catch (err) {
        next(err);
    }
};

exports.deleteAlert = async(req, res, next) => {
    try {
        const alert = await Alert.findByIdAndDelete(req.params.id);

        if (!alert) {
            return res.status(404).json({ message: "Alert not found" });
        }

        res.status(204).send();
    } catch (err) {
        next(err);
    }
};