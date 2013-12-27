Package.describe({
	summary: "Raphael.js, JavaScript Vector Library goodness."
});

Package.on_use(function (api) {
  api.add_files('lib/raphael/raphael.js', 'client');
  if (typeof api.export !== 'undefined') {
		api.export("Raphael", "client");
	}
});
