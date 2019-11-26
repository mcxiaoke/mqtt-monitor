(this["webpackJsonpmqtt-monitor"]=this["webpackJsonpmqtt-monitor"]||[]).push([[0],{116:function(e,t,n){e.exports=n(240)},123:function(e,t,n){},126:function(e,t){},128:function(e,t){},192:function(e,t){},194:function(e,t){},209:function(e,t){},210:function(e,t){},212:function(e,t){},214:function(e,t){},222:function(e,t){},224:function(e,t){},240:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(36),s=n.n(c),r=(n(121),n(122),n(123),n(44)),i=n(25),l=n(100),u=n(101),m=n(114),b=n(102),p=n(115),d=n(103),f=n.n(d),h=function(e,t){window.localStorage.setItem("mqtt_store_item_"+e,JSON.stringify(t))},g=function(e){var t=window.localStorage.getItem("mqtt_store_item_"+e);return t?JSON.parse(t):void 0},E=n(104),v=n.n(E),C=n(105),S=n.n(C)()(v.a),y=function(e,t,n){S.fire({icon:"success",title:e,text:t,toast:!0,position:"bottom",timer:n||3e3})},O=function(e,t,n){S.fire({icon:"error",title:e,text:t,toast:!0,position:"center",timer:n||5e3})},k=n(112),w=n(33),j=n(6),x=n(54),F=n.n(x),N=o.a.createContext({isConnected:!1,options:{},topics:new Set}),P=n(106),T=n.n(P),D=n(58),M=n(57),K=n(107),R=function(e){var t=e.ts;return o.a.createElement("small",null,o.a.createElement(T.a,{format:"YYYY-MM-DD HH:mm:ss",unix:!0},t)," ")},Y=function(e){return 0===e?o.a.createElement(K.a,{pill:!0,variant:"danger"},"New!"):null},B=function(e){var t=e.item,n=e.index,a=e.length;return o.a.createElement(D.a.Item,null,o.a.createElement(M.a,null,o.a.createElement(M.a.Body,null,o.a.createElement("strong",{className:"text-primary"},t.topic,": "),o.a.createElement("span",{className:"text-secondary"},t.message),o.a.createElement("small",{className:"pl-2"},"(",a-n,")"),o.a.createElement("span",{className:"pl-2"},o.a.createElement(R,{ts:t.ts})),o.a.createElement("span",{className:"pl-2"},o.a.createElement(Y,{index:n})))))},H=function(e){var t=Object(a.useContext)(N).messages,n=t.map((function(e,n){return o.a.createElement(o.a.Fragment,{key:"item_"+n},o.a.createElement(B,{item:e,index:n,length:t.length}))}));return o.a.createElement(D.a,{variant:"flush"},n)},_=n(15),q=n(19),U=n(113),G=n(16),I=n(7),W=function(e){return e.isConnected?o.a.createElement(G.a,{className:"btn-block",variant:"danger",type:"submit"},"Disconnect"):o.a.createElement(G.a,{className:"btn-block",variant:"primary",type:"submit"},"Connect")},J=function(e){var t=Object(a.useContext)(N),n=t.isConnected,c=Object(a.useState)(t.options),s=Object(U.a)(c,2),i=s[0],l=s[1],u=function(e){var t=e.target,n=t.name,a=t.value;l(Object.assign({},i,Object(r.a)({},n,a)))};return o.a.createElement(I.a,{onSubmit:function(t){t.preventDefault();var n={host:i.host,username:i.username||null,password:i.password||null};n.host&&e.onConnectFormSubmit&&e.onConnectFormSubmit(n)}},o.a.createElement(I.a.Row,null,o.a.createElement(I.a.Group,{as:j.a,xs:12,md:4,lg:4},o.a.createElement(I.a.Control,{disabled:n,onChange:u,name:"host",type:"text",value:i.host,placeholder:"ws://test.mosquitto.org:8080"})),o.a.createElement(I.a.Group,{as:j.a,xs:6,md:3,lg:3},o.a.createElement(I.a.Control,{disabled:n,onChange:u,name:"username",type:"text",value:i.username,placeholder:"Username"})),o.a.createElement(I.a.Group,{as:j.a,xs:6,md:2,lg:3},o.a.createElement(I.a.Control,{disabled:n,onChange:u,name:"password",type:"password",value:i.password,placeholder:"Password"})),o.a.createElement(j.a,{xs:12,md:3,lg:2},o.a.createElement(W,{isConnected:n}))))},L=n(110),Q=function(e){var t=e.topics,n=e.onTopicClick,a=function(e){n&&n(e.target.textContent)},c=Object(i.a)(t).map((function(e){return o.a.createElement(L.CopyToClipboard,{key:e,text:e},o.a.createElement(G.a,{onClick:a,variant:"outline-success",className:"mr-2",size:"sm"},e))}));return o.a.createElement("p",{className:"m-0 p-0"},o.a.createElement("strong",null,"Subscribed Topics:"),c)},V=function(e){var t=Object(a.useContext)(N),n=t.isConnected,c=t.topics,s=Object(a.useRef)(null),r=Object(a.useRef)(null),i=function(t){var n={subscribe:!0,topics:s.current.value};console.log("SubscribeForm.handleClick1 ",n),n.topics&&e.onSubscribeFormSubmit&&e.onSubscribeFormSubmit(n),s.current.value=""},l=function(t){var n={subscribe:!1,topics:r.current.value};console.log("SubscribeForm.handleClick2 ",n),n.topics&&e.onSubscribeFormSubmit&&e.onSubscribeFormSubmit(n),r.current.value=""},u=function(e){"Enter"===e.key&&(e.preventDefault(),e.target===s.current?i():e.target===r.current&&l())};return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,null,o.a.createElement(I.a.Row,{className:"align-items-center"},o.a.createElement(j.a,{as:j.a,sm:6,md:3,className:"mb-3 mt-3"},o.a.createElement(I.a.Control,{onKeyUp:u,ref:s,name:"subscribe-topics",type:"text",placeholder:"topic/test"})),o.a.createElement(j.a,{sm:6,md:3},o.a.createElement(G.a,{className:"btn-block",name:"subscribe",variant:"primary",type:"button",disabled:!n,onClick:i},"Subscribe")),o.a.createElement(j.a,{sm:6,md:3,className:"mb-3 mt-3"},o.a.createElement(I.a.Control,{onKeyUp:u,ref:r,name:"unsubscribe-topics",type:"text",placeholder:"topic/test"})),o.a.createElement(j.a,{sm:6,md:3},o.a.createElement(G.a,{className:"btn-block",name:"unsubscribe",variant:"danger",type:"button",disabled:!n,onClick:l},"Unsubscibe")))),o.a.createElement(Q,{topics:c,onTopicClick:function(e){console.log("onTopicClick",e),r.current.value=e}}))},z=function(e){var t=Object(a.useContext)(N),n=t.isConnected,c=t.topics,s=Object(a.useRef)(null),r=Object(a.useRef)(null);return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{onSubmit:function(t){t.preventDefault();var n={topic:s.current.value,message:r.current.value,callback:function(e){e||(r.current.value="")},isValid:function(){return n.topic&&n.message}};n.isValid()&&e.onPublishFormSubmit&&e.onPublishFormSubmit(n)}},o.a.createElement(I.a.Row,null,o.a.createElement(I.a.Group,{as:j.a,xs:12,md:3},o.a.createElement(I.a.Control,{ref:s,name:"publish-topic",type:"text",placeholder:"topic name"})),o.a.createElement(I.a.Group,{as:j.a,xs:12,md:7},o.a.createElement(I.a.Control,{ref:r,name:"publish-message",type:"text",placeholder:"message content"})),o.a.createElement(j.a,{xs:12,md:2},o.a.createElement(G.a,{className:"btn-block",name:"publish",variant:"primary",type:"submit",disabled:!n},"Publish")))),o.a.createElement(Q,{topics:c,onTopicClick:function(e){console.log("onTopicClick",e),s.current.value=e}}))};var A=function(e){return o.a.createElement(q.a,{defaultActiveKey:"0",className:"w-100"},o.a.createElement(_.a,null,o.a.createElement(q.a.Toggle,{as:_.a.Header,className:"bg-dark",eventKey:"0"},o.a.createElement("span",{className:"text-white"}," Connect Options")),o.a.createElement(q.a.Collapse,{eventKey:"0"},o.a.createElement(_.a.Body,null,o.a.createElement(J,{onConnectFormSubmit:e.onConnectFormSubmit})))),o.a.createElement(_.a,null,o.a.createElement(q.a.Toggle,{as:_.a.Header,className:"bg-dark",eventKey:"1"},o.a.createElement("span",{className:"text-white"}," Subscribe Options")),o.a.createElement(q.a.Collapse,{eventKey:"1"},o.a.createElement(_.a.Body,null,o.a.createElement(V,{onSubscribeFormSubmit:e.onSubscribeFormSubmit})))),o.a.createElement(_.a,null,o.a.createElement(q.a.Toggle,{as:_.a.Header,className:"bg-dark",eventKey:"2"},o.a.createElement("span",{className:"text-white"}," Publish Options")),o.a.createElement(q.a.Collapse,{eventKey:"2"},o.a.createElement(_.a.Body,null,o.a.createElement(z,{onPublishFormSubmit:e.onPublishFormSubmit})))))};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var X={host:"ws://test.mosquitto.org:8080",username:null,password:null},Z=new Set(["pump/#","monitor/#","device/#"]),ee=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).onClearClick=function(){n.setState({messages:[]})},n.onConnectFormSubmit=function(e){console.log("onConnectFormSubmit ",e),n.state.isConnected?n.client.end():e&&e.host&&n.connect(e)},n.onSubscribeFormSubmit=function(e){console.log("onSubscribeFormSubmit ",e);var t=e.subscribe,a=e.topics;if(n.state.isConnected&&a){var o=a.split(" ");t?n.subscribe(o):n.unsubscribe(o)}},n.onPublishFormSubmit=function(e){console.log("onPublishFormFormSubmit ",e);var t=e.topic,a=e.message;t.includes("#")||t.includes("*")?O("Invalid Topics","Can not publish to wildcard topics"):n.state.isConnected&&t&&a&&n.publish(t,a,e.callback)};var a=g("options")||X;return n.state={isConnected:!1,needReconnect:!0,options:a,topics:new Set,messages:[]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.messages,n=e.isConnected,a=t&&t.length>0,c=n?"p-2 text-primary":"p-2 text-secondary";return o.a.createElement(N.Provider,{value:this.state},o.a.createElement(k.a,null,o.a.createElement(w.a,{className:"justify-content-center"},o.a.createElement("h2",{className:c,as:j.a},"MQTT Monitor")),o.a.createElement(w.a,null,o.a.createElement(A,{onConnectFormSubmit:this.onConnectFormSubmit,onSubscribeFormSubmit:this.onSubscribeFormSubmit,onPublishFormSubmit:this.onPublishFormSubmit})),o.a.createElement(w.a,{className:"m-3"},o.a.createElement("h4",{as:j.a},"Received Messages")),o.a.createElement(w.a,null,o.a.createElement(H,null)),o.a.createElement(w.a,{className:"justify-content-end p-3"},a?o.a.createElement(G.a,{as:j.a,md:3,lg:2,onClick:this.onClearClick,variant:"outline-dark"},"Clear Messages"):null)))}},{key:"cleanTopics",value:function(e){var t,n;return n=e,t="[object String]"===Object.prototype.toString.call(n)?e.split(" "):(function(e){null!=e&&e[Symbol.iterator]}(e),e),Object(i.a)(t).map((function(e){return e.trim()})).filter(Boolean)}},{key:"publish",value:function(e,t,n){console.log("publish",e,t),this.client.publish(e,t,(function(a){a?console.log("publish fail:",a):(console.log("published:",e,t),y("Message Sent","message is sent to "+e)),n&&n(a)}))}},{key:"unsubscribe",value:function(e,t){var n=this,a=this.cleanTopics(e);console.log("unsubscribe to",a),this.client.unsubscribe(a,(function(e){if(e)console.error("unsubscribe fail:",e);else{console.log("unsubscribed to",a);var o=n.state.topics;a.forEach((function(e){o.delete(e)})),n.setState({topics:o})}t&&t(e)}))}},{key:"subscribe",value:function(e,t){var n=this,a=this.cleanTopics(e);console.log("subscribe to",a),this.client.subscribe(a,null,(function(e,o){e?(console.error("subscribe fail:",e),O("Subscribe Failed",e)):(console.log("subscribed to",o),n.setState({topics:new Set([].concat(Object(i.a)(a),Object(i.a)(n.state.topics)))}),y("Subscribe Success","subscribed topics: "+a)),t&&t(e,o)}))}},{key:"disconnect",value:function(){this.state.isConnected&&this.client.end((function(){console.log("disconnect end")}))}},{key:"onConnected",value:function(e){var t=this;console.log("connected to",e),y("MQTT Connected!","server is "+e.host),h("options",e),this.setState({isConnected:this.client.connected,options:e,messages:[]},(function(){var e;e=t.state.topics&&t.state.topics.length>0?t.state.topics:Z,t.subscribe(e,(function(e){if(!e){var n=F()().format("YYYY-MM-DD HH:mm:ss");t.client.publish("monitor/log","Monitor online at ".concat(n,"!"))}}))}))}},{key:"connect",value:function(e){var t=this,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{reconnectPeriod:60});console.log("connecting with",n),this.client=f.a.connect(e.host,n),this.client.on("connect",(function(){t.onConnected(n)})),this.client.on("disconnect",(function(){console.log("disconnect"),t.setState({isConnected:t.client.connected}),O("Connection Lost!","Lost connection from "+n.host)})),this.client.on("reconnect",(function(){console.log("reconnect")})),this.client.on("offline",(function(){console.log("offline")})),this.client.on("close",(function(){console.log("close"),t.setState({isConnected:t.client.connected})})),this.client.on("error",(function(e){console.log("Ooops","Something is wrong!",e),t.setState({isConnected:t.client.connected})})),this.client.stream.on("error",(function(e){console.error("Connection error:",e),O("Connection Error!","Failed to connect to "+n.host)})),this.client.on("message",(function(e,n){t.setState({messages:[{ts:Math.round(Date.now()/1e3),topic:e,message:n.toString()}].concat(Object(i.a)(t.state.messages))})}))}},{key:"checkConnect",value:function(){var e=this.state.options;e.host&&e.host.startsWith("ws")&&this.connect(e)}},{key:"componentDidMount",value:function(){console.log("componentDidMount",this.state.options)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),this.state.isConnected&&h("options",this.state.options)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[116,1,2]]]);
//# sourceMappingURL=main.1a931149.chunk.js.map