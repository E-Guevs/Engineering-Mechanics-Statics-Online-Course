const checkbox = document.getElementById("hamburger-icon"),
  contents = document.querySelectorAll("#navbar li a");
for (let content of contents)
  content.onclick = () => {
    checkbox.checked = false;
  };
