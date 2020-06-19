/* Import faunaDB sdk */
const faunadb = require('faunadb');
const q = faunadb.query;
/* configure faunaDB Client with our secret */
console.log(process.env.FAUNADB_SERVER_SECRET);
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const createSubscriber = subscriber => {
  return new Promise((resolve, reject) => {
    client
      .query(
        q.Create(q.Collection('subscribers'), {
          data: subscriber,
        })
      )
      .then(response => {
        console.log('success', response);
        /* Success! return the response with statusCode 200 */
        resolve({
          statusCode: 200,
          body: JSON.stringify(response),
        });
      })
      .catch(error => {
        console.log('error', error);
        /* Error! return the error with statusCode 400 */
        reject({
          statusCode: 400,
          body: JSON.stringify(error),
        });
      });
  });
};

export default createSubscriber;
