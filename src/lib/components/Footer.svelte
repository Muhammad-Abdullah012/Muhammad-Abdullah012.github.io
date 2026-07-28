<script>
  import { profile } from "../../assets/data.json";
</script>

<footer class="bg-slate-50 py-8">
  <div class="container mx-auto px-6 text-center">
    <p class="text-gray-600">
      &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
    </p>
    <p class="mt-2">
      <a href="/privacy.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
    </p>
  </div>
</footer>