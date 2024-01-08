export const sendToken = (res, user, message, statuscode = 200)=>{
    const token = user.getJWTToken();

    const options = {
        expires: new Date(Date.now() + 1000*60*60*24*15),
        httpOnly: true,
        // secure: true,  // don't use on local host 
        sameSite: "none",
    }
    
    res.status(statuscode).cookie("token", token, options).json({
        success: true,
        message,
        user,
    });
}