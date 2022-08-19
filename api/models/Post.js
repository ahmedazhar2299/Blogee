import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
userId:{
    type : String,
    required : true
},
username:{
    type : String,
    required : true
},
title: {
    type : String,
    max : 100,
    required : true
},
description :{
    type : String,
    max : 5000,
    required : true
},
date : {
    type : String
}
}
);

export default mongoose.model('Post',postSchema)