<script lang="ts">
  const experiences = [
    {
      title: "Software Engineer",
      company: "Ali Square",
      period: "01/2024 - Present",
      location: "Islamabad, Pakistan",
      achievements: [
        "Developed a dynamic quiz platform with customizable question sets, real-time scoring, and user progress tracking. It offers an engaging experience for learning and self-assessment.",
        "Developed a scalable logistics platform with car rental features, real-time trip management, and an admin dashboard for tracking KPIs.",
        "Developed a scalable web scraper for zameen.com using Node.js, Cheerio, and Sequelize, processing and storing over 50,000 real estate listings in a PostgreSQL database. Built REST API for real-time access to the data.",
        'Contributed to the development of "Attentive," a Chrome extension application built with Electron, enhancing task management and user productivity features.',
        'Developed a Chrome extension for "Attentive," connected it with the desktop app. Ensured seamless communication between the extension and the desktop app for enhanced user interaction.',
      ],
    },
    {
      title: "Software Engineer",
      company: "Gitrex Technologies",
      period: "01/2023 - 12/2023",
      location: "Islamabad, Pakistan",
      achievements: [
        "Developed and implemented hybrid mobile apps using React Native and Expo. Focused on reusable component development and UI enhancements, resulting in a 15% increase in user engagement.",
        "Integrated Firebase Cloud Functions and Firestore for backend services, and implemented Square Payments Gateway for secure transaction processing.",
        "Implemented Algolia search for enhanced user experience, enabling fast and accurate search functionality within the application.",
      ],
    },
    {
      title: "Internhip",
      company: "Remote Solutions",
      period: "10/2022 - 12/2022",
      location: "Islamabad, Pakistan",
      achievements: [
        "Developed a user management application during an internship using the PERN stack (PostgreSQL, Express, Node.js, React.js), implementing full CRUD functionality for managing user data efficiently.",
      ],
    },
  ];
</script>

<section id="experience" class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">
      Experience
    </h2>
    <div class="max-w-6xl mx-auto relative">
      <div
        class="hidden md:block absolute left-1/2 w-px h-full bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2"
      ></div>

      {#each experiences as experience, i}
        <div
          class="relative flex items-center mb-16 justify-center {i %
            2 ===
          0
            ? 'md:justify-start'
            : 'md:justify-end'}"
        >
          <div
            class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110 z-10"
          ></div>

          <div
            class="w-full flex flex-col items-center md:w-5/12 md:relative {i % 2 === 0
              ? 'md:pr-12'
              : 'md:pl-12'}"
          >
            <div
              class="w-fit md:absolute {i % 2 === 0
                ? 'md:right-0 md:translate-x-20'
                : 'md:left-0 md:-translate-x-20'} top-0 bg-primary text-white text-sm font-semibold py-2 px-5 rounded-full whitespace-nowrap shadow-md"
            >
              {experience.period}
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                {experience.title}
              </h3>
              <div class="flex justify-between items-center mb-5">
                <p class="text-primary font-semibold">{experience.company}</p>
                <address class="text-sm text-gray-500">{experience.location}</address>
              </div>
              <ul
                class="text-gray-700 leading-relaxed list-disc ml-4 space-y-2"
              >
                {#each experience.achievements as achievement}
                  <li>{achievement}</li>
                {/each}
              </ul>
            </div>

            <div
              class="hidden md:block absolute top-1/2 w-16 h-px bg-gradient-to-r from-primary to-transparent
                  {i % 2 === 0
                ? 'right-0 translate-x-16'
                : 'left-0 -translate-x-16'}"
            ></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
