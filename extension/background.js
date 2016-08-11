function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

chrome.browserAction.onClicked.addListener(function() {
  var json_obj = JSON.parse(Get("http://codeforces.com/api/problemset.problems"));
  rnd=Math.ceil(Math.random()*json_obj.result.problems.length);
  contestId=json_obj.result.problems[rnd].contestId;
  index=json_obj.result.problems[rnd].index
  chrome.tabs.create({'url': "http://www.codeforces.com/problemset/problem/"+contestId+"/"+index});
}); 
