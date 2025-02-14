<script lang="ts">
  import ZameenScrapperProjectScreenshot from "../../assets/zameen-scrapper-ss.png";
  import RiderProLogo from "../../assets/ueber-pro-logo.png";
  import BrainBashLogo from "../../assets/brain-bash-logo.png";
  import AttentiveLogo from "../../assets/attentive-logo.svg";
  import NoImageLogo from "../../assets/no-image-icon.png";
  // This will be populated with your actual projects later
  const projects = [
    {
      title: "Zameen Properties Scrapper",
      description:
        "This project is a web scraping tool designed to extract real estate data from Zameen.com, one of the leading property listing platforms. The scraper gathers detailed property information such as price, location, property type, area size, number of bedrooms and bathrooms, amenities, and seller details. ",
      technologies: [
        "Cheerio",
        "Node.js",
        "Typescript",
        "Express",
        "PostgreSQL",
        "React",
        "AWS (EC2)",
        "Github Actions (CI/CD)",
      ],
      image: ZameenScrapperProjectScreenshot,
      github: "https://github.com/Muhammad-Abdullah012/scrapper_zameen_v2",
      demo: "https://zameen.alisquare.com/",
    },
    {
      title: "RiderPro App",
      description:
        "A role-based logistics platform with car rental features, real-time trip management, and an admin dashboard for tracking KPIs. It includes MQTT-powered notifications, advanced filtering, and analytics for efficient fleet operations.",
      technologies: [
        "PostgreSQL",
        "Express",
        "NextJs",
        "Node.js",
        "Typescript",
        "Prisma",
        "MQTT",
      ],
      image: RiderProLogo,
      github: "https://github.com/Muhammad-Abdullah012/ueber-pro",
      demo: "#",
    },
    {
      title: "Brain Bash",
      description:
        "A dynamic quiz platform with customizable question sets, real-time scoring, and user progress tracking. It offers an engaging experience for learning and self-assessment.",
      technologies: [
        "PostgreSQL",
        "Express",
        "NextJs",
        "Node.js",
        "Typescript",
        "Prisma",
        "MQTT",
      ],
      image: BrainBashLogo,
      github: "https://github.com/Muhammad-Abdullah012/brain-bash",
      demo: "#",
    },
    {
      title: "Attentive",
      description: "A productivity application",
      technologies: ["Electron", "React", "Node.js", "Typescript"],
      image: AttentiveLogo,
      github: "https://github.com/SargeKhan/electron_attentive",
      demo: "#",
    },
    {
      title: "LLM Chat app",
      description: "An application where users can chat with LLMs",
      technologies: ["React Native", "React", "Node.js", "Typescript"],
      image: NoImageLogo,
      github:
        "https://github.com/Muhammad-Abdullah012/auth-micro-service-mobile",
      demo: "#",
    },
  ];
</script>

<section id="projects" class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>

    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {#each projects as project}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            class="w-full h-48"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
            <p class="text-gray-600 mb-4">{project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.technologies as tech}
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              {/each}
            </div>
            <div class="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:text-secondary transition-colors"
              >
                GitHub
              </a>
              {#if project.demo != "#"}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary hover:text-secondary transition-colors"
                >
                  Live Demo
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
