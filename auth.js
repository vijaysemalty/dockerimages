function authenticate (login,password) {
	  if (login == 'login' && password === 'password') {
		  return 'Your are logged in!';
	  }	  else {
		  return 'Login is not correct';
	  }
}
