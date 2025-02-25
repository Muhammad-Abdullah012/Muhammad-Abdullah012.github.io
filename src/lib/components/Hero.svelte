<script lang="ts">
  import "animate.css";
  import GithubIcon from "../../assets/github-mark.svg";
  import LinkedinIcon from "../../assets/linkedin-svgrepo-com.svg";
  import ProfileImage from "../../assets/profile.jpeg";
  import CV from "../../assets/Muhammad_Abdullah_CV.pdf";
  import Resume from "../../assets/Muhammad_Abdullah_Resume.pdf";
  const socialLinks = [
    {
      href: "https://github.com/Muhammad-Abdullah012",
      icon: "github",
      label: "GitHub Profile",
    },
    {
      href: "https://www.linkedin.com/in/muhammad-abdullah-718a34245/",
      icon: "linkedin",
      label: "LinkedIn Profile",
    },
  ];
  let isDropdownOpen = false;
  let dropdownBtn: HTMLButtonElement | undefined;
  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownBtn &&
      event.target instanceof Node &&
      !dropdownBtn.contains(event.target)
    ) {
      isDropdownOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<section
  id="home"
  class="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-100 to-white"
>
  <div class="container mx-auto px-6">
    <div
      class="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
    >
      <div class="w-full md:w-1/3">
        <img
          src={ProfileImage}
          alt="Muhammad Abdullah"
          class="w-full h-auto rounded-lg shadow-lg object-cover animate__animated animate__fadeInUp"
        />
      </div>

      <div class="w-full md:w-2/3 text-center md:text-left">
        <h1
          class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate__animated animate__fadeInUp"
        >
          Muhammad Abdullah
        </h1>

        <p
          class="text-xl md:text-2xl text-gray-700 mb-6 animate__animated animate__fadeInUp"
        >
          <span class="font-bold">Full Stack Developer</span> <span>|</span> Transforming
          ideas into seamless digital experiences
        </p>

        <p
          class="text-lg text-gray-600 mb-8 animate__animated animate__fadeInUp"
        >
          2+ years of experience
        </p>

        <address
          class="text-lg text-gray-600 mb-8 animate__animated animate__fadeInUp"
        >
          Based in Islamabad, Pakistan
        </address>

        <div
          class="flex justify-center md:justify-start space-x-4 mb-8 animate__animated animate__fadeInUp"
        >
          {#each socialLinks as link}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary transition-transform transform hover:scale-110"
              aria-label={link.label}
            >
              {#if link.icon === "github"}
                <img src={GithubIcon} class="w-8 h-8" alt="GitHub logo" />
              {:else if link.icon === "linkedin"}
                <img src={LinkedinIcon} class="w-8 h-8" alt="LinkedIn logo" />
              {/if}
            </a>
          {/each}
        </div>

        <a
          href="#contact"
          class="inline-block bg-gradient-to-r from-primary to-secondary text-white px-10 mb-8 md:mb-0 py-4 rounded-full hover:from-secondary hover:to-primary transition-all shadow-md animate__animated animate__fadeInUp"
          aria-label="Get in touch with Muhammad Abdullah"
        >
          &#128075; Get in Touch
        </a>
        <div class="relative inline-block animate__animated animate__fadeInUp">
          <button
            class="bg-transparent text-black border-2 border-secondary px-8 py-3 rounded-full transition-all shadow-md flex items-center gap-2"
            bind:this={dropdownBtn}
            on:click={toggleDropdown}
          >
            &#128229; Download <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              ></path></svg
            >
          </button>

          <div
            class:hidden={!isDropdownOpen}
            class="absolute left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg mt-2"
          >
            <a
              href={Resume}
              download
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >📜 Resume</a
            >
            <a
              href={CV}
              download
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100">📄 CV</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
