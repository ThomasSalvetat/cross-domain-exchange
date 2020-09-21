function sendFolderUpdated(window: Window) {
    console.info("Send event folder updated");
    console.log(window.opener);
    window.opener?.postMessage({
        folderSelected: "1234"
    }, "*");
}

 function onFolderUpdated() {
    sendFolderUpdated(window);
}

 function setupListener() {
    const folderUpdateButton = document.querySelector("#folderUpdateButton") as HTMLButtonElement;
    folderUpdateButton.onclick = onFolderUpdated;
}

window.onload = () => {
    setupListener();
};