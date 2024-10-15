import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import zebraimg from '../../assets/images/z1.jpg'  
import './AboutScreen.css'
import PageHeader from '../../components/PageHeader/PageHeader'

function AboutScreen() {
  return (
    <div className="about-container">
     <Header />
     <PageHeader header={"About Us"} />
    <div className="about-image-container">
       <p className='header-text'>We are a passionate team with the vision of delivering
       the best & exiting experience for customers</p>
     <div className='wrapper'> <img
      width={500}
        src={zebraimg}
        alt="Zebras in the wild"
        className="zebra-image"
      />

<p className='img-txt-wrapper'>
        We seek to provide the authentic experiences from travel, exploration,
        and adventures around Tanzania. Our long term mission is to educate,
        inspire, and enable all people to experience and protect the
        wilderness.
      </p></div>
    </div>
    {/* <div className="about-text-container">
      <p>
        We seek to provide the authentic experiences from travel, exploration,
        and adventures around Tanzania. Our long term mission is to educate,
        inspire, and enable all people to experience and protect the
        wilderness.
      </p>
    </div> */}
    <Footer />
  </div>

  )
}

export default AboutScreen