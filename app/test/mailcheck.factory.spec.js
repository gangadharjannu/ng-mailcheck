describe('mailcheck factory', function () {
	var mailcheckFactory;
	// Before each test load our myApp module
	beforeEach(angular.mock.module('myApp'));

	//Before each test set our injected mailcheck factory (_user_) to our local mailcheck variable
	beforeEach(inject(function (_mailcheckFactory_) {
		mailcheckFactory = _mailcheckFactory_;
	}));

	// A simple test to verify the mailcheck factory exists
	it('should exist', function () {
		expect(mailcheckFactory).toBeDefined();
	});

	// A sample test for checking run method
	describe('run()', function () {
		// A simple test to verify the method run exists
		it('should exists', function () {
			expect(mailcheckFactory.run).toBeDefined();
		});

		var defaultDomains = ['msn.com', 'bellsouth.net',
			'telus.net', 'comcast.net', 'optusnet.com.au',
			'earthlink.net', 'qq.com', 'sky.com', 'icloud.com',
			'mac.com', 'sympatico.ca', 'googlemail.com',
			'att.net', 'xtra.co.nz', 'web.de',
			'cox.net', 'gmail.com', 'ymail.com',
			'aim.com', 'rogers.com', 'verizon.net',
			'rocketmail.com', 'google.com', 'optonline.net',
			'sbcglobal.net', 'aol.com', 'me.com', 'btinternet.com',
			'charter.net', 'shaw.ca'],

			defaultSecondLevelDomains = ["yahoo", "hotmail", "mail", "live", "outlook", "gmx"],

			defaultTopLevelDomains = ["com", "com.au", "com.tw", "ca", "co.nz", "co.uk", "de",
				"fr", "it", "ru", "net", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu",
				"ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz",
				"in", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu", "uk"],

			email = "gangadharjannu@gmal.com";

		// a test to verify that calling mailcheckFactory.run results the hardcoded defaultDomains 
		it('should return defaultDomains array', function () {
			expect(mailcheckFactory.defaultDomains).toEqual(defaultDomains);
		});
		it('should return defaultSecondLevelDomains array', function () {
			expect(mailcheckFactory.defaultSecondLevelDomains).toEqual(defaultSecondLevelDomains);
		});
		it('should return defaultTopLevelDomains array', function () {
			expect(mailcheckFactory.defaultTopLevelDomains).toEqual(defaultTopLevelDomains);
		});
		it('should return gangadharjannu@gmail.com', function () {
			expect(mailcheckFactory.run({ email: email }).full).toEqual("gangadharjannu@gmail.com");
		});

		it('should return gangadharjannu@github.me', function(){
			var options={
				defaultSecondLevelDomains:['github'],
				topLevelDomains:['me'],
				email:"gangadharjannu@github.m"
			};
			expect(mailcheckFactory.run(options).full).toEqual("gangadharjannu@github.me");
		});

	});
});