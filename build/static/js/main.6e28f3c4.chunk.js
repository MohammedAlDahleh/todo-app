(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var c=n(18),i=n(19),s=n(20),r=n(25),j=n(0),a=n.n(j),u=n(8),o=n.n(u),l=n(49),b=n(9),d=n(24),O=n(32),h=function(e){var t=Object(j.useState)({}),n=Object(b.a)(t,2),c=n[0],i=n[1];return{handleChange:function(e){e.persist(),console.log("CHANGE",e.target.name),i((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t.preventDefault(),e(c)},values:c}},m=n(144),f=n(143),x=n(1),p=a.a.createContext();var g=function(e){var t=Object(j.useState)(!1),n=Object(b.a)(t,2),c=n[0],i=n[1],s=Object(j.useState)(3),r=Object(b.a)(s,2),a=r[0],u=r[1],o=Object(j.useState)(""),l=Object(b.a)(o,2),d=l[0],O=l[1];return Object(x.jsx)(p.Provider,{value:{hide:c,numItems:a,sort:d,setHide:i,setNumItems:u,setSort:O},children:e.children})},v=function(){var e=Object(j.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],i=Object(j.useState)([]),s=Object(b.a)(i,2),r=s[0],a=s[1],u=h((function(e){console.log(e),e.id=Object(m.a)(),e.complete=!1,c([].concat(Object(l.a)(n),[e]))})),o=u.handleChange,d=u.handleSubmit,O=Object(j.useContext)(p),g=Object(j.useState)(0),v=Object(b.a)(g,2),C=v[0],I=v[1],y=Object(j.useState)(O.numItems),S=Object(b.a)(y,2),k=S[0],D=S[1];return Object(j.useEffect)((function(){var e=n.filter((function(e){return!e.complete}));a(e)}),[n]),Object(j.useEffect)((function(){I(0),D(O.numItems)}),[O.numItems]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("header",{children:Object(x.jsxs)("h1",{children:["To Do List: ",r.length," items pending"]})}),Object(x.jsxs)("form",{onSubmit:d,children:[Object(x.jsx)("h2",{children:"Add To Do Item"}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"To Do Item"}),Object(x.jsx)("input",{onChange:o,name:"text",type:"text",placeholder:"Item Details"})]}),Object(x.jsxs)(f.b,{children:[Object(x.jsx)("span",{children:"Assigned To"}),Object(x.jsx)("input",{onChange:o,name:"assignee",type:"text",placeholder:"Assignee Name"})]}),Object(x.jsxs)(f.b,{children:[Object(x.jsx)("span",{children:"Difficulty"}),Object(x.jsx)("input",{onChange:o,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})]}),Object(x.jsx)(f.b,{children:Object(x.jsx)(f.a,{type:"submit",children:"Add Item"})}),Object(x.jsx)(f.b,{children:Object(x.jsx)(f.c,{onChange:function(){O.setHide(!O.hide)},children:" Hide Completed Tasks "})})]}),function(){var e=r.slice(C,k);return console.log(e,C,k),e}().map((function(e){return Object(x.jsx)("div",{children:!1===O.hide||!1===e.complete?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{children:["Item: ",e.text]}),Object(x.jsx)("p",{children:Object(x.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(x.jsx)("p",{children:Object(x.jsxs)("small",{children:["Difficulty: ",e.difficulty]})}),Object(x.jsxs)("div",{onClick:function(){return function(e){var t=n.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));c(t)}(e.id)},children:["Complete: ",e.complete.toString()]}),Object(x.jsx)("hr",{}),Object(x.jsx)(f.a,{onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}(e.id)},children:"Delete"})]}):null},e.id)})),Object(x.jsx)(f.a,{onClick:function(){C>0&&(I(C-O.numItems),D(k-O.numItems))},children:"Previous"}),Object(x.jsx)(f.a,{onClick:function(){k<=r.length&&(I(C+O.numItems),D(k+O.numItems))},children:"NEXT"})]})},C=(n(135),function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsx)(g,{children:Object(x.jsx)(v,{})})}}]),n}(a.a.Component)),I=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsx)(C,{})}}]),n}(a.a.Component),y=document.getElementById("root");o.a.render(Object(x.jsx)(I,{}),y)}},[[136,1,2]]]);
//# sourceMappingURL=main.6e28f3c4.chunk.js.map