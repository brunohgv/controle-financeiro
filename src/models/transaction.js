const express = require('express');
const mongoose = require('mongoose')

const Transaction = new mongoose.Schema({
    description: String,
    value: Number,
    area: String,
    date: Date,
}, {
    timestamps: true
})

module.exports = mongoose.model('Transaction', Transaction)