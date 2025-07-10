var n=(t,e=300)=>{let o;return i=>{clearTimeout(o),o=setTimeout(()=>t(i),e)}},s=(t,e)=>{let o=t._original||t,i=n(o.emit.bind(o),e);return{_original:t,emit:i}};export{n as a,s as b};
