import type { RequestHandler } from '@sveltejs/kit';

let status = 500;
let body = {};

export const post: RequestHandler = async ({ request }) => {
	const res = await request.formData();
	const emergencyMobile = res.get('emergency-mobile');

	status = 200;
	body = emergencyMobile;

	return {
		status,
		body
	};
};
