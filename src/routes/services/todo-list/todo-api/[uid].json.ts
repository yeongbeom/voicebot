import PrismaClient from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

// import { todos } from './_todos';

// export const get = (request) => {
// 	console.log(request.params.uid);
// };

export const del: RequestHandler = async ({ request, params }) => {
	const res = await request.formData();

	const body = await prisma.todo.delete({
		where: {
			uid: params.uid
		}
	});

	// todos.filter((todo) => todo.uid !== params.uid);

	return {
		status: 303,
		headers: {
			location: '/services/todo-list/'
		}
	};
};

export const patch: RequestHandler = async ({ request, params }) => {
	const res = await request.formData();
	const data = {
		text: res.has('text') ? res.get('text') : undefined,
		done: res.has('done') ? !!res.get('done') : undefined
	};

	const body = await prisma.todo.update({
		where: {
			uid: params.uid
		},
		data: {
			done: data.done as boolean,
			text: data.text as string
		}
	});

	return {
		status: 303,
		headers: {
			location: '/services/todo-list/'
		}
	};
};
