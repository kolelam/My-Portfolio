import React from 'react';
import resumePDF from ''

export default function Resume() {
    return (
        <div>

            <section className='main-container resume-container'>
                <p>
                    <strong>Front-end Proficiencies</strong>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML/ CSS</li>
                        <li>jQuery</li>
                        <li>Typescript</li>
                    </ul>
                </p>

                <p>
                    <strong>Back-end Proficiencies</strong>
                    <ul>
                        <li>MySQL</li>
                        <li>Express JS</li>
                        <li>MongoDB</li>
                        <li>Node JS</li>
                        <li>Next JS</li>
                    </ul>
                </p>
                <div >
                    <a href={resumePDF} target='_blank' rel='noopener noreferrer' className='download-link'>
                        Download my resume!
                    </a>
                </div>
            </section>
        </div>
    );
}