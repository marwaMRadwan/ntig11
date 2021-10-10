class UserController{
    static goAll(req,res){
        res.redirect('/all')
    }
    static showAll(req, res){
        let data = {
            pageTitle: "show all users"
        }
        res.render('all', data)
    }
    static showSingle(req, res){
        let data = {
            pageTitle: "show Single User"
        }
        res.render('single', data)
    }
    static edit(req, res){
        let data = {
            pageTitle: "edit user"
        }
        res.render('edit', data)
    }
    static add(req, res){
        let data = {
            pageTitle: "Add new user"
        }
        res.render('add', data)
    }
    static del(req, res){
        res.send('deleted')
    }
}


module.exports = UserController