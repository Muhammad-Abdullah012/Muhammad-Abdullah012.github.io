<script lang="ts">
  import { onMount } from 'svelte';

  let isMenuOpen = false;
  let activeSection = 'home';
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const menuItems = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  onMount(() => {
    const sections = menuItems.map(item => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px' // This ensures we switch section at the middle of the viewport
      }
    );

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  });
</script>

<header class="fixed w-full bg-white shadow-md z-50">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center md:justify-center">
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6">
        {#each menuItems as item}
          <a
            href={item.href}
            class="text-gray-600 hover:text-primary transition-colors {activeSection === item.href.slice(1) ? 'text-primary font-semibold' : ''}"
          >
            {item.text}
          </a>
        {/each}
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {#if isMenuOpen}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          {:else}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden mt-4 pb-4">
        {#each menuItems as item}
          <a
            href={item.href}
            class="block py-2 text-gray-600 hover:text-primary transition-colors {activeSection === item.href.slice(1) ? 'text-primary font-semibold' : ''}"
            on:click={toggleMenu}
          >
            {item.text}
          </a>
        {/each}
      </div>
    {/if}
  </nav>
</header>