(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{38:function(e,t,a){e.exports=a(68)},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),l=a(14),s=a(15),i=a(5),m=a(6),u=a(8),p=a(7),h=a(9),d=a(2),b=a.n(d),f=a(12),v=a(37),E=a(19),y=a(13),g=a.n(y),C=r.a.createContext(),N=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[t.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState((function(t){return N(t,e)}))}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),O=C.Consumer,k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!0},a.onDeleteClick=function(){var e=Object(f.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,s=this.state.showContactInfo;return r.a.createElement(O,null,(function(t){var i=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,"",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fa fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fa fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,i)}),r.a.createElement(l.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fa fa-pencil",style:{cusor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},c),r.a.createElement("li",{className:"list-group-item"},o)):null)}))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{style:{color:"red"}},"Contact ")," List"),t.map((function(e){return r.a.createElement(k,{key:e.id,contact:e})})))}))}}]),t}(n.Component),x=a(17),A=a(36),S=a.n(A),T=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:S()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};T.defaultProps={type:"text"};var D=T,P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,o,l,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:s={name:c,email:o,phone:l},i=g.a.post("https://jsonplaceholder.typicode.com/users",s),t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(x.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(O,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(D,{label:"Email",Type:"email",name:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"AddContact",className:"btn btn-light btn-block"}))))}))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,o,l,s,i,m;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(x.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(O,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(D,{label:"Email",Type:"email",name:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"EditContact",className:"btn btn-light btn-block"}))))}))}}]),t}(n.Component),M=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fa fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fa fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fa fa-question"}),"About"))))))};M.defaultProps={branding:"My App"};var _=M;function I(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple App to Manage Contacts"),r.a.createElement("p",{className:"text-secondary"}," Version 1.0.0"))}var L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display"},r.a.createElement("span",{className:"text-danger"}," 404")," Page Not found"),r.a.createElement("p",{className:"lead"},"Sorry, that page you're looking for does not exist!"))},B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component);a(66),a(67);var F=function(){return r.a.createElement(j,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(_,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/contact/add",component:P}),r.a.createElement(s.a,{exact:!0,path:"/contact/edit/:id",component:q}),r.a.createElement(s.a,{exact:!0,path:"/about",component:I}),r.a.createElement(s.a,{exact:!0,path:"/test",component:B}),r.a.createElement(s.a,{component:L}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.f9adfb3e.chunk.js.map