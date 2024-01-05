const importHTML = (tag,file) => {

    // java의 스캐너(FileInputStream)와 비슷
    const xhr = new XMLHttpRequest();
    xhr.open("GET",file,true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            tag.innerHTML = xhr.responseText();
        }
    }
    xhr.send();
}