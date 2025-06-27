<script lang="ts">
  import { projects } from "../../assets/data.json";
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
              {#each project.skills as skill}
                <span
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
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
              {#if project.url != "#"}
                <a
                  href={project.url}
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
