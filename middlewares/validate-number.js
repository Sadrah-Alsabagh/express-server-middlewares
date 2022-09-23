'use strict';

const validateNumber = (req, res, next) => {
  if (isNaN(req.query.num)) {
    next('Not a Number');
  } else {
    next();
  }
}

module.exports = validateNumber;