(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{25:function(e,t,a){e.exports=a(59)},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),s=a(12),o=a(14),u=a.n(o),i=a(21),m=a(7),d=a(8),h=a(10),E=a(9),p=(a(31),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"RESTy"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("p",{className:"link"},"Home"))),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/history"},r.a.createElement("p",{className:"link"},"History"))))))}}]),a}(r.a.Component)),f=a(17),b=(a(37),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handelChange=function(e,t){n.setState(Object(f.a)({},t,e.target.value)),console.log(n.state)},n.click=function(e){console.log(n.state.body),n.props.updataState(n.state.url,n.state.method,n.state.body),n.setState({url:"",method:""})},n.handelMethod=function(e){var t=e.target.name;n.setState({POST:"#e2e2e2",GET:"#e2e2e2",PUT:"#e2e2e2",DELETE:"#e2e2e2"}),n.setState(Object(f.a)({method:t},t,"green"))},n.state={url:"",method:"",requstes:[],post:"#e2e2e2",get:"#e2e2e2",put:"#e2e2e2",delete:"#e2e2e2",body:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form"},r.a.createElement("p",{className:"purl"},r.a.createElement("span",{className:"span"},"URL:"),r.a.createElement("input",{name:"input",value:this.state.url,onChange:function(t){return e.handelChange(t,"url")}}),r.a.createElement("button",{id:"button",onClick:this.click},"GO!")),r.a.createElement("div",null),r.a.createElement("button",{style:{background:this.state.get},name:"GET",onClick:this.handelMethod},"GET"),r.a.createElement("button",{style:{background:this.state.post},name:"POST",onClick:this.handelMethod},"POST"),r.a.createElement("button",{style:{background:this.state.put},name:"PUT",onClick:this.handelMethod},"PUT"),r.a.createElement("button",{style:{background:this.state.delete},name:"DELETE",onClick:this.handelMethod},"DELETE"),"GET"!==this.state.method&&r.a.createElement("textarea",{className:"text",onChange:function(t){return e.handelChange(t,"body")},placeholder:"body as JSON Object"}))}}]),a}(r.a.Component)),v=(a(38),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"\xa9 2020 CodeFollow"))}}]),a}(r.a.Component)),y=function(e){var t=JSON.parse(localStorage.getItem("data")).map((function(e,t){return r.a.createElement("p",{key:t},r.a.createElement("span",{className:"span"},e.method),e.url)}));return r.a.createElement("div",null,t)},O=a(23),g=a.n(O);var S=function(e){return r.a.createElement("div",null,r.a.createElement(g.a,{src:{headers:e.headers,count:e.count,results:e.results}}))},j=a(2),k=a(24),C=a.n(k),N=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null},T=function(e){return r.a.Children.map(e.children,(function(t){return r.a.cloneElement(t,{condition:e.condition})}))},x=function(e){return N(e.condition,e.children)},w=(a(58),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).updataState=function(){var e=Object(i.a)(u.a.mark((function e(t,a,l){var c,s,o,i,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loader:!0,count:0}),c=n.state.requstes,s=r.a.createElement("p",{key:c.length},r.a.createElement("span",{className:"span"},a),t),o=localStorage.getItem("data")||"[]",(o=JSON.parse(o)).push({method:a,url:t,body:l}),localStorage.setItem("data",JSON.stringify(o)),c.push(s),n.setState({requstes:c}),i={method:a,headers:{"Content-Type":"application/json"}},l&&(i.body=l),e.next=13,fetch(t,i);case 13:return(m=e.sent).headers.forEach((function(e){return n.setState({headers:[e]})})),e.next=17,m.json();case 17:m=e.sent,n.setState({results:m.results||m,count:m.count||1,loader:!1});case 19:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.state={count:0,results:[],headers:[],loader:!1,requstes:[]},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(j.a,{path:"/",exact:!0},r.a.createElement("div",{className:"test"},r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("div",null,this.state.requstes)),r.a.createElement("div",null,r.a.createElement(b,{updataState:this.updataState}),r.a.createElement("div",{className:"continar"},r.a.createElement(T,{condition:this.state.count>0},r.a.createElement(x,null,r.a.createElement(S,{headers:this.state.headers,count:this.state.count,results:this.state.results}))),r.a.createElement(T,{condition:this.state.loader},r.a.createElement(x,null,r.a.createElement(C.a,{type:"Circles",color:"#00BFFF",height:150,width:150}))))))),r.a.createElement(j.a,{path:"/history",exact:!0},r.a.createElement(y,null)),r.a.createElement(v,null))}}]),a}(r.a.Component));function J(){return r.a.createElement(s.a,null,r.a.createElement(w,null))}c.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ffe43a69.chunk.js.map