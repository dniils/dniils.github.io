import { defineStore } from "pinia";

export const useReposStore = defineStore("repos", {
  state: () => ({
    repos: [],
    reposToShare: [
      "users-router-vuejs",
      "angular-test-task",
      "quiz",
      "product-card",
      "interactive-card-details-form-main",
      "interactive-rating-component-main",
    ],
  }),
  getters: {},
  actions: {
    async fetchRepos() {
      const f = await fetch("https://api.github.com/users/dniils/repos");
      const repos = await f.json();
      this.repos = await repos.filter((repo) =>
        this.reposToShare.includes(repo.name)
      );
      this.setLanguagesForRepos();
    },

    setLanguagesForRepos() {
      this.repos.forEach(
        async (repo) => (repo.languages = await this.fetchLanguages(repo.name))
      );
    },

    async fetchLanguages(repoName) {
      const f = await fetch(
        `https://api.github.com/repos/dniils/${repoName}/languages`
      );
      const langs = await f.json();
      return Object.keys(langs);
    },
  },
});
