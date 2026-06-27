import React from "react"
import { Link } from "react-router-dom"
import { siteInfo } from "../../../dummydata"
import "./Hero.css"

const avatars = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
]

const Hero = () => {
  return (
    <section className='hero-shell'>
      <div className='container-wide'>
        <div className='hero-card'>
          <img className='hero-bg' src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80' alt='Diverse students studying together at a bright table' />

          <svg className='hero-blob' viewBox='0 0 600 700' preserveAspectRatio='none' aria-hidden='true'>
            <defs>
              <linearGradient id='heroBlueGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#C0392B' />
                <stop offset='45%' stopColor='#922B21' />
                <stop offset='100%' stopColor='#7B241C' stopOpacity='0.9' />
              </linearGradient>
            </defs>
            <path
              d='M0,0 H420 C380,120 460,220 400,340 C340,460 480,560 380,700 H0 V0 Z'
              fill='url(#heroBlueGrad)'
            />
            <path
              d='M0,0 H380 C340,100 420,180 360,300 C300,420 440,520 340,700 H0 V0 Z'
              fill='url(#heroBlueGrad)'
              opacity='0.6'
            />
          </svg>

          <div className='hero-content'>
            <h1>
              Unlock Your Potential
              <br />
              Through Modern Learning
            </h1>
            <p>
              {siteInfo.name} helps students, professionals, and lifelong learners acquire valuable skills through expertly designed courses, interactive experiences, and industry-relevant training.
            </p>
            <Link to='/courses' className='hero-cta'>
              Get Started
              <span className='hero-cta-arrow'>
                <i className='fa fa-arrow-right'></i>
              </span>
            </Link>
          </div>

          <div className='hero-proof'>
            <div className='hero-avatars'>
              {avatars.map((src, i) => (
                <img key={i} src={src} alt='' />
              ))}
              <span className='hero-avatars-more'>
                <i className='fa fa-plus'></i>
              </span>
            </div>
            <div className='hero-proof-text'>
              <strong>50k+</strong>
              <span>Active learners enrolled world-wide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
