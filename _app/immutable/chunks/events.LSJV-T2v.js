import{b as i,w as n}from"./entry.DgWRUgaE.js";const m=n([]),d=n(null);let a=!1;async function p(){if(a)return;const o=new Date,t=(await(await fetch(`${i}/Json/events.json`)).json()).map(e=>({...e,dateTime:new Date(`${e.date} ${e.time}`)})).filter(e=>e.dateTime>=o).sort((e,s)=>e.dateTime.getTime()-s.dateTime.getTime());m.set(t.map(({dateTime:e,...s})=>s)),d.set(t.length>0?t[0]:null),a=!0}export{m as e,p as l,d as u};
