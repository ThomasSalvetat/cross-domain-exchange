import './polyfill';
import { BroadcastChannel } from "broadcast-channel";

function sendFolderUpdated() {
    console.info("Send event folder updated");
    const channel = new BroadcastChannel("my_broadcast_channel");
    console.log(channel);
    channel.postMessage({
        message: "1234",
        source: "collect"
    });
}

 function onFolderUpdated() {
    sendFolderUpdated();
}

 function setupListener() {
    const folderUpdateButton = document.querySelector("#folderUpdateButton") as HTMLButtonElement;
    folderUpdateButton.onclick = onFolderUpdated;
}

window.onload = () => {
    setupListener();
};