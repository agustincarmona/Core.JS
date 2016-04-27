/*
*/
var exports = exports || window || {};
(function (namespace) {

    namespace.URL = {

        setParamsToUrl: function(url, object) {
            
            var urlComposed = namespace.URL.getPathname(url);
            var params = namespace.URL.getAllParameters(url);
            params = params.extend(object);

            $.each(params, function (name, value) {
                urlComposed += namespace.URL.addParamSeparator(urlComposed);
                urlComposed += name + '=' + value;
            });

            return urlComposed;
        },

        addParamSeparator: function (url) {
            if (url == undefined) {
                return '';
            }

            return url.indexOf('?') == -1 ? '?' : '&';
        },

        getHostnameAndPort: function(url) {
            var parts = url.split('/');
            var hostnameToCheck = parts[0];
            var hostname = '';

            if (hostnameToCheck.search(/http/gi) == 0 || hostnameToCheck.search(/\/\//gi) == 0) {
                hostname = parts[2];
            } else if (hostnameToCheck.search(/www/gi) > -1 || hostnameToCheck.match(/\./gi).length > 1) {
                hostname = parts[0];
            }

            return hostname;
        },

        getHostname: function (url) {
            var parts = namespace.URL.getHostnameAndPort(url).split(':');
            return parts[0];
        },

        getPort: function (url) {
            var parts = namespace.URL.getHostnameAndPort(url).split(':');
            return parts.length == 2 ? parts[1] : '';
        },

        getPathname: function (url) {
            var result = url.split(namespace.URL.getHostnameAndPort(url))[1];
            result = result.replace(namespace.URL.getSearch(url), '');
            if (result.substring(result.length - 1) == '?')
                result = result.substring(0, result.length - 1);

            return result;
        },

        getSearch: function (url) {
            var index = url.indexOf('?') + 1;
            return index > 0 && url.length > index ? url.substring(index) : '';
        },

        getAllParameters: function (url) {
            var params = {};
            var search = namespace.URL.getSearch(url);

            if (search) {
                var parts = search.split('&');

                for (var i = 0; i < parts.length; i++) {
                    var paramParts = parts[i].split('=');
                    if (!paramParts[0]) {
                        continue;
                    }

                    params[paramParts[0]] = paramParts[1] || '';
                }
            }

            return params;
        },

        getParameter: function (url, name) {
            var params = namespace.URL.getAllParameters(url);
            return params[name];
        }

    };

}(exports));
