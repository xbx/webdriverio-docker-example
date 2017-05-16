var     webdriverio = require('webdriverio'),
        options = {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            host: 'selenium',
            port: 4444
        }

console.log('Starting testing.')

webdriverio
    .remote(options)
    .init()
    .url('http://app:3000')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title)
    })
    .catch(function(e){
      console.log('Error!')
      console.log(e)
    })
    .end()
