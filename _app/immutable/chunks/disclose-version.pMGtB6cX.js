import{F as c,G as _,H as b,T as p,I as g,i as d,l as a,j as E,J as T,K as l,L as h,M as y,w,g as M,d as L}from"./runtime.k2v0yTst.js";function N(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function u(e,n){var r=b;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=n)}function A(e,n){var r=(n&p)!==0,t=(n&g)!==0,s,o=!e.startsWith("<!>");return()=>{if(d)return u(a,null),a;s===void 0&&(s=N(o?e:"<!>"+e),r||(s=_(s)));var i=t?document.importNode(s,!0):s.cloneNode(!0);if(r){var v=_(i),m=i.lastChild;u(v,m)}else u(i,i);return i}}function C(e=""){if(!d){var n=c(e+"");return u(n,n),n}var r=a;return r.nodeType!==3&&(r.before(r=c()),T(r)),u(r,r),r}function F(){if(d)return u(a,null),a;var e=document.createDocumentFragment(),n=document.createComment(""),r=c();return e.append(n,r),u(n,r),e}function O(e,n){if(d){b.nodes_end=a,E();return}e!==null&&e.before(n)}function x(e,n,r){if(e==null)return n(void 0),l;const t=h(()=>e.subscribe(n,r));return t.unsubscribe?()=>t.unsubscribe():t}let f=!1;function R(e,n,r){const t=r[n]??(r[n]={store:null,source:w(void 0),unsubscribe:l});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=l;else{var s=!0;t.unsubscribe=x(e,o=>{s?t.source.v=o:L(t.source,o)}),s=!1}return M(t.source)}function S(){const e={};return y(()=>{for(var n in e)e[n].unsubscribe()}),e}function D(e){var n=f;try{return f=!1,[e(),f]}finally{f=n}}const I="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(I);export{O as a,R as b,F as c,C as d,u as e,D as f,N as g,S as s,A as t};
