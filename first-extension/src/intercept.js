module.exports = targets => {
    targets.of("@magento/pwa-buildpack").specialFeatures.tap(flags =>{

        flags[targets.name] = {esModules: true, cssModules: true};
    });

    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
           name: "Hello World",
           pattern: "/hello/:name?",
           path: "@therealhunzik/first-extension/src/RootComponents/hello-world.js"
        })
        return routes;
    });
}
