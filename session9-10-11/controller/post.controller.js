const PostModel = require("../db/models/post.model")
class Post{
    static addPost= async(req, res)=>{
        try{
            const post = new PostModel({
                userId: req.user._id,
                ...req.body
            })
            await post.save()
            res.send(post)
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"error adding post"})
        }
    }
}
module.exports = Post