const chapterModel = require("../models/chapter.model");

const { response } = require("../helpers/response");
const createCollection = require("../utils/createDbCollection");

class chapterServices {
  // async checkChapter(res,{name,subject}){
  // try{
  //     const getSubject = await subjectModel.findOne({name:subject});
  //     if(!getSubject){
  //         return response(res,"","subject does not exists",403);
  //     }
  //     const getChapter = await chapterModel.findOne({name,subject:getSubject._id});

  //     console.log(getChapter);

  //     return getChapter;
  // }
  // catch(err){
  //     console.log(err);
  //     return response(res,"","error while fetching subject",403);
  // }
  // }

  async addChapter(res, { name, item, phone }) {
    try {
      // console.log(getSubject,getTopic);
      const newChapter = new chapterModel({
        name,
        item: JSON.parse(item),
        phone,
      });

      const createChapter = await newChapter.save();

      return createChapter;
    } catch (err) {
      console.log(err);
      return response(res, "", "error while fetching subject", 403);
    }
  }
  async getLastTransaction(res, phone) {
    // console.log(typeof(subject));
    try {
      const getchapter = await chapterModel.findOne({ phone });

      if (getchapter) {
        console.log(getchapter);
        return getchapter;
      }
    } catch (err) {
      console.log(err);
      return response(res, "", "error while fetching question", 403);
    }
  }
  async getChapterPhonewise(res, phone) {
    // console.log(typeof(subject));
    try {
      const getchapter = await chapterModel.find({ phone });

      if (getchapter) {
        console.log(getchapter);
        return getchapter;
      }
    } catch (err) {
      console.log(err);
      return response(res, "", "error while fetching question", 403);
    }
  }
  
}
const chapterService = new chapterServices();
module.exports = { chapterService };
