const s=35,E=300,n=(t,e=300)=>{let o;return i=>{clearTimeout(o),o=setTimeout(()=>t(i),e)}},r=(t,e)=>{const o=t._original||t,i=n(o.emit.bind(o),e);return{_original:t,emit:i}};export{E as D,n as a,s as b,r as d};