/// <reference path="../Framework/extensions/Object.js" />
/*
Require: Object.extend
*/
var exports = exports || window || {};
(function(namespace){


    namespace.Class = function () {
        return this._init.apply(this, arguments);
    };
    var classPrototype = {
        className: '',
        options: {},

        _init: function () {
            return this._constructor.apply(this, arguments);
        },

        _constructor: function (options) {
            this.options = this.options.extend(options);
            return this;
        }

    };
    namespace.Class.extend(classPrototype);
    namespace.Class.extends = function (object) {
        return namespace.Class.clone().extend(classPrototype).extend(object);
    }

}(exports));

Function.prototype.clone = function () {
    return new Function('return ' + this.toString())();
};
