# ti.windows.utilities
Hyperloop-based utility module for UWP development


### Requirements
- [x] Titanium SDK 6.1.0.GA+
- [x] Hyperloop 2.1.0+

### Usage
Copy /lib/ti.windows.utilities.js to your /lib folder

````js
var utils = require('ti.windows.utilities');

console.log(utils.getDeviceFamily());

console.log(utils.isApiContractPresent('Windows.Media.Playlists.PlaylistsContract', 1));

console.log(utils.isApiContractPresent('Windows.Media.Playlists.PlaylistsContract', 2));

console.log(utils.isTypePresent('Windows.Phone.UI.Input.HardwareButtons'));
````

Docs at  https://ewanharris.github.io/ti.windows.utilities/

### License
Apache 2.0


Code contributions are greatly appreciated, please submit a new [pull request](https://github.com/hyperloop-modules/ti.hockeyapp/pull/new/master)!
