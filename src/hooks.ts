import type { Handle } from '@sveltejs/kit';
// import * as cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	console.debug('[hooks] Handle');
	// const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	// event.locals.user = cookies;

	// if (!cookies.session_id) {
	// 	// [TODO] compare cookie values
	// 	event.locals.user.authenticated = false;
	// } else {
	// 	event.locals.user.authenticated = true;
	// }

	const response = await resolve(event);

	return response;
};

// export const getSession = (request) => {
// 	console.debug('[hooks] getSession');
// 	const user = request.locals.user.authenticated;
// 	console.log(user);

// 	if (!user.session_id) {
// 		return {};
// 	} else {
// 		return {
// 			user
// 		};
// 	}
// };
