import{S as w,i as J,s as L,k as m,l as u,m as k,h as _,n as h,b as q,G as d,B as y,M as N,a as b,c as I,I as v,N as E,J as M,K as S}from"../../../chunks/index-737b636c.js";function D(r,t,i){const s=r.slice();return s[8]=t[i],s[10]=i,s}function G(r){let t,i,s,a,e,c,l,f,g;function j(){return r[2](r[8])}function n(){return r[3](r[8])}return{c(){t=m("div"),i=m("img"),a=b(),e=m("img"),l=b(),this.h()},l(o){t=u(o,"DIV",{class:!0});var p=k(t);i=u(p,"IMG",{class:!0,src:!0,alt:!0}),a=I(p),e=u(p,"IMG",{class:!0,src:!0,alt:!0}),l=I(p),p.forEach(_),this.h()},h(){h(i,"class","front svelte-mnfpkn"),v(i.src,s=r[8].img)||h(i,"src",s),h(i,"alt",""),h(e,"class","back svelte-mnfpkn"),v(e.src,c="front.webp")||h(e,"src",c),h(e,"alt",""),h(t,"class","card svelte-mnfpkn"),E(t,"flipped",r[8].flipped)},m(o,p){q(o,t,p),d(t,i),d(t,a),d(t,e),d(t,l),f||(g=[M(t,"click",j),M(t,"keypress",n)],f=!0)},p(o,p){r=o,p&1&&!v(i.src,s=r[8].img)&&h(i,"src",s),p&1&&E(t,"flipped",r[8].flipped)},d(o){o&&_(t),f=!1,S(g)}}}function T(r){let t,i,s=r[0],a=[];for(let e=0;e<s.length;e+=1)a[e]=G(D(r,s,e));return{c(){t=m("main"),i=m("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=u(e,"MAIN",{class:!0});var c=k(t);i=u(c,"DIV",{class:!0});var l=k(i);for(let f=0;f<a.length;f+=1)a[f].l(l);l.forEach(_),c.forEach(_),this.h()},h(){h(i,"class","row svelte-mnfpkn"),h(t,"class","svelte-mnfpkn")},m(e,c){q(e,t,c),d(t,i);for(let l=0;l<a.length;l+=1)a[l].m(i,null)},p(e,[c]){if(c&3){s=e[0];let l;for(l=0;l<s.length;l+=1){const f=D(e,s,l);a[l]?a[l].p(f,c):(a[l]=G(f),a[l].c(),a[l].m(i,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},i:y,o:y,d(e){e&&_(t),N(a,e)}}}function V(r,t,i){let s=[],a=["/notrick.gif","/Rollin.jpg","/jhon.jpg","/Otto.jpg","/WalterWhite.png","/DavieJhon.jpg","/Limie.jpg","/merran.jpg"];for(let n=0;n<8;n++)s.push({id:n,img:a[n],flipped:!1,completed:!1},{id:n+.5,img:a[n],flipped:!1,completed:!1});s=s.sort((n,o)=>.5-Math.random());let e=0,c,l;function f(n){!n.flipped&&e<2&&(n.flipped=!0,e==0?c=n.img:e==1&&(l=n.img),e+=1,e==2&&c==l?setTimeout(()=>{s.forEach(o=>{o.completed=o.flipped}),e=0,c="",l="",i(0,s)},2e3):e==2&&setTimeout(()=>{s.forEach(o=>{o.flipped=o.completed}),e=0,c="",l="",i(0,s)},2e3),i(0,s))}return[s,f,n=>{f(n)},n=>{f(n)}]}class A extends w{constructor(t){super(),J(this,t,V,T,L,{})}}export{A as default};
