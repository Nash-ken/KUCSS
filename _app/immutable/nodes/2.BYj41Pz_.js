import{a as H,t as J}from"../chunks/disclose-version.CefWcdMf.js";import"../chunks/legacy.DGbl2F9G.js";import{w as Q,x as w,y as W,z as Z,A as P,H as $,B as L,C as S,D as M,E as b,I,F as X,G as q,J as j,K as U,L as ee,M as re,N as te,O as ae,P as se,Q as ne,R as ie,o as fe,S as K,T as le,U as oe,V as ue,W as ve,X as O,Y as de,p as ce,s as R,i as pe,j as _e,q as he,k,Z as xe,_ as me,l as T,t as ge,g as V}from"../chunks/runtime.Ch60lfLx.js";import{s as ye}from"../chunks/render.CQELMEiE.js";import{i as we}from"../chunks/lifecycle.CMpGGKIJ.js";import{o as Ee}from"../chunks/index-client.BHG2N1lo.js";import{b as be}from"../chunks/paths.CkG-_6SX.js";function Ae(a,e){return e}function ke(a,e,r,n){for(var i=[],o=e.length,u=0;u<o;u++)re(e[u].e,i,!0);var c=o>0&&i.length===0&&r!==null;if(c){var v=r.parentNode;te(v),v.append(r),n.clear(),g(a,e[0].prev,e[o-1].next)}ae(i,()=>{for(var p=0;p<o;p++){var t=e[p];c||(n.delete(t.k),g(a,t.prev,t.next)),se(t.e,!c)}})}function Te(a,e,r,n,i,o=null){var u=a,c={flags:e,items:new Map,first:null};w&&W();var v=null,p=!1;Q(()=>{var t=r(),d=Z(t)?t:t==null?[]:P(t),s=d.length;if(p&&s===0)return;p=s===0;let f=!1;if(w){var h=u.data===$;h!==(s===0)&&(u=L(),S(u),M(!1),f=!0)}if(w){for(var y=null,x,l=0;l<s;l++){if(b.nodeType===8&&b.data===ne){u=b,f=!0,M(!1);break}var _=d[l],A=n(_,l);x=z(b,c,y,null,_,A,l,i,e),c.items.set(A,x),y=x}s>0&&S(L())}if(!w){var E=ie;Ie(d,c,u,i,e,(E.f&I)!==0,n)}o!==null&&(s===0?v?X(v):v=q(()=>o(u)):v!==null&&j(v,()=>{v=null})),f&&M(!0),r()}),w&&(u=b)}function Ie(a,e,r,n,i,o,u){var c=a.length,v=e.items,p=e.first,t=p,d,s=null,f=[],h=[],y,x,l,_;for(_=0;_<c;_+=1){if(y=a[_],x=u(y,_),l=v.get(x),l===void 0){var A=t?t.e.nodes_start:r;s=z(A,e,s,s===null?e.first:s.next,y,x,_,n,i),v.set(x,s),f=[],h=[],t=s.next;continue}if(Ne(l,y,_),l.e.f&I&&X(l.e),l!==t){if(d!==void 0&&d.has(l)){if(f.length<h.length){var E=h[0],m;s=E.prev;var D=f[0],N=f[f.length-1];for(m=0;m<f.length;m+=1)Y(f[m],E,r);for(m=0;m<h.length;m+=1)d.delete(h[m]);g(e,D.prev,N.next),g(e,s,D),g(e,N,E),t=E,s=N,_-=1,f=[],h=[]}else d.delete(l),Y(l,t,r),g(e,l.prev,l.next),g(e,l,s===null?e.first:s.next),g(e,s,l),s=l;continue}for(f=[],h=[];t!==null&&t.k!==x;)(o||!(t.e.f&I))&&(d??(d=new Set)).add(t),h.push(t),t=t.next;if(t===null)continue;l=t}f.push(l),s=l,t=l.next}if(t!==null||d!==void 0){for(var C=d===void 0?[]:P(d);t!==null;)(o||!(t.e.f&I))&&C.push(t),t=t.next;var F=C.length;if(F>0){var G=null;ke(e,C,G,v)}}U.first=e.first&&e.first.e,U.last=s&&s.e}function Ne(a,e,r,n){ee(a.v,e),a.i=r}function z(a,e,r,n,i,o,u,c,v){var p=(v&oe)!==0,t=(v&ue)===0,d=p?t?fe(i):K(i):i,s=v&le?K(u):u,f={i:s,v:d,k:o,a:null,e:null,prev:r,next:n};try{return f.e=q(()=>c(a,d,s),w),f.e.prev=r&&r.e,f.e.next=n&&n.e,r===null?e.first=f:(r.next=f,r.e.next=f.e),n!==null&&(n.prev=f,n.e.prev=f.e),f}finally{}}function Y(a,e,r){for(var n=a.next?a.next.e.nodes_start:r,i=e?e.e.nodes_start:r,o=a.e.nodes_start;o!==n;){var u=ve(o);i.before(o),o=u}}function g(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Ce(a,e,r,n){var i=a.__attributes??(a.__attributes={});w&&(i[e]=a.getAttribute(e),a.nodeName==="LINK")||i[e]!==(i[e]=r)&&(r==null?a.removeAttribute(e):typeof r!="string"&&Me(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var B=new Map;function Me(a){var e=B.get(a.nodeName);if(e)return e;B.set(a.nodeName,e=[]);for(var r,n=O(a),i=Element.prototype;i!==n;){r=de(n);for(var o in r)r[o].set&&e.push(o);n=O(n)}return e}var Re=J("<p> </p>"),De=J(`<h1 class="desktop:text-6xl text-5xl font-bold mt-48">Let's build from here</h1> <p class="mt-3 font-medium text-xl">Connecting Cyber Security Enthusiasts and Professionals</p> <div class="flex flex-wrap mt-6 space-y-4 desktop:space-y-0"><a class="font-medium px-6 py-3 rounded-full border-border border w-full desktop:text-start text-center desktop:w-fit hover:ring ring-border">Discord</a> <a href="" class="font-medium px-6 py-3 text-center w-full desktop:w-fit hover:underline">Kingston University &rightarrow;</a></div> <div class="flex w-full mt-12"><div class="rounded-xl border border-border p-6 w-full desktop:max-w-96 flex flex-col"><h3 class="text-2xl font-medium">Upcoming Events</h3> <p class="mt-4 text-text-muted">Join us for our Events covering all things security.</p> <!></div></div>`,1);function Ye(a,e){ce(e,!1);let r=xe([]);Ee(async()=>{const p=await fetch("/events.json");he(r,await p.json())}),we();var n=De(),i=R(pe(n),4),o=k(i);Ce(o,"href",be),me(2),T(i);var u=R(i,2),c=k(u),v=R(k(c),4);Te(v,1,()=>V(r),Ae,(p,t)=>{var d=Re(),s=k(d,!0);T(d),ge(()=>ye(s,V(t).name)),H(p,d)}),T(c),T(u),H(a,n),_e()}export{Ye as component};
