(this.webpackJsonpbusybag=this.webpackJsonpbusybag||[]).push([[0],{36:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(3),a=c.n(r),s=c(25),o=c.n(s),i=(c(36),c(5)),l=c.n(i),u=c(7),j=c(6),d=c(12),b=c(9),p=c.p+"static/media/unnamed.ea125fe9.png";function h(){return Object(n.jsx)("div",{className:"logo-container",children:Object(n.jsx)("img",{src:p,alt:"Logo"})})}var O=c(32),f=(c(52),c(59),O.a.initializeApp({apiKey:"AIzaSyAPyppmyjBKQjIS4o1nRk6N-UxkW54rFPA",authDomain:"busybag-f27f9.firebaseapp.com",projectId:"busybag-f27f9",storageBucket:"busybag-f27f9.appspot.com",messagingSenderId:"622475419405",appId:"1:622475419405:web:d8022f00e74e3ede131a44"})),x=f.auth(),m=(new O.a.auth.GoogleAuthProvider,f.firestore()),v=a.a.createContext();function g(){return Object(r.useContext)(v)}function w(e){var t=e.children,c=Object(r.useState)(),a=Object(j.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(!0),l=Object(j.a)(i,2),u=l[0],d=l[1];Object(r.useEffect)((function(){return x.onAuthStateChanged((function(e){o(e),d(!1)}))}),[]);var b={currentUser:s,login:function(e,t){return x.signInWithEmailAndPassword(e,t)},logout:function(){return x.signOut()},signup:function(e,t){return x.createUserWithEmailAndPassword(e,t)},resetPassword:function(e){return x.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(n.jsx)(v.Provider,{value:b,children:!u&&t})}function y(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),a=g().signup,s=Object(r.useState)(""),o=Object(j.a)(s,2),i=o[0],p=o[1],O=Object(r.useState)(!1),f=Object(j.a)(O,2),x=f[0],m=f[1],v=Object(d.g)();function w(){return(w=Object(u.a)(l.a.mark((function n(r){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===c.current.value){n.next=3;break}return n.abrupt("return",p("Passwords do not match"));case 3:return n.prev=3,p(""),m(!0),n.next=8,a(e.current.value,t.current.value);case 8:v.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),p("Failed to create an Acccount");case 14:m(!0);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h2",{children:"Busybag"}),Object(n.jsx)(h,{}),Object(n.jsx)("p",{children:"Keep track and do all"}),Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("form",{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(n.jsx)("input",{type:"email",placeholder:"Email",ref:e}),Object(n.jsx)("input",{type:"password",placeholder:"Password",ref:t}),Object(n.jsx)("input",{type:"password",placeholder:"Password Confirm",ref:c}),i&&Object(n.jsx)("h1",{children:i}),Object(n.jsx)("button",{type:"submit",className:"signin___button",disabled:x,children:" Sign up "})]})}),Object(n.jsxs)("div",{children:["Already have an account? ",Object(n.jsx)(b.b,{to:"/login",children:"Login"})]})]})})}c(38);var k=a.a.createContext();function P(){return Object(r.useContext)(k)}function N(e){var t=e.children,c=Object(r.useState)([]),a=Object(j.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(!0),d=Object(j.a)(i,2),b=d[0],p=d[1];function h(){return(h=Object(u.a)(l.a.mark((function e(t,c){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.collection("projects").doc(c),e.next=3,n.get();case 3:(r=e.sent).exists?((a=r.data()).shared.push(t),console.log("Document data:",a.shared),m.collection("projects").doc(c).update({shared:a.shared})):console.log("No such document!");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){return x.onAuthStateChanged(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t?(m.collection("projects").where("shared","array-contains",t.email).onSnapshot((function(e){return o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})),p(!1)):p(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);function O(e,t,c){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(l.a.mark((function e(t,c,n){var r,a,s,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.collection("projects").doc(c),e.next=3,r.get();case 3:(a=e.sent).exists?(s=new Date,o="Time: "+s.getDate()+"/"+(s.getMonth()+1)+"/"+s.getFullYear()+" - "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),i=a.data(),console.log(i),i.history.push({email:t,task:n,currentdate:s,datetime:o}),console.log("Document data:",i.history),m.collection("projects").doc(c).update({history:i.history})):console.log("No such document!");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v={projects:s,shareProjectWithUser:function(e,t){return h.apply(this,arguments)},addProject:function(e,t,c,n){m.collection("projects").add({name:e,description:t,color:c,owner:n,shared:[n],history:[]}).then((function(e){return e.id})).catch((function(e){return console.error("Error adding document: ",e)}))},modifyProject:function(e){m.collection("projects").doc(e.id).update({color:e.data.color,description:e.data.description,name:e.data.name,owner:e.data.owner})},deleteProject:function(e){var t=m.collection(e);t.onSnapshot((function(e){e.docs.forEach((function(e){t.doc(e.id).delete()}))})),m.collection(e).doc(e).delete(),m.collection("projects").doc(e).delete()},addTaskToProject:function(e,t,c,n){m.collection(e).add({name:t,description:c,user:n}),O(n,e,t)},addHistoryEntryToProject:O,loading:b};return Object(n.jsxs)(k.Provider,{value:v,children:[b&&t,!b&&t]})}var S=a.a.createContext();function C(){return Object(r.useContext)(S)}function T(e){var t=e.children,c=Object(r.useState)(""),a=Object(j.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(""),d=Object(j.a)(i,2),b=d[0],p=d[1],h=Object(r.useState)(""),O=Object(j.a)(h,2),f=O[0],x=O[1],v=Object(r.useState)(""),g=Object(j.a)(v,2),w=(g[0],g[1]),y=Object(r.useState)(""),k=Object(j.a)(y,2),P=k[0],N=k[1],C=Object(r.useState)([]),T=Object(j.a)(C,2),E=(T[0],T[1]),R=Object(r.useState)({}),A=Object(j.a)(R,2),D=A[0],B=A[1],L=Object(r.useState)([]),U=Object(j.a)(L,2),F=U[0],_=U[1],z=Object(r.useState)([]),W=Object(j.a)(z,2),K=W[0],I=W[1],H=Object(r.useState)(!0),M=Object(j.a)(H,2),J=M[0],Y=M[1];function G(){return(G=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(t.id),Q(t.id),p(t.data.name),x(t.data.color),w(t.data.description),N(t.data.owner),E(t.data.shared),B(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){m.collection(e).onSnapshot((function(e){return _(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})),Y(!1)}function V(){return(V=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){m.collection("users").where("id","==",e).onSnapshot((function(e){return I(e.docs.map((function(e){return e.data().task.map((function(e){return{id:e.id,data:e}}))})))})),Y(!1)}Object(r.useEffect)((function(){Y(!1)}),[]);var q={assignProject:function(e){return G.apply(this,arguments)},assignTaskboard:function(e){return V.apply(this,arguments)},tasks:F,setTasks:_,userTasks:K,setUserTasks:I,projectName:b,projectColor:f,projectId:s,projectOwner:P,projectOverview:D,loadingTasksFromProject:Q,deleteTaskFromProject:function(e,t){m.collection(e).doc(t).delete()}};return Object(n.jsx)(S.Provider,{value:q,children:!J&&t})}var E=a.a.createContext();function R(e){var t=e.children,c=Object(r.useState)(""),a=Object(j.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(!0),l=Object(j.a)(i,2),u=l[0],d=l[1];Object(r.useEffect)((function(){o("#E13B64"),d(!1)}),[]);var b={themePrimary:s,toggleTheme:function(e){return o("#047AED"===e?"#E13B64":"#047AED"),e}};return Object(n.jsx)(E.Provider,{value:b,children:!u&&t})}var A=c(11),D=c(39),B=Object(r.createContext)();function L(e){var t=e.children,c=Object(r.useState)("cubeToLeft"),a=Object(j.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(""),l=Object(j.a)(i,2),u=l[0],d=l[1],b=Object(r.useState)(""),p=Object(j.a)(b,2),h=p[0],O=p[1];return Object(n.jsx)(B.Provider,{value:{preset:s,enterAnimation:u,exitAnimation:h,setPreset:o,setEnterAnimation:d,setExitAnimation:O},children:t})}function U(){var e=Object(d.g)(),t=Object(r.useContext)(B).setPreset,c=P().projects,a=g().currentUser,s=C(),o=s.assignTaskboard,i=s.userTasks;function j(){return(j=Object(u.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,0!==c.length){n.next=8;break}return window.alert("You need to create a Project first, before you can create Tasks!"),n.next=5,t("cubeToBottom");case 5:e.push("/create-project"),n.next=11;break;case 8:return n.next=10,t("cubeToTop");case 10:e.push("/create-task");case 11:n.next=15;break;case 13:n.prev=13,n.t0=n.catch(0);case 15:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}function p(){return(p=Object(u.a)(l.a.mark((function c(){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,console.log(i),c.next=4,o(a.uid);case 4:return c.next=6,t("cubeToLeft");case 6:e.push("/task-board"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),console.log(c.t0);case 12:case"end":return c.stop()}}),c,null,[[0,9]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{className:"navbar-bottom",children:[Object(n.jsx)(b.b,{to:"/",children:Object(n.jsx)(A.d,{size:"2em"})}),Object(n.jsx)(b.b,{onClick:function(){return j.apply(this,arguments)},children:Object(n.jsx)(A.f,{size:"2em"})}),Object(n.jsx)(b.b,{onClick:function(){return p.apply(this,arguments)},children:Object(n.jsx)(D.a,{size:"2em"})})]})}function F(){var e=g().currentUser,t=Object(d.g)(),c=Object(r.useContext)(B).setPreset;function a(){return(a=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("moveToLeftFromRight");case 3:t.push("/update-profile"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"navbar-top",children:[Object(n.jsx)("a",{className:"align-right",onClick:function(){return a.apply(this,arguments)},children:Object(n.jsx)(A.b,{title:e.email,color:"red",size:"1.5em"})}),Object(n.jsx)("div",{className:"align-placeholder"}),Object(n.jsx)("h2",{children:"Busybag"}),Object(n.jsx)("p",{children:"Keep track and do all"}),Object(n.jsx)("strong",{children:"Email:"}),e.email]}),Object(n.jsx)("div",{className:"navbar-placeholder"})]})}function _(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),c=t[0],a=(t[1],g().currentUser,Object(r.useContext)(E)),s=(a.themePrimary,a.toggleTheme,P()),o=s.projects,i=s.deleteProject,b=s.loading,p=C().assignProject,h=Object(d.g)(),O=Object(r.useContext)(B).setPreset;Object(r.useEffect)((function(){}),[]);Object(r.useRef)();function f(){return(f=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("cubeToBottom");case 3:h.push("/create-project"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function x(){return(x=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:return e.next=5,O("roomToTop");case 5:h.push("/project-overview"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)(F,{}),Object(n.jsxs)("div",{className:"main-container",children:[b&&Object(n.jsx)("div",{children:"Loading Projects"}),c&&Object(n.jsx)("h1",{children:c}),Object(n.jsxs)("div",{className:"projects",children:[!b&&Object(n.jsx)("button",{onClick:function(){return f.apply(this,arguments)},className:"project flex-center",children:Object(n.jsx)(A.e,{size:"4em"})}),o.map((function(e,t){return Object(n.jsxs)("div",{className:"project",style:{backgroundColor:e.data.color},children:[Object(n.jsx)("div",{children:e.data.name}),Object(n.jsx)("button",{onClick:function(){return function(e){return x.apply(this,arguments)}(e)},children:" Open "}),Object(n.jsx)("button",{onClick:function(){return t=e.id,c=e.data.name,console.log("Delete this project ".concat(t," now")),void(window.confirm("Delete everything on ".concat(c,"?"))&&i(t));var t,c},children:" Delete "})]},t)}))]})]}),Object(n.jsx)(U,{})]})})}var z=c(17);function W(){var e=Object(r.useContext)(B).setPreset,t=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useRef)(),s=g(),o=s.currentUser,i=(s.updatePassword,s.updateEmail,s.logout,P().addProject),p=Object(r.useState)(""),h=Object(j.a)(p,2),O=h[0],f=h[1],x=Object(r.useState)(!1),m=Object(j.a)(x,2),v=m[0],w=m[1],y=Object(r.useState)("#047AED"),k=Object(j.a)(y,2),N=k[0],S=k[1],C=Object(d.g)();function T(){return(T=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e("cubeToLeft");case 3:C.goBack(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function E(){return(E=Object(u.a)(l.a.mark((function n(r){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),!(t.current.value.length<4)){n.next=3;break}return n.abrupt("return",f("Enter a suitable Projectname"));case 3:return w(!0),f(""),n.next=7,i(t.current.value,c.current.value,a.current.value,o.email);case 7:return n.next=9,e("cubeToTop");case 9:w(!1),C.push("/");case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsxs)("div",{className:"navbar-profile-top",children:[Object(n.jsx)("div",{className:"align-placeholder",children:Object(n.jsx)(b.b,{className:"align-left",onClick:function(){return T.apply(this,arguments)},children:Object(n.jsx)(A.c,{title:o.email,color:"red",size:"1.5em"})})}),Object(n.jsx)("h2",{children:"Busybag"}),Object(n.jsx)("p",{children:"Keep track and do all"})]}),Object(n.jsx)("div",{className:"navbar-placeholder"}),Object(n.jsx)("h2",{children:"Create Project"}),Object(n.jsx)("div",{className:"createProject",children:Object(n.jsxs)("form",{onSubmit:function(e){return E.apply(this,arguments)},children:[O&&Object(n.jsx)("h1",{children:O}),Object(n.jsx)("input",Object(z.a)({type:"text",placeholder:"Projectname...",ref:t},"placeholder","Enter a Project Name")),Object(n.jsx)("input",Object(z.a)({type:"text",placeholder:"Projectdescription...",ref:c},"placeholder","Describe your Project...")),Object(n.jsx)("input",{type:"color",value:N,onChange:function(e){return S(e.target.value)},ref:a}),Object(n.jsx)("strong",{children:"Owner:"}),o.email,Object(n.jsx)("button",{type:"submit",className:"signin___button",disabled:v,children:" Create "})]})})]})})}var K=c(40);function I(){var e=Object(r.useContext)(B).setPreset,t=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useRef)(),s=Object(r.useRef)(),o=g(),i=o.currentUser,p=(o.updatePassword,o.updateEmail,o.logout,P().modifyProject),h=C().projectOverview,O=Object(r.useState)(""),f=Object(j.a)(O,2),x=f[0],m=f[1],v=Object(r.useState)(!1),w=Object(j.a)(v,2),y=w[0],k=w[1],N=Object(r.useState)(""),S=Object(j.a)(N,2),T=S[0],E=S[1],R=Object(r.useState)(""),D=Object(j.a)(R,2),L=D[0],U=D[1],F=Object(r.useState)(""),_=Object(j.a)(F,2),W=_[0],I=_[1],H=Object(d.g)();function M(){return(M=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e("moveToRightFromLeft");case 3:H.goBack(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function J(){return(J=Object(u.a)(l.a.mark((function n(r){var o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),!(t.current.value.length<4)){n.next=3;break}return n.abrupt("return",m("Enter a suitable Projectname"));case 3:return k(!0),m(""),console.log(h),o={data:{name:t.current.value,description:c.current.value,color:a.current.value,owner:s.current.value,shared:h.data.shared},id:h.id},console.log(o),n.next=10,p(o);case 10:return n.next=12,e("cubeToTop");case 12:k(!1),H.push("/");case 14:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Y(){return(Y=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("moveToLeftFromRight");case 2:H.push("/history-view");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){console.log(h),E(h.data.name),U(h.data.description),I(h.data.color)}),[]),Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsxs)("div",{className:"navbar-profile-top",children:[Object(n.jsx)("div",{className:"align-placeholder",children:Object(n.jsx)(b.b,{className:"align-left",onClick:function(){return M.apply(this,arguments)},children:Object(n.jsx)(A.c,{title:i.email,color:"red",size:"1.5em"})})}),Object(n.jsx)("h2",{children:"Busybag"}),Object(n.jsx)("p",{children:"Keep track and do all"})]}),Object(n.jsx)("div",{className:"navbar-placeholder"}),Object(n.jsx)("h2",{children:"Modify Project:"}),Object(n.jsx)("h3",{children:h.data.name}),Object(n.jsxs)("strong",{children:["(Owner:",i.email,")"]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("button",{onClick:function(){return Y.apply(this,arguments)},children:Object(n.jsx)(K.a,{size:"2.5em"})})}),Object(n.jsx)("div",{className:"createProject",children:Object(n.jsxs)("form",{onSubmit:function(e){return J.apply(this,arguments)},children:[x&&Object(n.jsx)("h1",{children:x}),Object(n.jsx)("label",{className:"flex",children:"Projectname:"}),Object(n.jsx)("input",Object(z.a)({type:"text",placeholder:"Projectname...",value:T,onChange:function(e){return E(e.target.value)},ref:t},"placeholder","Enter a Project Name")),Object(n.jsx)("input",Object(z.a)({type:"text",placeholder:"Projectdescription...",value:L,onChange:function(e){return U(e.target.value)},ref:c},"placeholder","Describe your Project...")),Object(n.jsx)("input",{type:"color",value:W,onChange:function(e){return I(e.target.value)},ref:a}),Object(n.jsx)("label",{className:"flex",children:"Owner:"}),Object(n.jsx)("input",Object(z.a)({type:"text",placeholder:"Projectowner...",value:h.data.owner,readOnly:h.data.owner,ref:s},"placeholder","Owner of the Project...")),Object(n.jsx)("button",{type:"submit",className:"signin___button",disabled:y,children:" Update "})]})}),Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h1",{children:Object(n.jsx)(A.g,{size:"2.5em"})}),Object(n.jsx)("label",{className:"flex",children:"Shared:"}),h.data.shared.map((function(e,t){return Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("button",{disabled:!0,children:"x"}),e]},t)})),Object(n.jsx)("button",{children:"+ Add Member"})]})]})})}function H(){var e=Object(r.useContext)(B).setPreset,t=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useRef)(),s=g(),o=s.currentUser,i=(s.updatePassword,s.updateEmail,s.logout,P()),p=i.projects,h=i.addTaskToProject,O=C().projectId,f=Object(r.useState)(""),x=Object(j.a)(f,2),m=x[0],v=x[1],w=Object(r.useState)(!1),y=Object(j.a)(w,2),k=y[0],N=y[1],S=Object(r.useState)(O),T=Object(j.a)(S,2),E=T[0],R=T[1],D=Object(r.useState)("#047AED"),L=Object(j.a)(D,2),U=(L[0],L[1],Object(d.g)());function F(){return(F=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e("cubeToLeft");case 3:U.push("/"),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function _(){return(_=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(t.current.value.length<4)){e.next=3;break}return e.abrupt("return",v("Enter a suitable Taskname"));case 3:N(!0),v(""),h(a.current.value,t.current.value,c.current.value,o.email),N(!1),U.goBack();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsxs)("div",{className:"navbar-profile-top",children:[Object(n.jsx)("div",{className:"align-placeholder",children:Object(n.jsx)(b.b,{className:"align-left",onClick:function(){return F.apply(this,arguments)},children:Object(n.jsx)(A.c,{title:o.email,color:"red",size:"1.5em"})})}),Object(n.jsx)("h2",{children:"Busybag"}),Object(n.jsx)("p",{children:"Keep track and do all"})]}),Object(n.jsx)("div",{className:"navbar-placeholder"}),Object(n.jsx)("h2",{children:"Create Task"}),Object(n.jsx)("div",{className:"createProject",children:Object(n.jsxs)("form",{onSubmit:function(e){return _.apply(this,arguments)},children:[m&&Object(n.jsx)("h1",{children:m}),Object(n.jsx)("input",Object(z.a)({type:"text",placeholder:"Projectname...",ref:t},"placeholder","Enter a Task Name")),Object(n.jsx)("input",Object(z.a)({type:"text",placeholder:"Projectdescription...",ref:c},"placeholder","Describe your taks...")),Object(n.jsxs)("div",{className:"text-right",children:[Object(n.jsxs)("div",{children:["Repeat? ",Object(n.jsx)("button",{disabled:!0,children:"..."})]}),Object(n.jsxs)("div",{children:["Deadline? ",Object(n.jsx)("button",{disabled:!0,children:"..."})]}),Object(n.jsxs)("div",{children:["Effort? ",Object(n.jsx)("button",{disabled:!0,children:"..."})]}),Object(n.jsxs)("div",{children:["Assignee? ",Object(n.jsx)("button",{disabled:!0,children:"..."})]}),Object(n.jsx)("div",{children:Object(n.jsx)("select",{ref:a,value:E,onChange:function(e){return R(e.target.value)},children:p.map((function(e,t){return Object(n.jsx)("option",{value:e.id,children:e.data.name},t)}))})})]}),Object(n.jsx)("strong",{children:"Owner:"}),o.email,Object(n.jsx)("button",{type:"submit",className:"signin___button",disabled:k,children:" Create "})]})})]})})}var M=c(41);function J(){var e=Object(r.useContext)(B).setPreset,t=(Object(r.useRef)(),Object(r.useRef)(),Object(r.useRef)(),g()),c=t.currentUser,a=(t.updatePassword,t.updateEmail,t.logout,P()),s=(a.addProject,a.shareProjectWithUser),o=a.addHistoryEntryToProject,i=C(),p=i.projectId,h=i.projectName,O=i.projectColor,f=i.tasks,x=i.deleteTaskFromProject,m=i.projectOwner,v=i.projectOverview,w=(i.assignProject,Object(r.useState)("")),y=Object(j.a)(w,2),k=(y[0],y[1],Object(r.useState)(!1)),N=Object(j.a)(k,2),S=(N[0],N[1],Object(r.useState)("#047AED")),T=Object(j.a)(S,2),E=(T[0],T[1],Object(d.g)());function R(){return(R=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e("moveToBottomFromTop");case 3:E.push("/"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function D(){return(D=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("moveToLeftFromRight");case 2:E.push("/modify-project");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return(L=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.prompt("Which email you wanna share?"))){e.next=6;break}return e.next=4,s(t,p);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(u.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(c.email,t,r);case 2:return e.next=4,x(t,n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(window.prompt("Who you want to assign this ".concat(t," Task?")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){console.log(v)}),[]),Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsxs)("div",{className:"navbar-profile-top",children:[Object(n.jsx)("div",{className:"align-placeholder",children:Object(n.jsx)(b.b,{className:"align-left",onClick:function(){return R.apply(this,arguments)},children:Object(n.jsx)(A.c,{title:c.email,color:"red",size:"1.5em"})})}),c.email===m?Object(n.jsxs)("div",{className:"align-right",children:[Object(n.jsx)(b.b,{children:Object(n.jsx)(M.a,{onClick:function(){return L.apply(this,arguments)},title:c.email,color:"red",size:"1.5em"})}),Object(n.jsx)(b.b,{children:Object(n.jsx)(A.a,{title:c.email,onClick:function(){return D.apply(this,arguments)},color:"red",size:"1.5em"})})]}):"",Object(n.jsx)("h2",{children:"Busybag"}),Object(n.jsx)("p",{children:"Keep track and do all"})]}),Object(n.jsx)("div",{className:"navbar-placeholder"}),Object(n.jsx)("h2",{children:h}),Object(n.jsx)("p",{className:"separator",style:{backgroundColor:O},children:"\xa0"}),Object(n.jsx)("ul",{className:"task-listing",children:f.map((function(e,t){return Object(n.jsxs)("li",{className:"task-list",children:[Object(n.jsx)("button",{onClick:function(){return function(e,t,c){return F.apply(this,arguments)}(p,e.id,e.data.name)},children:"done"}),Object(n.jsx)("button",{onClick:function(){return function(e){return _.apply(this,arguments)}(e.data.name)},children:"assign"})," ",Object(n.jsx)("p",{children:e.data.name})]},t)}))}),Object(n.jsx)(U,{})]})})}function Y(){var e=Object(r.useContext)(B).setPreset,t=Object(d.g)(),c=C().projectOverview,a=(P().projects,g().currentUser);function s(){return(s=Object(u.a)(l.a.mark((function c(){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,e("moveToRightFromLeft");case 3:t.goBack(),c.next=10;break;case 6:c.prev=6,c.t0=c.catch(0),console.log("ERROR HANDLETOBACK:"),console.log(c.t0);case 10:case"end":return c.stop()}}),c,null,[[0,6]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){console.log(c),console.log(c.data.history),c.data.history.map((function(e,t){console.log(e.task)}))}),[]),Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsxs)("div",{className:"navbar-profile-top",children:[Object(n.jsx)(b.b,{className:"align-left",onClick:function(){return s.apply(this,arguments)},children:Object(n.jsx)(A.c,{title:a.email,color:"red",size:"1.5em"})}),Object(n.jsx)("h2",{children:c.data.name}),Object(n.jsx)("p",{children:"History:"})]}),Object(n.jsx)("div",{className:"navbar-placeholder"}),Object(n.jsx)("ul",{className:"history-list text-left",children:c.data.history.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsxs)("div",{className:"flex-center-start",children:[Object(n.jsx)("div",{children:Object(n.jsx)(A.f,{size:"2em"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:e.datetime}),Object(n.jsx)("p",{children:e.email}),Object(n.jsx)("p",{children:e.task})]})]})},t)}))})]})})}function G(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),c=t[0],a=(t[1],g().currentUser,C().userTasks);return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)(F,{}),c&&Object(n.jsx)("h1",{children:c}),Object(n.jsx)("p",{children:"Assigned Task:"}),Object(n.jsx)("ul",{className:"task-listing",children:a.map((function(e,t){return e.map((function(e,t){return Object(n.jsxs)("li",{className:"task-list",children:[Object(n.jsx)("button",{children:"done"}),Object(n.jsx)("p",{children:e.data.name})]},t)}))}))}),Object(n.jsx)(U,{})]})})}function Q(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),a=g(),s=a.currentUser,o=a.updatePassword,i=a.updateEmail,p=a.logout,h=Object(r.useState)(""),O=Object(j.a)(h,2),f=O[0],x=O[1],m=Object(r.useState)(!1),v=Object(j.a)(m,2),w=v[0],y=v[1],k=Object(d.g)(),P=Object(r.useContext)(B).setPreset;function N(){return(N=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P("moveToRightFromLeft");case 3:k.push("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function S(){return(S=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(""),e.prev=1,e.next=4,p();case 4:k.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),x("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsxs)("div",{className:"navbar-profile-top",children:[Object(n.jsx)("div",{className:"align-placeholder",children:Object(n.jsx)(b.b,{className:"align-left",onClick:function(){return N.apply(this,arguments)},children:Object(n.jsx)(A.c,{title:s.email,color:"red",size:"1.5em"})})}),Object(n.jsx)("h2",{children:"Busybag"}),Object(n.jsx)("p",{children:"Keep track and do all"}),Object(n.jsx)("strong",{children:"Email:"}),s.email]}),Object(n.jsx)("div",{className:"navbar-placeholder"}),Object(n.jsx)("button",{onClick:function(){return S.apply(this,arguments)},children:"Logout"}),Object(n.jsx)("h2",{children:"---"}),Object(n.jsx)("h2",{children:"Update"}),Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),t.current.value!==c.current.value)return x("Passwords do not match");var r=[];y(!0),x(""),e.current.value!==s.email&&r.push(i(e.current.value)),t.current.value&&r.push(o(t.current.value)),Promise.all(r).then((function(){k.push("/")})).catch((function(e){x("Failed to update account\n"+e),console.log(e)})).finally((function(){y(!1)}))},children:[Object(n.jsx)("input",{type:"email",placeholder:"Email",ref:e,defaultValue:s.email}),Object(n.jsx)("input",Object(z.a)({type:"password",placeholder:"Password",ref:t},"placeholder","Leave blank to keep the same")),Object(n.jsx)("input",Object(z.a)({type:"password",placeholder:"Password Confirm",ref:c},"placeholder","Leave blank to keep the same")),f&&Object(n.jsx)("h1",{children:f}),Object(n.jsx)("button",{type:"submit",className:"signin___button",disabled:w,children:" Save "})]})})]})})}function V(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=g().login,a=Object(r.useState)(""),s=Object(j.a)(a,2),o=s[0],i=s[1],p=Object(r.useState)(!1),O=Object(j.a)(p,2),f=O[0],x=O[1],m=Object(d.g)();function v(){return(v=Object(u.a)(l.a.mark((function n(r){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,i(""),x(!0),n.next=6,c(e.current.value,t.current.value);case 6:m.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),i("Failed to login via Acccount");case 12:x(!0);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h2",{children:"Busybag"}),Object(n.jsx)(h,{}),Object(n.jsx)("p",{children:"Keep track and do all"}),Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(n.jsx)("input",{type:"email",placeholder:"Email",ref:e}),Object(n.jsx)("input",{type:"password",placeholder:"Password",ref:t}),o&&Object(n.jsx)("h1",{children:o}),Object(n.jsx)(b.b,{to:"/forgot-password",className:"text-right",children:"Forgot Password?"}),Object(n.jsx)("button",{type:"submit",className:"signin___button",disabled:f,children:" Login "})]})}),Object(n.jsxs)("div",{children:["Need an account? ",Object(n.jsx)(b.b,{to:"/signup",children:"Sign Up"})]})]})})}var $=c(20),q=c(29);function X(e){var t=e.component,c=Object(q.a)(e,["component"]),r=g().currentUser;return Object(n.jsx)(d.b,Object($.a)(Object($.a)({},c),{},{render:function(e){return r?Object(n.jsx)(t,Object($.a)({},e)):Object(n.jsx)(d.a,{to:"/login"})}}))}function Z(){var e=Object(r.useRef)(),t=g().resetPassword,c=Object(r.useState)(""),a=Object(j.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(!1),d=Object(j.a)(i,2),p=d[0],O=d[1],f=Object(r.useState)(""),x=Object(j.a)(f,2),m=x[0],v=x[1];function w(){return(w=Object(u.a)(l.a.mark((function c(n){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,v(""),o(""),O(!0),c.next=7,t(e.current.value);case 7:v("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),o("Failed to reset Password");case 13:O(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h2",{children:"Busybag"}),Object(n.jsx)(h,{}),Object(n.jsx)("p",{children:"Keep track and do all"}),Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("form",{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(n.jsx)("input",{type:"email",placeholder:"Email",ref:e}),s&&Object(n.jsx)("h1",{children:s}),m&&Object(n.jsx)("h1",{children:m}),Object(n.jsx)("button",{type:"submit",className:"signin___button",disabled:p,children:" Reset Password "})]})}),Object(n.jsxs)("div",{children:["Back to Login? ",Object(n.jsx)(b.b,{to:"/login",children:"Login"})]}),Object(n.jsxs)("div",{children:["Need an account? ",Object(n.jsx)(b.b,{to:"/signup",children:"Sign Up"})]})]})})}var ee=c(45);var te=function(){var e=Object(r.useContext)(B),t=e.preset,c=e.enterAnimation,a=e.exitAnimation;return Object(n.jsx)(b.a,{children:Object(n.jsx)(w,{children:Object(n.jsx)(R,{children:Object(n.jsx)(N,{children:Object(n.jsx)(T,{children:Object(n.jsx)(d.b,{render:function(e){var r=e.location;return Object(n.jsx)(ee.a,{preset:t,transitionKey:r.pathname,enterAnimation:c,exitAnimation:a,children:Object(n.jsxs)(d.d,{location:r,children:[Object(n.jsx)(X,{exact:!0,path:"/",component:_}),Object(n.jsx)(X,{path:"/update-profile",component:Q}),Object(n.jsx)(X,{path:"/task-board",component:G}),Object(n.jsx)(X,{path:"/create-project",component:W}),Object(n.jsx)(X,{path:"/modify-project",component:I}),Object(n.jsx)(X,{path:"/create-task",component:H}),Object(n.jsx)(X,{path:"/project-overview",component:J}),Object(n.jsx)(X,{path:"/history-view",component:Y}),Object(n.jsx)(d.b,{path:"/signup",component:y}),Object(n.jsx)(d.b,{path:"/login",component:V}),Object(n.jsx)(d.b,{path:"/forgot-password",component:Z})]})})}})})})})})})},ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var re=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};o.a.render(Object(n.jsx)(L,{children:Object(n.jsx)(te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/busybag",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/busybag","/service-worker.js");ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ne(t,e)}))}}(),re()}},[[58,1,2]]]);
//# sourceMappingURL=main.53d5afe4.chunk.js.map