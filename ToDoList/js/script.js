$('#todolist ul').sortable({
    items:"li:not('.listtitle, .additem')",
    connectWith:"ul",
    dropEmpty:true,
    placeholder:"emptyspace"
});

$('input').keydown(function(e){
    if(e.keyCode == 13) {
        var item = $(this).val();
        
    $(this).parent().parent().append('<li>' + item + '</li>');
    $(this).val('');
    }
});

$('#trash').droppable({
    drop: function(event,ui){
        ui.draggable.remove();
    }
})
