<script lang="ts">
  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "React Native", level: 75 },
      { name: "Expo", level: 75 },
      { name: "Electron", level: 75 },
      { name: "Tailwind CSS", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Prisma", level: 80 },
      { name: "Sequelize", level: 80 },
      { name: "Puppeteer", level: 75 },
      { name: "Playwright", level: 70 },
    ],
    database: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 80 },
    ],
    languages: [
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 70 },
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD (GitHub Actions)", level: 65 },
      { name: "Linux & Bash", level: 60 },
    ],
  };
</script>

<section id="skills" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-12">Skills</h2>

    <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
      {#each Object.entries(skills) as [category, skillList]}
        <div>
          <h3 class="text-xl font-semibold mb-6">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
          <div class="space-y-4">
            {#each skillList as skill}
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">{skill.name}</span>
                  <span class="text-gray-500">{skill.level}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-primary rounded-full h-2"
                    style="width: {skill.level}%"
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
