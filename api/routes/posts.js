import e, { Router } from "express";
import User from "../models/User.js";
import Post from "../models/Post.js";
import  DateGenerator  from "../functions/date.js";
const postRoute = Router();

//create a post
postRoute.post('/:userid',async (req,res)=>{
    try {
        const user = await User.findOne({_id:req.params.userid})
        if(user){
        const newpost = await new Post(req.body)
        newpost.date = DateGenerator()
        newpost.userId = req.params.userid
        newpost.username = user.username
        newpost.save()
        res.status(200).json("New post successfully created")
        }
        else{
            res.status(403).json("User does not exist")
        }
        
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete a post
postRoute.delete('/:id',async (req,res)=>{
    try {
        const cpost = await Post.findOne({_id : req.params.id})
        if(cpost.userId===req.body.userId){
        cpost.deleteOne()
        res.status(200).json("Post successfully deleted")
        }
        else{
            res.status(403).json("You can delete your posts only")
        }
        
    } catch (err) {
        res.status(500).json(err)
    }
})


//update a post


postRoute.put('/:id',async (req,res)=>{
    try {
        const cpost = await Post.findOne({_id : req.params.id})
        if(cpost.userId===req.body.userId){
        await cpost.updateOne({$set : req.body})
        res.status(200).json("New post successfully updated")
        }
        else{
            res.status(403).json("You can update your posts only")
        }
        
    } catch (err) {
        res.status(500).json(err)
    }
})

//find a post

postRoute.get('/:id', async (req,res)=>{
    try {
        const cpost = await Post.findOne({_id : req.params.id})
        res.status(200).json(cpost)
        
    } catch (err) {
        res.status(500).json(err)
    }

})

//post timeline

postRoute.get('/:userId/timeline', async (req,res)=>{
    try {
        const user = await User.findById(req.params.userId)
        const Userposts = await Post.find({userId : req.params.userId})
        const FollowersPosts = await Promise.all(
            user.following.map((followersID) =>{
            return Post.find({userId : followersID})
            }
            )
        )
        const TimeLine = Userposts.concat(...FollowersPosts)
        const sort =  req.query.sort
        sort==="true" ?
        res.status(200).json( TimeLine.sort((e1,e2)=>{
        if(e1.title > e2.title) return 1
        if(e1.title < e2.title) return -1
        return 0
        }
        ))
        :
        res.status(200).json(TimeLine)
        
    } catch (err) {
        res.status(500).json(err)
    }

})


export default postRoute;
