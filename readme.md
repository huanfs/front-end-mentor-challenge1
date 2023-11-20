# single page with responsive menu

## code operation

- while the window resize or window load, start a function called *"Menu()"* responsible for show a different menu layout in mobile or desktop

- for that, *createHamburguer* is a variable for state, starting with value *"false"* while the window is resized to a certain point, the hamburguer menu will appear, and they is responsible for start another function called *"btnMenu()"* responsible for hide or show a menu content previously hidded positioned outside the screen with *"position:absolute"*

- btnMenu(): changes the id of menu to "open" or "close" chanching theis styles to hide or show menu