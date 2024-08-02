function encrypt(){
    let msg=document.getElementById("txtMessageInput").value, m={e:"enter",i:"imes",a:"ai",o:"ober",u:"ufat"};
    if (!(/^[a-z ]+$/.test(msg))) return alert("Entrada no válida.")
    else document.getElementById('txtMessageOutput').value=msg.replace(/e|i|a|o|u/g,c=>m[c]);
}

function decrypt() {
    let msg=document.getElementById("txtMessageInput").value, m={enter:"e",imes:"i",ai:"a",ober:"o",ufat: "u"};
    if (!(/^[a-z ]+$/.test(msg))) return alert("Entrada no válida.")
    else document.getElementById('txtMessageOutput').value=msg.replace(/enter|imes|ai|ober|ufat/g,c=>m[c]);
}

function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById('txtMessageOutput').value);
} 

function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
  }

function hideIfEmpty(){
    m = document.getElementById("txtMessageInput").value
    if (m == ""){
        document.getElementById("nf1").style.visibility="visible";  
        document.getElementById("nf2").style.visibility="visible";   
        document.getElementById("nf3").style.visibility="visible";   
        document.getElementById("txtMessageOutput").style.visibility="hidden"; 
        document.getElementById("copyButton").style.visibility="hidden"; 
        document.getElementById("txtMessageOutput").value = ""; 
    }
    else{
        document.getElementById("nf1").style.visibility="hidden";  
        document.getElementById("nf2").style.visibility="hidden";   
        document.getElementById("nf3").style.visibility="hidden";   
        document.getElementById("txtMessageOutput").style.visibility="visible"; 
        document.getElementById("copyButton").style.visibility="visible"; 
        document.getElementById("txtMessageOutput").value = m; 
    }
}