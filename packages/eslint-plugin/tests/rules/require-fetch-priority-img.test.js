const createRuleTester = require("../rule-tester");
const rule = require("../../lib/rules/require-fetch-priority-img");

const ruleTester = createRuleTester();

ruleTester.run("require-fetch-priority-img", rule, {
  valid: [
    {
      code: `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      
      <style>
          .a {
              color: red;
          }
      
          .b {
              color: blue
          }
      </style>
      
      <body>
          <img alt="ss" height="2" width="23">
          <img alt="ss" height="2" width="23">
          <img alt="ss" height="1" width="12">
      </body>
      
      <script>
          let a = 5;
          a = a + 1;
          console.log(a);
      </script>
      
      </html>
      
      `,
    },
  ],
});
