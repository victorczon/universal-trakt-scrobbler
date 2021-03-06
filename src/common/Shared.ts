interface SharedValues {
	browser: BrowserName;
	pageType: PageType;
}

type BrowserPrefix = 'moz' | 'chrome' | 'unknown';

type BrowserName = 'firefox' | 'chrome' | 'unknown';

type PageType = 'content' | 'popup' | 'background';

const browsers: Record<BrowserPrefix, BrowserName> = {
	moz: 'firefox',
	chrome: 'chrome',
	unknown: 'unknown',
};
const browserPrefix = browser
	? (browser.runtime.getURL('/').split('-')[0] as BrowserPrefix)
	: 'unknown';

export const Shared: SharedValues = {
	browser: browsers[browserPrefix] || 'unknown',
	pageType: 'content',
};
