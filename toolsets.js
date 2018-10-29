let switchval = 0;
let switchval2 = 0;

$(document).ready(function(){

/*checks if JS is loaded*/
let hal = "Hal-9000: ";
console.log(hal + "Hi Dave");
/*selects the temporal test input */
let txtField = $(".txtInpt");
let isClosed = $(".isClosed"); /*used to hide icons*/
let itOpens = $(".itOpens"); /*used to open the toolsets bar*/
let toolsNext = $(".toolsNext"); /*rotate thru toolsets when in small device mode*/
let err = " ¡error! working on it";
itOpens.hide();   
toolsNext.hide();
$(document).on('click','.control',function(){
    let contrl = $(this).attr('toolS1');
    let txtSet = "text indentation set to ";
    itOpens.hide();   
    switch(contrl)
    {
      case 'txtJust':
        console.log(hal + txtSet + "Justified");
        txtField.addClass("isJust");
        $(this).addClass("isSelected") ;
        break;
      case 'txtLeft':
        console.log(hal + txtSet + "Left");
        txtField.addClass("isLeft");   
        $(this).addClass("isSelected") ;
        break;
      case 'txtCntr':
        console.log(hal + txtSet + "Center");
        txtField.addClass("isCntr");
        $(this).addClass("isSelected") ;
        break;
      case 'txtRght':
        console.log(hal + txtSet + "Right");
        txtField.addClass("isRight");
        $(this).addClass("isSelected") ;
        break;
    }
    /*toolS2*/ 
    let contrl2 = $(this).attr('toolS2');
    let txtSet2 = "text decoration is set to "
    switch(contrl2)
    {
      case 'txtNorm':
        console.log(hal + txtSet2 + "Normal");
        txtField.removeClassExcept("txtInpt").css("font-family","");
        console.log(switchval);
        /*this is selected by default because its a normal text*/
        $(this).addClass("isSelected") ;
        break;
      case 'txtItlc':
        console.log(hal + txtSet2 + "Italic");
        txtField.addClass("isItlc");
        $(this).addClass("isSelected") ;
        break;
      case 'txtBold':
        console.log(hal + txtSet2 + "Bold");
        txtField.addClass("isBold");
        $(this).addClass("isSelected") ;
        break;
      case 'txtUndr':
        console.log(hal + txtSet2 + "Underline");
        txtField.addClass("isUndrLn");
        $(this).addClass("isSelected") ;
        break;
    }
     /*toolS3*/ 
    let contrl3 = $(this).attr('toolS3');
    let txtSet3 = "font size has changed "
    switch(contrl3)
    {
      case 'txtMins':
        console.log(hal + txtSet3 + "-" + err);
        break;
      case 'txtDflt':
        console.log(hal + txtSet3 + "Default" + err);
        break;
      case 'txtMaxi':
        console.log(hal + txtSet3 + "+" + err);
        break;
    }
     /*font Type 
    let fontFam = $(this).attr('cntrlFont');
    let fntFam = "font family selected "
    switch(fontFam)
    {
      case 'fntPrec':
        console.log(hal + fntFam + "previous" + err);
        break;
      case 'txtFont':
        console.log(hal + fntFam + "nothing" + err);        
        txtField.css("font-family","Dancing Script");
        /*it has to change the css directly otherwise it wont work
        break;
      case 'fntNext':
        console.log(hal + fntFam + "next" + err);
        break;
    }*/
    /*parragraph style*/ 
    let prfStyle = $(this).attr('cntrlPrf');
    let prfS = "paragraph style selected ";
    let counter2 = document.getElementById("counter2"); 
    switch(prfStyle)
    {
      case 'prfPrev':
        console.log(hal + prfS + "previous");
        rotatorParagraphBck();
        getPhrType(switchval2);
        break;
      case 'prfType':
        console.log(hal + prfS + "nothing");
        break;
      case 'prfNext':
        console.log(hal + prfS + "next");
        rotatorParagraphNxt();
        getPhrType(switchval2);
        break;
    }
    /*image position*/ 
    let imgPos = $(this).attr('cntrlmg');
    let imgPosition = "image set to "
    switch(imgPos)
    {
      case 'imgLeft':
        console.log(hal + imgPosition + "left" + err);
        $(this).addClass("isSelected") ;
        break;
      case 'imgCntr':
        console.log(hal + imgPosition + "center" + err);
        $(this).addClass("isSelected") ;
        break;
      case 'imgRght':
        console.log(hal + imgPosition + "right" + err);
        $(this).addClass("isSelected") ;
        break;
    }

     /*Cntrol Bar*/ 
     let cntrl = $(this).attr('cntrl');
     let cntrlBtn = "control bar has been "
     let toolSnext = "next toolset selected "
     switch(cntrl)
     {
       case 'ctrClse':
         console.log(hal + cntrlBtn + "closed");         
         isClosed.hide();
         itOpens.fadeIn();
         break;
       case 'ctrNext':
         console.log(hal + toolSnext);         
         break;
       case 'ctrSave':
         console.log(hal + "saved");         
         break;
       case 'ctrEdit':
         console.log(hal + cntrlBtn + "opened");         
         isClosed.fadeIn();
         break;
     }

    /*font rotator*/ 
    let cntrlNxt = $(this).attr('cntrlFont');
    let txtFnt = $(this).attr('isFnType');    
    let counter = document.getElementById("counter");        
     
    switch(cntrlNxt)
    {
      case 'fntNext':
      console.log("next");      
      rotatorFontNxt();//sets the value of switchval so it can scroll through the font types                                        
      getFntType(switchval)//looks for the value and outputs the font family corresponding  
      break;

      case 'fntPrev':      
      console.log("back");
      rotatorFontBck();
      getFntType(switchval)  
      break;        
    }

  });

    




/*objeto para remover clases con escepcion de ciertas.*/
jQuery.fn.removeClassExcept = function (val) {
    return this.each(function (index, el) {
        var keep = val.split(" "),  // list we'd like to keep
            reAdd = [],          // ones that should be re-added if found
            $el = $(el);       // element we're working on

        // look for which we re-add (based on them already existing)
        for (var i = 0; i < keep.length; i++){
            if ($el.hasClass(keep[i])) reAdd.push(keep[i]);
         }

         // drop all, and only add those confirmed as existing
         $el
            .removeClass()               // remove existing classes
            .addClass(reAdd.join(' '));  // re-add the confirmed ones
    });
};

/*reloads page every 2.5s so i can see live changes
setInterval(function() {
  location.reload();
}, 1500);*/


});
//////////////////////////////font family//////////////////////////////
function rotatorFontBck()
{
  if(switchval > 0)
    {
       console.log(switchval = switchval - 1 );/*++ just fucked shit*/ 
       counter.innerHTML=switchval;       
    }
  else
    {switchval = 14;}
}
function rotatorFontNxt()
{       
  if(switchval < 14)
    {    
      console.log(switchval = switchval + 1 );
      counter.innerHTML=switchval;   
    }
  else
    {switchval = 0;}      
   //it wont accept the switchval function (which is global)
 //find a  way so the global function can be accessed by this function

 /*it didnt accepted it because the variable was 
 inside document.ready (in the variable ready scope)
 the quickest solution that came to my mind was to 
 bring the function to the doc.ready scope.
 
 solution 2: place the variable in the global scope 
 (outside the document.ready function scope), thats 
 what was giving me trouble, the variable wasnt global
 because it was inside a function.
 */
}

function getFntType(switchval) {
  switch (switchval) {
    case 0: console.log("Default"); break;
    case 1: console.log("Raleway"); break;
    case 2: console.log("Source Sans Pro"); break;
    case 3: console.log("Playfair Display"); break;
    case 4: console.log("Lora"); break;
    case 5: console.log("Inconsolata"); break;
    case 6: console.log("Crimson"); break;
    case 7: console.log("Indie Flower"); break;
    case 8: console.log("Quicksand"); break;
    case 9: console.log("Anton"); break;
    case 10: console.log("Lobster"); break;
    case 11: console.log("Lobster 2"); break;
    case 12: console.log("Pacifico"); break;
    case 13: console.log("Shadows"); break;
    case 14: console.log("Dancing Script"); break;
  }
}
//////////////////////////////paragraph//////////////////////////////

function rotatorParagraphBck()
{
  if(switchval2 > 0)
    {
       console.log(switchval2 = switchval2 - 1 );/*++ just fucked shit*/ 
       counter2.innerHTML=switchval2;       
    }
  else
    {switchval2 = 5;}
}
function rotatorParagraphNxt()
{       
  if(switchval2 < 4)
    {    
      console.log(switchval2 = switchval2 + 1 );
      counter2.innerHTML=switchval2;   
    }
  else
    {switchval2 = 0;}      

}

function getPhrType(switchval2) {
  switch (switchval2) {
    case 0: console.log("Linea"); break;
    case 1: console.log("Cita"); break;
    case 2: console.log("Parrafo"); break;
    case 3: console.log("Titulo"); break;
    case 4: console.log("Subtitulo"); break;
  }
}