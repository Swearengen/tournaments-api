import * as data from './mock/tournaments-data.json';
import * as _ from 'lodash';

export const tournamentsList = async (event, context, callback) => {
	const tournamentsList = data.tournaments.map(tournament => {
    	return _.omit(tournament, ['rounds']);
  	});
  	const response = {
    	statusCode: 200,
    	headers: {
      		'Access-Control-Allow-Origin': '*',
      		'Access-Control-Allow-Credentials': true,
    	},
    	body: JSON.stringify(tournamentsList),
  	};

  	callback(null, response);
};

export const tournament = async (event, context, callback) => {
  	const tournament = data.tournaments.find(tournament => tournament.id == String(event.pathParameters.id))
	const response = {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify(tournament),
	};

	callback(null, response);
};
