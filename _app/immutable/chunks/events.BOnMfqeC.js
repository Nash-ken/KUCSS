import{w as n}from"./entry.xYYwBsez.js";const i=n([]),m=n(null);let a=!1;async function c(){if(a)return;const o=new Date,t=(await(await fetch("/Json/events.json")).json()).map(e=>({...e,dateTime:new Date(`${e.date} ${e.time}`)})).filter(e=>e.dateTime>=o).sort((e,s)=>e.dateTime.getTime()-s.dateTime.getTime());i.set(t.map(({dateTime:e,...s})=>s)),m.set(t.length>0?t[0]:null),a=!0}export{i as e,c as l,m as u};