# Project Goals

#### Generate the following information:
* The restaurant's name (give it a good one!)
* The restaurant's address
* The restaurant's hours of operation
* Access the API using Axios. Learn more
* Create a dynamic restaurant menu
* Choose a specific menu section type to display (Appetizers, Pasta, Sandwiches, etc)
* Dynamically render at least 15 menu items.
* The menu section you decide to display should have its own view as an organism (for example,  a bootstrap accordion or nav tabs)
* Each menu item must be a molecule (for example, using a bootstrap card or list item with a picture of the meal, as well as the name, and the price, etc)
* Manage the React Component State

# Procedures

[] connect the API
[] create routes for the links going to other pages
[] import react and whatever else is needed from npm


[] Create a nav bar that stays at the top
    [] create a name
    [] create links to
        [] menu
        [] home
        [] about

    [] Home Page that takes back to the main where the hero and the specials are

    [] About Page that shows the contact and location as well as theme or philosophy

    [] Menu Page that has the below on it
            [] full menu - list or cards
                [] pic
                [] dish name
                [] price
                [] description
            [] sides -stretch
            [] drinks -stretch

[] create a main div that has the other elements
    [] info box
        [] title-restaurant name
        [] address
        [] number
        [] hours

    [] menu section
        [] today's specials as a simple list with no pics-3 chosen at random or 3 per day and separate each day into another file to pull from


[] create a footer
    [] create copyright info and created with 


# Pseudo

Everything will be rendered dynamically using React in one <div> called App

axios get from the given API for the information needed to be shown (items, cuisines, prices, descriptions)



Nav bar is static element on the page that stays at the top while scrolling
    - has links in it to the various pages (home, menu, about)--positioned more to the right
        - home--takes you to the main page(initial state)
        - menu--takes you to the full menu of 15-20 items
        - about--takes you to the about us page where the contact info and overall theme of the restaurant is listed
    - has logo (maybe)--if so this will be created or just found image(maybe just a single letter of the first letter of the name)
    //- has restaurant name in it--positioned at the left most part

Main div
    - hero element--perhaps scrolling through multiple photos but prefer using just one (or collage of food images)
    - info box
        - create a name for the restaurant-- displayed on the hero so that it is the first thing seen
            //these are displayed on the same hero but are going to be smaller and less pronounced
        - it is at 348 E Main St, Lexington, KY
        - phone number is (xxx) xxx-xxxx
        - hours are M-F 11-9, Sat & Sun 11-10

    - menu box
        - one section that displays today's specials
            -has the names and the prices only

        //this may be on its own page and not the main one so the main can just hold the specials
        - displays the menu obtained via API call in a list or table format
            - dish pic for each dish
            - dish name
            - dish description
            - dish price
            - dish spice level???
            - dish cuisine???

    - footer at the very end of the page--doesn't move with the page
        - this is only going to display the copyright info, the number again, and the tech it was created with
        

# FUNCTIONALITY

[] App.js file that has an App function that links the nav bar items and is the OUTLET
[] Index.js file that has the render function
[] Index.html that just has the needed HTML and the <div> named App
[] connect API-import axios in a data.js file
[] display a logo in header
[] display hero pic
[] display pics for each food item
[] make the list a drop down one so that each dish only shows the name and price but clicking it makes it show the description as well
[] create links for header and connect them to individual pages
[] make header stay where it is at the top
[] create local storage that sets the storage of JSON info
[] useEffect for going from page to page and the drop downs