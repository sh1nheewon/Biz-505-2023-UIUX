document.addEventListener("DOMContentLoaded",()=>{
    const img_list_box = document.querySelector("div.image_list");
    
    img_list_box.addEventListener("click", (e) =>{
        const target = e.target;
        if(target.tagName === "IMG"){
            // const image_view = document.querySelectior("div.image_view img")
            const image_view_box = document.querySelector("div.image_view");
            // 크게 보여질 이미지 tag 가져오기
            const image_view = image_view_box.querySelector("img");
            
            image_view.style.marginLeft = "-100%";
            image_view.style.opacity = 0;
            image_view.style.transform = "rotate(-90deg)";

            const newImage = document.createElement("IMG");
            newImage.src = target.src;

            image_view_box.appendChild(newImage);
            
            // 위의 코드가 실행된 후 1s 동안 기다렸다가 
            /*
            비동기 실행 코드의 타이밍을 어느정도 맞추기 위한 방법
            */
            setTimeout(()=>{
                // image_view_box 의 첫 번째 IMG tag (왼쪽으로 사라진 IMG) 를 영구 삭제
                image_view_box.querySelector("IMG").remove();
            },1000)

            // 클릭된 image 의 소스
            // const img_src = target.src;
            // image_view.src = img_src;
        }
    });
});