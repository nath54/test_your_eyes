


function aff_text(text="",x=0,y=0,width=1,font="30px Arial",cl1="rgb(255,255,255)",cl2="rgb(0,0,0)"){
    const canvas=document.getElementById("canvas");
    const context=canvas.getContext("2d");
    context.lineWidth = width;
    context.font=font;
    context.fillStyle=cl1;
    context.fillText(text,x,y);
    context.strokeStyle=cl2;
    context.strokeText(text,x,y);
}



function aff_niv(correction=false,clique=-1,bordure=true){
    const canvas=document.getElementById("canvas");
    const context=canvas.getContext("2d");
    var i=0;
    //console.log("cl_dif : "+window.bonne_rep+" cla : "+window.cla+" , clb : "+window.clb+" , nbc = "+window.nbc+" , nbl = "+window.nbl);
    for(xx=0;xx<=window.nbc;xx++){
        for(yy=0;yy<=window.nbl;yy++){
            if(correction){
                //correction
                if(window.bonne_rep!=i){ context.fillStyle=tocl(window.cla); }
                else{
                    context.fillStyle=tocl(window.clb);
                };
                if(window.bonne_rep==i){
                    context.strokeStyle="rgb(0,255,0)";
                    context.lineWidth = 10;
                }
                else if(i==clique){
                    context.strokeStyle="rgb(255,0,0)";
                    context.lineWidth = 15;
                }
                else{
                    context.strokeStyle="rgb(0,0,0)";
                    context.lineWidth = 2;
                }
                
            }
            else{
                //normal
                if(window.bonne_rep!=i){ context.fillStyle=tocl(window.cla); }
                else{
                    context.fillStyle=tocl(window.clb);
                };
                context.strokeStyle="rgb(0,0,0)";
                context.lineWidth = 2;
            }
            console.log("cla : "+cla+" | clb : "+clb);
            context.fillRect(xx*window.ctx,yy*window.cty,window.ctx,window.cty);
            if(bordure){ context.strokeRect(xx*window.ctx,yy*window.cty,window.ctx,window.cty); }
            i++;
        }
    }
    aff_text(text="niv "+window.niv+"/253",x=35,y=35,width=1,font="30px Arial",cl1="rgb(255,255,255)",cl2="rgb(0,0,0)")
    if(window.etape==1 && window.clique!=null){
        if(window.clique==window.bonne_rep){
            aff_text("Bien !",100,100,3,"50px Arial","rgb(0,255,0)","rgb(0,0,0)");
        }
        else{
            aff_text("Faux !",100,100,3,"50px Arial","rgb(255,0,0)","rgb(0,0,0)");
        }
    }
    if(window.etape==1 && window.clique!=null){
        aff_text(text="veuillez cliquer pour passer au niveau suivant",x=205,y=205,width=2,font="40px Arial",cl1="rgb(255,255,255)",cl2="rgb(0,0,0)")
        //aff_text(text="veuillez cliquer pour mieux voir",x=205,y=205,width=1,font="30px Arial",cl1="rgb(255,255,255)",cl2="rgb(0,0,0)")
    }
    if(window.etape==2){
        aff_text(text="veuillez cliquer pour passer au niveau suivant",x=205,y=205,width=1,font="30px Arial",cl1="rgb(255,255,255)",cl2="rgb(0,0,0)")
    }
}