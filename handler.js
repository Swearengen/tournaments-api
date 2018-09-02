import * as data from './mock/tournaments-data.json';

export const tournamentsList = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data.tournaments),
  };

  callback(null, response);
};

export const rounds = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data.rounds),
  };

  callback(null, response);
};
