
class PageFactory{



     pageFactory = {
        initPage: function (type) {
            switch (type) {
                case "LoginPage":
                    return new LoginPage();
                default:
                    return null
            }
        }
    }

    
 
} 

