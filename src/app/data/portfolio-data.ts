// src/app/data/portfolio-data.ts
export const portfolio = [
  {
    id: 1,
    title: 'NovaRide',
    images: ['assets/Novaride.png',
      'assets/Novaride1.png',
      'assets/Novaride2.png',
      'assets/Novaride3.png',
      'assets/Novaride4.png',
      'assets/Novaride5.png'
    ],
    link: "https://car-rental-website-mocha.vercel.app/", // Add more images if needed
    animation: 'animate__zoomIn',
    technologies: ["Angular", "Bootstrap", "TypeScript"],
    description: 'A modern car rental platform with features like car listings, booking functionality, and a seamless user experience for both renters and owners.'
  },
  {
    id: 2,
    title: 'Ev Nation Website',
    images: ['assets/evnation.png',
          'assets/evnation-1.png',
          'assets/evnation-2.png',
          'assets/evnation-3.png',
          'assets/evnation-4.png'
    ],
    animation: 'animate__zoomIn',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Mongodb', 'Node.js', 'Express'],
    description: 'A website for an electric vehicle rental service, showcasing available vehicles and booking options.'
  },
  {
    id: 3,
    title: 'Toyota Website clone',
    images: ['assets/toyota.png',
      'assets/toyota-1.png',
      'assets/toyota-2.png'
    ],
    animation: 'animate__zoomIn',
    technologies: ['React', 'Bootstrap', 'Node.js'],
    description: 'A clone of the Toyota website, featuring vehicle listings and a booking system.'
  },
  {
    id: 4,
    title: 'Little Lemon front',
    images: ['assets/lemon.png',
      'assets/lemon-1.png',
      "assets/lemon-2.png",  
    ],
    animation: 'animate__zoomIn',
    technologies: ['React.js', 'Bootstrap', 'HTML', 'CSS'],
    description: 'A front-end project showcasing a restaurant website with a focus on UI/UX design.'
  },
  {
    id: 1,
    title: 'Airbnb Clone',
    images: ['assets/airbnb.png'], // Add more images if needed
    animation: 'animate__zoomIn',
    technologies: ['EJS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    description: 'A clone of the Airbnb website with features like user authentication, property listings, and booking functionality.'
  }
];
