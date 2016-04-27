/*
    Object extensions
*/
if (typeof global == "undefined") global = null;
if (typeof window == "undefined") window = null;
global = global || window || {};

(function(namespace){

    if (namespace.Object.prototype.extend == undefined) {
        // http://stackoverflow.com/questions/3781373/javascript-what-are-extend-and-prototype-used-for		

        namespace.Object.defineProperty(Object.prototype, "extend", {
            value: function (prop) {

                function _extend(result) {
                    for (i = 1; i < arguments.length; i++) {

                        if (!arguments[i]) {
                            continue;
                        }

                        for (var name in arguments[i]) {
                            if (!arguments[i].hasOwnProperty(name)) {
                                continue;
                            }

                            if (typeof arguments[i][name] == 'object') {
                                result[name] = result[name] || {};
                                result[name] = _extend(result[name], arguments[i][name]);
                            } else {
                                result[name] = arguments[i][name];
                            }
                        }
                    }

                    return result;
                }

                var prototype = this.prototype || {};
                prototype = _extend(prototype, this, prop);

                if (typeof (this) == 'object') {
                    return prototype;
                } else {
                    return this;
                }
            },
            enumerable: false
        });

	}	
	
	
	/* Query Selector 
	http://youmightnotneedjquery.com/#contains_selector
	http://www.w3schools.com/cssref/css_selectors.asp
	*/


}(global));
