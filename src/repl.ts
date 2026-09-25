import { createInterface } from "node:readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > "
})

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(" ").filter((x) => x.trim().length>0)
}

export function startREPL() {
  rl.prompt();
  rl.on("line", (line: string) => {
    let input = cleanInput(line)
    if (input.length == 0) {
      rl.prompt();
    } else {
      console.log(`Your command was: ${input[0]}`);
      rl.prompt();
    }
  })
}
