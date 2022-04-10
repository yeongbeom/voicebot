import PrismaClient from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const get: RequestHandler = async () => {
	const status = 200;
	const body = await prisma.todo.findMany();

	return {
		status,
		body
	};
};

export const post: RequestHandler = async ({ request }) => {
	const res = await request.formData();
	const todoPost = res.get('add-todo'); 

	const status = 201;
	const body = await prisma.todo.create({
		data: {
			created_at: new Date() as Date,
			text: todoPost as string,
			done: false as boolean
		}
	});

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
