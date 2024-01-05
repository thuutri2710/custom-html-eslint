const { RULE_CATEGORY } = require("../constants");

const MESSAGE_IDS = {
  WARNING_USE_FETCH_PRIORITY:
    "Consider when using `fetchPriority=high` many times. It's unnecessary",
};

/**
 * @type {Rule}
 */
module.exports = {
  meta: {
    type: "code",

    docs: {
      description:
        "Consider use `fetchPriority=true` for img element if it's largest in viewport of page. Avoid using `fetchPriority=high` many times. The `fetchPriority` attribute is used to indicate that the element should be fetched with high priority.",
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
      [MESSAGE_IDS.WARNING_USE_FETCH_PRIORITY]:
        "Consider when using `fetchPriority=high` many times. It's unnecessary",
    },
  },

  create(context) {
    const imgNodes = [];

    return {
      Program(node) {
        const htmlNode = node.body.find(
          (node) => node.type === "Tag" && node.name === "html"
        );

        travelNode(htmlNode, (node) => {
          if (node.type === "Tag" && node.name === "img") {
            // add img node which has fetchPriority attribute is high
            console.log(node, "***************");
            if (
              node.attributes.find(
                (attr) =>
                  attr.key.value === "fetchPriority" &&
                  attr.value.value === "high"
              )
            ) {
              console.log(node);
              imgNodes.push(node);
            }
          }
        });

        const hasManyHighFetchPriority = imgNodes.length > 1;

        if (!hasManyHighFetchPriority) {
          context.report({
            node: {
              loc: {
                start: imgNodes[0].openStart.loc.start,
                end: imgNodes[0].openEnd.loc.end,
              },
              range: [
                imgNodes[0].openStart.range[0],
                imgNodes[0].openEnd.range[1],
              ],
            },
            messageId: MESSAGE_IDS.WARNING_USE_FETCH_PRIORITY,
          });
        }
      },
    };
  },
};

function travelNode(node, callback) {
  callback(node);

  if (node.children && node.children.length) {
    node.children.forEach((child) => travelNode(child, callback));
  }
}
