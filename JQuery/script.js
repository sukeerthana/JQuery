 $(function() {
    $('#movie-template').empty();
        var $Title = $('#Title');
        var movieTemplate= $('#movie-template').html();
        
        function adddata(obj){
             $('#det').append(Mustache.render(movieTemplate,obj));
        }
        $('#Search').on('click', function() {

            var Title = {
                Title: $Title.val(),
            };
    
            $.ajax({
                dataType: 'json',
                url: "http://www.omdbapi.com/?s=" + Title.Title + "&y=&plot=short&r=json",
                data: Title,
                success: function(details) {
                    // console.log(details.search.length);
                    $.each(details.Search, function(i, data) {
                        adddata(data);
                       
                    });
                    
                    // console.log(details);
                },
                error: function() {

                    alert("error message");

                }

            });

        });

    });