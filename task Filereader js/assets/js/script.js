let input = document.querySelector('.selectImg')

let zone = document.querySelector('.dropZone')

let clickHere = document.querySelector('.clickBtn')

let tbody = document.getElementsByTagName('tbody')[0]


clickHere.addEventListener('click',(e)=>{
    input.click()
})

input.addEventListener("change",(e)=>{

    let files = Array.from(e.target.files);

    files.forEach(file => {
        showImage(file)
    });
})
function showImage(file) {

    if (file.type != 'image/png' && 

        file.type != 'image/jpeg' && 

        file.type != 'image/jpg') 
    {
        alert("Please choose image file")
        return;
    }

    let fileReader = new FileReader();

    fileReader.readAsDataURL(file)

    fileReader.addEventListener('loadend',()=>{

        let tdId = document.createElement('td')

        tdId.classList.add("id")

        tdId.innerHTML = increment(tdId)
        
        let tdBtn = document.createElement('td');

        let btn = document.createElement('a')

        tdBtn.appendChild(btn)

        let tr = document.createElement("tr")

        let tdName = document.createElement("td")

        tdName.innerHTML = file.name

        let tdImage = document.createElement("td")

        let img = document.createElement('img');

        img.src = fileReader.result;

        img.style.width = "100%";

        img.classList.add("image");

        tdImage.appendChild(img)

        let tdSize = document.createElement("td")

        tdSize.innerHTML = Math.round(file.size/1024) + " kb"

        let tdType = document.createElement("td")

        tdType.innerText = file.type

        tr.appendChild(tdId)

        tr.append(tdName);

        tr.appendChild(tdImage)

        tr.appendChild(tdSize)

        tr.append(tdType)

        tr.appendChild(tdBtn)

        tbody.append(tr)

        tdBtn.innerText = "Delete"
        tdBtn.classList.add("td");
        tdBtn.classList.add("delete");
        tdBtn.addEventListener('click',function(){
            let result = confirm("Are you sure?")
            if (result) {
                tr.remove()
            }
        })

    })
}
