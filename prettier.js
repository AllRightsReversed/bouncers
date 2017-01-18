const prettier = require("prettier");

prettier.format(source, {
  // Fit code within this line limit
  printWidth: 80,

  // Number of spaces it should use per tab
  tabWidth: 2,

  // Use the flow parser instead of babylon
  useFlowParser: false,

  // If true, will use single instead of double quotes
  singleQuote: false,

  // Controls the printing of trailing commas wherever possible
  trailingComma: false,

  // Controls the printing of spaces inside array and objects
  bracketSpacing: true
});
