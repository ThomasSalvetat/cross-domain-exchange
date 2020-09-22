
import * as template from "./partials/hub.handlebars";
import './polyfill';
import { BroadcastChannel } from "broadcast-channel";

function getBrowser() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }

 const browserInfo = getBrowser();
 const browserName = `${browserInfo.name} - ${browserInfo.version}`;

function listenFolderUpdated() {
    console.info("Listening folder updated");
    const channel = new BroadcastChannel("my_broadcast_channel");
    console.log(channel);
    channel.onmessage = (message) => {
        console.log('receiving message');
        const responseBody = document.getElementById('response_body') as HTMLPreElement;
        responseBody.textContent = JSON.stringify(message);

        const postMessageSupport = document.getElementById('post_message_support') as HTMLTitleElement;
        postMessageSupport.textContent = `This browser (${browserName}) supports broadcast channels()`;
    };
}

function loadContent() {
    const div = document.createElement('div');
	div.innerHTML = template({
		browserName
	});
    document.body.appendChild(div);
}

window.onload = () => {
    loadContent();
    listenFolderUpdated();
};