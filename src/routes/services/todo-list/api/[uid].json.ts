import PrismaClient from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';
import { todoReqReturn } from './_api';

const prisma = new PrismaClient();

let status = 500;
let body = {};


export const del: RequestHandler = async ({ request, params }) => {
	status = 200;
	body = await prisma.todo.delete({
		where: {
			uid: params.uid
		}
	});

	return todoReqReturn(request, status, body);

};

export const patch: RequestHandler = async ({ request, params }) => {
	const res = await request.formData();
	const data = {
		text: res.has('text') ? res.get('text') : undefined,
		done: res.has('done') ? !!res.get('done') : undefined
	};

	status = 200;
	body = await prisma.todo.update({
		where: {
			uid: params.uid
		},
		data: {
			done: data.done as boolean,
			text: data.text as string
		}
	});

	return todoReqReturn(request, status, body);
};
