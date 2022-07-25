function setDisplay(type) {
    setMenu(type)
}

function setMenu(type)
{
    if (typeof type !== "number") return;

    let home = document.getElementById("menu-home");
    let intro = document.getElementById("menu-intro");
    let history = document.getElementById("menu-history");
    let mechanism = document.getElementById("menu-mechanism");
    let reference = document.getElementById("menu-reference");
    let about = document.getElementById("menu-about");
  
    switch (type) {
      case 0:
        activate(home);
        deactivate(intro);
        deactivate(history);
        deactivate(mechanism);
        deactivate(reference);
        deactivate(about);
        break;
      case 1:
        deactivate(home);
        activate(intro);
        deactivate(history);
        deactivate(mechanism);
        deactivate(reference);
        deactivate(about);
        break;
      case 2:
        deactivate(home);
        deactivate(intro);
        activate(history);
        deactivate(mechanism);
        deactivate(reference);
        deactivate(about);
        break;
      case 3:
        deactivate(home);
        deactivate(intro);
        deactivate(history);
        activate(mechanism);
        deactivate(reference);
        deactivate(about);
        break;
      case 4:
        deactivate(home);
        deactivate(intro);
        deactivate(history);
        deactivate(mechanism);
        activate(reference);
        deactivate(about);
        break;
      case 5:
        deactivate(home);
        deactivate(intro);
        deactivate(history);
        deactivate(mechanism);
        deactivate(reference);
        activate(about);
        break;
  
      default:
        break;
    }
}

function activate(element) {
  element.classList.add("active");
}
function deactivate(element) {
  if (element.classList.contains("active")) element.classList.remove("active");
}
