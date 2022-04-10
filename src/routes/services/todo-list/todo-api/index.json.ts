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

	const body = await prisma.todo.create({
		data: {
			created_at: new Date() as Date,
			text: todoPost as string,
			done: false as boolean
		}
	});

	return {
		status: 303,
		headers: {
			location: '/services/todo-list/'
		}
	};
};
