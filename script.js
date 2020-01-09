
    $(document).ready(function(){
        $('button').click(function(){
            $('#card,#cardone').hide('slow');
        });
        $('#cardone').animate({
            top:'50%',
            left:'50%',
            transform: 'translate(-53%,-44%)',
            opacity:'1'
        },'slow');
        $('#card').animate({
            top:'50%',
            left:'50%',
            transform: 'translate(-50%,-50%)',
            opacity:'1'
        },'slow');
     });
 
    