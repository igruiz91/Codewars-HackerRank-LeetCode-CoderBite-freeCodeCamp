function validateUsr(username) {
    let res =  new RegExp(/^[a-z_\d]{4,}$/)
    return res.test(username)
}