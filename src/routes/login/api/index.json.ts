import type { RequestHandler } from '@sveltejs/kit';

import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';

let status = 500;
let body = {};

export const post: RequestHandler = async ({ request }) => {
	const res = await request.formData();
	const emergencyMobile = res.get('emergency-mobile');

	status = 200;
	body = emergencyMobile;

	if (!(emergencyMobile === '00000000')) {
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
		status,
		headers,
		body: {
			message: 'success',
			res
		}
	};
};
