/***************** Node and 3rd party modules *****************/
const request = require('supertest');
const expect = require('expect');

/********************* Personnel Modules **********************/
const app = require('./server').app;

/**************************** Init ****************************/

/**************************** Code ****************************/
describe('server', () => {

    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {            
                    expect(res).toInclude({
                        type: 'application/json'
                    });
                    expect(res.body).toInclude({
                        error : 'Page not found'
                    });
                })
                .end(done);
            });        
    });

    describe('GET /users', () => {
        it('should return users array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {            
                    expect(res.body).toInclude({
                        name : 'Adel',
                        age : '22'
                    });
                })
                .end(done);
        });
    });

});
