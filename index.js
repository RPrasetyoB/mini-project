function luassegi()
{
    var segiA=document.getElementById("segiA").value;
    var b=document.getElementById("segib").value;
    var segiP=document.getElementById("segiP").value;
    var h=document.getElementById("segih").value;

    document.getElementById("segiA").value=b*h*0.5;
    document.getElementById("segiP").value=b*3;
}

function clearT()
{
    document.getElementById("segih").value="";
    document.getElementById("segib").value="";
    document.getElementById("segiA").value="";
    document.getElementById("segiP").value="";
}
function luasjaja()
{
    var jajarA=document.getElementById("jajarA").value;
    var b=document.getElementById("jajarb").value;
    var jajarP=document.getElementById("jajarP").value;
    var h=document.getElementById("jajarh").value;
    var c=document.getElementById("jajarc").value;
    
            document.getElementById("jajarA").value=b*h;
        document.getElementById("jajarP").value=(2*b)+(2*c);
    if(c == "")
    {   
        document.getElementById("jajarP").value=0;
    }
    if(b == "")
    {
        document.getElementById("jajarP").value=0;
    }

}

function clearJ()
{
    document.getElementById("jajarh").value="";
    document.getElementById("jajarb").value="";
    document.getElementById("jajarA").value="";
    document.getElementById("jajarP").value="";
    document.getElementById("jajarc").value="";
}