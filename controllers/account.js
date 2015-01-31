var services = require('../internal/services');

module.exports.register = function (req, res) {
    console.log('registerC'+req.body);
	services.account.create_account(req.body, function (err, results) {
		if (err) {
			return res.redirect('/register?err=' + err);
		};
		return res.redirect('/verify');
	});
}

module.exports.register_page = function (req, res) {
	res.render('register', {
		title : 'Register'
	});
}

module.exports.login_page = function (req, res) {
	res.render('login', {
		title : 'Login'
	});
}

module.exports.login = function (req, res) {
	return res.redirect('/dashboard ');
}

module.exports.verify_email_page = function (req, res) {
	res.render('verifyemail', {
		title : 'Verify Email'
	});
}

module.exports.verify_email = function (req, res) {
	services.account.verify_email(req.query.username, req.query.verify_token, function (err) {
		if (err) {
			return res.redirect('/verify?err=invalid code ');
		}
		    return res.redirect('/login');
	});
}

module.exports.login = function (req, res) {
	return res.redirect('/dashboard ');
}

module.exports.dashboard = function (req, res) {
    services.application.dashboard(req.user, function (err, application) {
        console.log('application'+application);
        res.render('dashboard', {
            applications : application
        })
    });
}

module.exports.logout = function (req, res) {
	req.logout();
	res.redirect('/');
}
