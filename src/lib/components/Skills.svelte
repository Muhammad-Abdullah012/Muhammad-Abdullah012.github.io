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
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "Prisma", level: 80 },
      { name: "Sequelize", level: 80 },
      { name: "Puppeteer", level: 75 },
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
      <!-- Frontend Skills -->
      <div>
        <h3 class="text-xl font-semibold mb-6">Frontend Development</h3>
        <div class="space-y-4">
          {#each skills.frontend as skill}
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

      <!-- Backend Skills -->
      <div>
        <h3 class="text-xl font-semibold mb-6">Backend Development</h3>
        <div class="space-y-4">
          {#each skills.backend as skill}
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

      <!-- Tools -->

      <div>
        <h3 class="text-xl font-semibold mb-6">Tools & Other Skills</h3>
        <div class="space-y-4">
          {#each skills.tools as skill}
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
    </div>
  </div>
</section>
