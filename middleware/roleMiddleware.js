function verifyRole(roles) {
    return (req, res, next) => {
        const currentUser = req.user;
        if (currentUser.role !== roles) {
            return res.status(401).json({ 
            status: "401 Unauthorized",
            message: 'Log in to admin first' 
            });
        } else {
            next()
        }
    }
}

module.exports = verifyRole