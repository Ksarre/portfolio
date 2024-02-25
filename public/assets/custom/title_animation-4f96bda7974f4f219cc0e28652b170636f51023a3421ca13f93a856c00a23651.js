const timer = ms => new Promise(res => setTimeout(res, ms))

async function animateToNoise(timer, callback){
    console.log("Calling animateTitle method")
    

    const noiseChars = ['%', '&', '‡', 'Ÿ', '¦', 'µ', 'Ð', 'Ø', '°', '¤', "«", "¿", "æ"]
    let titleNode = document.querySelector("title")
    let titleStr = titleNode.textContent

    //delayed loop; changes each char to a noise char
    for(let i = 0; i < titleNode.textContent.length; i++){
        
        let rindex = Math.floor((Math.random() * (noiseChars.length+1)))
        let noiseChar = noiseChars[rindex]
        let titleArr = titleStr.split('')
        titleArr[i] = noiseChar
        
        //write buffer back to dom and sleep
        titleStr = titleArr.join('')
        titleNode.textContent = titleStr
        await timer(200)
    }

    callback(timer, "Developer")
}

async function animateToText(timer, endStr){
    let titleNode = document.querySelector("title")

    for(let i = 0; i < endStr.length; i++){
        let titleStr = titleNode.textContent
        if(i < titleStr.length){
            let titleArr = titleStr.split('')
            titleArr[i] = endStr[i]
            titleNode.textContent = titleArr.join('')            
        }
        else{
            titleNode.textContent = titleStr + endStr[i]
        }
        //write buffer back to dom and sleep
        await timer(200)
    }

    //cut off excess characters
    console.log(`${titleNode.textContent} ${endStr}`)
    if(titleNode.textContent.length > endStr.length){     
        titleNode.textContent = titleNode.textContent.substring(0,endStr.length)
    }

    //pause animation
    await timer(10000)

    //callback to loop animation
    endStr === "Developer" ? animateToNoise(timer, ()=> {animateToText(timer, "Profile")}) : animateToNoise(timer, ()=> {animateToText(timer, "Developer")})
}

document.addEventListener("DOMContentLoaded", ()=> {animateToNoise(timer,()=> {animateToText(timer, "Developer")})});
