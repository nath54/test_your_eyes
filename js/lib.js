


function randint(a,b){
    return parseInt(a+Math.random()*(b-a));
}

function tocl(c){
    return "rgb("+c[0]+","+c[1]+","+c[2]+")";
}

function clrand(){
    return [randint(0,255),randint(0,255),randint(0,255)];
}

function modifcl(cla,val){
    var clb=Array.from(cla);
    var cond=true;
    while( cond ){
        for(x=0;x<3;x++){
            if(randint(1,2)){
                clb[x]+=val;
            }
            else{
                clb[x]-=val;
            }
            if(clb[x]<0){ clb[x]=0;}
            else if(clb[x]>255){ clb[x]=255; };
        }
        if( (Math.abs(clb[0]-cla[0])>val/10 || Math.abs(clb[1]-cla[1])>val/10 || Math.abs(clb[2]-cla[2])>val/10) && !(clb[0]==cla[0] && clb[1]==cla[1] && clb[2]==cla[2]) ){
            cond=false;
        }
    }
    return clb;
}



