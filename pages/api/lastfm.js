let fetch = require("isomorphic-unfetch")
export default (req, res) => {
  let url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.fm_user}&api_key=${process.env.fm_key}&format=json`
  console.log(url)
  return fetch(url)
	.then(res => res.json())
	.then(json => res.send(json) );
};