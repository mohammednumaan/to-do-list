(()=>{"use strict";function t(){localStorage.setItem("project",JSON.stringify(n))}class e{constructor(t){this.name=t,this.todos=[]}addTask(e){this.todos.push(e),t()}removeTask(e){this.todos=this.todos.filter((t=>t.title!==e)),t()}}new e("DEFAULT");let n=[];class o{constructor(t,e,n,o,d){this.title=t,this.desc=e,this.date=n,this.priority=o,this.project=d}}const d=document.querySelector(".sidebar-container"),l=document.querySelector(".main-screen-container"),i=(document.querySelector(".container"),document.querySelector(".add-project"));function a(o){let i;n.includes(o)?(console.log("if"),i=new e(o.name)):(console.log("else"),i=new e(o.value),n.push(i)),t();const a=document.createElement("div");a.classList.add("project-div");const s=document.createElement("h2");s.classList.add("project-name"),s.id=n.indexOf(o);const r=document.createElement("button");r.classList.add("button-add"),r.setAttribute("type","button");const p=document.createElement("div");p.classList.add("new-div"),l.appendChild(a),p.appendChild(r),a.appendChild(s),a.appendChild(p),s.innerText=i.name,r.textContent="ADD TASK +",a.id=s.id,a.style.display="none",function(t,e,n){const o=document.createElement("div"),l=document.createElement("h2");o.appendChild(l),d.appendChild(o),l.classList.add("project-title"),l.classList.add("project-title-hover"),l.innerText=t.name,o.appendChild(l),d.appendChild(o),l.addEventListener("click",(()=>{!function(t,e){t=Array.from(document.querySelectorAll(".project-div"));for(let n=0;n<t.length;n++)console.log(e.id),t[n].id===e.id?t[n].style.display="block":t[n].style.display="none"}(e,n)}))}(i,a,s),r.addEventListener("click",(()=>{i.name==o.name?(console.log("if again"),c(o,a)):(console.log("else again"),c(i,a))}))}function c(e,d){const i=document.createElement("form");i.classList.add("todo-form");let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("id","new-task");const c=document.createElement("label");c.setAttribute("for","new-task"),c.textContent="Title Of Your Task";let s=document.createElement("textarea");a.setAttribute("id","new-desc"),a.required=!0;const r=document.createElement("label");r.setAttribute("for","new-desc"),r.textContent="Description Of Your Task";let p=document.createElement("input");p.setAttribute("type","date"),p.setAttribute("id","task-date"),a.required=!0;const u=document.createElement("label");u.textContent="DUE-DATE Of Your Task",u.setAttribute("for","task-date");let m=document.createElement("select");m.setAttribute("id","priority"),a.required=!0;const C=document.createElement("label");C.setAttribute("for","priority"),C.textContent="Priority Of Your Task";const h=document.createElement("option");h.setAttribute("name","Low Priority"),h.textContent="Low",m.appendChild(h);const b=document.createElement("option");b.setAttribute("name","Medium Priority"),b.textContent="Medium",m.appendChild(b);const E=document.createElement("option");E.setAttribute("name","High Priority"),E.textContent="High",m.appendChild(E);const x=document.createElement("button");x.setAttribute("type","button"),x.classList.add("add"),x.textContent="ADD +",i.appendChild(c),i.appendChild(a),i.appendChild(r),i.appendChild(s),i.appendChild(u),i.appendChild(p),i.appendChild(C),i.appendChild(m),i.appendChild(x),l.appendChild(i),x.addEventListener("click",(()=>{!function(e,d,l,i,a,c){let s;e.todos.length,s=new o(d.value,l.value,i.value,a.value,e.name),e.todos.push(s),t(),localStorage.setItem("project",JSON.stringify(n)),console.log(e);const r=document.createElement("div");r.classList.add("task-div");const p=document.createElement("ul");r.appendChild(p);const u=document.createElement("li");p.appendChild(u);const m=document.createElement("h2");m.textContent=s.title,u.appendChild(m);const C=document.createElement("p");C.textContent=`${s.desc}`,r.appendChild(C);const h=document.createElement("p");h.textContent=`${s.date}`,r.appendChild(h);const b=document.createElement("p");b.textContent=`${s.priority}`,r.appendChild(b);const E=document.createElement("button");E.setAttribute("type","button"),E.classList.add("delete-button"),E.textContent="Delete This Task",r.appendChild(E);const x=document.createElement("button");x.setAttribute("type","button"),x.classList.add("edit-button"),x.textContent="Edit This Task",x.classList.add("edit-task-button"),r.appendChild(x),c.appendChild(r);const y=document.createElement("button");y.setAttribute("type","button"),y.classList.add("complete-button"),y.textContent="Completed!",r.appendChild(y),t(),E.addEventListener("click",(t=>{!function(t,e,n,o){e.removeTask(o.title),n.removeChild(t.target.parentElement)}(t,e,c,s)})),x.addEventListener("click",(()=>{!function(e,d,l,i,a,c,s,r,p,u,m,C){e.innerHTML="";let h=document.createElement("form");h.classList.add("edit-form"),e.appendChild(h);let b=document.createElement("label");b.textContent="Title",b.setAttribute("for","editTitle"),h.appendChild(b);let E=document.createElement("input");E.setAttribute("type","text"),E.setAttribute("id","editLabel"),E.value=d.textContent,h.appendChild(E);let x=document.createElement("label");x.textContent="Description",x.setAttribute("for","editDesc"),h.appendChild(x);let y=document.createElement("textarea");y.textContent=l.textContent,h.appendChild(y);let f=document.createElement("label");f.textContent="Due-Date",f.setAttribute("for","editDate"),h.appendChild(f);let A=document.createElement("input");A.setAttribute("type","date"),A.value=i.textContent,h.appendChild(A);let v=document.createElement("label");v.textContent="Priority",v.setAttribute("for","editPrior"),h.appendChild(v);let L=document.createElement("select"),g=document.createElement("option");g.setAttribute("name","Low"),g.textContent="Low",L.appendChild(g);let k=document.createElement("option");k.setAttribute("name","Medium"),k.textContent="Medium",L.appendChild(k);let T=document.createElement("option");T.setAttribute("name","High Priority"),T.textContent="High",L.appendChild(T),L.value=a.textContent,h.appendChild(L);let w=document.createElement("button");w.textContent="Update Task",w.type="button",h.appendChild(w),w.addEventListener("click",(()=>{h.style.display="none",d.textContent=E.value,c.appendChild(d),s.appendChild(c),e.appendChild(s),l.textContent=y.value,e.appendChild(l),i.textContent=A.value,e.appendChild(i),a.textContent=L.value,e.appendChild(a),e.appendChild(r),e.appendChild(p),e.appendChild(u),function(t,e,d,l,i,a){let c=new o(t.value,e.value,d.value,l.value,i.project),s=i,r=a.todos.indexOf(s);a.todos.splice(r,1,c),console.log(n)}(E,y,A,L,m,C),t()}))}(r,m,C,h,b,u,p,E,x,y,s,e)})),y.addEventListener("click",(()=>{!function(t,e,n,o){t.classList.toggle("line"),e.classList.toggle("line"),n.classList.toggle("line"),o.classList.toggle("line")}(m,C,h,b),m.classList.contains("line")?(y.textContent="Not Completed!",y.style.backgroundColor="#db3a34"):(y.textContent="Completed!",y.style.backgroundColor="green"),t()}))}(e,a,s,p,m,d),i.reset(),i.style.display="none"}))}!function(){let t=JSON.parse(localStorage.getItem("project"))||[];console.log(t),n=t}(),window.onload=function(){for(let e=0;e<n.length;e++)a(n[e]),t()}(),i.addEventListener("click",(()=>{!function(){const t=document.createElement("form");t.classList.add("project-form");const e=document.createElement("label");e.setAttribute("for","new-project");const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","new-project");const o=document.createElement("button");o.setAttribute("type","button"),o.textContent="CREATE PROJECT",e.textContent="TITLE",t.appendChild(e),t.appendChild(n),t.appendChild(o),d.appendChild(t),o.addEventListener("click",(()=>{a(n),t.reset(),t.style.display="none"}))}()}))})();