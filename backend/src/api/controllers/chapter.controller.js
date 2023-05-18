const { chapterService } = require("../services/chapter.services");
// validator
const { ChapterSchema } = require("../validators/chapter.validator");
const { response, incompleteField } = require("../helpers/response");

class chapter {
  async addChapter(req, res) {
    try {
      // validator
      // const result =await ChapterSchema.validateAsync(req.body);
      // console.log(result);

      const createChapter = await chapterService.addChapter(res, req.body);

      if (createChapter) {
        return response(
          res,
          createChapter,
          "success creating new chapter",
          200
        );
      }
    } catch (err) {
      console.log(err);
      return response(res, "", "error while adding exams", 403);
    }
  }
  async getLastTransaction(req, res) {
    const { phone } = req.params;
    const question = await chapterService.getLastTransaction(
      res,
      phone
    );

    return response(
      res,
      question,
      "fetched topicwise chapters successfully",
      200
    );
  }
  async getAllChapters(req, res) {
    const { phone } = req.params;
    const question = await chapterService.getChapterPhonewise(
      res,
      phone
    );

    return response(
      res,
      question,
      "fetched topicwise chapters successfully",
      403
    );
  }
}

const chapterController = new chapter();

module.exports = { chapterController };
