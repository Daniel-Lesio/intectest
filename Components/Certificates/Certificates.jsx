import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
const Certificates = () => {
    return (
        
    <section id="certificate">
      <h1>CERTIFICATE</h1>
      <div className="container" style={{display:'flex',justifyContent:'center'}}>
      <Link href='/Certificates'>
          <a>
          <Image src='/assets/cert1.png'
        width={80}
        height={120}
        />
          </a>
        </Link>
        <div style={{width: '100px',height : '100px'}}></div>
        <Link href='/Certificates'>
          <a>
          <Image src='/assets/cert2.png'
        width={80}
        height={120}
        />
          </a>
        </Link>
        
      </div>
    </section>
    );
}

export default Certificates;
