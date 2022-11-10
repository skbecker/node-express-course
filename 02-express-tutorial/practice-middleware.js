const express = require('express')

const consoleLogger = (req, res, next) => {
    console.log("I am middleware")
    next()
}

module.exports = consoleLogger