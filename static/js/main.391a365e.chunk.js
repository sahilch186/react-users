(this["webpackJsonpuser-list-api"]=this["webpackJsonpuser-list-api"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),a=n.n(c),i=(n(12),n(4)),u=n(5),o=n(7),h=n(6),d=(n(13),n(0)),l=function(e){var t=e.user;return Object(d.jsxs)("div",{className:"user-card",children:[Object(d.jsxs)("h3",{children:[t.name," (",t.username,")"]}),Object(d.jsx)("p",{children:"".concat(t.address.suite,", ").concat(t.address.street,", ").concat(t.address.city," - ").concat(t.address.zipcode)}),Object(d.jsxs)("a",{href:"tel:",children:["Call - ",t.phone]}),Object(d.jsxs)("a",{href:"mailto:",children:["Email - ",t.email]})]})},j=function(e){return Object(d.jsx)("div",{className:"user-wrapper",children:e.users.map((function(e){return Object(d.jsx)(l,{user:e},e.id)}))})},p=function(e){return Object(d.jsx)("input",{type:"search",placeholder:e.placeholder,onChange:e.handleChange})},b=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchFeild:t.target.value})},e.state={users:[],searchFeild:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.searchFeild,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"User List App"}),Object(d.jsx)(p,{placeholder:"Search",handleChange:this.handleChange}),Object(d.jsx)(j,{users:s})]})}}]),n}(s.Component);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.391a365e.chunk.js.map