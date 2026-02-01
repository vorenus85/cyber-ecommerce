<template>
  <div class="project-credits">
    <span> © 2024 - Perge János </span>

    <div class="links ml-5">
      <a
        :href="githubRepoUrl"
        target="_blank"
        rel="noopener"
        aria-label="View source code on GitHub"
      >
        <IconGithub />
      </a>

      <a :href="linkedinUrl" target="_blank" rel="noopener" aria-label="View Linkedin profile">
        <IconLinkedin />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconGithub from '../icons/commons/iconGithub.vue'
import IconLinkedin from '../icons/commons/iconLinkedin.vue'

const linkedinUrl = 'https://hu.linkedin.com/in/janos-perge-508514142'
const githubRepoUrl = 'https://github.com/vorenus85/cyber-ecommerce'
</script>

<style scoped>
.project-credits {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  border-radius: 10px;
  margin-top: 1.5rem;
}

.links {
  display: flex;
  gap: 0.5rem;
}

.links a {
  color: inherit;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #fff;
}

@media (min-width: 768px) {
  .project-credits {
    margin-top: 0;
  }
}
</style>
