import { readable } from 'svelte/store';

/* -------------------------------------------------------------------------- */
/*                                API endpoints                               */
/* -------------------------------------------------------------------------- */
const gnictProcPort = '20080';
const gnictHost = '10.1.93.21';

const ketiPort = '28443';
const ketiHost = 'ketiair.com';

/* -------------------------------------------------------------------------- */
/*                                Don't change                                */
/* -------------------------------------------------------------------------- */
const protocol = 'https';
const pathTalk = 'talk';
const pathOffer = 'offer';

export const endpoints = readable({
	// offerLocalEndpoint: `${protocol}://${gnictHost}:${gnictProcPort}/${pathOffer}`,
	talkEndpoint: `${protocol}://${ketiHost}:${ketiPort}/${pathTalk}`,
	offerRemoteEndpoint: `${protocol}://${ketiHost}:${ketiPort}/${pathOffer}`
});
