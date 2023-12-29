import { parseForESLint } from "@thuutri2710/parser";
import plugin from "@thuutri2710/eslint-plugin";
import { Linter as WebLinter } from "@thuutri2710/web-linter";

/**
 * @typedef {import("eslint").Linter} ESLinter;
 * @typedef {import("eslint").Rule.RuleModule } RuleModule
 * @typedef {import("eslint").Linter.RulesRecord} RulesRecord
 * @typedef {import('eslint').Linter.LintMessage} LintMessage
 * @typedef {import('eslint').Linter.LintMessage} LintMessage
 * @typedef {Object.<string, RuleModule>} RulesModules
 *
 * @callback OnChangeHadnler
 * @param {{ messages: LintMessage[], output: string }}
 * @returns {void}
 *
 * @callback OnErrorHhandler
 * @param {Error}
 * @returns {void}
 */

/**
 * @returns {RulesModules}
 */
function allRules() {
  return Object.entries(plugin.rules).reduce(
    (rules, [name, rule]) => ({
      ...rules,
      [`@thuutri2710/${name}`]: rule,
    }),
    {}
  );
}

export default class Linter {
  constructor() {
    /**
     * @type {ESLinter}
     */
    this._linter = new WebLinter();
    /**
     * @type {RulesRecord}
     */
    this._rules = {
      "@thuutri2710/indent": "error",
    };
    this._defineParser();
    this._defineRules();
  }

  /**
   * @private
   */
  _defineRules() {
    this._linter.defineRules(allRules());
  }

  /**
   * @private
   */
  _defineParser() {
    this._linter.defineParser("@thuutri2710/parser", {
      parseForESLint(code) {
        return parseForESLint(code);
      },
    });
  }

  /**
   * Lints the given code and returns the result.
   * @param {string} code
   * @param {boolean?} fix
   * @returns {{messages: LintMessage[], output: string, fatalMessage?: LintMessage}}
   */
  lint(code, fix = false) {
    try {
      let fatalMessage;
      const messages = this._linter.verify(code, {
        parser: "@thuutri2710/parser",
        rules: this._rules,
      });
      const { output } = this._linter.verifyAndFix(
        code,
        {
          parser: "@thuutri2710/parser",
          rules: this._rules,
        },
        { fix }
      );
      if (messages.length && messages[0].fatal) {
        fatalMessage = messages[0];
      }
      return { messages, output };
    } catch (error) {
      console.error(error);
      return {
        messages: [],
        output: "Error!",
      };
    }
  }

  /**
   * Change rules configuration.
   * @param {RulesRecord} rules
   */
  setRules(rules) {
    this._rules = rules;
  }
}
