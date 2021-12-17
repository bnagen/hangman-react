import React from 'react'

const Header = () => {
    return (
        <>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <nav>
        <div class="nav-wrapper black">
            <div class="container">
                <a href="#" class="brand-logo center">Hangman</a>
            </div>
        </div>
    </nav>
         
         <p class="text">Find the word! - Enter a letter</p>
         {/* <p className="categories-style">Categories!</p>
         <button type="button" id="athletes" className="button-style">Athletes!</button> 
         <button type="button" id="tv" className="button-style">Television!</button> 
         <button type="button" id="movies" className="button-style">Movies!</button>  */}
        </>
    )
}

export default Header
