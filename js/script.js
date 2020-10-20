
let activeMenu = null;

function showMenu(menuId, button) {
    
    if (activeMenu == null) {
        $('#desktop-menu').removeClass('hide');
    }
    
    if (activeMenu == menuId) {
        $('#desktop-menu').addClass('hide');
        $(button).removeClass('active');
        activeMenu = null;
        return;
    }
    
    $('.desktop-menu-button').each(function() {
        $(this).removeClass('active');
    });
    
    $('.desktop-menu-option').each(function() {
        $(this).addClass('hide');
    });
    
    $('#' + menuId).removeClass('hide');
    
    $(button).addClass('active');
    activeMenu = menuId;
    
}
