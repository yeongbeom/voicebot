import { readable, writable } from 'svelte/store';

export const currentExpression = writable('neutral');

export const currentStatus = writable('init');

export const emotion = readable({
	neutral: 'neutral',
	happiness: 'happiness',
	disgust: 'disgust',
	surprise: 'surprise',
	anger: 'anger',
	sadness: 'sadness',
	fear: 'fear',
	worry: 'worry',
	contempt: 'contempt'
});

export const status = readable({
	init: 'init',
	idle: 'idle',
	listen: 'listen',
	think: 'think',
	talk: 'talk'
});

// switch ($currentStatus) {
// 	case $status.init: {
// 		console.log(0);
// 		break;
// 	}
// 	case $status.idle: {
// 		console.log(1);
// 		break;
// 	}
// 	case $status.listen: {
// 		console.log(2);
// 		break;
// 	}
// 	case $status.think: {
// 		console.log(3);
// 		break;
// 	}
// 	case $status.speak: {
// 		console.log(4);
// 		break;
// 	}
// 	default: {
// 		console.log(5);
// 		break;
// 	}
// }
// setInterval(() => {
// 	$currentStatus = $status.think;
// }, 3000);
