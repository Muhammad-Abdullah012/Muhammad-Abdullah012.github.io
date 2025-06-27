<script lang="ts">
  import { experiences } from "../../assets/data.json";
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
                {#each experience.responsibilities as responsibility}
                  <li>{responsibility}</li>
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
