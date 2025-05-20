module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [2, "always", ["feat", "fix", "wip", "patch", "build"]],
        "type-empty": [0, "never"],
        "subject-empty": [0, "never"],
    },
}
