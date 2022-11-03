$(() => {
//===================================== HomePage js stuff =================================================

    // text for homepage
    const homePageText = 'Welcome, My name is Johnny a Web Developer.'

    // count for index position
    let count = 0

    // function to make text appear one letter at a time
    const typeWriter = () => {
        if(count < homePageText.length){
            $('#welcome-text').append(homePageText.charAt(count))
            count += 1
            setTimeout(typeWriter, 100)
        }
    }

    // function that calls typeWriter and then sets display of summary and socials to appear
    $(() => {
        typeWriter()
        setTimeout(() => {
            $('#welcome-summary').animate({opacity: '.7'}, 'slow')
            $('#social-container').animate({opacity: '1'}, 'slow')
        }, 4000)
    })
    


//===================================== HomePage js stuff =================================================
//=========================================================================================================

})