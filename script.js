const stages = [
  {
    label: "Round 0",
    title: "Initial ambiguous query",
    body:
      'The query "the chair" maps to multiple candidates, so the system keeps several plausible objects active.',
    image: "assets/frame-query.jpg",
    alt: "Initial ambiguous query with candidate boxes",
  },
  {
    label: "Round 1",
    title: "Clarification question",
    body:
      "The model asks about a spatial relation that can split the remaining candidate set.",
    image: "assets/frame-question.jpg",
    alt: "Model asks a clarification question about chairs near the door",
  },
  {
    label: "Round 1",
    title: "Human feedback",
    body:
      "The answer is folded back into the query, pruning candidates that do not satisfy the new constraint.",
    image: "assets/frame-answer.jpg",
    alt: "Human answer updates the query and filters candidate chairs",
  },
  {
    label: "Final",
    title: "Resolved grounding",
    body:
      "After clarification, the candidate set is reduced and the target object can be grounded more reliably.",
    image: "assets/frame-final.jpg",
    alt: "Final grounded target after interactive disambiguation",
  },
];

const buttons = document.querySelectorAll(".stage-button");
const stageImage = document.querySelector("#stage-image");
const stageLabel = document.querySelector("#stage-label");
const stageTitle = document.querySelector("#stage-title");
const stageBody = document.querySelector("#stage-body");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const stage = stages[Number(button.dataset.stage)];
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    stageImage.src = stage.image;
    stageImage.alt = stage.alt;
    stageLabel.textContent = stage.label;
    stageTitle.textContent = stage.title;
    stageBody.textContent = stage.body;
  });
});

const copyButton = document.querySelector("[data-copy-bibtex]");
const bibtex = document.querySelector("#bibtex");

copyButton?.addEventListener("click", async () => {
  const text = bibtex.innerText.trim();
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1400);
  } catch {
    copyButton.textContent = "Select text";
  }
});
