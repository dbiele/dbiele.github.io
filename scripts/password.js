var AccessHandler = (function () {
    function AccessHandler() {
        // wait for the page to load.
        //alert("constructor loaded");
        var _this = this;
        this.domLoadedEvent = function () {
            //alert("dom loaded");
            //localStorage.setItem(AccessHandler.PASSWORD_STORAGE_ID, "clear");
            _this.setContentWindows();
            _this.hidePasswordWindow();
            _this.hidePortfolioGallery();
        };
        this.checkPassword = function () {
            if (typeof (Storage) !== "undefined") {
                // if password exists, display the page.
                var localStoragePassword = localStorage.getItem(AccessHandler.PASSWORD_STORAGE_ID);
                if (localStoragePassword === AccessHandler.PASSWORD) {
                    // remove the password window and display content
                    _this.displayPortfolio();
                }
                else {
                    _this.displayPassword();
                }
            }
            else {
                _this.displayPassword();
            }
        };
        this.displayPassword = function () {
            //show the password div 
            _this.hidePortfolioGallery();
            _this._passwordWindow.style.display = "block";
            _this._passwordWindow.style.visibility = "visible";
            /* change visibility of the follow to false.
            * custom_elearning_content
            * authoring_tools_content
            * lms_content
            */
            //add password handler
            var passwordWindowButton = document.getElementById("password_button");
            passwordWindowButton.addEventListener("click", _this.passwordButtonPress, true);
        };
        this.passwordButtonPress = function (event) {
            //pull the text from the entry and compare.
            var passwordTextField = document.getElementById("password_txt");
            var currentUserEntry = passwordTextField.value;
            alert("submit button pressed currentUserEntry = " + currentUserEntry + " AccessHandler.PASSWORD = " + AccessHandler.PASSWORD);
            if (currentUserEntry == AccessHandler.PASSWORD) {
                alert("entry is the same");
                _this.displayPortfolio();
                _this.savePasswordLocally();
            }
            else {
                _this.showPasswordError();
            }
        };
        this.displayPortfolio = function () {
            _this.hidePasswordWindow();
            _this.showPortfolioGallery();
        };
        this.setContentWindows = function () {
            _this._passwordWindow = document.getElementById("password_window");
            _this._customWindow = document.getElementById("custom_elearning_content");
            _this._authoringtoolWindow = document.getElementById("authoring_tools_content");
            _this._lmsWindow = document.getElementById("lms_content");
            _this._codeWindow = document.getElementById("code_content");
            _this._passwordWindowError = document.getElementById("password_error");
        };
        this.hidePasswordWindow = function () {
            //this._passwordWindow.style.visibility = "hidden";
            _this._passwordWindow.style.display = "none";
        };
        this.showPasswordError = function () {
            _this._passwordWindowError.style.visibility = "visible";
        };
        this.showPortfolioGallery = function () {
            alert("show portfolio gallery2");
            _this._customWindow.style.visibility = "visible";
            _this._authoringtoolWindow.style.visibility = "visible";
            _this._lmsWindow.style.visibility = "visible";
            _this._codeWindow.style.visibility = "visible";
        };
        this.hidePortfolioGallery = function () {
            _this._customWindow.style.visibility = "hidden";
            _this._authoringtoolWindow.style.visibility = "hidden";
            _this._lmsWindow.style.visibility = "hidden";
            _this._codeWindow.style.visibility = "hidden";
        };
        window.onload = function () {
            //alert("window loaded");
            _this.checkPassword();
        };
        document.addEventListener("DOMContentLoaded", this.domLoadedEvent, false);
    }
    AccessHandler.prototype.savePasswordLocally = function () {
        //alert("saving local variable");
        localStorage.setItem(AccessHandler.PASSWORD_STORAGE_ID, AccessHandler.PASSWORD);
    };
    AccessHandler.PASSWORD = "DeanBiele";
    AccessHandler.PASSWORD_STORAGE_ID = "portfolio_password";
    return AccessHandler;
})();
var checkAccess = new AccessHandler();
/*Check if password has been stored/saved
 * If the password is saved, do nothing.
 *
 */
/** If the password has not been saved,
 * the password box appears &
 * the content area div are set to invisible.
 *
 * div's
 * custom_elearning_content
 * authoring_tools_content
 * lms_content
 * password_window
 *
 **/
/*save the password into browser cache*/ 
//# sourceMappingURL=password.js.map