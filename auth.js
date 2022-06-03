function authenticate (login,password) {
	  if (login == 'login' && password === 'password') {
		  return 'Hi guest';
	  }	  else {
		  return 'Login is not correct';
	  }
}
