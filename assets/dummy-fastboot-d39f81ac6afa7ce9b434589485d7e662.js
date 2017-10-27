define("dummy/initializers/ajax",["exports","ember"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var r=t.default.get,o=function(e){var t=/^https?:\/\//,o=/^\/\//,a=r(this,"fastboot.request.protocol")
if(o.test(e.url))e.url=a+e.url
else if(!t.test(e.url))try{e.url=a+"//"+r(this,"fastboot.request.host")+e.url}catch(e){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+e.message)}if(!najax)throw new Error("najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?")
najax(e)}
e.default={name:"ajax-service",initialize:function(e){e.register("ajax:node",o,{instantiate:!1}),e.inject("adapter","_ajaxRequest","ajax:node"),e.inject("adapter","fastboot","service:fastboot")}}}),define("dummy/initializers/error-handler",["exports","ember"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"error-handler",initialize:function(e){t.default.onerror||(t.default.onerror=function(e){var r="There was an error running your app in fastboot. More info about the error: \n "+(e.stack||e)
t.default.Logger.error(r)})}}})
