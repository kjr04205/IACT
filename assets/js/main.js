/*---------------------메뉴------------------------------- */
$(function(){
	variable.init();
	gnb.init();
});

/***************************************** 변수 초기화 ***/
var variable = {
	init : function(){
		$gnb = $(".gnb");
		$gnbLi = $(".gnb>li");
		$gnbLiA = $(".gnb>li>a")
		$lnb = $(".gnb>li>.lnb");
		$speed = 300;
	}
}

/***************************************** gnb ***/
var gnb = {
	init : function(){
		// 메뉴활성화, 효과
		gnb.open();
	},

	// 메뉴활성화, 효과
	open : function(){
		$gnb.children("li").on("mouseenter",function(){
			$(this).find($lnb).stop().slideDown($speed);
		});
		
		$gnb.children("li").mouseleave(function(){
			$(this).find($lnb).stop().slideUp($speed);
		});
	}
}

window.onclick = function(){
    /* ID찾고 난 후 비밀번호 찾기 버튼 클릭 시 */
    $(".button_change_go").on("click",function(){
        $(".changePw").css("color","#30328f");
        $(".changePw").css("border-bottom","2px solid #30328f");
        $(".changeId").css("color","#333333");
        $(".changeId").css("border-bottom","2px solid #bfbfbf");
        $(".id_find_form_change").css("display","none");
        $(".pw_find_form_change").css("display","block");
    });

    /* 아이디 비밀번호 찾기 변경 */
    $(".changePw").on("click", function(){
        $(".changePw").css("color","#30328f");
        $(".changePw").css("border-bottom","2px solid #30328f");
        $(".changeId").css("color","#333333");
        $(".changeId").css("border-bottom","2px solid #bfbfbf");
        $(".id_find_form_change").css("display","none");
        $(".pw_find_form_change").css("display","block");
    });

    $(".changeId").on("click", function(){
        $(".changeId").css("color","#30328f");
        $(".changeId").css("border-bottom","2px solid #30328f");
        $(".changePw").css("color","#333");
        $(".changePw").css("border-bottom","2px solid #bfbfbf");
        $(".pw_find_form_change").css("display","none");
        $(".id_find_form_change").css("display","block");
    });

    /* 숫자 클릭시 백그라운드 이미지 변화 */
    $(".number1").on("click", function(){
        $("#header").css("background","url(assets/images/main_visual1.png) no-repeat");
        $(this).css("font-size","24px");
        $(this).css("font-family","payboocBold");
        $(".number2").css("font-size","12px");
        $(".number2").css("font-family","payboocLight");
        $(".number3").css("font-size","12px");
        $(".number3").css("font-family","payboocLight");
    });

    $(".number2").on("click", function(){
        $("#header").css("background","url(assets/images/main_visual2.png) no-repeat");
        $(this).css("font-size","24px");
        $(this).css("font-family","payboocBold");
        $(".number1").css("font-size","12px");
        $(".number1").css("font-family","payboocLight");
        $(".number3").css("font-size","12px");
        $(".number3").css("font-family","payboocLight");
    });

    $(".number3").on("click", function(){
        $("#header").css("background","url(assets/images/main_visual3.png) no-repeat");
        $(this).css("font-size","24px");
        $(this).css("font-family","payboocBold");
        $(".number1").css("font-size","12px");
        $(".number1").css("font-family","payboocLight");
        $(".number2").css("font-size","12px");
        $(".number2").css("font-family","payboocLight");
    });
    
}

/* 메인 visual 슬라이드 효과 부분 */
var index = 0;

window.onload = function(){
    slideShow();
}
function slideShow(){
    var i = 0;
    var x = document.getElementsByClassName("slide1");

    for(i = 0; i < x.length; i++){
        x[i].style.display = "none"; 
    }
    index++;
    if(index > x.length){
        index = 1;
    }
    x[index-1].style.display = "block";

    setTimeout(slideShow, 7000);
}
$(document).ready(function(){
    /*--------공지사항 부분 글 내용------------------------ */
    $(".notice1").click(function(){
        $(".table_content").slideToggle("fast");
    });

    /* ------ 아이디찾기 텍스트 입력미완료 시--------- */
    $(".btnalert").click(function(){
        if($("#id_find_txt1").val().length==0){
            alert("기업이름을 입력하세요");
        }
        else if($("#id_find_txt2").val().length==0){
            alert("사업자등록번호를 입력하세요");
        }
        else if($("#id_find_txt5").val().length==0){
            alert("이메일을 입력하세요");
        }
        else{
            location.href='findID.html';
        }
    });
    /* -------- 햄버거 바 메뉴 클릭시 드롭다운 ------------ */
    indexBtn = $(".go_menu_index");
    btn = $(".go_menu");
    indexLayer = $(".menu_container_index");
    layer = $(".menu_container");
    
    /*------------index파일 햄버거바 ------------- */
    indexBtn.click(function(){
        if($(".go_menu_index").hasClass("show") === false){
            indexLayer.slideDown(0);
            indexBtn.addClass('show');
            $(".header_slide").css("display","none");
            $(".header_text").css("display","none");
            $(".header_link").css("display","none");
        }
        else{
            indexLayer.slideUp(0);
            indexBtn.removeClass('show');
            $(".header_slide").css("display","block");
            $(".header_text").css("display","inline-block");
            $(".header_link").css("display","inline-block");
        }
    });

    /*------------------서브페이지 햄버거바------------- */
    btn.click(function(){
        
        if($(".go_menu").hasClass("show") === false){
            layer.slideDown(400);
            btn.addClass('show');
            $(".header_slide").css("display","none");
            $(".header_text").css("display","none");
            $(".header_link").css("display","none");
        }
        else{
            layer.slideUp(400);
            btn.removeClass('show');
            $(".header_slide").css("display","block");
            $(".header_text").css("display","inline-block");
            $(".header_link").css("display","inline-block");
        }
    });
});


