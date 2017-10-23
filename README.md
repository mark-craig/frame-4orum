# frame-4orum
A JQuery script that embeds an iframe of the comments-4orum Django app into a given page.

*plugin.js* is the editable code. Build *bundle.js* via browserify with the command:
``
browserify plugin.js -o bundle.js
``

RawGit is tracking the bundle.js file in this repo. From the RawGit website:

Use this URL for development
https://rawgit.com/mark-craig/frame-4orum/master/bundle.js
* New changes you push to GitHub will be reflected within minutes.
* Excessive traffic will be throttled and blacklisted.
* If excessive traffic continues, RawGit will display a prominent error message on your website to try to get your attention.

Use this URL in production
https://cdn.rawgit.com/mark-craig/frame-4orum/ea5d1df9/bundle.js
* No traffic limits or throttling. Files are served via StackPath's super fast global CDN.
* Use a specific tag or commit hash in the URL (not a branch). Files are cached permanently based on the URL. Query strings are ignored.
* The catch: this is a free service, so there are no uptime or support guarantees.

# Demo
https://jsfiddle.net/Lwk3adcr/1/show/

# Usage
In the html for a given page:
```
<div id="4orum-plugin"></div>
<script src="https://rawgit.com/mark-craig/frame-4orum/master/bundle.js"></script>
```
