function Get(URL){
  var request = new XMLHttpRequest();
  request.open("GET", URL, false);
  request.send(null);
  return request.responseText;
}

chrome.browserAction.onClicked.addListener(function() {
  var problemList = JSON.parse(Get("http://codeforces.com/api/problemset.problems"));
  var rnd = Math.ceil(Math.random() * problemList.result.problems.length);
  var problem = problemList.result.problems[rnd];
  chrome.tabs.create({'url' : "http://www.codeforces.com/problemset/problem/"+problem.contestId+"/"+problem.index});
});
