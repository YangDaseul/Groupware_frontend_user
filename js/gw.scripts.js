    (function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);

function pageInitialLoadPage(page, postScript){
    axios.get("./pages/templates/sidebar.html")
    .then(response => {
        var htmlPage = document.body;
        htmlPage.innerHTML = response.data;
        if (page !== undefined){
            axios.get(page)
            .then(response => {
                var sidebarContent = document.getElementById("layoutSidenav_content");
                sidebarContent.innerHTML = response.data;
                if (postScript !== undefined){
                    postScript();
                }
            })
        }
        else{
            var sidebarContent = document.getElementById("layoutSidenav_content");
            sidebarContent.innerHTML = "<div class='container-fluid'><h1>여기에는 아무것도 없습니다... ㅠㅠ</h1></div>"
        }
    })
    .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스입니다.
            console.log(error.request);
        }
        else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('Error', error.message);
        }
        console.log(error.config);
      });
}

function sidebarLoadPage(url){
    axios.get(url)
    .then(response => {
        var sidebarContent = document.getElementById("layoutSidenav_content");
        sidebarContent.innerHTML = response.data;
    })
}

function vacationDocumentApprovalPage(){
    window.location.href= './vacationDocumentApproval.html'
}

function userVacationInputs(){
    var inputs = document.getElementsByClassName("user-vacation-input");
    new Array().forEach.call(inputs, (element) => {
        element.value = "";
    })
}



