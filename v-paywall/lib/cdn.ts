// @ts-nocheck

import crypto from "crypto";

function generateToken(securityKey, videoId, expiration) {
	// Concatenate the security key, video ID, and expiration into one string
	const data = securityKey + videoId + expiration.toString();

	// Create a SHA256 hash of the concatenated string
	const hash = crypto.createHash('sha256');
	hash.update(data);

	// Return the hash value as a hexadecimal string
	return hash.digest('hex');
};

export function signStreamUrl(iframeURL, securityKey, expiration = 3600) {
	// Parse the URL
	const parsedUrl = new URL(iframeURL);
	const pathSegments = parsedUrl.pathname.split('/');  // Example: ['', 'embed', '228530', 'cbf30637-b0de-4f8f-9e43-2199a5c5e967']
	const videoLibraryId = pathSegments[2];
	const videoId = pathSegments[3];
	const expires = Math.floor(new Date() / 1000) + expiration;


	// Generate the token
	const token = generateToken(securityKey, videoId, expires);

	// Append the token and expiration to the URL
	parsedUrl.searchParams.set('token', token);
	parsedUrl.searchParams.set('expires', expires);

	return parsedUrl.toString();
};
