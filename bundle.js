(()=>{"use strict";class t{constructor(t){this.name=t,this.todos=[]}addTask(t){this.todos.push(t)}removeTask(t){this.todos=this.todos.filter((e=>e.title!==t))}}let e=new t("DEFAULT"),n=[];class d{constructor(t,e,n,d,i){this.title=t,this.desc=e,this.date=n,this.priority=d,this.project=i}}function i(t,e,d,i){e.removeTask(i.title),d.removeChild(t.target.parentElement),console.log(n)}function o(t,e,i,o,l,a){let c=new d(t.value,e.value,i.value,o.value,l.project),s=l,r=a.todos.indexOf(s);a.todos.splice(r,1,c),console.log(n)}function l(t,e){t=Array.from(document.querySelectorAll(".project-div"));for(let n=0;n<t.length;n++)t[n].id==e.textContent?t[n].style.display="block":t[n].style.display="none"}const a=document.querySelector(".sidebar-container"),c=document.querySelector(".main-screen-container"),s=document.querySelector(".container");!function(){const t=document.createElement("div"),s=document.createElement("h2");s.classList.add("project-title"),s.classList.add("project-title-hover"),t.appendChild(s),a.appendChild(t);const r=e;n.push(r);const p=document.createElement("div");p.classList.add("project-div");const u=document.createElement("h2");u.classList.add("project-name");const m=document.createElement("button");m.classList.add("button-add"),m.setAttribute("type","button");const C=document.createElement("div");C.classList.add("new-div"),c.appendChild(p),C.appendChild(m),p.appendChild(u),p.appendChild(C),s.innerHTML=r.name,u.innerText=r.name,m.textContent="ADD TASK +",p.id=u.textContent,p.style.display="none",m.addEventListener("click",(function(){const t=document.createElement("form");t.classList.add("todo-form");let e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("id","new-task"),e.required=!0;const l=document.createElement("label");l.setAttribute("for","new-task"),l.textContent="Title Of Your Task";let a=document.createElement("textarea");e.setAttribute("id","new-desc"),e.required=!0;const s=document.createElement("label");s.setAttribute("for","new-desc"),s.textContent="Description Of Your Task";let u=document.createElement("input");u.setAttribute("type","date"),u.setAttribute("id","task-date"),e.required=!0;const m=document.createElement("label");m.textContent="DUE-DATE Of Your Task",m.setAttribute("for","task-date");let C=document.createElement("select");C.setAttribute("id","priority"),e.required=!0;const h=document.createElement("label");h.setAttribute("for","priority"),h.textContent="Priority Of Your Task";const b=document.createElement("option");b.setAttribute("name","Low Priority"),b.textContent="Low",C.appendChild(b);const E=document.createElement("option");E.setAttribute("name","Medium Priority"),E.textContent="Medium",C.appendChild(E);const x=document.createElement("option");x.setAttribute("name","High Priority"),x.textContent="High",C.appendChild(x);const A=document.createElement("button");A.setAttribute("type","button"),A.classList.add("add"),A.textContent="ADD +",t.appendChild(l),t.appendChild(e),t.appendChild(s),t.appendChild(a),t.appendChild(m),t.appendChild(u),t.appendChild(h),t.appendChild(C),t.appendChild(A),c.appendChild(t),A.addEventListener("click",(()=>{(function(){let t=new d(e.value,a.value,u.value,C.value,r.name);r.todos.push(t),console.log(n);const l=document.createElement("div");l.classList.add("task-div");const c=document.createElement("ul");l.appendChild(c);const s=document.createElement("li");c.appendChild(s);const m=document.createElement("h2");m.textContent=t.title,s.appendChild(m);const h=document.createElement("p");h.textContent=`${t.desc}`,l.appendChild(h);const b=document.createElement("p");b.textContent=`${t.date}`,l.appendChild(b);const E=document.createElement("p");E.textContent=`${t.priority}`,l.appendChild(E);const x=document.createElement("button");x.disabled=!1,x.setAttribute("type","button"),x.classList.add("delete-button"),x.textContent="Delete This Task",l.appendChild(x);const A=document.createElement("button");A.disabled=!1,A.setAttribute("type","button"),A.classList.add("edit-button"),A.textContent="Edit This Task",A.classList.add("edit-task-button"),l.appendChild(A);const v=document.createElement("button");v.setAttribute("type","button"),v.classList.add("complete-button"),v.textContent="Completed!",l.appendChild(v),p.appendChild(l),x.addEventListener("click",(e=>{i(e,r,p,t)})),A.addEventListener("click",(e=>{e.target.parentElement,function(){l.innerHTML="";let e=document.createElement("form");e.classList.add("edit-form"),l.appendChild(e);let n=document.createElement("label");n.textContent="Title",n.setAttribute("for","editTitle"),e.appendChild(n);let d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("id","editLabel"),d.value=m.textContent,e.appendChild(d);let i=document.createElement("label");i.textContent="Description",i.setAttribute("for","editDesc"),e.appendChild(i);let a=document.createElement("textarea");a.textContent=h.textContent,e.appendChild(a);let p=document.createElement("label");p.textContent="Due-Date",p.setAttribute("for","editDate"),e.appendChild(p);let u=document.createElement("input");u.setAttribute("type","date"),u.value=b.textContent,e.appendChild(u);let C=document.createElement("label");C.textContent="Priority",C.setAttribute("for","editPrior"),e.appendChild(C);let L=document.createElement("select"),y=document.createElement("option");y.setAttribute("name","Low"),y.textContent="Low",L.appendChild(y);let f=document.createElement("option");f.setAttribute("name","Medium"),f.textContent="Medium",L.appendChild(f);let k=document.createElement("option");k.setAttribute("name","High Priority"),k.textContent="High",L.appendChild(k),L.value=E.textContent,e.appendChild(L);let T=document.createElement("button");T.textContent="Update Task",T.type="button",e.appendChild(T),T.addEventListener("click",(()=>{e.style.display="none",m.textContent=d.value,s.appendChild(m),c.appendChild(s),l.appendChild(c),h.textContent=a.value,l.appendChild(h),b.textContent=u.value,l.appendChild(b),E.textContent=L.value,l.appendChild(E),l.appendChild(x),l.appendChild(A),l.appendChild(v),o(d,a,u,L,t,r)}))}()})),v.addEventListener("click",(()=>{var t,e,n;t=h,e=b,n=E,m.classList.toggle("line"),t.classList.toggle("line"),e.classList.toggle("line"),n.classList.toggle("line")}))})(),t.reset(),c.removeChild(t)}))})),s.addEventListener("click",(()=>{l(p,u)}))}(),document.querySelector(".add-project").addEventListener("click",(function(){const e=document.createElement("form");e.classList.add("project-form");const r=document.createElement("label");r.setAttribute("for","new-project");const p=document.createElement("input");p.setAttribute("type","text"),p.setAttribute("id","new-project");const u=document.createElement("button");u.setAttribute("type","button"),u.textContent="CREATE PROJECT",r.textContent="TITLE",e.appendChild(r),e.appendChild(p),e.appendChild(u),c.appendChild(e);const m=document.createElement("div"),C=document.createElement("h2");C.classList.add("project-title"),C.classList.add("project-title-hover"),m.appendChild(C),a.appendChild(m),u.addEventListener("click",(function(){const a=new t(p.value,!1);n.push(a),e.reset(),e.style.display="none";const r=document.createElement("div");r.classList.add("project-div");const u=document.createElement("h2");u.classList.add("project-name");const m=document.createElement("button");m.classList.add("button-add"),m.setAttribute("type","button");const h=document.createElement("div");h.classList.add("new-div"),c.appendChild(r),h.appendChild(m),r.appendChild(u),r.appendChild(h),C.innerHTML=a.name,u.innerText=a.name,m.textContent="ADD TASK +",r.id=u.textContent,r.style.display="none",m.addEventListener("click",(function(){const t=document.createElement("form");t.classList.add("todo-form");let e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("id","new-task"),e.required=!0;const l=document.createElement("label");l.setAttribute("for","new-task"),l.textContent="Title Of Your Task";let c=document.createElement("textarea");e.setAttribute("id","new-desc"),e.required=!0;const p=document.createElement("label");p.setAttribute("for","new-desc"),p.textContent="Description Of Your Task";let u=document.createElement("input");u.setAttribute("type","date"),u.setAttribute("id","task-date"),e.required=!0;const m=document.createElement("label");m.textContent="DUE-DATE Of Your Task",m.setAttribute("for","task-date");let C=document.createElement("select");C.setAttribute("id","priority"),e.required=!0;const h=document.createElement("label");h.setAttribute("for","priority"),h.textContent="Priority Of Your Task";const b=document.createElement("option");b.setAttribute("name","Low Priority"),b.textContent="Low",C.appendChild(b);const E=document.createElement("option");E.setAttribute("name","Medium Priority"),E.textContent="Medium",C.appendChild(E);const x=document.createElement("option");x.setAttribute("name","High Priority"),x.textContent="High",C.appendChild(x);const A=document.createElement("button");A.setAttribute("type","button"),A.classList.add("add"),A.textContent="ADD +",t.appendChild(l),t.appendChild(e),t.appendChild(p),t.appendChild(c),t.appendChild(m),t.appendChild(u),t.appendChild(h),t.appendChild(C),t.appendChild(A),s.appendChild(t),A.addEventListener("click",(()=>{!function(){let t=new d(e.value,c.value,u.value,C.value,a.name);a.todos.push(t),console.log(n);const l=document.createElement("div");l.classList.add("task-div");const s=document.createElement("ul");l.appendChild(s);const p=document.createElement("li");s.appendChild(p);const m=document.createElement("h2");m.textContent=t.title,p.appendChild(m);const h=document.createElement("p");h.textContent=`${t.desc}`,l.appendChild(h);const b=document.createElement("p");b.textContent=`${t.date}`,l.appendChild(b);const E=document.createElement("p");E.textContent=`${t.priority}`,l.appendChild(E);const x=document.createElement("button");x.setAttribute("type","button"),x.classList.add("delete-button"),x.textContent="Delete This Task",l.appendChild(x);const A=document.createElement("button");A.setAttribute("type","button"),A.classList.add("edit-button"),A.textContent="Edit This Task",A.classList.add("edit-task-button"),l.appendChild(A),r.appendChild(l);const v=document.createElement("button");v.setAttribute("type","button"),v.classList.add("complete-button"),v.textContent="Completed!",l.appendChild(v),x.addEventListener("click",(e=>{i(e,a,r,t)})),A.addEventListener("click",(function(){l.innerHTML="";let e=document.createElement("form");e.classList.add("edit-form"),l.appendChild(e);let n=document.createElement("label");n.textContent="Title",n.setAttribute("for","editTitle"),e.appendChild(n);let d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("id","editLabel"),d.value=m.textContent,e.appendChild(d);let i=document.createElement("label");i.textContent="Description",i.setAttribute("for","editDesc"),e.appendChild(i);let c=document.createElement("textarea");c.textContent=h.textContent,e.appendChild(c);let r=document.createElement("label");r.textContent="Due-Date",r.setAttribute("for","editDate"),e.appendChild(r);let u=document.createElement("input");u.setAttribute("type","date"),u.value=b.textContent,e.appendChild(u);let C=document.createElement("label");C.textContent="Priority",C.setAttribute("for","editPrior"),e.appendChild(C);let L=document.createElement("select"),y=document.createElement("option");y.setAttribute("name","Low"),y.textContent="Low",L.appendChild(y);let f=document.createElement("option");f.setAttribute("name","Medium"),f.textContent="Medium",L.appendChild(f);let k=document.createElement("option");k.setAttribute("name","High Priority"),k.textContent="High",L.appendChild(k),L.value=E.textContent,e.appendChild(L);let T=document.createElement("button");T.textContent="Update Task",T.type="button",e.appendChild(T),T.addEventListener("click",(()=>{e.style.display="none",m.textContent=d.value,p.appendChild(m),s.appendChild(p),l.appendChild(s),h.textContent=c.value,l.appendChild(h),b.textContent=u.value,l.appendChild(b),E.textContent=L.value,l.appendChild(E),l.appendChild(x),l.appendChild(A),l.appendChild(v),o(d,c,u,L,t,a)}))})),v.addEventListener("click",(()=>{completeTasks(m,h,b,E)}))}(),t.reset(),t.style.display="none"}))})),C.addEventListener("click",(()=>{l(r,u)}))}))}))})();