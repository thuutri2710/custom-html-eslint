const { cwd } = process;
const { resolve } = require("path");
const { writeFileSync } = require("fs");
const rulesRecord = require("@thuutri2710/eslint-plugin/lib/rules");
const prettier = require("prettier");

function generateRulesMarkdown() {
  const rules = {
    ["Best Practice"]: [],
    SEO: [],
    Accessibility: [],
    Style: [],
  };
  Object.entries(rulesRecord).forEach(([ruleId, rule]) =>
    rules[rule.meta.docs.category].push({ ruleId, rule })
  );

  Object.values(rules).forEach((list) =>
    list.sort((a, b) => a.ruleId.localeCompare(b.ruleId))
  );

  const lines = [];
  lines.push(
    "<!-- This file is generated by 'yarn docs' command. Don't edit this -->"
  );
  lines.push("# Rules");

  lines.push(
    `- 🔧: Meaning the rule can fix problems automatically by running eslint \`--fix\` options.\n- ⭐: Meaning the rule is recommended.`
  );

  const pushRuleItem = ({ ruleId, rule }) => {
    let meta = "";
    if (rule.meta.docs.recommended) meta += "⭐";
    if (rule.meta.fixable) meta += "🔧";
    lines.push(
      `| [${ruleId}](rules/${ruleId}) | ${rule.meta.docs.description} | ${meta} |`
    );
  };

  lines.push("## Best Practice\n");
  lines.push("| Rule | Description |  |");
  lines.push("| --- | --- | --- |");
  rules["Best Practice"].forEach(pushRuleItem);
  lines.push("## SEO");
  lines.push("| Rule | Description |  |");
  lines.push("| --- | --- | --- |");
  rules.SEO.forEach(pushRuleItem);
  lines.push("## Accessibility\n");
  lines.push("| Rule | Description |  |");
  lines.push("| --- | --- | --- |");
  rules.Accessibility.forEach(pushRuleItem);
  lines.push("## Style\n");
  lines.push("| Rule | Description |  |");
  lines.push("| --- | --- | --- |");
  rules.Style.forEach(pushRuleItem);

  const markedown = lines.join("\n");

  writeFileSync(
    resolve(cwd(), "../../docs/rules.md"),
    prettier.format(markedown, {
      parser: "markdown",
    })
  );
}

module.exports = function generateMarkdowns() {
  generateRulesMarkdown();
};
