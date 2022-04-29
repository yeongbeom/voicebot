import PrismaClient from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';
import { todoReqReturn } from './_api';

const prisma = new PrismaClient();

let status = 500;
let body = {};


export const get: RequestHandler = async ({ request }) => {
	status = 200;
	body = await prisma.todo.findMany();

	return todoReqReturn(request, status, body)
};

export const post: RequestHandler = async ({ request }) => {
	const res = await request.formData();
	const todoPost = res.get('add-todo');

	status = 200;
	body = await prisma.todo.create({
		data: {
			createdAt: new Date() as Date,
			text: todoPost as string,
			done: false as boolean
		}
	});

	return todoReqReturn(request, status, body)
};
