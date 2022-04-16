$(function() {
            $('#streams > a:first').focus();
        });


        videojs.Vhs.xhr.beforeRequest = function(options) {
            if (!options.headers) {
                options.headers = {}
            }
            options.headers['x-auth'] = '418c9facf497c4dff02493d3f5f106b8';
            return options;
        }

        var player = videojs('video-player', {
            autoplay: true
        });


        player.ready(function() {


            var promise = player.play();

            if (promise !== undefined) {
                promise.then(function() {
                    console.log('Autoplay started!');
                }).catch(function(error) {
                    console.log('Autoplay was prevented.');
                });
            }
        });

        $('#search').keyup(function(e) {
            var search = $(this).val().toLowerCase();
            console.log(search);
            $('.stream').each(function(item) {
                if ($(this).data('title').indexOf(search) > -1) {
                    if ($(this).is(":hidden")) {
                        $(this).show();
                    }
                } else {
                    if ($(this).is(":visible")) {
                        $(this).hide();
                    }
                }
            });
        });

        $('a').click(function(e) {
            e.preventDefault();
            var id = $(this).data('id');
            var title = $(this).find('.stream-title').text()
            var program = $(this).find('.stream-epg').text()
            var info = $(this).find('.stream-text').text()

            player.pause();

            $.post('http://tv.tvcluboficial.com//index/ch/', {
                    "id": id
                })
                .done(function(data) {
                    videojs.Vhs.xhr.beforeRequest = function(options) {
                        if (!options.headers) {
                            options.headers = {}
                        }
                        options.headers['x-auth'] = data;
                        return options;
                    }

                    //$.toast("Canal cambiado: " + title);

                    player.src({
                        src: 'https://user.tvcluboficial.com/stream/web/play/' + id + '.m3u8',
                        type: 'application/x-mpegURL'
                    });
                });



            $('#stream-current-program').html(program);
            $('#stream-current-info').html(info);
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
        });

        /*

        $(document).on('keydown', function(e) {
            //console.log(e.key);
            //$.toast(e.key);
            var arrow = {
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };

            if ($('.stream-focus').length == 0) {
                $('#streams > div:first').addClass('stream-focus');
            } else {

                $current = $('.stream-focus');
                $current.removeClass('stream-focus');
                switch (e.which) {
                    case arrow.left:
                        $current.prev().addClass('stream-focus');
                        break;
                    case arrow.up:
                        $current.prevAll().eq(calculateLIsInRow()).addClass('stream-focus');
                        break;
                    case arrow.right:
                        $current.next().addClass('stream-focus');
                        break;
                    case arrow.down:
                        $current.nextAll().eq(calculateLIsInRow()).addClass('stream-focus');
                        break;
                }
            }

            if (!isScrolledIntoView('.stream-focus')) {
                $(document).scrollTop($('.stream-focus').offset().top - $(window).height() + 150);
            }
        });

        */

        function calculateLIsInRow() {
            var lisInRow = 0;
            $('#streams > div').each(function() {
                if ($(this).prev().length > 0) {
                    if ($(this).position().top != $(this).prev().position().top) return false;
                    lisInRow++;
                } else {
                    lisInRow++;
                }
            });

            var lisInLastRow = $('#streams > div').length % lisInRow;
            if (lisInLastRow == 0) lisInLastRow = lisInRow;
            if (lisInRow > 0) lisInRow--;

            return lisInRow;
        }

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            if ($(elem).length == 0) return true;
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
