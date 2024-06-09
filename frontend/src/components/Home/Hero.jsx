import React from 'react'
import { Button, Container } from 'react-bootstrap'
import heroImg from "../../assets/hero-img.svg"

const Hero = () => {
  return (
    <header className='hero bg-primary text-light'>
        <Container>
            <div className="d-flex flex-column-reverse flex-lg-row gap-5 justify-content-between align-items-center px-lg-5">
                <div className='w-50 text-center text-lg-start'>
                    <h1 className='font-accent'>
                        Take Control of Your Finances with FinTrack
                    </h1>

                    <p>
                        The ultimate tool to manage your income, expenses, and financial goals effortlessly.
                    </p>

                    <Button variant="dark" className='align-self-start'>
                        Get Started
                    </Button>
                </div>

                <img className='hero-img d-none d-lg-block' src={heroImg} alt="hero illustration" />
            </div>
        </Container>
    </header>
  )
}

export default Hero