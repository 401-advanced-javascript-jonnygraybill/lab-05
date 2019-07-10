'use strict';

const schema = require('./categories-schema.js');


class Categories {

  constructor() {
  }

  get(_id) {
    if (_id) {
      return schema.findOne({ _id });
    } else {
      return schema.find([{}, {}]);
    }
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
  }


  create(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
