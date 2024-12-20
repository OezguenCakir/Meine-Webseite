const owner = "OezguenCakir";
const repo = "Meine-Webseite";

async function fetchLastCommitDate() {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`);
    const data = await response.json();
    const lastCommitDate = new Date(data[0].commit.author.date);
    document.getElementById("last-commit-date").innerText = lastCommitDate.toLocaleDateString();
  } catch (error) {
    console.error("Error fetching last commit date:", error);
    document.getElementById("last-commit-date").innerText = "Ladefehler 😔";
  }
}

fetchLastCommitDate();

async function fetchLastCommitTitle() {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`);
    const data = await response.json();
    const lastCommitMessage = data[0].commit.message;
    const lastCommitTitle = lastCommitMessage.split("\n")[0]; // First line of the commit message
    document.getElementById("last-commit-title").innerText = lastCommitTitle;
  } catch (error) {
    console.error("Error fetching last commit title:", error);
    document.getElementById("last-commit-title").innerText = "Ladefehler 😔";
  }
}

fetchLastCommitTitle();
