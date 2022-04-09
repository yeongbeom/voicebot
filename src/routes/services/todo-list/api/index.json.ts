import PrismaClient from '$lib/prisma';

const prisma = new PrismaClient();

export const get = async ({ params }) => {
	const status = 200;
	const body = await prisma.todo.findMany();

	console.log('api-get', params);

	return {
		status,
		body
	};
};

// import type { RequestHandler, Request } from '@sveltejs/kit';
// import { api } from './_api';

// export const get: RequestHandler = (request) => {
// 	return api(request);
// };

// export const post: RequestHandler<Request, FormData> = (request) => {
// 	return api(request, {
// 		created_at: new Date(),
// 		text: request.body.get('text'),
// 		done: false
// 	});
// };
