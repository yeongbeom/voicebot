/// <reference types="@sveltejs/kit" />

type Todo = {
	uid: string;
	createdAt: Date;
	text: string;
	done: boolean;
};

type EmpathyRes = {
	emotion: string,
	text: string,
}

type EmpathyReq = {
	audio: string,
	text: string,
	uid: string
}