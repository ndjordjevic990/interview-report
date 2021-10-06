(this["webpackJsonpcra-final-prooject"]=this["webpackJsonpcra-final-prooject"]||[]).push([[0],{65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(22),r=a.n(s),i=a(6),l=a(18),j=a(10),o=a(70),d=a(78),b=a(71),h=a(77),m=a(20),u=function e(t,a,n,c,s){Object(m.a)(this,e),this.avatar="http://localhost:3000/interview-reports/images/person_placeholder.png",this.id=t,this.name=a,this.email=n.toLowerCase(),this.birthday=new Date(c).toLocaleDateString("en-GB").replaceAll("/","."),this.education=s},O=a(28),x=function(){function e(t,a,n,c,s,r,i,l,j){Object(m.a)(this,e),this.id=t,this.candidateId=a,this.candidateName=n,this.companyId=c,this.companyName=s,this.interviewDate=r,this.phase=i,this.status=l,this.note=j}return Object(O.a)(e,[{key:"getInterviewDate",value:function(){return new Date(this.interviewDate).toISOString().replace(/T.*/,"").split("-").reverse().join(".")}}]),e}(),p=function e(t,a,n){Object(m.a)(this,e),this.id=t,this.name=a,this.email=n.toLowerCase()},f=function(e){var t={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};return fetch("http://localhost:3333/api/candidates",t).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return new u(e.id,e.name,e.email,e.birthday,e.education)}))}))},v=a(1),g=function(e){var t=e.handleToken,a=Object(n.useState)({active:!1,message:""}),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useRef)(),m=Object(n.useRef)(),u=Object(j.g)();Object(n.useEffect)((function(){l.current.value="dev@dev.com",m.current.value="developer"}),[]);return Object(v.jsx)(o.a,{className:"d-flex justify-content-center pt-5",children:Object(v.jsxs)(d.a,{className:"w-50 card text-center p-5 bg-light",onSubmit:function(e){e.preventDefault(),""!==l.current.value&&""!==m.current.value?function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})};return fetch("http://localhost:3333/login",a).then((function(e){return e.json()}))}(l.current.value,m.current.value).then((function(e){e.accessToken?(t(e.accessToken),u.push("/interview-reports")):r({active:!0,message:e})})):r({active:!0,message:"Please insert email and password."})},children:[Object(v.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(v.jsx)(d.a.Label,{children:"Email address"}),Object(v.jsx)(d.a.Control,{type:"email",placeholder:"Enter email",ref:l})]}),Object(v.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(v.jsx)(d.a.Label,{children:"Password"}),Object(v.jsx)(d.a.Control,{type:"password",placeholder:"Password",ref:m})]}),Object(v.jsx)(b.a,{variant:"primary",type:"submit",className:"mt-3",children:"Login"}),s.active&&Object(v.jsx)(h.a,{variant:"danger",className:"mt-5",children:s.message})]})})},N=function(e){var t=e.title,a=e.handleToken;return Object(v.jsx)(o.a,{fluid:!0,className:"bg-primary py-2 mb-5",children:Object(v.jsxs)(o.a,{className:"d-flex justify-content-between",children:[Object(v.jsx)("h3",{className:"text-white",children:t}),Object(v.jsxs)("div",{children:[Object(v.jsx)(l.b,{to:"/interview-reports",children:Object(v.jsx)(b.a,{className:"text-primary bg-light",children:"Candidates"})}),Object(v.jsx)(l.b,{to:"/interview-reports/reports",children:Object(v.jsx)(b.a,{className:"text-primary bg-light",children:"Reports"})}),Object(v.jsx)(b.a,{className:"text-primary bg-light",onClick:function(){return a(null)},children:"Logout"})]})]})})},w=function(){return Object(v.jsx)(o.a,{fluid:!0,className:"bg-primary fixed-bottom",children:Object(v.jsx)(o.a,{className:"py-2 text-light",children:"\xa9 2021 Copyright BIT - TEAM | All Pain, No Gain"})})},y=a(72),S=a(51),C=a(79),k=function(e){var t=e.candidate;return Object(v.jsx)(S.a,{xs:12,md:6,lg:6,xl:4,xxl:3,className:"my-4",children:Object(v.jsx)(l.b,{className:"text-decoration-none",to:"/interview-reports/candidate/".concat(t.id),children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(C.a.Img,{variant:"top",src:t.avatar}),Object(v.jsxs)(C.a.Body,{className:"text-center",children:[Object(v.jsx)(C.a.Title,{children:t.name}),Object(v.jsx)(C.a.Text,{children:t.email})]})]})})})},I=function(e){var t=e.filteredCandidates;return Object(v.jsx)(y.a,{children:t.map((function(e){return Object(v.jsx)(k,{candidate:e},e.id)}))})},T=function(e){var t=e.onTypingHandler,a=e.title;return Object(v.jsxs)(y.a,{className:"mb-3 pb-3",children:[Object(v.jsx)(S.a,{xs:12,md:6,xl:8,xxl:9,children:Object(v.jsx)("h3",{children:a})}),Object(v.jsx)(S.a,{xs:12,md:6,xl:4,xxl:3,children:Object(v.jsx)("input",{onChange:t,className:"p-2 border rounded-pill w-100",type:"search",placeholder:"Search","aria-label":"Search"})})]})},H=a(73),R=function(){return Object(v.jsx)("div",{className:"d-flex justify-content-center",children:Object(v.jsx)(H.a,{animation:"grow",variant:"primary"})})},D=function(e){var t=e.handleToken,a=Object(n.useState)(!0),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)([]),j=Object(i.a)(l,2),d=j[0],b=j[1],h=Object(n.useState)([]),m=Object(i.a)(h,2),u=m[0],O=m[1];Object(n.useEffect)((function(){var e=localStorage.getItem("token");f(e).then((function(e){r(!1),b(e),O(e)}))}),[]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{title:"Interviews Reports",handleToken:t}),Object(v.jsx)(o.a,{className:"my-5",children:s?Object(v.jsx)(R,{}):Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)(T,{onTypingHandler:function(e){var t=e.target.value.trim().toLowerCase();O(d.filter((function(e){return e.name.toLowerCase().includes(t)})))},title:"Candidates"}),Object(v.jsx)(I,{filteredCandidates:u})]})}),Object(v.jsx)(w,{})]})},E=a(74),B=a(40),L=a(76),P=function(e){var t=e.report,a=e.show,n=e.onHide;return Object(v.jsxs)(L.a,{show:a,onHide:n,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,size:"lg",children:[Object(v.jsx)(L.a.Header,{closeButton:!0,children:Object(v.jsx)(L.a.Title,{id:"contained-modal-title-vcenter",children:t.candidateName})}),Object(v.jsx)(L.a.Body,{className:"show-grid",children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(y.a,{children:[Object(v.jsxs)(S.a,{xs:6,md:4,children:[Object(v.jsx)("p",{className:"mb-0",children:"Company"}),Object(v.jsx)("p",{className:"fs-4",children:t.companyName}),Object(v.jsx)("p",{className:"mb-0",children:"Interview Date"}),Object(v.jsx)("p",{className:"fs-4",children:t.getInterviewDate()}),Object(v.jsx)("p",{className:"mb-0",children:"Phase"}),Object(v.jsx)("p",{className:"fs-4",children:t.phase}),Object(v.jsx)("p",{className:"mb-0",children:"Status"}),Object(v.jsx)("p",{className:"fs-4",children:t.status})]}),Object(v.jsxs)(S.a,{xs:12,md:8,children:[Object(v.jsx)("p",{children:"Notes"}),Object(v.jsx)("p",{children:t.note})]})]})})})]})},z=function(e){var t=e.report,a=Object(n.useState)(!1),c=Object(i.a)(a,2),s=c[0],r=c[1];return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsxs)("tr",{id:t.id,children:[Object(v.jsx)("td",{children:t.companyName}),Object(v.jsx)("td",{children:t.getInterviewDate()}),Object(v.jsx)("td",{children:t.status}),Object(v.jsx)("td",{className:"text-center",children:Object(v.jsx)("a",{href:"#id",children:Object(v.jsx)(B.a,{className:"text-primary",size:"25px",onClick:function(){return r(!0)}})})})]}),Object(v.jsx)(P,{report:t,show:s,onHide:function(){return r(!1)}})]})},A=function(){var e=localStorage.getItem("token"),t=Object(j.h)("id").id,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(!0),d=Object(i.a)(l,2),b=d[0],h=d[1];return Object(n.useEffect)((function(){h(!1),function(e,t){var a={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};return fetch("http://localhost:3333/api/reports?candidateId=".concat(t),a).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return new x(e.id,e.candidateId,e.candidateName,e.companyId,e.companyName,e.interviewDate,e.phase,e.status,e.note)}))}))}(e,t).then((function(e){r(e)}))}),[e,t]),Object(v.jsxs)(o.a,{children:[Object(v.jsx)("h3",{className:"mt-4 mb-3",children:"Reports:"}),b?Object(v.jsx)(R,{}):Object(v.jsxs)(E.a,{striped:!0,bordered:!0,hover:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Company"}),Object(v.jsx)("th",{children:"Interview date"}),Object(v.jsx)("th",{colSpan:"2",children:"Status"})]})}),Object(v.jsx)("tbody",{children:s.map((function(e){return Object(v.jsx)(z,{report:e},e.id)}))})]})]})},F=(a(65),function(){var e=localStorage.getItem("token"),t=Object(j.h)("id").id,a=Object(n.useState)({}),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(!0),d=Object(i.a)(l,2),b=d[0],h=d[1];return Object(n.useEffect)((function(){h(!1),function(e,t){var a={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};return fetch("http://localhost:3333/api/candidates?id=".concat(t),a).then((function(e){return e.json()})).then((function(e){var t=e[0];return new u(t.id,t.name,t.email,t.birthday,t.education)}))}(e,t).then((function(e){return r(e)}))}),[e,t]),Object(v.jsx)(o.a,{children:b?Object(v.jsx)(R,{}):Object(v.jsxs)(y.a,{className:"mt-4",children:[Object(v.jsx)(S.a,{sm:12,md:6,lg:4,children:Object(v.jsx)("img",{src:"https://goodshepherdirvine.com/wp-content/uploads/2017/08/user-placeholder.jpg",alt:""})}),Object(v.jsx)(S.a,{sm:12,md:6,lg:8,className:"centered ",children:Object(v.jsxs)(y.a,{children:[Object(v.jsxs)(S.a,{sm:12,xl:6,children:[Object(v.jsx)("small",{className:"text-muted",children:"Name:"}),Object(v.jsx)("p",{className:"fs-4",children:s.name})]}),Object(v.jsxs)(S.a,{sm:12,xl:6,children:[Object(v.jsx)("small",{className:"text-muted",children:"Date of Birth:"}),Object(v.jsx)("p",{className:"fs-4",children:s.birthday})]}),Object(v.jsxs)(S.a,{sm:12,xl:6,children:[Object(v.jsx)("small",{className:"text-muted",children:"Email:"}),Object(v.jsx)("p",{className:"fs-4",children:s.email})]}),Object(v.jsxs)(S.a,{sm:12,xl:6,children:[Object(v.jsx)("small",{className:"text-muted",children:"Education:"}),Object(v.jsx)("p",{className:"fs-4",children:s.education})]})]})})]})})}),G=function(e){var t=e.handleToken;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{handleToken:t,title:"Interviews Reports"}),Object(v.jsxs)(o.a,{className:"mb-5",children:[Object(v.jsx)(F,{}),Object(v.jsx)(A,{})]}),Object(v.jsx)(w,{})]})},J=(a(66),a(54)),q=a(53),M=function(e){var t=e.report,a=e.title;return Object(v.jsxs)(S.a,{sm:12,md:6,lg:3,className:"border-end",children:[Object(v.jsx)("p",{className:"fs-5 m-0",children:t}),Object(v.jsx)("small",{className:"text-muted",children:a})]})},Y=function(e){var t=e.report,a=e.loadingReports,c=localStorage.getItem("token"),s=Object(n.useState)(!1),r=Object(i.a)(s,2),l=r[0],j=r[1];return Object(v.jsxs)(o.a,{children:[Object(v.jsxs)(y.a,{className:"border rounded py-2 my-2 bg-white",children:[Object(v.jsx)(S.a,{sm:12,md:12,lg:11,children:Object(v.jsxs)(y.a,{children:[Object(v.jsx)(M,{report:t.companyName,title:"Company"}),Object(v.jsx)(M,{report:t.candidateName,title:"Candidate"}),Object(v.jsx)(M,{report:t.getInterviewDate(),title:"Interview Date"}),Object(v.jsx)(M,{report:t.status,title:"Status"})]})}),Object(v.jsxs)(S.a,{sm:12,md:12,lg:1,className:"d-flex justify-content-around align-items-center",children:[Object(v.jsx)(B.a,{className:"text-primary",size:"25px",onClick:function(){return j(!0)}}),Object(v.jsx)(q.a,{className:"text-danger",size:"25px",onClick:function(){!function(e,t){var a={method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}};fetch("http://localhost:3333/api/reports/".concat(t),a).then((function(e){return e.json()}))}(c,t.id),a()}})]})]}),Object(v.jsx)(P,{report:t,show:l,onHide:function(){return j(!1)}})]})},_=(a(67),function(e){var t=e.handleToken,a=localStorage.getItem("token"),c=Object(n.useState)(!0),s=Object(i.a)(c,2),r=s[0],j=s[1],d=Object(n.useState)([]),b=Object(i.a)(d,2),h=b[0],m=b[1],u=Object(n.useState)([]),O=Object(i.a)(u,2),p=O[0],f=O[1],g=Object(n.useCallback)((function(){j(!1),function(e){var t={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};return fetch("http://localhost:3333/api/reports",t).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return new x(e.id,e.candidateId,e.candidateName,e.companyId,e.companyName,e.interviewDate,e.phase,e.status,e.note)}))}))}(a).then((function(e){m(e),f(e)}))}),[a]);Object(n.useEffect)((function(){g()}),[g]);return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)(N,{title:"Reports Administration",handleToken:t}),Object(v.jsxs)(o.a,{className:"mb-5",children:[r?Object(v.jsx)(R,{}):Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)(T,{onTypingHandler:function(e){var t=e.target.value.trim().toLowerCase();f(h.filter((function(e){return e.candidateName.toLowerCase().includes(t)||e.companyName.toLowerCase().includes(t)})))},title:"Reports"}),p.map((function(e){return Object(v.jsx)(Y,{report:e,loadingReports:g},e.id)}))]}),Object(v.jsx)(l.b,{to:"/createreport",children:Object(v.jsx)("button",{className:"btn btn-floating",id:"creating-report-btn",children:Object(v.jsx)(J.a,{className:"bg-white text-primary rounded-circle",id:"creating-report-btn",size:"50px"})})})]}),Object(v.jsx)(w,{})]})}),K=a(3),Q=function(e){var t=e.wizardStep,a=e.newReport,n=function(e){return t===e?"text-primary fw-bold":""};return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"d-grid gap-2 pb-3 border-bottom",children:[Object(v.jsx)("p",{className:n(1),children:"Select Candidate"}),Object(v.jsx)("p",{className:n(2),children:"Select Company"}),Object(v.jsx)("p",{className:n(3),children:"Fill Report Details"})]}),t>1&&Object(v.jsxs)("div",{className:"pt-3",children:[Object(v.jsx)("small",{className:"text-muted",children:"Candidate:"}),Object(v.jsx)("p",{children:a.candidateName})]}),t>2&&Object(v.jsxs)("div",{className:"pt-1",children:[Object(v.jsx)("small",{className:"text-muted",children:"Company:"}),Object(v.jsx)("p",{children:a.companyName})]})]})},U=a(75),V=function(e){var t=e.candidate,a=e.selectCandidateHandler,n=e.newReport;return Object(v.jsx)(S.a,{xs:12,md:12,lg:6,onClick:function(){return a(t)},className:"p-2",children:Object(v.jsxs)(y.a,{className:"border m-0 ".concat(n.candidateId===t.id&&"border-primary"),children:[Object(v.jsx)(S.a,{xs:2,md:2,lg:2,className:"d-flex align-items-center",children:Object(v.jsx)(U.a,{className:"w-100 d-flex align-items-center",roundedCircle:!0,src:t.avatar})}),Object(v.jsxs)(S.a,{xs:10,md:10,lg:10,children:[Object(v.jsx)("p",{className:"mb-0",children:t.name}),Object(v.jsx)("small",{className:"text-muted",children:t.email})]})]})})},W=function(e){var t=e.selectCandidateHandler,a=e.newReport,c=e.nextPageHandler,s=localStorage.getItem("token"),r=Object(n.useState)(!0),l=Object(i.a)(r,2),j=l[0],o=l[1],d=Object(n.useState)([]),h=Object(i.a)(d,2),m=h[0],u=h[1],O=Object(n.useState)([]),x=Object(i.a)(O,2),p=x[0],g=x[1];Object(n.useEffect)((function(){f(s).then((function(e){u(e),g(e)})),o(!1)}),[s]);return Object(v.jsx)("div",{children:j?Object(v.jsx)(R,{}):Object(v.jsxs)("div",{className:"ps-4",children:[Object(v.jsx)("div",{className:"mb-3",children:Object(v.jsx)(T,{onTypingHandler:function(e){var t=e.target.value.trim().toLowerCase();g(m.filter((function(e){return e.name.toLowerCase().includes(t)})))},title:"Candidates"})}),Object(v.jsxs)(y.a,{children:[p.map((function(e){return Object(v.jsx)(V,{candidate:e,selectCandidateHandler:t,newReport:a},e.id)})),Object(v.jsx)("div",{className:"d-flex justify-content-end my-5 container",children:Object(v.jsx)(b.a,{variant:"primary",disabled:!a.candidateName,onClick:c,children:"Next"})})]})]})})},X=function(e){var t=e.company,a=e.selectCompanyHandler,n=e.newReport;return Object(v.jsx)(S.a,{xs:12,onClick:function(){return a(t)},children:Object(v.jsx)(y.a,{className:"border m-0 ".concat(n.companyId===t.id&&"border-primary"),children:Object(v.jsx)(S.a,{xs:12,children:Object(v.jsx)("p",{className:"mb-0",children:t.name})})})})},Z=function(e){var t=e.selectCompanyHandler,a=e.newReport,c=e.nextPageHandler,s=e.prevPageHandler,r=localStorage.getItem("token"),l=Object(n.useState)(!0),j=Object(i.a)(l,2),o=j[0],d=j[1],h=Object(n.useState)([]),m=Object(i.a)(h,2),u=m[0],O=m[1],x=Object(n.useState)([]),f=Object(i.a)(x,2),g=f[0],N=f[1];Object(n.useEffect)((function(){(function(e){var t={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};return fetch("http://localhost:3333/api/companies",t).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return new p(e.id,e.name,e.email)}))}))})(r).then((function(e){O(e),N(e)})),d(!1)}),[r]);return Object(v.jsx)("div",{children:o?Object(v.jsx)(R,{}):Object(v.jsxs)("div",{className:"ps-4",children:[Object(v.jsx)("div",{className:"mb-3",children:Object(v.jsx)(T,{onTypingHandler:function(e){var t=e.target.value.trim().toLowerCase();N(u.filter((function(e){return e.name.toLowerCase().includes(t)})))},title:"Companies"})}),Object(v.jsxs)(y.a,{children:[g.map((function(e){return Object(v.jsx)(X,{company:e,selectCompanyHandler:t,newReport:a},e.id)})),Object(v.jsxs)("div",{className:"d-flex justify-content-between my-5 container",children:[Object(v.jsx)(b.a,{variant:"secondary",onClick:s,children:"Back"}),Object(v.jsx)(b.a,{variant:"primary",disabled:!a.companyName,onClick:c,children:"Next"})]})]})]})})},$=function(){var e=new Date,t=[e.toLocaleString("default",{month:"2-digit"}),e.getDate(),e.getFullYear()],a=t[0],n=t[1];return"".concat(t[2],"-").concat(a,"-").concat(n)},ee=function(e){var t=e.newReport,a=e.prevPageHandler,c=localStorage.getItem("token"),s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],d=r[1],h=Object(n.useState)("select"),m=Object(i.a)(h,2),u=m[0],O=m[1],p=Object(n.useState)("select"),f=Object(i.a)(p,2),g=f[0],N=f[1],w=Object(n.useState)(""),C=Object(i.a)(w,2),k=C[0],I=C[1],T=Object(j.g)();return Object(v.jsx)(o.a,{children:Object(v.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==l&&"select"!==u&&"select"!==g&&""!==k){var a=t.candidateId,n=t.candidateName,s=t.companyId,r=t.companyName,i=new Date(l).toString(),j=new x(null,a,n,s,r,i,u,g,k);!function(e,t){if(t instanceof x){var a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)};fetch("http://localhost:3333/api/reports",a).then((function(e){return e.json()}))}}(c,j),T.push("/reports")}},children:[Object(v.jsxs)(y.a,{className:"mb-5",children:[Object(v.jsxs)(S.a,{sm:12,lg:4,className:"mb-2",children:[Object(v.jsx)("label",{className:"text-muted mb-0",children:"Interview Date:"}),Object(v.jsx)("input",{type:"date",value:l,max:$(),className:"w-100 border rounded p-1",required:!0,onChange:function(e){return d(e.target.value)}})]}),Object(v.jsxs)(S.a,{sm:12,lg:4,className:"mb-2",children:[Object(v.jsx)("label",{className:"text-muted mb-0",children:"Phase:"}),Object(v.jsxs)("select",{value:u,className:"w-100 border rounded p-1",onChange:function(e){return O(e.target.value)},children:[Object(v.jsx)("option",{value:"select",disabled:!0,hidden:!0,children:"Choose phase"}),Object(v.jsx)("option",{value:"cv",children:"cv"}),Object(v.jsx)("option",{value:"hr",children:"hr"}),Object(v.jsx)("option",{value:"tech",children:"tech"}),Object(v.jsx)("option",{value:"final",children:"final"})]})]}),Object(v.jsxs)(S.a,{sm:12,lg:4,className:"mb-2",children:[Object(v.jsx)("label",{className:"text-muted mb-0",children:"Status:"}),Object(v.jsxs)("select",{value:g,className:"w-100 border rounded p-1",onChange:function(e){return N(e.target.value)},children:[Object(v.jsx)("option",{value:"select",disabled:!0,hidden:!0,children:"Choose status"}),Object(v.jsx)("option",{value:"passed",children:"passed"}),Object(v.jsx)("option",{value:"declined",children:"declined"})]})]})]}),Object(v.jsxs)(y.a,{children:[Object(v.jsx)("label",{className:"text-muted",children:"Notes:"}),Object(v.jsx)("textarea",{required:!0,value:k,onChange:function(e){return I(e.target.value)}})]}),Object(v.jsx)(y.a,{children:Object(v.jsxs)("div",{className:"d-flex justify-content-between my-5 container",children:[Object(v.jsx)(b.a,{variant:"secondary",onClick:a,children:"Back"}),Object(v.jsx)(b.a,{type:"submit",variant:"primary",children:"Submit"})]})})]})})},te={id:null,candidateId:null,candidateName:null,companyId:null,companyName:null,iterviewDate:null,phase:null,status:null,note:null},ae=function(e){var t=e.handleToken,a=Object(n.useState)(1),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(te),j=Object(i.a)(l,2),d=j[0],b=j[1],h=function(){r((function(e){return e+1}))},m=function(){r((function(e){return e-1}))};return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)(N,{title:"Reports Administration",handleToken:t}),Object(v.jsx)(o.a,{className:"mb-5",children:Object(v.jsxs)(y.a,{children:[Object(v.jsx)(S.a,{sm:12,md:6,lg:3,children:Object(v.jsx)(Q,{wizardStep:s,newReport:d})}),Object(v.jsxs)(S.a,{sm:12,md:6,lg:9,className:"border-start",children:[1===s&&Object(v.jsx)(W,{selectCandidateHandler:function(e){b(Object(K.a)(Object(K.a)({},d),{},{candidateId:e.id,candidateName:e.name}))},newReport:d,nextPageHandler:h}),2===s&&Object(v.jsx)(Z,{selectCompanyHandler:function(e){b(Object(K.a)(Object(K.a)({},d),{},{companyId:e.id,companyName:e.name}))},newReport:d,nextPageHandler:h,prevPageHandler:m}),3===s&&Object(v.jsx)(ee,{newReport:d,prevPageHandler:m})]})]})}),Object(v.jsx)(w,{})]})};var ne=function(){var e=Object(n.useState)(localStorage.getItem("token")),t=Object(i.a)(e,2),a=t[0],c=t[1],s=function(e){c(e),null===e?localStorage.removeItem("token"):localStorage.setItem("token",e)};return Object(v.jsx)(l.a,{children:Object(v.jsxs)(j.d,{children:[Object(v.jsx)(j.b,{exact:!0,path:"/interview-reports",children:a?Object(v.jsx)(D,{handleToken:s}):Object(v.jsx)(j.a,{to:"/interview-reports/login"})}),Object(v.jsx)(j.b,{exact:!0,path:"/interview-reports/login",children:a?Object(v.jsx)(j.a,{to:"/interview-reports"}):Object(v.jsx)(g,{handleToken:s})}),Object(v.jsx)(j.b,{path:"/interview-reports/candidate/:id",children:a?Object(v.jsx)(G,{handleToken:s}):Object(v.jsx)(j.a,{to:"/interview-reports/login"})}),Object(v.jsx)(j.b,{path:"/interview-reports/reports",children:a?Object(v.jsx)(_,{handleToken:s}):Object(v.jsx)(j.a,{to:"/interview-reports/login"})}),Object(v.jsx)(j.b,{path:"/interview-reports/createreport",children:a?Object(v.jsx)(ae,{handleToken:s}):Object(v.jsx)(j.a,{to:"/interview-reports/login"})})]})})};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(ne,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.ec91ee40.chunk.js.map