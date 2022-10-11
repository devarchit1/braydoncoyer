require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");

async function main() {
  const readmeTemplate = (
    await fs.readFile(path.join(process.cwd(), "./README.template.md"))
  ).toString("utf-8");

  const office_quote = await (
    await fetch("https://officeapi.dev/api/quotes/random")
  ).json();

  console.log(office_quote);
  const readmeTemplate = (
    await fs.readFile(path.join(process.cwd(), "./README.template.md"))
  ).toString("utf-8");

  const office_quote = await (
    await fetch("https://officeapi.dev/api/quotes/random")
  ).json();

  const readme = readmeTemplate
    .replace("{office_quote}", office_quote.data.content)
    .replace(
      "{office_character}",
      `- ${office_quote.data.character.firstname} ${office_quote.data.character.lastname}`
    );

  await fs.writeFile("README.md", readme);

  const office_quote = await (
    await fetch("https://officeapi.dev/api/quotes/random")
  ).json();

  console.log(office_quote);
}

main();

let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);
