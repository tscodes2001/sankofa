// Google Apps Script: paste into script.google.com (bound to a Google Sheet). Deploy > Web app > Execute as: Me, Access: Anyone.
var LIMIT = 20;
function sheet(){ var s=SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]; if(s.getLastRow()===0) s.appendRow(["No.","Name","DOB","Location","Time"]); return s; }
function out(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function doGet(){ var n=Math.max(0,sheet().getLastRow()-1); return out({left:Math.max(0,LIMIT-n),closed:n>=LIMIT}); }
function doPost(e){
  var lock=LockService.getScriptLock(); lock.waitLock(10000);
  try{
    var s=sheet(), n=Math.max(0,s.getLastRow()-1);
    if(n>=LIMIT) return out({closed:true});
    var d=JSON.parse(e.postData.contents), num=n+1;
    s.appendRow([num,d.name,d.dob,d.loc,new Date()]);
    return out({ok:true,number:num});
  } finally { lock.releaseLock(); }
}
