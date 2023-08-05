const canvas = new fabric.Canvas('canvas', {isDrawingMode: false});
canvas.setBackgroundImage('/img/laptop.jpg', canvas.renderAll.bind(canvas));

canvas.freeDrawingBrush.color = 'white';
canvas.freeDrawingBrush.width = 10;

draw = document.getElementById('draw');
rectangle = document.getElementById('rectangle');
circle = document.getElementById('circle');
textButton = document.getElementById('text');


draw.onclick = function(){
    canvas.isDrawingMode = !canvas.isDrawingMode;
}


draw.onclick = function(){
    canvas.isDrawingMode = !canvas.isDrawingMode;

}

rectangle.onclick = function(){
    canvas.isDrawingMode = false;
    const rect = new fabric.Rect({
        left: 40,
        top: 40,
        width: 60,
        height: 60,
        fill: 'transparent',
        stroke: 'white',
        strokeWidth: 7
    });
    
    canvas.add(rect);
}

circle.onclick = function(){
    canvas.isDrawingMode = false;
    const circleDraw = new fabric.Circle({
        left: 40,
        top: 40,
        radius: 60,
        fill: 'transparent',
        stroke: 'white',
        strokeWidth: 7
    });
    
    canvas.add(circleDraw);
}

textButton.onclick = function(){
    canvas.isDrawingMode = false;
    const text = new fabric.IText('Text',{
        left: 40,
        top: 40,
        objecttype: 'text',
        fontFamily: 'arial black',
        fill: 'white',

    });
    canvas.add(text);
}

remove.onclick = function(e){
    canvas.isDrawingMode = false;
    canvas.remove(canvas.getActiveObject());
    let json = canvas.toJSON();
    console.log(json);
    
}

function convertJSON2String(json){
    return JSON.stringify(json);
}

function loadFromJSON(json){
    canvas.loadFromJSON(json, function(){
        canvas.renderAll();
    });
}

// canvas.on('selection:created', function(e){
//     console.log(e);
//     $('#remove').prop('disabled','');
// });

canvas.onselectionCreated = function(e){
    console.log(e);
    remove.disabled = false;
};


canvas.onselectioncleared = function(e){
    remove.disabled = true;
};

// canvas.on('selection:cleared', function(e){
//     console.log(e);
//     $('#remove').prop('disabled','disabled');
// });








