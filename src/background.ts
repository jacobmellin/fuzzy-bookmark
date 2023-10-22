chrome.commands.onCommand.addListener((command) => {
    // console.log(`Command: ${command}`);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if(typeof tabs[0] !== 'undefined') {
            chrome.tabs.sendMessage(tabs[0].id!, { command });
        }
    })
});
