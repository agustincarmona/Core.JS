/// <reference path="../Framework/extensions/Object.js" />
/*
Require: Object.extend
*/
(function (namespace) {


    namespace.Class = function () {
        return this._init.apply(this, arguments);
    };
    namespace.Class.extend({
        className: '',
        options: {},

        _init: function () {
            return this._constructor.apply(this, arguments);
        },

        _constructor: function (options) {
            this.options = this.options.extend(options);
            return this;
        }

    });

}(window = window || {}));
