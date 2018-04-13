var pageComponent=webpackJsonppageComponent([6],{150:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=o(l),s=n(1),c=o(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11);var p=n(151),u=o(p),g=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),t}(i.default);c.default.register(g,u.default),t.default=g},151:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.GaGfT=void 0;var l,i=n(0),s=o(i),c=n(1),p=o(c);goog.loadModule(function(e){function t(e,t,o){var l=function(){a("article",null,null,"id","before-after"),a("h3"),i("How does it look like now (7.0)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_filter_items_old.png"),r("img"),r("p"),a("h3"),i("Changes for Lexicon 2.0 (7.1)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_filter_items_new.png"),r("img"),r("p"),a("table"),a("thead"),a("tr"),a("th"),i("Change"),r("th"),a("th"),i("Reason"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),i("① Filters and sorting are group in one dropdown"),r("td"),a("td"),i("Lexicon wants the main management toolbar section to be the search form."),r("td"),r("tr"),a("tr"),a("td"),i("② Sorting buttons are now a single toggle button"),r("td"),a("td"),i("Reduce the used space in the toolbar."),r("td"),r("tr"),r("tbody"),r("table"),r("article"),a("article",null,null,"id","management-toolbar-with-creation-menu"),a("h4"),i("How to apply it?"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),i("_"),r("th"),a("th"),i("Action"),r("th"),a("th"),i("Mandatory"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("a",null,null,"href","#step-1"),i("1"),r("a"),r("td"),a("td"),i("Locate the code in your application"),r("td"),a("td"),i("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-2"),i("2"),r("a"),r("td"),a("td"),i("Use "),a("code"),i("clay:management-toolbar"),r("code"),i(" instead of the old "),a("code"),i("liferay-frontend:management-bar"),r("code"),i(" tag"),r("td"),a("td"),i("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-3"),i("2"),r("a"),r("td"),a("td"),i("Move the definitions into a Display Context"),r("td"),a("td"),i("✘"),r("td"),r("tr"),r("tbody"),r("table"),a("h3"),i("[1] Locate the code in your application "),d("a",null,null,"id","step-1"),r("h3"),a("p"),i("Locate the code responsible for rendering the "),a("strong"),i("management-bar"),r("strong"),i(" in your application. It should resemble something like the following snippet found in "),a("a",null,null,"href","https://github.com/liferay/liferay-portal/blob/fe9dfcc0275660a0fe9aafb50ae6b169236f67cf/modules/apps/web-experience/asset/asset-tags-admin-web/src/main/resources/META-INF/resources/view.jsp#L28"),i("asset-tags-admin-web/view.jsp"),r("a"),i(":"),r("p"),s({code:'<liferay-frontend:management-bar\n    disabled="<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>"\n    includeCheckBox="<%= true %>"\n    searchContainerId="assetTags"\n>\n    <liferay-frontend:management-bar-filters>\n        <liferay-frontend:management-bar-navigation\n            navigationKeys=\'<%= new String[] {"all"} %>\'\n            portletURL="<%= renderResponse.createRenderURL() %>"\n        />\n\n        <liferay-frontend:management-bar-sort\n            orderByCol="<%= assetTagsDisplayContext.getOrderByCol() %>"\n            orderByType="<%= assetTagsDisplayContext.getOrderByType() %>"\n            orderColumns=\'<%= new String[] {"name", "usages"} %>\'\n            portletURL="<%= portletURL %>"\n        />\n\n        ...\n\n    </liferay-frontend:management-bar-filters>\n\n    ...\n</liferay-frontend:management-bar>',mode:"text/html"},null,o),a("h3"),i("[2] Use "),a("code"),i("clay:management-toolbar"),r("code"),i(" instead of the old "),a("code"),i("liferay-frontend:management-bar"),r("code"),i(" tag "),d("a",null,null,"id","step-2"),r("h3"),a("p"),i("Start by adding the following imports to the imports section of your "),a("code"),i("init.jsp"),r("code"),i(" file:"),r("p"),s({code:'// Import the clay tld file to be able to use the new tag\n<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>\n\n// Import the DropdownItemList utility class to create the filter items model\n<%@ page import="com.liferay.frontend.taglib.clay.servlet.taglib.util.JSPDropdownItemList" %>',mode:"text/html"},null,o),a("p"),i("Don't forget to add the dependencies with to the "),a("code"),i("frontend-taglib-clay"),r("code"),i(" and "),a("code"),i("fronteng.taglib.soy"),r("code"),i(" module in your "),a("code"),i("build.gradle"),r("code"),i(" file:"),r("p"),s({code:'compileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-clay")\ncompileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-soy")',mode:"text/html"},null,o),a("h4"),i("Implement the new taglib"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),i("Parameter"),r("th"),a("th"),i("Description"),r("th"),a("th"),i("Default"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("code"),i("disabled"),r("code"),r("td"),a("td"),i("To disable or not the management toolbar. Usually should be disabled when there're no results"),r("td"),a("td"),i("_"),r("td"),r("tr"),a("tr"),a("td"),a("code");i("filterItems"),r("code"),r("td"),a("td"),i("Is the list of dropdownItems to show in the filters list. This contains both fiter and sorting items."),r("td"),a("td"),i("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("namespace"),r("code"),r("td"),a("td"),i("If passed the params "),a("code"),i("infoPanelId"),r("code"),i(", "),a("code"),i("searchFormName"),r("code"),i(", "),a("code"),i("searchInputName"),r("code"),i(" and "),a("code"),i("searchContainerId"),r("code"),i(" will be automatically namespaced."),r("td"),a("td"),i("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("selectable"),r("code"),r("td"),a("td"),i("To show or not the checkbox to interact with the dataset. Previous "),a("code"),i("includeCheckBox"),r("code"),i("."),r("td"),a("td"),a("code"),i("true"),r("code"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("sortingOrder"),r("code"),r("td"),a("td"),i("Current sorting order "),a("code"),i("asc"),r("code"),i(" or "),a("code"),i("desc"),r("code"),r("td"),a("td"),a("code"),i("asc"),r("code"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("sortingURL"),r("code"),r("td"),a("td"),i("URL to change sorting order, usually changing "),a("code"),i("asc"),r("code"),i(" to "),a("code"),i("desc"),r("code"),i(" and vice versa."),r("td"),a("td"),i("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("totalItems"),r("code"),r("td"),a("td"),i("Is the total number of items that appears in the dataset to reflect it in the results bar and in the active state."),r("td"),a("td"),i("_"),r("td"),r("tr"),r("tbody"),r("table"),s({code:'<clay:management-toolbar\n    disabled=<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>\n    filterItems="<%=\n        new DropdownItemList(_request) {\n            {\n                addGroup(\n                    dropdownGroupItem -> {\n                        dropdownGroupItem.setDropdownItemList(\n                            new DropdownItemList(_request) {\n                                {\n                                    add(\n                                        dropdownItem -> {\n                                            dropdownItem.setHref(\n                                                _renderResponse.createRenderURL(),\n                                                "orderByCol", "name",\n                                                "orderByType", getOrderByType());\n                                            dropdownItem.setLabel("name");\n                                        });\n                                    add(\n                                        dropdownItem -> {\n                                            dropdownItem.setHref(\n                                                _renderResponse.createRenderURL(),\n                                                "orderByCol", "usages",\n                                                "orderByType", getOrderByType());\n                                            dropdownItem.setLabel("usages");\n                                        });\n                                }\n                            }\n                        );\n                        dropdownGroupItem.setLabel("order-by");\n                    });\n            }\n        }\n    %>"\n    namespace="<%= renderResponse.getNamespace() %>"\n    selectable="<%= true %>"\n    sortingOrder="<%= ParamUtil.getString(request, "orderByType", "asc") %>"\n    sortingURL="<%= assetTagsDisplayContext.getSortingURL() %>"\n    totalItems="<%= assetTagsDisplayContext.getTotalItems() %>"\n/>',mode:"text/html"},null,o),a("h3"),i("[3] Move the definitions into a Display Context "),d("a",null,null,"id","step-3"),r("h3"),a("div",null,null,"class","alert alert-info"),i("This step is "),a("em"),i("optional"),r("em"),i(" but "),a("strong"),i("recommended"),r("strong"),r("div"),a("p"),i("If your application already supports it (or even if it doesn't), consider moving the "),a("code"),i("Java"),r("code"),i(" portion that generates the navigation items model into a "),a("code"),i("*DisplayContext"),r("code"),i(" pattern to keep your jsps cleaner and server-free"),r("p"),s({code:'<clay:management-toolbar\n    disabled=<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>\n    filterItems="<%= assetTagsDisplayContext.getFilterItems() %>"\n    namespace="<%= renderResponse.getNamespace() %>"\n    selectable="<%= true %>"\n    sortingOrder="<%= assetTagsDisplayContext.getSortingOrder() %>"\n    sortingURL="<%= assetTagsDisplayContext.getSortingURL() %>"\n    totalItems="<%= assetTagsDisplayContext.getTotalItems() %>"\n/>',mode:"text/html"},null,o),r("article"),a("input",null,null,"type","hidden","value",e.page.title),r("input"),a("input",null,null,"type","hidden","value",e.site.title),r("input")};c(n.$$assignDefaults({content:l},e),null,o)}goog.module("GaGfT.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),a=o.elementOpen,r=o.elementClose,d=o.elementVoid,i=(o.elementOpenStart,o.elementOpenEnd,o.text),s=(o.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),c=p.default.getTemplate("lexiconMigrationGuide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="GaGfT.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var u=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),t}(s.default);p.default.register(u,l),t.GaGfT=u,t.templates=l,t.default=l}},[150]);