import React from 'react';

import Image from 'next/image'
const Certificates = () => {
    return (
        
    <section id="certificate">
      <h1>CERTIFICATE</h1>
      <div className="container" style={{display:'flex',justifyContent:'center'}}>
        <Image src='/assets/cert1.png'
        width={80}
        height={120}
        />
        <div style={{width: '100px',height : '100px'}}></div>
        <Image src='/assets/cert2.png'
        width={80}
        height={120}
        />
        
      </div>
    </section>
    );
}

export default Certificates;
