function isUserExist(db, username) {
    const result = db.some(user => user.username == username)
    return (result ? true : false)
}

module.exports = {
    isUserExist
}
