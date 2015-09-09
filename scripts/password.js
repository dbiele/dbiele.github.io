/// <reference path="typings/greensock/greensock.d.ts" />
var AccessHandler = (function () {
    function AccessHandler() {
        var _this = this;
        /** @function domLoadEvent
        * triggers when the page document model is ready.  Now is the time to interact with content, styles, structure of page. */
        this.domLoadedEvent = function () {
            //localStorage.setItem(AccessHandler.PASSWORD_STORAGE_ID, "clear");
            _this.setContentWindows();
            _this.hidePasswordWindow();
            _this.hidePortfolioGallery();
        };
        this.removeLoadingCover = function () {
            var loadingCoverDiv = document.getElementById("loading_background");
            loadingCoverDiv.style.display = "none";
        };
        this.checkPassword = function () {
            if (typeof (Storage) !== "undefined") {
                // if password exists, display the page.
                var localStoragePassword = localStorage.getItem(AccessHandler.PASSWORD_STORAGE_ID);
                if (localStoragePassword === AccessHandler.PASSWORD) {
                    // remove the password window and display content
                    _this.displayPortfolio();
                    _this.scrollBrowser();
                }
                else {
                    _this.displayPassword();
                }
            }
            else {
                _this.displayPassword();
            }
        };
        this.scrollBrowser = function () {
            // get the anchor tag from the URL
            var _anchorTag = location.href.split("#");
            // if anchor tag exists, scroll it down.
            if (_anchorTag[1] != undefined) {
                switch (_anchorTag[1]) {
                    case "custom_elearning_content":
                        _this.scrollBrowserTo("custom_elearning_content");
                        break;
                    case "authoring":
                        _this.scrollBrowserTo("authoring_tools_content");
                        break;
                    case "lms":
                        _this.scrollBrowserTo("lms_content");
                        break;
                    case "code":
                        _this.scrollBrowserTo("code_content");
                        break;
                    default:
                        break;
                }
            }
        };
        this.scrollBrowserTo = function (divName) {
            var divElement = document.getElementById(divName);
            TweenLite.to(window, 2, { scrollTo: { y: divElement.offsetTop }, ease: Power2.easeOut });
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
            if (currentUserEntry == AccessHandler.PASSWORD) {
                _this.displayPortfolio();
                _this.savePasswordLocally();
                _this.scrollBrowser();
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
        /** @function window.onload
        * wait for the entire page to load. Everything on the page has been download and displayed. */
        window.onload = function () {
            _this.removeLoadingCover();
            _this.checkPassword();
        };
        document.addEventListener("DOMContentLoaded", this.domLoadedEvent, false);
    }
    AccessHandler.prototype.savePasswordLocally = function () {
        localStorage.setItem(AccessHandler.PASSWORD_STORAGE_ID, AccessHandler.PASSWORD);
    };
    AccessHandler.PASSWORD = "DeanBiele";
    // Yes.  ^It's hard coded. :)
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