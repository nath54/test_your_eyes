


function creation_level(){
    //creation du level
    if(niv<253){
        window.niv++;
        window.etape=1;
        window.cla=clrand();
        window.clb=modifcl(cla,(256-niv));
        window.nbc=randint(2,6);
        window.nbl=randint(2,6);
        window.bonne_rep=randint(0,parseInt((nbc*nbl)-1));
        window.ctx=window.tx/(nbc+1);
        window.cty=window.ty/(nbl+1);
        window.clique=null;
        //affichage du level
        aff_niv();
    }
    else{
        window.fini=true;
        alert("Vous avez fini la partie, vous avez les meilleurs yeux du monde !")
    }
}            










