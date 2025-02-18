<script lang="ts">
  const experiences = [
    {
      title: "Software Engineer",
      company: "Ali Square",
      period: "01/2024 - Present",
      location: "Islamabad, Pakistan",
      achievements: [
        "As a Full-Stack Developer at Alisquare, I specialize in backend development, project deployments, and leading key projects from conception to execution. I design and implement scalable, high-performance backend architectures, ensuring seamless integration with frontend systems. I also manage the deployment process, optimizing infrastructure for reliability and efficiency.",
        "In addition to development, I take on a leadership role in guiding projects, collaborating with cross-functional teams to deliver robust and innovative solutions. My expertise extends to system architecture, API development, database management, and performance optimization, ensuring that applications meet both technical and business objectives.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Gitrex Technologies",
      period: "01/2023 - 12/2023",
      location: "Islamabad, Pakistan",
      achievements: [
        "As a Full-Stack Developer at Gitrex Technologies, I contributed to both backend and frontend development, building scalable and high-performance hybrid mobile applications. I designed and implemented backend architectures, developed APIs, and optimized database performance to ensure seamless data flow and application efficiency.",
        "On the frontend, I crafted responsive and user-friendly interfaces, integrating modern frameworks to enhance user experience. Collaborating closely with cross-functional teams, I played a key role in delivering feature-rich, well-optimized applications that met business and user needs."
      ],
    },
    {
      title: "Internship",
      company: "Remote Solutions",
      period: "10/2022 - 12/2022",
      location: "Islamabad, Pakistan",
      achievements: [
        "As a Intern at Remote Solutions, I gained hands-on experience in building web applications from end to end. I worked on both backend and frontend development, learning best practices in designing scalable architectures, developing APIs, and optimizing database performance.",
        "On the frontend, I built responsive and interactive user interfaces, ensuring a seamless user experience. Throughout my internship, I collaborated with senior developers, honed my problem-solving skills, and contributed to real-world projects, strengthening my expertise in full-stack development."
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
          class="relative flex items-center mb-16 justify-center {i % 2 === 0
            ? 'md:justify-start'
            : 'md:justify-end'}"
        >
          <div
            class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110 z-10"
          ></div>

          <div
            class="w-full flex flex-col items-center md:w-5/12 md:relative {i %
              2 ===
            0
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
                <address class="text-sm text-gray-500">
                  {experience.location}
                </address>
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
