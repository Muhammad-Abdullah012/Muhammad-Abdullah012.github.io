<script lang="ts">
  import emailjs from "@emailjs/browser";

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  let formData = {
    name: "",
    email: "",
    message: "",
  };

  let isSubmitting = false;
  let submitStatus: "idle" | "success" | "error" = "idle";

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    isSubmitting = true;
    submitStatus = "idle";

    try {
      await emailjs.send(
        "service_ipxolot", // Replace with your EmailJS service ID
        "template_ouygscl", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Muhammad Abdullah", // Your name
          reply_to: formData.email,
        },
        "ofq2JjZy67wwrVZfy" // Replace with your EmailJS public key
      );
      submitStatus = "success";
      // Reset form after successful submission
      formData = {
        name: "",
        email: "",
        message: "",
      };
    } catch (error) {
      console.error("Failed to send email:", error);
      submitStatus = "error";
    } finally {
      isSubmitting = false;
    }
  };
</script>

<section id="contact" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-12">Get in Touch</h2>

    <div class="max-w-2xl mx-auto">
      <form on:submit={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
            style="outline: none;"
          />
        </div>

        <div>
          <label for="email" class="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
            style="outline: none;"
          />
        </div>

        <div>
          <label for="message" class="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            bind:value={formData.message}
            rows="5"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
            style="outline: none;"
          ></textarea>
        </div>

        {#if submitStatus === "success"}
          <div class="p-4 bg-green-100 text-green-700 rounded-lg">
            Message sent successfully! I'll get back to you soon.
          </div>
        {/if}

        {#if submitStatus === "error"}
          <div class="p-4 bg-red-100 text-red-700 rounded-lg">
            Failed to send message. Please try again or contact me directly via
            email.
          </div>
        {/if}

        <button
          type="submit"
          class="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
          disabled={isSubmitting}
        >
          {#if isSubmitting}
            Sending...
          {:else}
          &#128232; Send Message
          {/if}
        </button>
      </form>
    </div>
  </div>
</section>
