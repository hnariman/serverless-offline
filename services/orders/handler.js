'use strict';

module.exports.api = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message:'orders service',
      orders:[
        { username:"hnariman", amount:4, quantity:5, product:"pocket" },
        { username:"hnariman", amount:5, quantity:6, product:"pocket" },
        { username:"hnariman", amount:6, quantity:7, product:"pocket" },
        { username:"hnariman", amount:7, quantity:8, product:"pocket" },
        { username:"hnariman", amount:8, quantity:9, product:"pocket" },
        { username:"hnariman", amount:9, quantity:10, product:"pocket" },
      ]
    }),
  }
  return response;
};
