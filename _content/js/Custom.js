$(document).ready(function () {

    $(".select2").select2({
        placeholder: "Select User",
    });
    $('[data-toggle="tooltip"]').tooltip()
    $('.site_settings').click(function (event) {
        if ($('.site_settings .site_setting_list ').is(':visible') == false) {
            $('.site_settings').addClass('active')
        }
        else {
            $('.site_settings').removeClass('active')
        }
        $('.dropdown').removeClass('open');
        $('.site_setting_list').show()
        event.stopPropagation()
    })
    $('.dropdown').click(function () {
        $('.site_settings').removeClass('active')
    })
    $('.navbar-nav').click(function (event) {
        $('.site_setting_list').hide()
    })
    $(document).click(function (event) {
        $('.site_setting_list').hide()
        $('.site_settings').removeClass('active')
    })

    if ($.cookie('mini_sidebar') == 1) {
        $("#logo").hide();

    }
    else if ($.cookie('mini_sidebar') == 0) {
        $("#logo").show();

    }
    $('.sidebar-collapse').click(function () {
        if ($.cookie('mini_sidebar') == 0) {
            console.log($.cookie('mini_sidebar'))
            $(this).closest(".navbar-brand").addClass('.mini-menu')
            $("#logo").show();
        }
        else if ($.cookie('mini_sidebar') == 1) {
            console.log($.cookie('mini_sidebar'))
            $(this).closest(".navbar-brand").removeClass('.mini-menu')
            $("#logo").hide();

        }

    })
    $('#pic').change(function (e) {

        holder = document.getElementById('fileupload-new'),
	    upload = document.getElementById('pic'),

  e.preventDefault();
        var types = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
        var file = upload.files[0],
            reader = new FileReader();
        var a = types.indexOf(file.type);
        if (a == -1) {
            $('#fileupload-new').hide();
            return false;
        }
        reader.onload = function (event) {
            var img = new Image();
            img.src = event.target.result;
            // note: no onload required since we've got the dataurl...I think! :)
            if (img.width > 560) { // holder width
                img.width = 560;
            }

            holder.innerHTML = '';
            $('#fileupload-new').attr('src', img.src)
            $('#fileupload-new').show();
        };
        reader.readAsDataURL(file);

        return false;
    });


})