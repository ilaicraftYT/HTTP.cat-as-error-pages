const supportedErrors = [
	400, 401, 402, 403, 404, 405,
	406, 407, 408, 409, 410, 411,
	412, 413, 414, 415, 416, 417,
	418, 420, 421, 422, 423, 424,
	425, 426, 428, 429, 431, 444,
	450, 451, 497, 498, 499, 500,
	501, 502, 503, 504, 506, 507,
	508, 509, 510, 511, 521, 523,
	525, 522, 530, 599
];

browser.webRequest.onHeadersReceived.addListener(details => {
	if(!details.initiator && supportedErrors.includes(details.statusCode)) {
		const id = Date.now() + Math.random();
		window.localStorage.setItem(id, details.url);
		
		browser.tabs.update(details.tabId, {
			url: `${browser.runtime.getURL("index.html")}?url_id=${id}&status=${encodeURIComponent(details.statusLine)}&status_code=${encodeURIComponent(details.statusCode)}`,
		});
	}
}, {
	urls: ["<all_urls>"], types: ["main_frame"]
})
