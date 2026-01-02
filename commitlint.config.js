export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2, "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refac",
        "perf",
        "test",
        "chore",
        "ci",
        "build",
        "revert",
        "deps",
      ]
    ],
  }
};
