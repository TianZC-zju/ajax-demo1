
let getCss = document.querySelector('.getCss')
getCss.onclick= ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/stle.css')

    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
                console.log("成功加载")
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else {
                console.log("加载失败")
            }
        }

    }
    // request.onerror = ()=>{
    //     console.log("失败了")
    // }
    request.send()
}

let getJs = document.querySelector('.getJs')
getJs.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", '/2.js')
    request.onload = () => {
        const js = document.createElement('script')
        js.innerHTML = request.response
        document.body.appendChild(js)
    }
    request.onerror = ()=>{
        console.log("请求失败了")
    }
    request.send()
}

let getXml = document.querySelector('.getXml')
getXml.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", '/3.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status<300){
                let xml = request.responseXML
                console.log(xml.querySelector('warning').innerHTML.trim())
            }else {
                console.log("请求失败")
            }
        }
    }
    request.send()
}
let getJson = document.querySelector('.getJson')
getJson.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET",'/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status < 300){
                let jsonObject = JSON.parse(request.response)
                console.log(jsonObject)
            }
        }
    }
    request.send();
}
let n=1
let getNextPage = document.querySelector('.getNextPage')
getNextPage.onclick = ()=>{
    if(n===3){
        return
    }
    let request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                let dataO = JSON.parse(request.response)
                dataO.forEach(item=>{
                    let liE = document.createElement(`li`)
                    liE.innerText = item.id
                    let ulE = document.querySelector('.xxx')
                    ulE.appendChild(liE)
                })
                n+=1
            }
        }
    }
    request.send()
}