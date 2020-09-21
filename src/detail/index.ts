import * as template from "./partials/homepage.handlebars";

function sendFolderUpdated(window: Window) {
    console.info("Send event folder updated");
    console.log(window.opener);
    window.opener?.postMessage({
        folderSelected: "1234"
    }, "https://cross-domain-exchange-hub.web.app/");
}

 function onFolderUpdated() {
    sendFolderUpdated(window);
}

 function setupListener() {
    const folderUpdateButton = document.querySelector("#folderUpdateButton") as HTMLButtonElement;
    folderUpdateButton.onclick = onFolderUpdated;
}

function loadContent() {
    const div = document.createElement('div');
	div.innerHTML = template();
    document.body.appendChild(div);
}

window.onload = () => {
    loadContent();
    setupListener();
};