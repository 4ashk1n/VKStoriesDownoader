function get_current_tab() {
	let onclck = "let vid = document.getElementsByClassName(`stories_video`)[0].src;console.log(vid);"
	// let onclck = "open(`https://learn.javascript.ru/es-string`)"
  chrome.tabs.executeScript({
    code: `
	console.log("STORIES-DOWNLOADER ACTIVATED");
    document.body.innerHTML += "<a id='stories_video_link' style='    position: fixed;top: 20px;left: 20px;z-index: 999999;font-size: 50px;background: gray;padding: 10px;border: black 5px solid;border-radius: 10px;' href='' target='_blank' download='filename'>Скачать</a>"  
	function updlink(){document.getElementById('stories_video_link').href = document.getElementsByClassName('stories_video')[0].src;}
	document.addEventListener("mousedown", updlink)`
})
}
var checkBox = document.getElementById("cbox");
var checkBoxValue = false;

try{
  checkBox.addEventListener("click", function () {
    checkBoxValue = checkBox.checked;
    get_current_tab();
  })
}
catch (e) {
  console.log("Oh, don't worry... Another stupid error.")
}
// alert(document.getElementsByClassName("stories_video")[0])

// document.addEventListener('keypress', function (e) {
//   if (e.ctrlKey && e.key == "ArrowDown"){
//     alert(document.getElementsByClassName("stories_video")[0]);
//   }
//
// })
// open(document.getElementsByClassName(\'stories_video\')[0].src)