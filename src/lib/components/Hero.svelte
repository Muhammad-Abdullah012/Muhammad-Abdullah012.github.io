<script lang="ts">
  import { socialLinks, documents, profile } from "../../assets/data.json";
  import { trackEvent } from "../analytics";

  function getPlatform(href: string): string {
    if (href.includes('github.com')) return 'github';
    if (href.includes('linkedin.com')) return 'linkedin';
    if (href.startsWith('tel:')) return 'phone';
    if (href.startsWith('mailto:')) return 'email';
    return 'other';
  }
</script>

<section id="home" class="min-h-screen flex items-center pt-16 hero-bg">
  <div class="container mx-auto px-6 py-12">
    <div class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

      <!-- Profile image -->
      <div class="w-56 md:w-80 flex-shrink-0 hero-animate hero-delay-1">
        <img
          src={profile.avatar}
          alt={profile.name}
          class="w-full h-auto rounded-2xl shadow-xl object-cover"
          loading="eager"
        />
      </div>

      <!-- Content -->
      <div class="w-full md:w-auto text-center md:text-left max-w-xl">

        <!-- Open to Work badge -->
        {#if profile.open_to_work}
          <div class="flex justify-center md:justify-start mb-4 hero-animate hero-delay-1">
            <span class="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-800 text-sm font-semibold rounded-full border border-green-200">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Open to Work
            </span>
          </div>
        {/if}

        <h1 class="text-4xl md:text-5xl font-extrabold mb-3 text-slate-900 tracking-tight hero-animate hero-delay-2">
          {profile.name}
        </h1>

        <p class="text-xl md:text-2xl text-slate-600 mb-5 leading-snug hero-animate hero-delay-3">
          {@html profile.tagline}
        </p>

        <!-- Quick stats -->
        <div class="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-6 text-sm font-medium text-slate-500 hero-animate hero-delay-3">
          <span><strong class="text-slate-800 font-bold">{profile.stats.years_experience}+</strong> yrs experience</span>
          <span class="text-slate-300 hidden sm:inline">|</span>
          <span><strong class="text-slate-800 font-bold">{profile.stats.projects_count}</strong> projects built</span>
          <span class="text-slate-300 hidden sm:inline">|</span>
          <span><strong class="text-slate-800 font-bold">{profile.stats.technologies_count}+</strong> technologies</span>
        </div>

        <address class="not-italic text-sm text-slate-500 mb-7 hero-animate hero-delay-4">
          📍 {profile.location}
        </address>

        <!-- CTAs: Resume (primary) | CV (secondary) | Get in Touch (tertiary) -->
        <div class="flex flex-wrap justify-center md:justify-start gap-3 mb-7 hero-animate hero-delay-5">
          <a
            href={documents.resume}
            download
            class="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-secondary hover:to-primary transition-all"
            on:click={() => trackEvent('resume_download')}
          >
            Resume ↓
          </a>
          <a
            href={documents.cv}
            download
            class="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
            on:click={() => trackEvent('cv_download')}
          >
            CV ↓
          </a>
          <a
            href="#contact"
            class="border-2 border-slate-300 text-slate-600 px-6 py-3 rounded-full font-semibold hover:border-slate-400 transition-all"
          >
            Get in Touch
          </a>
        </div>

        <!-- Social links -->
        <div class="flex justify-center md:justify-start gap-4 hero-animate hero-delay-6">
          {#each socialLinks as link}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-500 hover:text-primary transition-all transform hover:scale-110"
              aria-label={link.label}
              on:click={() => trackEvent('social_click', { platform: getPlatform(link.href) })}
            >
              <img src={link.icon} class="w-7 h-7" alt={link.label} />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
