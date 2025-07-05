      document.addEventListener("DOMContentLoaded", () => {
        const usernameInput = document.getElementById("username");
        const status = document.getElementById("status");

        chrome.storage.sync.get(["githubUsername"], (result) => {
          if (result.githubUsername) {
            usernameInput.value = result.githubUsername;
          }
        });

        document.getElementById("save").addEventListener("click", () => {
          const username = usernameInput.value.trim();
          chrome.storage.sync.set({ githubUsername: username }, () => {
            status.textContent = "Save OK";
            setTimeout(() => status.textContent = "", 2000);
          });
        });
      });