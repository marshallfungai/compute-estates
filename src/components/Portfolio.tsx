"use client"

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

// Import css files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Portfolio.module.css';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubLink?: string;  // Now optional
  imageSrc: string;
  applicationLink?: string;
}

const projects: Project[] = [
  {
    name: "Peakway rent a car",
    description: "Peakway rent a car is website for a car rental company in Cyprus.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    githubLink: "https://github.com/marshallfungai/peakway-car-rental",
    imageSrc: "/images/projects/peakway-rental.jpg",
  },
  {
    name: "IVF Medical App",
    description: "An IVF medical app that allows users to track their progress and receive support from medical professionals.",
    technologies: ["flutter", "Firebase"],
    githubLink: "https://github.com/marshallfungai/ivf-medical-app",
    imageSrc: "/images/projects/ivf-app.jpg",
  },
  {
    name: "Cyprus Hope IVF Agent Website",
    description: "A website for a Cyprus Hope IVF agent that allows users to track their progress and receive support from medical professionals.",
    technologies: ["Next.js", "Tailwind CSS", "react"],
    githubLink: "https://github.com/marshallfungai/cyprushopeivf",
    imageSrc: "/images/projects/ivf-website.jpg",
  },
  {
    name: "Skyborne Travel Agency",
    description: "Laravel based website for a travel agency.",
    technologies: ["Laravel", "MySQL"],
    applicationLink: "https://skyborntravel.com",
    imageSrc: "/images/projects/skyborne-Travel-Agency.jpg",

  },
  {
    name: "Sefler Menu App",
    description: "Scan QR codes to get menu items and order food. The app uses dart to build the app and a wordpress backend.",
    technologies: ["flutter", "Firebase", "dart", "Php"],
    githubLink: "https://github.com/marshallfungai/sharaf-store-mobile-app",
    imageSrc: "/images/projects/no-photo.png",
  },
];

export default function Portfolio() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        }
      }
    ]
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className={`container mx-auto px-4 ${styles.sliderContainer}`}>
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Portfolio</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className={`px-2 ${styles.slide}`}>
              <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-green-900 bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-green-700 text-white text-xs px-2 py-1 rounded-full m-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.applicationLink || project.githubLink) && (
                    <a
                      href={project.applicationLink || project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-300 transition-colors duration-300 flex items-center"
                    >
                      <FontAwesomeIcon icon={faLink} className="mr-2" />
                      <span>{project.applicationLink ? 'View App' : 'View Project'}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
