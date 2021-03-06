module.exports = {
  login(username, password, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(username, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  loggedIn() {
    return !!localStorage.token
  },
  onChange() {}
}

const pretendRequest = (username, password, cb) => {
  setTimeout(() => {
    console.log(username)
    // if (username === '' && pass === '') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    // } else {
    //   cb({ authenticated: false })
    // }
  }, 0)
}