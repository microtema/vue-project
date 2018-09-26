/**
 * Collect all module stores in all components
 * and set globally namespaced to true
 */
const requireModule = require.context('../../src/components', true, /\.store\.js/);
const modules = {};

requireModule.keys().forEach(it => {

    if (it === './index.js') {
        return;
    }

    let moduleName = it
        .replace(/^\.+/, '')
        .replace(/^\/+/, '')
        .replace(/(\.js)/g, '')
        .replace(/(\.store)/g, '')
        .replace(/(\/)/g, '.')
        .toLowerCase();

    const names = moduleName.split(/\./);

    moduleName = names.splice(0, names.length - 1).join('.');

    modules[moduleName] = {
        namespaced: true,
        ...requireModule(it).default
    };
});

export default modules;