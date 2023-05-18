const Joi = require("joi");

const ChapterSchema = Joi.object({


  // user: Joi.string().min(3).max(30).required(),
  // exam: Joi.string().min(3).max(30).required(),

});


module.exports = {
    ChapterSchema
};
