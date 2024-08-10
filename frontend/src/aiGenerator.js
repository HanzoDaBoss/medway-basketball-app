import ollama from "ollama";

const output = await ollama.generate({
  model: "llama3.1",
  prompt: "Why is the sky blue?",
});
console.log(output.response);
