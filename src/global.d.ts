/// <reference types="@sveltejs/kit" />

type Todo = {
	uid: string;
	created_at: Date;
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