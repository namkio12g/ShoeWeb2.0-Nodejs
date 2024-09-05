const mongoose = require("mongoose");
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const brandSchema = new mongoose.Schema({
    title: String,
    thumbnail: {
        type: String,
        default: ""
    },
    position: Number,
    description: {
        type: String,
        default: ""
    },
    delete: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "active"
    },
    createdInfo: {
            createdBy: {
                type: String,
                default: ""
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        },
        editedInfo: {
            editedBy: {
                type: String,
                default: ""
            },
            editedAt: {
                type: Date,
            }
        },
      slug: {
          type: String,
          slug: "title",
          unique: true,
          slugOn: true
      },


});

const brand = mongoose.model("brand", brandSchema, "brands");

module.exports = brand;
