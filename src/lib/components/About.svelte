<script>
  import { about } from "../../assets/data.json";
</script>

<section id="about" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
    <div class="prose max-w-3xl mx-auto">
      {@html about.description}
    </div>
  </div>
</section>
