const usersControllers ={
    getLogin:(req,res)=>{
        res.render("login.ejs");
    },
    getRegister:(req,res)=> {
        res.render("register.ejs");
    },
    getaddProduct:(req,res)=> {
        res.render("addProduct.ejs");
    },
};
module.exports=usersControllers