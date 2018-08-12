/**************** Node and 3rd party Modules ****************/
const expect = require('expect');

/******************** personnel Modules *********************/
const util = require('./utils');

it("should add two numbers",() =>{
    var res = util.add(15, 25);
    expect(res).toBeA('number').toBe(40);
        
});

it("should async add two numbers",() =>{
  return util.addAsync(15, 25).then((sum) => {
    expect(sum).toBeA('number').toBe(40);
  });
      
});

it("should square a number",() =>{
    var res = util.square(5);
    expect(res).toBeA('number').toBe(25);
        
});

it("should async square a number",(done) =>{
    util.squareAsync(5, (square) => {
      expect(square).toBeA('number').toBe(25);
      done();
    });
      
});

it('should set firstName and lastName', () => {
    var user = {location: 'Philadelphia', age: 25};
    var res = util.setName(user, 'Andrew Mead');
  
    expect(res).toInclude({
      firstName: 'Andrew',
      lastName: 'Mead'
    });
});

it('should expect some values', () => {
  expect(12).toNotBe(13);
  expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
  expect([2,3,4]).toExclude(1);
  expect({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }).toExclude({
    age: 23
  })
});
