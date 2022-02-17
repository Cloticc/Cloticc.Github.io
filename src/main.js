$(function() {
    let t = new Date(1993, 10, 2);
    $("#date").text(new Date(new Date() - t).getFullYear() - 1970),
        $("#year").text(new Date().getFullYear()),
        $('[data-togglwe="tooltip"]').tooltip(),
        $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(t) {
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                let e = $(this.hash);
                (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length &&
                    (t.preventDefault(),
                        window.scrollTo({
                            top: e.offset().top - 100,
                            behavior: "smooth"
                        }));
            }
        });
});


$(".myBox").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
});

$(document).on("contextmenu", function(Menu) {
    Menu.preventDefault();
});


$(document).on("selectstart", function(Msel) {
    Msel.preventDefault();
});