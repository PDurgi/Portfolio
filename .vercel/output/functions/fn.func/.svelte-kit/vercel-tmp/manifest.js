export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assests/particles.json","favicon.png","images/pd.jpg","images/profile.jpg","images/profile.png","images/profile1 (2).png","images/profile1.png","images/profile10.png","images/profile2.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.c912d1b8.js","app":"_app/immutable/entry/app.4335d4e9.js","imports":["_app/immutable/entry/start.c912d1b8.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/singletons.3074e555.js","_app/immutable/entry/app.4335d4e9.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.1673c172.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
