import type { RequestHandler } from '@sveltejs/kit';

import { todos } from './_todos';

export const get = (request) => {
	console.log(request.params.uid);
};

export const del: RequestHandler = async ({ request }) => {
	const status = 200;
	let body = {};

	const res = await request.formData();

	// body = await prisma.todo.delete({
	// 	where: {
	// 		uid: request.params.uid
	// 	}
	// });

	return {
		status,
		body
	};
};

export const patch: RequestHandler = async ({ request }) => {
	const status = 200;
	const res = await request.formData();

	return api(res, {
		text: res.has('text') ? res.get('text') : undefined,
		done: res.has('done') ? !!res.get('done') : undefined
	});
};
