<script lang="ts">
  import {skills} from "../../assets/data.json";
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
