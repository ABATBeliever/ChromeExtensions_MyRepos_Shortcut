(async () => {
  const username = await new Promise((resolve) => {
    chrome.storage.sync.get(["githubUsername"], (result) => {
      resolve(result.githubUsername);
    });
  });

  if (!username) return;

  const sidebar = document.querySelector(".dashboard-sidebar");
  if (!sidebar) return;

  const repoUrl = `https://github.com/${username}?tab=repositories`;

  const button = document.createElement("a");
  button.textContent = `Go to ${username} 's repository`;
  button.href = repoUrl;
  button.className = "btn btn-sm btn-success mb-3";
  button.style.display = "inline-block";

  sidebar.insertBefore(button, sidebar.firstChild);
})();
