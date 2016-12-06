var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({

    title: { type: String, required:true },

    description: { type: String,required:true },

    code: { type: String,required:true },

    tags: [{ type: String }],

    created_at: { type:Date,default: Date.now },
    
    updated_at: { type: Date }

});

cardSchema.pre('save', function(next) {

    var currentDate = new Date();

    this.updated_at = currentDate;

    next();

});


var Card = mongoose.model('Card', cardSchema);

module.exports = Card;
