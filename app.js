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

//===================================== Navbar js stuff =================================================
//=========================================================================================================

    // click hamberger to open dropdown nav
    $('#nav-bar').on('click', (e) => {
        const target = $(e.target)

        target.next().next().toggle()
    })


    // click up button to scroll all the way up
    $('#up-btn').on('click', () => {
        $('html').animate({ scrollTop: 0 }, 'fast')
    })



//===================================== Navbar js stuff =================================================
//=========================================================================================================

//===================================== About Me js stuff =================================================
//=========================================================================================================

    // Skills button
    const showDetails = (e) => {
        const target = $(e.target)
        
        if(target.attr('class') === 'skill-button'){
            const details = target.parent().next()
            details.toggle()
            
        }
        
    }

    // listens for click and if its the Skills details button showDetails func
    $('body').on('click', (e) => {
        showDetails(e)
    })


//===================================== About Me js stuff =================================================
//=========================================================================================================


//===================================== My Favorite Projects js stuff =================================================
//=========================================================================================================

    let indexOfImg = 0
    const amountOfImg = $('.carousel-container').children().length - 1
    
    // increment indexOfImg to change img
    const changeNextImg = () => {
        $('.carousel-container').children().eq(indexOfImg).hide()
        indexOfImg >= amountOfImg ? indexOfImg = 0 : indexOfImg++
        $('.carousel-container').children().eq(indexOfImg).show()
    }

    // decrement indexOfImg to change img
    const changePrevImg = () => {
        $('.carousel-container').children().eq(indexOfImg).hide()
        indexOfImg > 0 ? indexOfImg-- : indexOfImg = amountOfImg
        $('.carousel-container').children().eq(indexOfImg).show()

    }

    $('#next-btn').on('click', changeNextImg)
    $('#prev-btn').on('click', changePrevImg)

    // auto change image
    $(() => {
        setInterval(changeNextImg, 2500)
    })


//===================================== My Favorite Projects js stuff =================================================
//=========================================================================================================

//===================================== Projects js stuff =================================================
//=========================================================================================================

    // condition to prevent more than 1 popup image from being created
    let openedImg = false

    // function that creates a new div with the image we clicked "zoomed in"
    const expandImg = (e) => {
        const target = $(e.target)

        if(target.attr('class') === 'project-image' && !openedImg){
            const imageDiv = $('<div>').addClass('expanded-div')
            const image = $('<img>').attr('src', target.attr('src'))
            const closeBtn = $('<button>').attr('id', 'close-btn').text('Close')
            imageDiv.append(image, closeBtn)
            $('body').append(imageDiv)

            openedImg = true
        }
    }

    // listens for click and calls the expandImg function and passes the element that triggered this.
    $('body').on('click', (e) => {
        const target = $(e.target)
        expandImg(e)

        // when the close button is clicked in the expanded img div remove it.
        if(target.attr('id') === 'close-btn'){
            $('.expanded-div').remove()
            openedImg = false
        }
    })


    

})

