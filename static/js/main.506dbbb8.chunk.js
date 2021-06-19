(this.webpackJsonpweek_12_react_ex=this.webpackJsonpweek_12_react_ex||[]).push([[0],{38:function(e,t,a){},45:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(14),c=a.n(s),i=(a(45),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))}),l=a(28),d=a(11),o=(a(46),a(38),a(56)),j=a(1);var u=function(e){var t=e.onRevealedCard,a=e.local;return Object(j.jsxs)(o.a,{bordered:!0,className:"text-light",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Student Username:"}),Object(j.jsx)("th",{children:"Course:"})]})}),Object(j.jsx)("tbody",{children:a.map((function(e,a){return Object(j.jsxs)("tr",{onClick:function(){return t(e)},className:"rowStyle",children:[Object(j.jsx)("td",{children:e.username}),Object(j.jsx)("td",{children:e.course})]},a)}))})]})},h=a(63),b=a(64),m=a(57),O=a(58),x=a(39),g=function(e){var t=e.student,a=e.onRevealedCard;return Object(j.jsx)(m.a,{className:"p-0 m-0",children:Object(j.jsxs)(O.a,{className:" m-2 cardInfo",children:[Object(j.jsx)(x.a,{xs:1,children:Object(j.jsx)(b.a,{className:"",id:"extBtn",onClick:function(){return a(null)},children:"X"})}),Object(j.jsx)(x.a,{xs:4,className:"d-flex align-items-center",children:Object(j.jsx)("img",{src:t.pic,alt:"crdImg",id:"crdImg"})}),Object(j.jsxs)(x.a,{xs:6,className:"text-left",children:[Object(j.jsx)("h2",{className:"text-center pt-2",children:"Additional information:"}),Object(j.jsx)("hr",{className:"hrCard"}),Object.entries(t).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(j.jsx)("p",{style:{display:"block"},children:"pic"===a?"":"- ".concat(a," : ").concat(n)},a)}))]})]})})},p=a(61),v=a(24),f=a(20),y=a(31),S=a(32),C=a(62),k=a(59),I=a(60),w=function(e){var t=e.onCreatingStudent,a=e.localStudents,r=e.setLocalStudents,s=Object(n.useState)(!1),c=Object(d.a)(s,2),i=c[0],l=c[1],o=Object(n.useState)({username:{isRequired:!0,pattern:/^([\u05d0-\u05ea]|\w){2,}$/,msg:[],value:"",isInVaild:!1},email:{isRequired:!0,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,msg:[],value:"",isInVaild:!1},address:{isRequired:!0,pattern:/([\u05d0-\u05ea ]|\w){10,}/,msg:[],value:"",isInVaild:!1},course:{isRequired:!0,msg:[],pattern:/\w{2,}/,value:"",isInVaild:!1},gender:{isRequired:!0,msg:[],pattern:/\w{2,}$/,value:"",isInVaild:!1}}),u=Object(d.a)(o,2),h=u[0],O=u[1];function g(e){var t=e.name,a=e.value,n=[],r=!1;return""===a?(r=!0,n.push("".concat(t," is required."))):h[t].isRequired&&h[t].pattern.test(a)?r=!1:(n.push("".concat(t," is not valid.")),r=!0),O((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(v.a)({},t,Object(f.a)(Object(f.a)({},e[t]),{},{value:a,isInVaild:r,msg:n})))})),n[0]}return Object(j.jsx)(m.a,{children:Object(j.jsxs)(C.a,{noValidate:!0,validated:i,onSubmit:function(e){var n=[];for(var s in h)Object.hasOwnProperty.call(h,s)&&n.push(g({name:s,value:h[s].value}));for(var c=0,i=n;c<i.length;c++){if(i[c])return l(!1),e.preventDefault(),void e.stopPropagation()}alert("Student successfully added"),l(!0),t(h,r,a)},children:[Object(j.jsxs)(C.a.Row,{children:[Object(j.jsxs)(C.a.Group,{as:x.a,children:[Object(j.jsx)(C.a.Label,{children:"Username:"}),Object(j.jsxs)(k.a,{hasValidation:!0,children:[Object(j.jsx)(k.a.Prepend,{children:Object(j.jsx)(k.a.Text,{children:Object(j.jsx)(y.a,{icon:S.c})})}),Object(j.jsx)(C.a.Control,{onBlur:function(e){return g(e.target)},onChange:function(e){return g(e.target)},value:h.username.value,type:"text",isInvalid:h.username.isInVaild,placeholder:"Enter Username...",required:!0,name:"username"}),Object(j.jsxs)(C.a.Control.Feedback,{type:"invalid",children:[h.username.msg,Object(j.jsx)("br",{}),"must be longer than 2 letters."]})]})]}),Object(j.jsxs)(C.a.Group,{as:x.a,children:[Object(j.jsx)(C.a.Label,{children:"Email address:"}),Object(j.jsxs)(k.a,{hasValidation:!0,children:[Object(j.jsx)(k.a.Prepend,{children:Object(j.jsx)(k.a.Text,{children:"@"})}),Object(j.jsx)(C.a.Control,{required:!0,isInvalid:h.email.isInVaild,onBlur:function(e){return g(e.target)},onChange:function(e){return g(e.target)},value:h.email.value,type:"email",placeholder:"Enter Email...",name:"email"}),Object(j.jsx)(C.a.Control.Feedback,{type:"invalid",children:h.email.msg})]})]})]}),Object(j.jsxs)(C.a.Group,{children:[Object(j.jsx)(C.a.Label,{children:"Address:"}),Object(j.jsxs)(k.a,{hasValidation:!0,children:[Object(j.jsx)(k.a.Prepend,{children:Object(j.jsxs)(k.a.Text,{children:[" ",Object(j.jsx)(y.a,{icon:S.b})]})}),Object(j.jsx)(C.a.Control,{as:"textarea",rows:3,isInvalid:h.address.isInVaild,placeholder:"Street, Number, City, Zip...",name:"address",onBlur:function(e){return g(e.target)},onChange:function(e){return g(e.target)},value:h.address.value,"aria-describedby":"inputGroupPrepend",required:!0}),Object(j.jsxs)(C.a.Control.Feedback,{type:"invalid",children:[h.address.msg,Object(j.jsx)("br",{}),"A full address must be entered - 10 chars onwards"]})]})]}),Object(j.jsxs)(C.a.Row,{children:[Object(j.jsxs)(C.a.Group,{as:x.a,md:"6",children:[Object(j.jsx)(C.a.Label,{className:"block",children:"Course:"}),Object(j.jsxs)(k.a,{hasValidation:!0,children:[Object(j.jsx)(k.a.Prepend,{children:Object(j.jsxs)(k.a.Text,{children:[" ",Object(j.jsx)(y.a,{icon:S.a})]})}),Object(j.jsxs)(C.a.Control,{as:"select",name:"course",isInvalid:h.course.isInVaild,value:h.course.value,onChange:function(e){return g(e.target)},onBlur:function(e){return g(e.target)},children:[Object(j.jsx)("option",{value:"",children:"Select Course..."}),Object(j.jsx)("option",{value:"Art Theory - Basis",children:"Art Theory - Basis"}),Object(j.jsx)("option",{value:"History of French art",children:"History of French art"}),Object(j.jsx)("option",{value:"Art Theory - Advanced",children:"Art Theory - Advanced"}),Object(j.jsx)("option",{value:"Introduction to Art Therapy",children:"Introduction to Art Therapy"}),Object(j.jsx)("option",{value:"Art therapy - advanced",children:"Art therapy - advanced"})]}),Object(j.jsx)(C.a.Control.Feedback,{type:"invalid",children:h.course.msg})]})]}),Object(j.jsxs)(C.a.Group,{as:x.a,md:"6",children:[Object(j.jsx)(C.a.Label,{className:"block",children:"Gender:"}),Object(j.jsxs)(k.a,{hasValidation:!0,children:[Object(j.jsxs)(I.a,{isInvalid:h.gender.isInVaild,children:[Object(j.jsx)(b.a,{name:"gender",value:"female",variant:"outline-info",className:h.gender.msg.length?"alert-danger":"",onClick:function(e){return g(e.target)},children:"Female"}),Object(j.jsx)(b.a,{name:"gender",value:"male",variant:"outline-info",className:h.gender.msg.length?"alert-danger":"",onClick:function(e){return g(e.target)},children:"Male"}),Object(j.jsx)(b.a,{name:"gender",value:"other",variant:"outline-info",className:h.gender.msg.length?"alert-danger":"",onClick:function(e){return g(e.target)},children:"Other"})]}),h.gender.msg&&Object(j.jsxs)("small",{id:"genderMsg",children:[h.gender.msg," "]})]})]})]}),Object(j.jsx)(b.a,{type:"submit",variant:"outline-dark",children:"Submit form"})]})})},N=function(e){var t=e.onCreatingStudent,a=e.localStudents,r=e.setLocalStudents,s=Object(n.useState)(!1),c=Object(d.a)(s,2),i=c[0],l=c[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b.a,{variant:"primary",onClick:function(){return l(!0)},children:" Add new student "}),Object(j.jsxs)(p.a,{className:"formStyle fontStlye",show:i,onHide:function(){return l(!1)},children:[Object(j.jsx)(p.a.Header,{closeButton:!0,children:Object(j.jsxs)(p.a.Title,{children:[" Hello Student! ",Object(j.jsx)("br",{})," ",Object(j.jsx)("p",{children:"Please fill in your detaild"})," "]})}),Object(j.jsx)(p.a.Body,{children:Object(j.jsx)(w,{onCreatingStudent:t,localStudents:a,setLocalStudents:r})}),Object(j.jsx)(p.a.Footer,{})]})]})},A=[{pic:"https://i.pravatar.cc/150?img=${1}",gender:"female",username:"Wawa",email:"wawa@gmail.com",address:"wawa 12 Tel-Aviv 67543",course:"Art Theory - Basis",grade:79},{pic:"https://i.pravatar.cc/150?img=${2}",gender:"male",username:"Lala",email:"lala@gmail.com",address:"lala 12 Natanya 67543",course:"Art Theory - Advanced",grade:91},{pic:"https://randomuser.me/api/portraits/women/2.jpg",gender:"female",username:"Israela",email:"israela@gmail.com",address:"israela 12 Raanana 67543",course:"Art Theory - Advanced",grade:58},{pic:"https://i.pravatar.cc/150?img=${4}",gender:"male",username:"Zimru",email:"zimru@gmail.com",address:"zimru 12 Haifa 62233",course:"Introduction to Art Therapy",grade:63}],T=JSON.parse(localStorage.getItem("students"))||A,L=function(e,t,a){var n=Math.floor(80*Math.random())+20;!function(e,t,a){var n=JSON.parse(localStorage.getItem("students"));n.push(e),localStorage.setItem("students",JSON.stringify(n)),t([].concat(Object(l.a)(a),[e]))}({pic:function(e,t){var a="";switch(e){case"male":a="https://randomuser.me/api/portraits/men/".concat(t,".jpg");break;case"female":a="https://randomuser.me/api/portraits/women/".concat(t,".jpg");break;case"other":a="https://images.squarespace-cdn.com/content/v1/598b7d4c9f745655815eb80a/1558380623477-Z8JO1D1O7ACETDZ9XWTU/ke17ZwdGBToddI8pDm48kIu7ID3Q_rf864yJf87XFIh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0h8vX1l9k24HMAg-S2AFielfUZEyfzH2cLnl2HLSR7-WVEkGoqQDaWpNaSSFYXNdhA/gender-spectrum1.jpg";break;default:a="error"}return a}(e.gender.value,n),gender:e.gender.value,username:e.username.value,email:e.email.value,address:e.address.value,course:e.course.value,grade:n},t,a)};var V=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(T),c=Object(d.a)(s,2),i=c[0],o=c[1],p=function(e){r(e)};return Object(j.jsxs)("div",{className:"container-fuid text-center main",children:[Object(j.jsxs)(h.a,{bg:"dark",variant:"dark",sticky:"top",className:"navStyle",children:[Object(j.jsx)(h.a.Brand,{className:"h1font",children:" du-Louvre University "}),Object(j.jsxs)("section",{id:"btnControl",children:[Object(j.jsx)(N,{onCreatingStudent:L,localStudents:i,setLocalStudents:o}),Object(j.jsx)(b.a,{onClick:function(){var e=Object(l.a)(i).sort((function(e,t){return(e=e.username.toLowerCase())>(t=t.username.toLowerCase())?1:e<t?-1:0}));o(e),localStorage.setItem("students",JSON.stringify(e))},className:"maginBtn",children:"sort by name"}),Object(j.jsx)(b.a,{onClick:function(){localStorage.setItem("students",JSON.stringify(A)),o(A)},className:"maginBtn",children:"Reboot the list"})]})]}),Object(j.jsxs)(m.a,{children:[Object(j.jsx)("h1",{className:"h1Style h1font",children:"Faculty Dashboard:"}),Object(j.jsx)("hr",{id:"hrApp"}),Object(j.jsxs)(O.a,{md:"2",children:[Object(j.jsx)(x.a,{children:Object(j.jsx)(u,{onRevealedCard:p,local:i})}),Object(j.jsxs)(x.a,{children:[a&&Object(j.jsx)(g,{student:a,onRevealedCard:p}),!a&&Object(j.jsx)("div",{id:"msgDefault",className:"h1font",children:" Click on one of the students to see HERE more information"})]})]})]})]})};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root")),i()}},[[54,1,2]]]);
//# sourceMappingURL=main.506dbbb8.chunk.js.map