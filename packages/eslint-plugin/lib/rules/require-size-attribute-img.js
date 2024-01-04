const { RULE_CATEGORY } = require("../constants");

const MESSAGE_IDS = {
  MISSING_SIZE: "missing with or height attribute for img element",
};

/**
 * @type {Rule}
 */
module.exports = {
  meta: {
    type: "code",

    docs: {
      description: "Require `height` and `width` attribute at `<img>` tag",
      category: RULE_CATEGORY.BEST_PRACTICE,
      recommended: true,
    },

    fixable: null,
    schema: [
      {
        type: "object",
        properties: {
          substitute: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
    ],
    messages: {
      [MESSAGE_IDS.MISSING_SIZE]:
        "Require `height` and `width` attribute at `<img>` tag",
    },
  },

  create(context) {
    const substitute =
      (context.options &&
        context.options[0] &&
        context.options[0].substitute) ||
      [];

    return {
      Tag(node) {
        if (node.name !== "img") {
          return;
        }
        if (!hasAltAttrAndValue(node, substitute)) {
          context.report({
            node: {
              loc: {
                start: node.openStart.loc.start,
                end: node.openEnd.loc.end,
              },
              range: [node.openStart.range[0], node.openEnd.range[1]],
            },
            messageId: MESSAGE_IDS.MISSING_SIZE,
          });
        }
      },
    };
  },
};

/**
 * @param {string} name: name of attribute
 * @param {TagNode} node
 * @param {string[]} substitute
 * @returns
 */

function hasKeyAttributeAndValue(name, node, substitute = []) {
  return node.attributes.some((attr) => {
    if (attr.key && attr.value) {
      return (
        (attr.key.value === name || substitute.includes(attr.key.value)) &&
        typeof attr.value.value === "string"
      );
    }
    return false;
  });
}

/**
 *
 * @param {TagNode} node
 * @param {string[]} substitute
 * @returns
 */
function hasAltAttrAndValue(node, substitute = []) {
  const hasHeightAttribute = hasKeyAttributeAndValue(
    "height",
    node,
    substitute
  );

  const hasWidthAttribute = hasKeyAttributeAndValue("width", node, substitute);

  return hasHeightAttribute && hasWidthAttribute;
}
