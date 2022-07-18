const chromeLauncher = require('chrome-launcher');
const CDP = require('chrome-remote-interface');
const file = require('fs');
var check = 1;

(async function() {
    async function launchChrome() {
      return await chromeLauncher.launch({
        chromeFlags: [
          '--no-first-run',
          '--headless',
          '--disable-gpu',
          '--no-sandbox'
        ]
      });
    }

    const chrome = await launchChrome();
    const protocol = await CDP({
      port: chrome.port
    });

    const { DOM, Page, Emulation, Runtime } = protocol;

    await Promise.all([
      Page.enable(),
      Runtime.enable(),
      DOM.enable()
    ]);

    const { frameId } = await Page.navigate({ url: 'https://url/' });
    await Page.loadEventFired();
    const script1 = "window.status";
    while(check){
        var result = await Runtime.evaluate({
            expression: script1
        });
        if(result.result.value=='ready_to_print'){
            check = 0;
        }
    }

    let { data } = await Page.printToPDF({
      landscape: false,
      printBackground: true,
      scale: 0.7
    });

    file.writeFile('print.pdf', Buffer.from(data, 'base64'), 'base64', function(err) {
      if (err) {
        console.log(err);
      }

      protocol.close();
      chrome.kill();
    });
  })();