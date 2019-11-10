(this["webpackJsonpmqtt-monitor"]=this["webpackJsonpmqtt-monitor"]||[]).push([[0],{112:function(e,t,n){e.exports=n(232)},118:function(e,t,n){},121:function(e,t){},123:function(e,t){},187:function(e,t){},189:function(e,t){},204:function(e,t){},205:function(e,t){},207:function(e,t){},209:function(e,t){},217:function(e,t){},219:function(e,t){},232:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(43),c=n.n(s),l=(n(117),n(118),n(32)),r=n(99),i=n(100),u=n(110),m=n(101),b=n(111),p=n(102),d=n.n(p),h=n(103),g=n.n(h),f={storeSet:function(e,t){window.localStorage.setItem("mqtt_store_item_"+e,JSON.stringify(t))},storeGet:function(e){var t=window.localStorage.getItem("mqtt_store_item_"+e);return t?JSON.parse(t):void 0}},E=function(e){return null!=e&&"function"===typeof e[Symbol.iterator]},v=function(e){return"[object String]"===Object.prototype.toString.call(e)},S=n(108),C=n(35),y=n(7),w=n(57),k=n(56),N=n(106),F=n(53),O=n.n(F),x=o.a.createContext({isConnected:!1,options:{},topics:new Set}),j=x,D=n(15),I=n(18),M=n(109),P=n(22),T=n(6),_=function(e,t){var n=Object(a.useContext)(j).isConnected,s=Object(a.useState)({host:e.options.host||"",username:e.options.username||"",password:e.options.password||""}),c=Object(M.a)(s,2),l=c[0],r=c[1],i=function(e){var t=e.target,n=t.name,a=t.value,o=Object.assign({},l);o[n]=a,r(o)};return o.a.createElement(T.a,{id:"connect-form",onSubmit:function(t){t.preventDefault(),console.log("handleSubmit ",t.target);var n={host:l.host,username:l.username||null,password:l.password||null};console.log("ConnectForm.handleSubmit ",n),e.onConnectFormSubmit&&e.onConnectFormSubmit(n)}},o.a.createElement(T.a.Row,null,o.a.createElement(T.a.Group,{as:y.a,controlId:"host",xs:12,md:4},o.a.createElement(T.a.Control,{disabled:n,onChange:i,name:"host",type:"text",value:l.host,placeholder:"ws://test.mosquitto.org:8080"})),o.a.createElement(T.a.Group,{as:y.a,controlId:"username",xs:6,md:3},o.a.createElement(T.a.Control,{disabled:n,onChange:i,name:"username",type:"text",value:l.username,placeholder:"Username"})),o.a.createElement(T.a.Group,{as:y.a,controlId:"password",xs:6,md:3},o.a.createElement(T.a.Control,{disabled:n,onChange:i,name:"password",type:"password",value:l.password,placeholder:"Password"})),o.a.createElement(y.a,{xs:12,md:2},n?o.a.createElement(P.a,{className:"btn-block",variant:"danger",type:"submit"},"Disconnect"):o.a.createElement(P.a,{className:"btn-block",variant:"primary",type:"submit"},"Connect"))))};var B=function(e){var t=Object(a.useContext)(j),n=Object(a.useRef)(null),s=Object(a.useRef)(null);return o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,null,o.a.createElement(T.a.Row,{className:"align-items-center"},o.a.createElement(y.a,{as:y.a,sm:6,md:3,className:"mb-3 mt-3"},o.a.createElement(T.a.Control,{ref:n,name:"subscribe-topics",type:"text",placeholder:"topic/test"})),o.a.createElement(y.a,{sm:6,md:3},o.a.createElement(P.a,{className:"btn-block",name:"subscribe",variant:"primary",type:"submit",disabled:!t.isConnected,onClick:function(t){t.preventDefault();var a={subscribe:!0,topics:n.current.value};console.log("SubscribeForm.handleClick1 ",a),a.topics&&e.onSubscribeFormSubmit&&e.onSubscribeFormSubmit(a)}},"Subscribe")),o.a.createElement(y.a,{sm:6,md:3,className:"mb-3 mt-3"},o.a.createElement(T.a.Control,{ref:s,name:"unsubscribe-topics",type:"text",placeholder:"topic/test"})),o.a.createElement(y.a,{sm:6,md:3},o.a.createElement(P.a,{className:"btn-block",name:"unsubscribe",variant:"danger",type:"submit",disabled:!t.isConnected,onClick:function(t){t.preventDefault();var n={subscribe:!1,topics:s.current.value};console.log("SubscribeForm.handleClick2 ",n),n.topics&&e.onSubscribeFormSubmit&&e.onSubscribeFormSubmit(n)}},"Unsubscibe")))),function(){var e=t.topics&&Object(l.a)(t.topics).join(", ")||"";return e?o.a.createElement("p",{className:"m-0 p-0"},o.a.createElement("strong",null,"Subscribed Topics: "),o.a.createElement("span",{className:"text-success"},e)):null}())};var G=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null);return o.a.createElement(T.a,{id:"publish-form",onSubmit:function(a){console.log(e),a.preventDefault();var o={topic:t.current.value,message:n.current.value,callback:function(e){e||(n.current.value="")}};console.log("PublishForm.handleSubmit ",o),e.onPublishFormSubmit&&e.onPublishFormSubmit(o)}},o.a.createElement(T.a.Row,null,o.a.createElement(T.a.Group,{as:y.a,controlId:"publish-topic",xs:12,md:3},o.a.createElement(T.a.Control,{ref:t,name:"publish-topic",type:"text",placeholder:"topic name"})),o.a.createElement(T.a.Group,{as:y.a,controlId:"publish-message",xs:12,md:7},o.a.createElement(T.a.Control,{ref:n,name:"publish-message",type:"text",placeholder:"message content"})),o.a.createElement(y.a,{xs:12,md:2},o.a.createElement(P.a,{className:"btn-block",name:"publish",variant:"primary",type:"submit",disabled:!e.isConnected},"Publish"))))};function H(e){return o.a.createElement(I.a,{defaultActiveKey:"0",className:"w-100"},o.a.createElement(D.a,null,o.a.createElement(I.a.Toggle,{as:D.a.Header,className:"bg-dark",eventKey:"0"},o.a.createElement("span",{className:"text-white"}," Connect Options")),o.a.createElement(I.a.Collapse,{eventKey:"0"},o.a.createElement(D.a.Body,null,o.a.createElement(_,e)))),o.a.createElement(D.a,null,o.a.createElement(I.a.Toggle,{as:D.a.Header,className:"bg-dark",eventKey:"1"},o.a.createElement("span",{className:"text-white"}," Subscribe Options")),o.a.createElement(I.a.Collapse,{eventKey:"1"},o.a.createElement(D.a.Body,null,o.a.createElement(B,e)))),o.a.createElement(D.a,null,o.a.createElement(I.a.Toggle,{as:D.a.Header,className:"bg-dark",eventKey:"2"},o.a.createElement("span",{className:"text-white"}," Publish Options")),o.a.createElement(I.a.Collapse,{eventKey:"2"},o.a.createElement(D.a.Body,null,o.a.createElement(G,e)))))}var R={host:"ws://test.mosquitto.org:8080",username:null,password:null},Y=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).renderNewBadge=function(e){return 0===e?o.a.createElement(N.a,{pill:!0,variant:"danger"},"New!"):null},n.renderCreatedAt=function(e){return e?o.a.createElement("small",null,o.a.createElement(g.a,{format:"YYYY/MM/DD HH:mm:ss"},e)," "):null},n.renderItems=function(){var e=n.state.messages,t=e.map((function(t,a){return o.a.createElement(o.a.Fragment,{key:"item_"+a},o.a.createElement(w.a.Item,null,o.a.createElement(k.a,null,o.a.createElement(k.a.Body,null,o.a.createElement("strong",{className:"text-primary"},t.topic,": "),o.a.createElement("span",{className:"text-secondary"},t.message),o.a.createElement("small",{className:"pl-2"},"(",e.length-a,")"),o.a.createElement("span",{className:"pl-2"},n.renderCreatedAt(t.ts)),o.a.createElement("span",{className:"pl-2"},n.renderNewBadge(a))))))}));return o.a.createElement(w.a,{variant:"flush"},t)},n.onConnectFormSubmit=function(e){console.log("onConnectFormSubmit ",e),n.state.isConnected?n.client.end():e&&e.host&&n.connect(e)},n.onSubscribeFormSubmit=function(e){console.log("onSubscribeFormSubmit ",e);var t=e.subscribe,a=e.topics;if(n.state.isConnected&&a){var o=a.split(" ");t?n.subscribe(o):n.unsubscribe(o)}},n.onPublishFormSubmit=function(e){console.log("onPublishFormFormSubmit ",e);var t=e.topic,a=e.message;n.state.isConnected&&t&&a&&n.publish(t,a,e.callback)};var a=f.storeGet("options")||R,s=a&&f.storeGet(a+"_messages")||[];return console.log("constructor",a,s&&s.length||0),n.state={isConnected:!1,options:a,topics:new Set,messages:s},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(x.Provider,{value:this.state},o.a.createElement(S.a,null,o.a.createElement(C.a,{className:"justify-content-center"},o.a.createElement("h1",{className:"p-3",as:y.a},"MQTT Monitor")),o.a.createElement(C.a,null,o.a.createElement(H,{onConnectFormSubmit:this.onConnectFormSubmit,onSubscribeFormSubmit:this.onSubscribeFormSubmit,onPublishFormSubmit:this.onPublishFormSubmit,options:this.state.options})),o.a.createElement(C.a,null,o.a.createElement(y.a,{className:"mt-3"},o.a.createElement("h3",null,"Received Messages"))),o.a.createElement(C.a,null,this.renderItems())))}},{key:"cleanTopics",value:function(e){var t;return v(e)?t=e.split(" "):E(e)&&(t=e),t.map((function(e){return e.trim()})).filter(Boolean)}},{key:"publish",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;console.log("publish ",e,t),this.client.publish(e,t,(function(a){a?console.log("publish fail: ",a):console.log("published: ",e,t),n&&n(a)}))}},{key:"unsubscribe",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this.cleanTopics(e);console.log("unsubscribe current ",this.state.topics),console.log("unsubscribe target ",a),this.client.unsubscribe(a,(function(e){if(e)console.error("unsubscribe fail: ",e);else{console.log("unsubscribed: ",a);var o=t.state.topics;a.forEach((function(e){o.delete(e)})),t.setState({topics:o})}n&&n(e)}))}},{key:"subscribe",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this.cleanTopics(e);console.log("subscribe current ",this.state.topics),console.log("subscribe target ",a),this.client.subscribe(a,(function(e,o){e?console.error("subscribe fail: ",e):(console.log("subscribed: ",o),t.setState({topics:new Set([].concat(Object(l.a)(a),Object(l.a)(t.state.topics)))})),n&&n(e,o)}))}},{key:"disconnect",value:function(){this.state.isConnected&&this.client.end()}},{key:"connect",value:function(e){var t=this;console.log("connect with ",e),this.client=d.a.connect(e.host,e),this.client.on("connect",(function(){console.log("connected"),f.storeSet("options",e),t.setState({isConnected:t.client.connected,options:e}),t.subscribe("pump/# monitor/#",(function(e){if(!e){var n=O()().format("YYYY/MM/DD HH:mm:ss");t.client.publish("monitor/log","Hello, MQTT Monitor is online at ".concat(n,"!"))}}))})),this.client.on("disconnect",(function(){console.log("disconnect"),t.setState({isConnected:t.client.connected})})),this.client.on("close",(function(){console.log("close"),t.setState({isConnected:t.client.connected})})),this.client.on("error",(function(e){console.log("error:"+e),t.setState({isConnected:t.client.connected})})),this.client.on("message",(function(e,n,a){t.setState({messages:[{ts:new Date,topic:e,message:n.toString()}].concat(Object(l.a)(t.state.messages))},(function(){f.storeSet(t.state.options+"_messages",t.state.messages),console.log("total messages count: "+t.state.messages.length)}))}))}},{key:"checkConnect",value:function(){var e=this.state.options;e.host&&e.host.startsWith("ws")&&this.connect(e)}},{key:"componentDidMount",value:function(){console.log("componentDidMount",this.state.options)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),this.state.isConnected&&f.storeSet("options",this.state.options),f.storeSet(this.state.options+"_messages",this.state.messages)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[112,1,2]]]);
//# sourceMappingURL=main.42bbc311.chunk.js.map