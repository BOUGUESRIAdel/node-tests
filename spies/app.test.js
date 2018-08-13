const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
      };
    app.__set__('db', db);

    it('should call spy correctly', ()=> {
        var spy = expect.createSpy();
        spy('Adel', 22);
        expect(spy).toHaveBeenCalledWith('Adel', 22);
    });

    it('should call saveUser with user object', () => {
        var email = 'bouguesri.adel@gmail.com';
        var password = '12345azerty';
    
        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
      });
});