import{a as D,t as Y}from"../chunks/disclose-version.Cr9YgoBy.js";import{T as G,S as b,I as W,y as Z,O as z,U as Q,V as H,G as O,F as M,J as E,W as I,X as P,R as X,Y as $,A as L,Z as j,_ as ee,N as re,$ as ae,a0 as te,K as se,z as ne,m as ie,a1 as U,a2 as le,a3 as oe,a4 as fe,D as ue,a5 as J,a6 as ve,p as de,l as R,i as ce,k as pe,o as T,a7 as _e,q as k,j as he,g as ge}from"../chunks/runtime.wjbO_kT-.js";import{s as xe}from"../chunks/render.C7Uovb0u.js";import{b as me}from"../chunks/paths.C8xmretp.js";function ye(t,e){return e}function be(t,e,r,s){for(var f=[],o=e.length,u=0;u<o;u++)ee(e[u].e,f,!0);var c=o>0&&f.length===0&&r!==null;if(c){var v=r.parentNode;re(v),v.append(r),s.clear(),m(t,e[0].prev,e[o-1].next)}ae(f,()=>{for(var p=0;p<o;p++){var a=e[p];c||(s.delete(a.k),m(t,a.prev,a.next)),te(a.e,!c)}})}function we(t,e,r,s,f,o=null){var u=t,c={flags:e,items:new Map,first:null};b&&W();var v=null,p=!1;G(()=>{var a=r(),d=Z(a)?a:a==null?[]:z(a),n=d.length;if(p&&n===0)return;p=n===0;let i=!1;if(b){var h=u.data===Q;h!==(n===0)&&(u=H(),O(u),M(!1),i=!0)}if(b){for(var y=null,g,l=0;l<n;l++){if(E.nodeType===8&&E.data===se){u=E,i=!0,M(!1);break}var _=d[l],A=s(_,l);g=q(E,c,y,null,_,A,l,f,e),c.items.set(A,g),y=g}n>0&&O(H())}if(!b){var w=ne;Ee(d,c,u,f,e,(w.f&I)!==0,s)}o!==null&&(n===0?v?P(v):v=X(()=>o(u)):v!==null&&$(v,()=>{v=null})),i&&M(!0),r()}),b&&(u=E)}function Ee(t,e,r,s,f,o,u){var c=t.length,v=e.items,p=e.first,a=p,d,n=null,i=[],h=[],y,g,l,_;for(_=0;_<c;_+=1){if(y=t[_],g=u(y,_),l=v.get(g),l===void 0){var A=a?a.e.nodes_start:r;n=q(A,e,n,n===null?e.first:n.next,y,g,_,s,f),v.set(g,n),i=[],h=[],a=n.next;continue}if(Ae(l,y,_),l.e.f&I&&P(l.e),l!==a){if(d!==void 0&&d.has(l)){if(i.length<h.length){var w=h[0],x;n=w.prev;var S=i[0],N=i[i.length-1];for(x=0;x<i.length;x+=1)K(i[x],w,r);for(x=0;x<h.length;x+=1)d.delete(h[x]);m(e,S.prev,N.next),m(e,n,S),m(e,N,w),a=w,n=N,_-=1,i=[],h=[]}else d.delete(l),K(l,a,r),m(e,l.prev,l.next),m(e,l,n===null?e.first:n.next),m(e,n,l),n=l;continue}for(i=[],h=[];a!==null&&a.k!==g;)(o||!(a.e.f&I))&&(d??(d=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;l=a}i.push(l),n=l,a=l.next}if(a!==null||d!==void 0){for(var C=d===void 0?[]:z(d);a!==null;)(o||!(a.e.f&I))&&C.push(a),a=a.next;var B=C.length;if(B>0){var F=null;be(e,C,F,v)}}L.first=e.first&&e.first.e,L.last=n&&n.e}function Ae(t,e,r,s){j(t.v,e),t.i=r}function q(t,e,r,s,f,o,u,c,v){var p=(v&oe)!==0,a=(v&fe)===0,d=p?a?ie(f):U(f):f,n=v&le?U(u):u,i={i:n,v:d,k:o,a:null,e:null,prev:r,next:s};try{return i.e=X(()=>c(t,d,n),b),i.e.prev=r&&r.e,i.e.next=s&&s.e,r===null?e.first=i:(r.next=i,r.e.next=i.e),s!==null&&(s.prev=i,s.e.prev=i.e),i}finally{}}function K(t,e,r){for(var s=t.next?t.next.e.nodes_start:r,f=e?e.e.nodes_start:r,o=t.e.nodes_start;o!==s;){var u=ue(o);f.before(o),o=u}}function m(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Te(t,e,r,s){var f=t.__attributes??(t.__attributes={});b&&(f[e]=t.getAttribute(e),t.nodeName==="LINK")||f[e]!==(f[e]=r)&&(r==null?t.removeAttribute(e):typeof r!="string"&&ke(t).includes(e)?t[e]=r:t.setAttribute(e,r))}var V=new Map;function ke(t){var e=V.get(t.nodeName);if(e)return e;V.set(t.nodeName,e=[]);for(var r,s=J(t),f=Element.prototype;f!==s;){r=ve(s);for(var o in r)r[o].set&&e.push(o);s=J(s)}return e}const Ie=async({fetch:t})=>{const r=await(await t("Json/events.json")).json();return console.log(r),{events:r}},He=Object.freeze(Object.defineProperty({__proto__:null,load:Ie},Symbol.toStringTag,{value:"Module"}));var Ne=Y("<p> </p>"),Ce=Y(`<h1 class="desktop:text-6xl text-5xl font-bold mt-48">Let's build from here</h1> <p class="mt-3 font-medium text-xl">Connecting Cyber Security Enthusiasts and Professionals</p> <div class="flex flex-wrap mt-6 space-y-4 desktop:space-y-0"><a class="font-medium px-6 py-3 rounded-full border-border border w-full desktop:text-start text-center desktop:w-fit hover:ring ring-border">Discord</a> <a href="" class="font-medium px-6 py-3 text-center w-full desktop:w-fit hover:underline">Kingston University &rightarrow;</a></div> <div class="flex w-full mt-12"><div class="rounded-xl border border-border p-6 w-full desktop:max-w-96 flex flex-col"><h3 class="text-2xl font-medium">Upcoming Events</h3> <p class="mt-4 text-text-muted">Join us for our Events covering all things security.</p> <!></div></div>`,1);function Oe(t,e){de(e,!0);var r=Ce(),s=R(ce(r),4),f=T(s);Te(f,"href",me),_e(2),k(s);var o=R(s,2),u=T(o),c=R(T(u),4);we(c,17,()=>e.data.events,ye,(v,p)=>{var a=Ne(),d=T(a,!0);k(a),he(()=>xe(d,ge(p).name)),D(v,a)}),k(u),k(o),D(t,r),pe()}export{Oe as component,He as universal};