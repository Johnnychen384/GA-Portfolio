$(() => {
//===================================== HomePage js stuff =================================================
    const homePageText = 'Welcome, my name is Johnny!'
    let count = 0
    const typeWriter = () => {
        if(count < homePageText.length){
            $('#welcome-text').append(homePageText.charAt(count))
            count += 1
            setTimeout(typeWriter, 100)
        }
    }

    typeWriter()


//===================================== HomePage js stuff =================================================
//=========================================================================================================

})