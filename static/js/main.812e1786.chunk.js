(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),s=n(13),i=n(2),u=n(3),l=n(5),b=n(4),m=n(11),d=n.n(m),h=n(12),j=n(6),p=n.n(j),f=n(0),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(h.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:p.a.formLabel,children:["Name",Object(f.jsx)("input",{className:p.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(f.jsxs)("label",{className:p.a.formLabel,children:["Number",Object(f.jsx)("input",{className:p.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),C=n(9),v=n.n(C),x=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{className:v.a.label,children:["Find by name",Object(f.jsx)("input",{className:v.a.input,type:"text",value:this.props.value,onChange:this.props.onChange})]})})}}]),n}(a.Component),g=function(t){var e=t.contacts,n=t.onDelete;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(f.jsxs)("li",{children:[Object(f.jsxs)("p",{children:[a,": ",r]}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})},y=(n(27),n(28),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name.toLowerCase()})).find((function(t){return t===e.name.toLowerCase()})))return alert("This name has already used, enter another name, please!");t.setState((function(t){var n=t.contacts,a={id:d.a.generate(),name:e.name,number:e.number};return{contacts:[].concat(Object(s.a)(n),[a])}}))},t.handleFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getContactsList=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(x,{onChange:this.handleFilter,value:this.state.filter}),Object(f.jsx)(g,{contacts:this.getContactsList(),onDelete:this.deleteContact})]})}}]),n}(a.Component));o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={formLabel:"ContactForm_formLabel__37_HE",formInput:"ContactForm_formInput__3i1_8"}},9:function(t,e,n){t.exports={label:"Filter_label__COQzQ",input:"Filter_input__1Jajl"}}},[[29,1,2]]]);
//# sourceMappingURL=main.812e1786.chunk.js.map