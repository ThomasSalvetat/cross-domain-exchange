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
    console.log(folderUpdateButton);
    folderUpdateButton.onclick = onFolderUpdated;
}


(function() {
    setupListener();
    console.log(window.frames);
})();