export const portfolioData = {
  professionalProjects: [
    {
      id: 1,
      title: "Interactive React Map",
      tech: "React, OpenRouteService",
      description:
        "A map application featuring geolocation, draggable markers, route finding, and live weather data integration.",
      details:
        "Built entirely with React. Implements OpenRouteService for dynamic pathing and integrates a live weather API to show conditions at the destination.",
      image:
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=450",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Auth Boilerplate",
      tech: "React, Firebase",
      description:
        "A reusable authentication system with email/password, Google, and OTP phone sign-in.",
      details:
        "A secure frontend authentication flow using Firebase. Features protected routes, session management, and a clean UI for profile updates.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=450",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Pothik Bondhu",
      tech: "PERN Stack (PostGIS, Socket.io)",
      description:
        "A secure social travel marketplace that connects users for shared journeys using exact spatial radius matching and verified profiles.",
      details:
        "Engineered a full-stack platform matching users traveling the same path within a dynamic spatial radius and a ±12-hour departure window. The backend leverages PostgreSQL and the PostGIS extension for rapid geographic coordinate calculations. Focused heavily on trust and security, the system implements OTP identity verification, strict privacy toggles (including women-only matching filters), and real-time private chat integration.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800&h=450",
      githubUrl: "#",
      liveUrl: "https://pothik-bondhu-remastered.onrender.com/",
    },
    // {
    //   id: 4,
    //   title: "React Native Mobile App",
    //   tech: "React Native",
    //   description:
    //     "A mobile application focusing on state management and native component lifecycles.",
    //   details:
    //     "Configured the local development environment for mobile rendering and built out the core navigational components to understand cross-platform UI workflows.",
    //   image:
    //     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=450",
    //   githubUrl: "#",
    //   liveUrl: "#",
    // },
  ],
  competitiveProgramming: [
    {
      id: 1,
      platform: "LeetCode",
      handle: "abdullahemon6377",
      stats: "Ongoing",
      focusTopics: "Data Structures & Algorithms",
      link: "https://leetcode.com/abdullahemon6377",
      color: "#ffa116", // Official LeetCode Orange
    },
    {
      id: 2,
      platform: "Codeforces",
      handle: "ABDEM0N6377",
      stats: "Left",
      focusTopics: "500+ Problems",
      link: "https://codeforces.com/profile/ABDEM0N6377",
      color: "#1f8acb", // Official Codeforces Blue
    },
  ],
  archives: [
    {
      id: "places",
      title: "PLACES I'VE VISITED",
      items: [
        {
          id: 1,
          frontTitle: "Dhaka",
          image: "/assets/places/dhk.jpg",
          backSubtitle: "The Capital",
          backDescription:
            "A chaotic yet beautiful blend of history and hyper-growth.",
        },
        {
          id: 2,
          frontTitle: "Cox's Bazar",
          image: "/assets/places/coxs.png",
          backSubtitle: "Longest Beach",
          backDescription: "Endless ocean waves and golden sandy shores.",
        },
        {
          id: 3,
          frontTitle: "Saint Martin",
          image: "/assets/places/saintmartin.png",
          backSubtitle: "Coral Island",
          backDescription:
            "Crystal clear blue waters and serene tropical vibes.",
        },
        {
          id: 4,
          frontTitle: "Srimangal",
          image: "/assets/places/srimangal.png",
          backSubtitle: "Tea Capital",
          backDescription:
            "Rolling green hills covered in endless, tranquil tea estates.",
        },
        {
          id: 5,
          frontTitle: "Bandarban",
          image: "/assets/places/bandarbhan.png",
          backSubtitle: "Hill Tracts",
          backDescription:
            "Majestic peaks, clouds, and rich indigenous culture.",
        },
        {
          id: 6,
          frontTitle: "Chandranath Hill",
          image: "/assets/places/chandronath.png",
          backSubtitle: "Sitakunda",
          backDescription:
            "A thrilling hike leading to breathtaking coastal and mountain views.",
        },
        {
          id: 7,
          frontTitle: "Kuakata",
          image: "/assets/places/kuakata.jpg",
          backSubtitle: "Daughter of Sea",
          backDescription:
            "A rare panoramic beach offering views of both the sunrise and sunset.",
        },
        {
          id: 8,
          frontTitle: "Barishal",
          image: "/assets/places/barishal.jpg",
          backSubtitle: "Riverine Beauty",
          backDescription:
            "The Venice of the East, famous for its lush floating markets.",
        },
        {
          id: 9,
          frontTitle: "Cumilla",
          image: "/assets/places/Cumilla.png",
          backSubtitle: "Heritage",
          backDescription:
            "Rich in history, ancient archaeological ruins, and cultural legacy.",
        },
        {
          id: 10,
          frontTitle: "Chandpur",
          image: "/assets/places/chandpur.png",
          backSubtitle: "City of Hilsa",
          backDescription: "Where the mighty Padma and Meghna rivers converge.",
        },
        {
          id: 11,
          frontTitle: "Noakhali",
          image: "/assets/places/noakhali.png",
          backSubtitle: "Coastal Delta",
          backDescription:
            "Expansive coastal landscapes and peaceful rural life.",
        },
        {
          id: 12,
          frontTitle: "Guliakhali",
          image: "/assets/places/guliakhali.png",
          backSubtitle: "Green Beach",
          backDescription:
            "A breathtaking coastal landscape where lush green grass uniquely blends into the ocean.",
        },
      ],
    },
    {
      id: "games",
      title: "BEST GAMES I'VE PLAYED",
      displayStyle: "compact", // This tells the View to use the smaller design
      items: [
        { id: 1, title: "Minecraft", genre: "Sandbox" },
        { id: 2, title: "Clash of Clans", genre: "Strategy" },
        { id: 3, title: "GTA 5", genre: "Open World" },
        { id: 4, title: "Free Fire", genre: "Battle Royale" },
        { id: 5, title: "Chess.com", genre: "Board/Strategy" },
        { id: 6, title: "Hill Climb Racing", genre: "Racing" },
        { id: 7, title: "Subway Surfers", genre: "Endless Runner" },
        { id: 8, title: "Temple Run 2", genre: "Endless Runner" },
        { id: 9, title: "Dream League Soccer", genre: "Sports" },
        { id: 10, title: "eFootball", genre: "Sports" },
      ],
    },
    {
      id: "movies",
      title: "FAVORITE MOVIES",
      displayStyle: "compact", // This instantly applies the glowing neon badge design
      items: [
        { id: 1, title: "The Matrix", genre: "Sci-Fi • 10/10" },
        { id: 2, title: "Interstellar", genre: "Space Epic • 9.5/10" },
        { id: 3, title: "The Dark Knight", genre: "Action • 9/10" },
        { id: 4, title: "Inception", genre: "Sci-Fi Thriller • 9/10" },
      ],
    },
    {
      id: "sportsmen",
      title: "FAVORITE SPORTSMEN",
      displayStyle: "compact",
      items: [
        { id: 1, title: "Lionel Messi", genre: "Football" },
        { id: 2, title: "Virat Kohli", genre: "Cricket" },
        { id: 3, title: "Cristiano Ronaldo", genre: "Football" },
        { id: 4, title: "Shakib Al Hasan", genre: "Cricket" },
      ],
    },
    {
      id: "actors",
      title: "FAVORITE ACTORS",
      displayStyle: "compact",
      items: [
        {
          id: 1,
          title: "Cillian Murphy",
          genre: "Peaky Blinders / Oppenheimer",
        },
        {
          id: 2,
          title: "Leonardo DiCaprio",
          genre: "Inception / Shutter Island",
        },
        { id: 3, title: "Scarlett Johansson", genre: "Black Widow / Lucy" },
        { id: 4, title: "Zendaya", genre: "Dune / Euphoria" },
        { id: 5, title: "Christian Bale", genre: "The Dark Knight" },
      ],
    },
  ],
};
