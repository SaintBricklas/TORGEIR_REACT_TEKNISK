import React, { useEffect, useState } from 'react';


export default function CountDown() {
const [count, setCount] = useState(10);
const [finished, setFinished] = useState(false);


useEffect(() => {
if (finished) return; 


const id = setInterval(() => {
setCount(prev => {
if (prev <= 1) {
clearInterval(id);
setFinished(true);
return 0;
}
return prev - 1;
});
}, 1000);


return () => clearInterval(id);
}, [finished]);


return (
<div style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', marginTop: '2.5rem' }}>
{finished ? (
<div style={{ fontSize: '2rem' }}>Gratulerer med Dagen!</div>
) : (
<div style={{ fontSize: '3rem', fontWeight: 600 }}>{count}</div>
)}
</div>
);
}