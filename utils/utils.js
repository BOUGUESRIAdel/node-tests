module.exports.add = (a, b) => a + b;

module.exports.addAsync = (a, b) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number')
        resolve(a + b);
      else
        reject(new Error('Expected a number'));
    }, 1000);
  });
};

module.exports.square = (a) => a * a;

module.exports.squareAsync = (a, callback) => {
  setTimeout(()=>{
    callback(a * a);
  }, 1000);
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
  };