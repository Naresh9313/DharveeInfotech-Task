const User = require('../../model/userModel/userModel')

module.exports.register = async(req,res) => {
    try{
        const {username,password,mobile,employeecode,birthdate,emailid} = req.body;

        const user = new User({username,password,mobile,employeecode,birthdate,emailid});
        await user.save();

        return res.status(201).json({
            message:"User Register Successfully"
        });

    }catch(error){
        console.log('Register error!!',error);

        return res.status(500).json({
            erorr:'An occured file occuring register error!'
        })

    }
}


module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const user = await User.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        return res.status(200).json({
            message: "Login successful",
            user
        });

    } catch (error) {
        console.log('Login error!!', error);

        return res.status(500).json({
            error: 'An error occurred while logging in'
        });
    }
};
