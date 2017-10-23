var jquery = require('jquery')
var whatwgFetch = require('whatwg-fetch')


jquery(document).ready(function() {
  // Get the hostname and pathname from url (https://gist.github.com/jlong/2428561)
  let parser = document.createElement('a');
  parser.href = window.location.href
  let post_url = parser.host + parser.pathname
  console.log('post_url', post_url)
  // get post from database
  let forum_route = "https://comments-4orum.herokuapp.com/api/post/"
  let forum_url = "https://comments-4orum.herokuapp.com"
  // get data from server
  url = forum_route + post_url
  fetch(url)
  .then((response) => {
    return response.json()
  }).then((json) => {
    console.log('parsed json', json)
    // when promise fulfilled, perform the rest of our tasks
    post_path = json.path
    console.log('post_path', post_path);
    let embed_path = forum_url + post_path
    let style = "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>"
    let embed_lhs = "<div class='embed-container'><iframe src='"
    let embed_rhs = "' style='border:0'></iframe></div>"
    let responsive_embed = style + embed_lhs + embed_path + embed_rhs
    jquery("#4orum-plugin").html(responsive_embed)
    // done
  }).catch(function(ex) {
    console.log('parsing failed', ex)
    console.log('url', url)
  })

})
