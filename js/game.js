
function get_size_of_window(){
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        tx = win.innerWidth || docElem.clientWidth || body.clientWidth,
        ty = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
    tx=parseInt(0.97*tx);
    ty=parseInt(0.97*ty);
    //alert(tx + ' × ' + ty);
    window.tx=tx;
    window.ty=ty;
    var canvas=document.getElementById("canvas");
    canvas.width=tx;
    canvas.height=ty;
}


function init(){
    window.niv=0;
    //
    var parameters = location.search.substring(1).split("&");
    for(p of parameters){
        var pp=p.split("=");
        if(pp[0]=="deb_niv"){
            window.niv=parseInt(pp[1]);
        }
    }
    //
    get_size_of_window();
    window.bonne_rep=-1;
    window.etape=0;
    window.fini=false;
    creation_level();
}






function get_case_clicked(cx,cy){
    var i=0;
    for(xx=0;xx<=window.nbc;xx++){
        for(yy=0;yy<=window.nbl;yy++){
            if(cx>xx*window.ctx && cy>yy*window.cty && cx<(xx+1)*window.ctx && cy<(yy+1)*window.cty){
                //alert(i);
                return i;
            }
            i++;
        }
    }
    return null;
}



function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    //console.log("x: " + x + " y: " + y)
    if(window.fini){
        alert("la partie est finie");
        return;
    }
    //
    if(window.etape==0){
        creation_level();
        window.etape=1;
    }
    else if(window.etape==1){
        var cc=get_case_clicked(x,y);
        window.clique=cc;
        if(cc!=null){
            if(cc==window.bonne_rep){
                //alert("bien !");
            }
            else{
                window.fini=true;
                alert("dommage, vous avez perdu la partie !");
                alert("Vos yeux voient les couleurs "+parseFloat((window.niv-1)/253.0*100.0)+"% correctement");
                var bb=document.createElement("button");
                var aa=document.createElement("a");
                bb.innerHTML="Réessayer";
                aa.setAttribute("href","game.html");
                aa.appendChild(bb);
                document.body.appendChild(aa);            }
        }
        aff_niv(true,cc,true);
        window.etape=0;
    }
    else if(window.etape==2){
        aff_niv(false,cc,false);
        window.etape=0;
    }
}

const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})









