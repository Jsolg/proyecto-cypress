Feature: Login de pagina web Automation

    Scenario: Login Automation exitoso
        Given ingreso a la pagina web
        When doy clic en opcion login del menu
        And un usuario ingresa su correo 
        And ingresa la clave 
        And le da clic en el boton login
        Then ingresa a la pagina web Automation exitosamente

    Scenario: Login Automation fallido
        Given ingreso a la pagina web
        When doy clic en opcion login del menu
        And un usuario ingresa su correo 
        And ingresa la clave incorrecta
        And le da clic en el boton login
        Then muestra mensaje de error
        
    