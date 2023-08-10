import React from 'react';
import selfImg from './assets/comingsoon'

export default function AboutMe() {
    return (
        <div className='about-me'>
            <section className='main-container about-container'>
                <div className='self-image'>
                    <img src={selfImg} alt='What Kole Lam would look like through a camera' />
                </div>
                <p className='about-description'>
                    I've always been drawn to the world of tech. As a child I grew up in an auto repair family so I garnered an interest in mechanics at a young age. Throughout the years that translated into a love
                    for all things technical. It lead to my enlistment in the USMC as a radio tech, where I further delved into the inner workings of machinery and electronics. From there I maintained an interest
                    in the world of web development and coding in general. I have always been fascinated by the idea of creating something from nothing, and the world of coding allows me to do just that. I have a love
                    of animals and all things outdoors whether it be in the deserts or the deep in the forested mountains. I'm always striving to learn and improve and I hope this portfolio reflects that.
                </p>
            </section>
        </div>
    );
}