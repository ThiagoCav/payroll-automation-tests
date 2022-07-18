export default (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
      if (browser.name === 'chrome' && browser.isHeadless) {
        launchOptions.args.push('--disable-gpu');
        return launchOptions
      }
    });
  }

//   module.exports = (on, config) => {
//     /** the rest of your plugins... **/
//     /** the rest of your plugins... **/
//     require('cypress-log-to-output').default.install(on)
//     // or, if there is already a before:browser:launch handler, use .browserLaunchHandler inside of it
//     // @see https://github.com/flotwig/cypress-log-to-output/issues/5
//   }