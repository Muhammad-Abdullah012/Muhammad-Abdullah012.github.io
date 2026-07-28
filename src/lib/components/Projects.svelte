<script lang="ts">
  import { projects } from "../../assets/data.json";
  import { reveal } from "../actions/reveal";
  import { trackEvent } from "../analytics";

  const featuredProjects = projects.filter((p) => (p as any).featured);
  const otherProjects = projects.filter((p) => !(p as any).featured);
</script>

<section id="projects" class="py-20 bg-slate-50">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-14">Projects</h2>

    <!-- Featured projects -->
    {#each featuredProjects as project}
      <div class="max-w-5xl mx-auto mb-8" use:reveal>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
          <div class="md:w-2/5 flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-56 md:h-full object-cover"
              loading="lazy"
            />
          </div>
          <div class="p-8 flex flex-col justify-between md:w-3/5">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Featured Project</span>
              <h3 class="text-2xl font-bold mt-2 mb-3 text-gray-900">{project.title}</h3>
              <p class="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
            <div>
              <div class="flex flex-wrap gap-2 mt-5 mb-5">
                {#each project.skills as skill}
                  <span class="px-3 py-1 bg-indigo-50 text-primary border border-indigo-100 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                {/each}
              </div>
              <div class="flex gap-5">
                {#if project.github !== '#'}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-semibold text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                    on:click={() => trackEvent('project_github_click', { project: project.title })}
                  >
                    GitHub ↗
                  </a>
                {/if}
                {#if project.url !== '#'}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1"
                    on:click={() => trackEvent('project_demo_click', { project: project.title })}
                  >
                    Live Demo →
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}

    <!-- Other projects grid -->
    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {#each otherProjects as project}
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow" use:reveal>
          <img
            src={project.image}
            alt={project.title}
            class="w-full h-44 object-cover"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="text-lg font-bold mb-2 text-gray-900">{project.title}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              {#each project.skills as skill}
                <span class="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  {skill}
                </span>
              {/each}
            </div>
            <div class="flex gap-4">
              {#if project.github !== '#'}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
                  on:click={() => trackEvent('project_github_click', { project: project.title })}
                >
                  GitHub ↗
                </a>
              {/if}
              {#if project.url !== '#'}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  on:click={() => trackEvent('project_demo_click', { project: project.title })}
                >
                  Live Demo →
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
