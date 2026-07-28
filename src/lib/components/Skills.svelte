<script lang="ts">
  import { skills } from "../../assets/data.json";
  import { reveal } from "../actions/reveal";

  const categories = Object.entries(skills);
</script>

<section id="skills" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-14 text-slate-900">Skills</h2>

    <div class="max-w-3xl mx-auto space-y-10">
      {#each categories as [category, skillList]}
        <div use:reveal>
          <div class="flex items-center gap-4 mb-4">
            <h3 class="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">
              {category}
            </h3>
            <div class="flex-1 h-px bg-slate-200"></div>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each skillList as skill}
              <span class="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-primary border border-indigo-200">
                {skill}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
