export const sendToken = (res, user, message, statuscode = 200)=>{
    const token = user.getJWTToken();

    const options = {
        expires: new Date(Date.now() + 1000*60*60*24*15),
        httpOnly: true,
        // secure: true, 
        secure: process.env.NODE_ENV === 'PROD' ? true : 'auto',
        // sameSite: "none",
        sameSite: process.env.NODE_ENV === 'PROD' ? 'none' : 'lax',
        domain: process.env.FRONTEND_URL,
    }
    
    res.status(statuscode).cookie("token", token, options).json({
        success: true,
        message,
        user,
    });
}