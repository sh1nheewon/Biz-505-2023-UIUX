const importHTML = (tag,file) => {

    // java의 스캐너(FileInputStream)와 비슷
    const xhr = new XMLHttpRequest();
    xhr.open("GET",file,true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            tag.innerHTML = xhr.responseText;
        }
    }
    xhr.send();
}


// 사용하려면 index.html의 script 에 가장 위에 선언해야함.