import { readable } from 'svelte/store';

/* -------------------------------------------------------------------------- */
/*                                API endpoints                               */
/* -------------------------------------------------------------------------- */
const gnictProcPort = '20080';
const gnictHost = "gnlabs.iptime.org";
// const gnictHost = 'localhost';

const ketiPort = '28443';
const ketiHost = "115.95.228.155";
// const ketiHost = 'localhost';

/* -------------------------------------------------------------------------- */
/*                                Don't change                                */
/* -------------------------------------------------------------------------- */
const protocol = 'https';
const pathTalk = 'talk';
const pathOffer = 'offer';

export const endpoints = readable({
	offerLocalEndpoint: `${protocol}://${gnictHost}:${gnictProcPort}/${pathOffer}`,
	talkEndpoint: `${protocol}://${gnictHost}:${gnictProcPort}/${pathTalk}`,
	offerRemoteEndpoint: `${protocol}://${ketiHost}:${ketiPort}/${pathOffer}`
});
