import { readable } from 'svelte/store';

/* -------------------------------------------------------------------------- */
/*                                API endpoints                               */
/* -------------------------------------------------------------------------- */
const gnictProcPort = '20080';
const gnictHost = "gnlabs.iptime.org";

const ketiPort = '28443';
const ketiHost = "ketiair.com";

/* -------------------------------------------------------------------------- */
/*                                Don't change                                */
/* -------------------------------------------------------------------------- */
const protocol = 'https';
const pathTalk = 'talk';
const pathOffer = 'offer';

export const endpoints = readable({
	offerLocalEndpoint: `${protocol}://${gnictHost}:${gnictProcPort}/${pathOffer}`,
	talkEndpoint: `${protocol}://${ketiHost}:${ketiPort}/${pathTalk}`,
	offerRemoteEndpoint: `${protocol}://${ketiHost}:${ketiPort}/${pathOffer}`
});