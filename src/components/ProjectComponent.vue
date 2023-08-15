<template>
  <div class="projects-container">
    <div class="projects">
      <div v-for="repo in store.repos" :key="repo" class="projects__item">
        <div class="projects__info">
          <div class="projects__title">{{ repo.name }}</div>
          <div class="projects__description">
            {{ repo.description }}
          </div>
          <div class="projects__technologies">
            <span
              v-for="lang in repo.languages"
              :key="lang"
              class="projects__technology"
              >{{ lang }}</span
            >
          </div>
          <div class="projects__links">
            <a
              :href="`https://github.com/dniils/${repo.name}`"
              class="projects__link"
              target="_blank"
              >code</a
            >
            <a
              :href="`https://dniils.github.io/${repo.name}`"
              class="projects__link"
              target="_blank"
              >demo</a
            >
          </div>
        </div>
        <img
          class="projects__image"
          :src="require(`@/assets/images/${repo.name}.jpg`)"
          :alt="`${repo.name}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useReposStore } from "@/store/index.js";

const store = useReposStore();

if (store.repos.length === 0) {
  store.fetchRepos();
}
</script>
