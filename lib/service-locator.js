/**
 * @fileOverview
 * Simple javascript implementation of the Service Locator.
 * Service Locator is a kind of dependency injection pattern.
 * The Service Locator pattern does not describe how to instantiate the services.
 * It describes a way to register services and locate them.
 * A Service Locator should be able to locate a service without knowing its concrete type.
 * For example, it might use a string key.
 * This allows you to replace the concrete implementation of the dependency without modifying the classes.
 */

/**
 * @class Describes a way to register services and locate them.
 * @name ServiceLocator
 */
var ServiceLocator = module.exports = function () {
    /**
     * Services storage.
     * @private
     */
    var services = {};

    /**
     * Store service instance.
     * @function
     * @name ServiceLocator.register
     * @param {String} key Service instance identifier.
     * @param {Object} service Service instance.
     */
    this.register = function (key, service) {
        services[key] = service;
    };

    /**
     * Obtain service instance.
     * @function
     * @param {String} key Service instance identifier.
     * @returns {Object} Service instance.
     */
    this.resolve = function (key) {
        return services[key];
    };

    /**
     * Clear services storage.
     * @function
     */
    this.reset = function () {
        services = {};
    };
};
