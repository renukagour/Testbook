const { trusted } = require('mongoose');
const PaymentService = require('../services/payment.service');

const createPaymentLink = async (req, res) => {

    try {
        const paymentLink = await PaymentService.createPaymentLink(req.params.id);
        return res.status(200).send(paymentLink);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }

}
const updatePaymentInformation = async (req, res) => {

    try {
        await PaymentService.updatePaymentInformation(req.query);
        return res.status(200).send({ message: "Payment Information updated successfully", status: true });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }

}

module.exports ={
    createPaymentLink,
    updatePaymentInformation
 
}