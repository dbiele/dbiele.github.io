var AccessHandler = (function () {
    function AccessHandler() {
        var _this = this;
        this.displayPassword = function () {
            //show the password dive 
            _this.setContentWindows();
            _this.hidePortfolioGallery();
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
            if (currentUserEntry == "DeanBiele") {
                _this.hidePassWordWindow();
                _this.showPortfolioGallery();
            }
        };
        this.setContentWindows = function () {
            _this._passwordWindow = document.getElementById("password_window");
            _this._customWindow = document.getElementById("custom_elearning_content");
            _this._authoringtoolWindow = document.getElementById("authoring_tools_content");
            _this._lmsWindow = document.getElementById("lms_content");
            _this._codeWindow = document.getElementById("code_content");
        };
        this.hidePassWordWindow = function () {
            _this._passwordWindow.style.visibility = "hidden";
        };
        this.showPortfolioGallery = function () {
            _this._customWindow.style.visibility = "visible";
            _this._authoringtoolWindow.style.visibility = "visible";
            _this._lmsWindow.style.visibility = "visible";
            _this._codeWindow.style.visibility = "visible";
            _this._customWindow.style.margin = "-100px auto 0px";
        };
        this.hidePortfolioGallery = function () {
            _this._customWindow.style.visibility = "hidden";
            _this._authoringtoolWindow.style.visibility = "hidden";
            _this._lmsWindow.style.visibility = "hidden";
            _this._codeWindow.style.visibility = "hidden";
        };
    }
    return AccessHandler;
})();
window.onload = function () {
    var checkAccess = new AccessHandler();
    checkAccess.displayPassword();
};
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