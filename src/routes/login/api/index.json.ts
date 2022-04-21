import type { RequestHandler } from '@sveltejs/kit';

import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';

export const post: RequestHandler = async ({ request }) => {
	const res = await request.json();

	if (!(res.username === 'HShin' && res.password === '4321')) {
		console.log('not auth user');
		return {
			body: {
				message: 'failed'
			}
		};
	}

	const sessionId = uuidv4();
	const headers = {
		'Set-Cookie': cookie.serialize('session_id', sessionId, {
			httpOnly: true,
			sampeSite: 'lax',
			maxAge: 60 * 60 * 24 * 7,
			path: '/'
		})
	};

	return {
		status: 200,
		headers,
		body: {
			message: 'success',
			res
		}
	};
};
