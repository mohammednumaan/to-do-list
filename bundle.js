(()=>{"use strict";function t(){localStorage.setItem("project",JSON.stringify(d))}function e(){let t=localStorage.getItem("project"),e=JSON.parse(t)||[];return d=e,d}class n{constructor(t){this.name=t,this.todos=[]}addTask(e){this.todos.push(e),t()}removeTask(e){this.todos=this.todos.filter((t=>t.title!==e)),t()}}new n("DEFAULT");let d=[];class o{constructor(t,e,n,d,o){this.title=t,this.desc=e,this.date=n,this.priority=d,this.project=o}}const i=document.querySelector(".sidebar-container"),l=document.querySelector(".main-screen-container"),a=(document.querySelector(".container"),document.querySelector(".add-project"));function c(e){let a;d.includes(e)?a=e:(a=new n(e),d.push(a)),console.log(d);const c=document.createElement("div");c.classList.add("project-div");const s=document.createElement("h2");s.classList.add("project-name"),s.id=d.indexOf(a);const r=document.createElement("button");r.classList.add("button-add"),r.setAttribute("type","button");const p=document.createElement("div");p.classList.add("new-div"),l.appendChild(c),p.appendChild(r),c.appendChild(s),c.appendChild(p),s.innerText=a.name,r.textContent="ADD TASK +",c.id=s.id,c.style.display="none",function(t,e,n){const d=document.createElement("div"),o=document.createElement("h2");d.appendChild(o),i.appendChild(d),o.classList.add("project-title"),o.classList.add("project-title-hover"),o.innerText=t.name,d.appendChild(o),i.appendChild(d),o.addEventListener("click",(()=>{!function(t,e){t=Array.from(document.querySelectorAll(".project-div"));for(let n=0;n<t.length;n++)console.log(e.id),t[n].id===e.id?t[n].style.display="block":t[n].style.display="none"}(e,n)}))}(a,c,s),r.addEventListener("click",(()=>{!function(e,n){const i=document.createElement("form");i.classList.add("todo-form");let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("id","new-task");const c=document.createElement("label");c.setAttribute("for","new-task"),c.textContent="Title Of Your Task";let s=document.createElement("textarea");a.setAttribute("id","new-desc"),a.required=!0;const r=document.createElement("label");r.setAttribute("for","new-desc"),r.textContent="Description Of Your Task";let p=document.createElement("input");p.setAttribute("type","date"),p.setAttribute("id","task-date"),a.required=!0;const u=document.createElement("label");u.textContent="DUE-DATE Of Your Task",u.setAttribute("for","task-date");let m=document.createElement("select");m.setAttribute("id","priority"),a.required=!0;const C=document.createElement("label");C.setAttribute("for","priority"),C.textContent="Priority Of Your Task";const h=document.createElement("option");h.setAttribute("name","Low Priority"),h.textContent="Low",m.appendChild(h);const b=document.createElement("option");b.setAttribute("name","Medium Priority"),b.textContent="Medium",m.appendChild(b);const E=document.createElement("option");E.setAttribute("name","High Priority"),E.textContent="High",m.appendChild(E);const x=document.createElement("button");x.setAttribute("type","button"),x.classList.add("add"),x.textContent="ADD +",i.appendChild(c),i.appendChild(a),i.appendChild(r),i.appendChild(s),i.appendChild(u),i.appendChild(p),i.appendChild(C),i.appendChild(m),i.appendChild(x),l.appendChild(i),x.addEventListener("click",(()=>{!function(e,n,i,l,a,c){let s=new o(n.value,i.value,l.value,a.value,e.name);e.todos.push(s),console.log(d),t();const r=document.createElement("div");r.classList.add("task-div");const p=document.createElement("ul");r.appendChild(p);const u=document.createElement("li");p.appendChild(u);const m=document.createElement("h2");m.textContent=s.title,u.appendChild(m);const C=document.createElement("p");C.textContent=`${s.desc}`,r.appendChild(C);const h=document.createElement("p");h.textContent=`${s.date}`,r.appendChild(h);const b=document.createElement("p");b.textContent=`${s.priority}`,r.appendChild(b);const E=document.createElement("button");E.setAttribute("type","button"),E.classList.add("delete-button"),E.textContent="Delete This Task",r.appendChild(E);const x=document.createElement("button");x.setAttribute("type","button"),x.classList.add("edit-button"),x.textContent="Edit This Task",x.classList.add("edit-task-button"),r.appendChild(x),c.appendChild(r);const y=document.createElement("button");y.setAttribute("type","button"),y.classList.add("complete-button"),y.textContent="Completed!",r.appendChild(y),E.addEventListener("click",(n=>{!function(t,e,n,o){e.removeTask(o.title),n.removeChild(t.target.parentElement),console.log(d)}(n,e,c,s),t()})),x.addEventListener("click",(()=>{!function(e,n,i,l,a,c,s,r,p,u,m,C){e.innerHTML="";let h=document.createElement("form");h.classList.add("edit-form"),e.appendChild(h);let b=document.createElement("label");b.textContent="Title",b.setAttribute("for","editTitle"),h.appendChild(b);let E=document.createElement("input");E.setAttribute("type","text"),E.setAttribute("id","editLabel"),E.value=n.textContent,h.appendChild(E);let x=document.createElement("label");x.textContent="Description",x.setAttribute("for","editDesc"),h.appendChild(x);let y=document.createElement("textarea");y.textContent=i.textContent,h.appendChild(y);let A=document.createElement("label");A.textContent="Due-Date",A.setAttribute("for","editDate"),h.appendChild(A);let f=document.createElement("input");f.setAttribute("type","date"),f.value=l.textContent,h.appendChild(f);let v=document.createElement("label");v.textContent="Priority",v.setAttribute("for","editPrior"),h.appendChild(v);let L=document.createElement("select"),g=document.createElement("option");g.setAttribute("name","Low"),g.textContent="Low",L.appendChild(g);let k=document.createElement("option");k.setAttribute("name","Medium"),k.textContent="Medium",L.appendChild(k);let T=document.createElement("option");T.setAttribute("name","High Priority"),T.textContent="High",L.appendChild(T),L.value=a.textContent,h.appendChild(L);let w=document.createElement("button");w.textContent="Update Task",w.type="button",h.appendChild(w),w.addEventListener("click",(()=>{h.style.display="none",n.textContent=E.value,c.appendChild(n),s.appendChild(c),e.appendChild(s),i.textContent=y.value,e.appendChild(i),l.textContent=f.value,e.appendChild(l),a.textContent=L.value,e.appendChild(a),e.appendChild(r),e.appendChild(p),e.appendChild(u),function(t,e,n,i,l,a){let c=new o(t.value,e.value,n.value,i.value,l.project),s=l,r=a.todos.indexOf(s);a.todos.splice(r,1,c),console.log(d)}(E,y,f,L,m,C),t()}))}(r,m,C,h,b,u,p,E,x,y,s,e)})),y.addEventListener("click",(()=>{!function(t,e,n,d){t.classList.toggle("line"),e.classList.toggle("line"),n.classList.toggle("line"),d.classList.toggle("line")}(m,C,h,b),m.classList.contains("line")?(y.textContent="Not Completed!",y.style.backgroundColor="#db3a34"):(y.textContent="Completed!",y.style.backgroundColor="green"),t()}))}(e,a,s,p,m,n),i.reset(),i.style.display="none"}))}(a,c)})),t()}e(),window.addEventListener("load",(()=>{e()})),console.log(e()),function(){for(let t=0;t<d.length;t++)c(d[t])}(),a.addEventListener("click",(()=>{!function(){const t=document.createElement("form");t.classList.add("project-form");const e=document.createElement("label");e.setAttribute("for","new-project");const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","new-project");const d=document.createElement("button");d.setAttribute("type","button"),d.textContent="CREATE PROJECT",e.textContent="TITLE",t.appendChild(e),t.appendChild(n),t.appendChild(d),i.appendChild(t),d.addEventListener("click",(()=>{c(n.value),t.reset(),t.style.display="none"}))}()}))})();