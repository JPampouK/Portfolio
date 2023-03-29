(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"mdl-layout__content {{_darklight.storedTheme}}\">\r\n    <div class=\"page-content\">\r\n        <!-- Your content goes here -->\r\n        <div class=\"inputField\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a data-toggle=\"tooltip\" title=\"Zurück nach oben\" (click)=\"toTop('home')\" id=\"oben\"><img id=\"test\" src=\"assets/img/Pfeil_Weiß.png\" alt=\"Nach oben\" width=\"50px\"></a>\r\n<footer>\r\n    <button type=\"button\" class=\"btn btn-outline-danger\"><a class=\"txt3\" [href]=\"_sendMail.emailString\" (click)=\"_sendMail.sendMail()\" translate>footer.kontakt</a></button>\r\n    <ul>\r\n        <li>\r\n            <a style=\"margin-right: 20px\" href=\"https://www.instagram.com/jpampou/\" target=\"_blank\"><img style=\"filter: grayscale(100%); \" src=\"assets/img/Instagram.png\" alt=\"Instagram\" width=\"30px\" class=\"socialMedia\"></a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://www.linkedin.com/in/janis-p-272187225/\" target=\"_blank\"><img style=\"filter: grayscale(100%); \" src=\"assets/img/LinkedIn.png\" alt=\"LinkedIn\" width=\"30px\" class=\"socialMedia\"></a>\r\n        </li>\r\n    </ul>\r\n    <p> &#169; 2022 Janis Pampoukidis</p>\r\n    <a id=\"impressum\" routerLink=\"/Impressum\" translate>footer.impressum</a>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" (click)=\"scrollToSection('home')\">Janis Pampoukidis</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <img src=\"assets/img/hamburger.png\" alt=\"Menü\" id=\"hamburger\" width=\"35px\">\r\n          </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"scrollToSection('home')\">Home <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"scrollToSection('überMich')\" translate>header.überMich</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"scrollToSection('skills')\">Skills</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"scrollToSection('werdegang')\" translate>header.werdegang</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"scrollToSection('projekte')\" translate>header.projekte</a>\r\n                </li>\r\n            </ul>\r\n            <div id=\"eng\">\r\n                <select class=\"form-select language\" aria-label=\"Default select example\" (change)=\"translateConfigService.changeLanguage($event.target.value)\">\r\n                    <option id=\"deutsch\" value=\"de\"translate>header.deutsch</option>\r\n                    <option id=\"englisch\" value=\"en\" translate>header.englisch</option>\r\n                </select>\r\n            </div>\r\n            <br>\r\n\r\n            <!-- <div class=\"theme-switcher-wrap\" id=\"eng\">\r\n                <div id=\"eng\" style=\"display: inline-flex;\">\r\n                    <img src=\"assets/img/dark_mode.png\" alt=\"Dark Mode\" width=\"30px\" id=\"dark_mode\">\r\n                </div>\r\n                <label [ngClass]=\"(_darklight.storedTheme === 'theme-light')?'theme-switcher active' : 'theme-switcher'\" (click)=\"_darklight.setTheme()\">\r\n                        <div class=\"switch-path\">\r\n                        <div class=\"switch-handle\"></div>\r\n                    </div>\r\n                </label>\r\n            </div> -->\r\n        </div>\r\n\r\n        <!-- <div id=\"weit\">\r\n            <img src=\"assets/img/dark_mode.png\" alt=\"Dark Mode\" width=\"30px\" id=\"dark_mode\">\r\n        </div>\r\n\r\n        <div class=\"theme-switcher-wrap\" id=\"weit\">\r\n            <label [ngClass]=\"(_darklight.storedTheme === 'theme-light')?'theme-switcher active' : 'theme-switcher'\" (click)=\"_darklight.setTheme()\">\r\n                <div class=\"switch-path\">\r\n                    <div class=\"switch-handle\"></div>\r\n                </div>\r\n            </label>\r\n        </div> -->\r\n\r\n        <div id=\"weit\">\r\n            <select class=\"form-select language\" aria-label=\"Default select example\" (change)=\"translateConfigService.changeLanguage($event.target.value)\">\r\n                <option id=\"deutsch\" value=\"de\"translate>header.deutsch</option>\r\n                <option id=\"englisch\" value=\"en\" translate>header.englisch</option>\r\n            </select>\r\n        </div>\r\n    </nav>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"home\">\r\n    <div class=\"berg\">\r\n        <div class=\"card2Home\">\r\n            <div class=\"modal fade\" id=\"infoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"infoModalLabel\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h5 class=\"modal-title\" id=\"infoModalLabel\">Hinweis</h5>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            Das beste Erlebnis erhalten Sie auf größeren Bildschirmen.\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n                <div data-aos=\"fade-left\">\r\n                    <img src=\"assets/img/Janis2.jpeg\" id=\"Janis\" alt=\"Janis\" />\r\n                </div>\r\n\r\n                <table class=\"socialMediaButton\" id=\"weit\">\r\n                    <tr>\r\n                        <td>\r\n                            <a href=\"https://www.instagram.com/jpampou/\" target=\"_blank\"><img src=\"assets/img/Instagram.png\" alt=\"Instagram\" width=\"30px\" class=\"socialMedia\"></a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <a href=\"https://www.linkedin.com/in/janis-p-272187225/\" target=\"_blank\"><img src=\"assets/img/LinkedIn.png\" alt=\"LinkedIn\" width=\"30px\" class=\"socialMedia\"></a>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"vorstellen\" data-aos=\"fade-up\" data-aos-delay=\"50\">\r\n                    <h5 id=\"hi\" translate>home.hi</h5>\r\n                    <h1 id=\"name\">Janis Pampoukidis</h1>\r\n                    <h5 id=\"SoftEnt\" translate>home.beruf</h5>\r\n                    <h4 id=\"anzahl\" translate>überMich.anzahl <span style=\"color: rgb(255, 119, 8);\">{{counter}}</span></h4>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger\"><a (click)=\"scrollToSection('überMich')\" class=\"txt2\" translate>home.überMich</a></button>\r\n                    <div id=\"eng\">\r\n                        <ul>\r\n                            <li>\r\n                                <a href=\"https://www.instagram.com/jpampou/\" target=\"_blank\"><img src=\"assets/img/Instagram.png\" alt=\"Instagram\" width=\"30px\" class=\"socialMedia\"></a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"https://www.linkedin.com/in/janis-p-272187225/\" target=\"_blank\"><img src=\"assets/img/LinkedIn.png\" alt=\"LinkedIn\" width=\"30px\" class=\"socialMedia\"></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/impressum/impressum.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/impressum/impressum.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='impressum'>\r\n    <h1>Impressum</h1>\r\n    <p>Angaben gemäß § 5 TMG</p>\r\n    <p>Janis Pampoukidis <br> Neuburger Str. 265 d<br> 86169 Augsburg <br>\r\n    </p>\r\n    <p> <strong>Vertreten durch: </strong><br> Janis Pampoukidis<br>\r\n    </p>\r\n    <p><strong>Kontakt:</strong> <br> Telefon: 0176-50018933<br> E-Mail: <a href='mailto:janis@pampoukidis.de'>janis@pampoukidis.de</a><br></p>\r\n    <p><strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Inhalte</strong><br><br> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr\r\n        übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte\r\n        fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.\r\n        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br><br>        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter\r\n        oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle\r\n        der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br> Die durch\r\n        die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen\r\n        Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte\r\n        Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden\r\n        wir derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br> Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,\r\n        Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br> Wir weisen darauf hin, dass die Datenübertragung\r\n        im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br> Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten\r\n        durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung\r\n        von Werbeinformationen, etwa durch Spam-Mails, vor.<br>\r\n    </p><br> Website Impressum von <a href=\"https://www.impressum-generator.de\">impressum-generator.de</a>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projekt-dialog/projekt-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projekt-dialog/projekt-dialog.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Einkaufsliste Modal -->\r\n<div *ngIf=\"translate.nowType==='de'\">\r\n    <div *ngFor=\"let p of projekte.projekte.modal\">\r\n        <div class=\"modal fade\" id=\"{{ p.id }}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\" translate>{{ p.name }}</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <!-- Slide Show -->\r\n                        <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                            <div class=\"carousel-inner\">\r\n                                <div class=\"carousel-item active\">\r\n                                    <img class=\"\" src=\"assets/img/Slider/{{ p.bild1 }}\" alt=\"Bild 1\">\r\n                                </div>\r\n                                <div class=\"carousel-item\">\r\n                                    <img class=\"\" src=\"assets/img/Slider/{{ p.bild2 }}\" alt=\"Bild 2\">\r\n                                </div>\r\n                                <div class=\"carousel-item\">\r\n                                    <img class=\"\" src=\"assets/img/Slider/{{ p.bild3 }}\" alt=\"Bild 3\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <p>{{ p.erklaerung }}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"translate.nowType==='en'\">\r\n    <!-- Einkaufsliste Modal Englisch -->\r\n    <div *ngFor=\"let p of projekteEN.projekte.modal\">\r\n        <div class=\"modal fade\" id=\"{{ p.id }}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\" translate>{{ p.name }}</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <!-- Slide Show -->\r\n                        <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                            <div class=\"carousel-inner\">\r\n                                <div class=\"carousel-item active\">\r\n                                    <img class=\"\" src=\"assets/img/Slider/{{ p.bild1 }}\" alt=\"Bild 1\">\r\n                                </div>\r\n                                <div class=\"carousel-item\">\r\n                                    <img class=\"\" src=\"assets/img/Slider/{{ p.bild2 }}\" alt=\"Bild 2\">\r\n                                </div>\r\n                                <div class=\"carousel-item\">\r\n                                    <img class=\"\" src=\"assets/img/Slider/{{ p.bild3 }}\" alt=\"Bild 3\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        {{ p.erklaerung }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projekte/projekte.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projekte/projekte.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"projekte\">\r\n    <h1 class=\"headerLine\" translate>header.projekte</h1>\r\n    <hr>\r\n\r\n    <div class=\"card2\">\r\n        <carousel height=\"450px\" [cellWidth]=\"300\" [loop]=\"true\" [transitionDuration]=\"500\" [arrowsTheme]=\"dark\">\r\n            <div class=\"carousel-cell\" *ngFor=\"let p of projekte.projekte.modal\">\r\n                <div class=\"card cardHover\" style=\"width: 18rem;\" data-aos=\"lip-up\">\r\n                    <img class=\"card-img-top\" src=\"assets/img/{{ p.bild }}\" alt=\"{{ p.name }}\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">{{ p.name }}</h5>\r\n                        <ul>\r\n                            <li><b>Framework:</b> {{ p.framework }} </li>\r\n                            <li><b>DBMS:</b> {{ p.dbms }} </li>\r\n                            <li><b>Webserver:</b> {{ p.webserver }} </li>\r\n                            <li><b translate>projekte.hardwareMaterialienLabel</b> {{ p.hardware }} </li>\r\n                            <li translate><b translate>projekte.verwendungszweckLabel</b> {{ p.verwendungszweck }}</li>\r\n                            <li><b translate>projekte.versionsverwaltungLabel</b> {{ p.versionsverwaltung }} </li>\r\n                            <li><b translate>projekte.entwicklerLabel</b> {{ p.entwickler }} </li>\r\n                        </ul>\r\n                        <!-- <p data-toggle=\"modal\" [attr.data-target]=\"'#' + p.id\" translate>projekte.deteilsLabel</p> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </carousel>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"skills\">\r\n    <h1 class=\"headerLine\">Skills</h1>\r\n    <hr>\r\n    <div class=\"card2\">\r\n        <div class=\"card-body\" data-aos=\"fade-up\">\r\n            <img src=\"assets/img/Angular.png \" alt=\"Angular \" width=\"80px \" style=\"margin-bottom: 10px; \">\r\n            <div class=\"progress \">\r\n                <div class=\"progress-bar \" role=\"progressbar \" style=\"width: 40%; \" aria-valuenow=\"2 \" aria-valuemin=\"0 \" aria-valuemax=\"100 \">40%</div>\r\n            </div>\r\n\r\n            <img src=\"assets/img/SAPUI5.png \" alt=\"SAPUI5 \" width=\"80px \" style=\"margin-top: 20px; margin-bottom: 10px; \">\r\n            <div class=\" progress \" style=\"margin-bottom: 60px; \">\r\n                <div class=\"progress-bar \" role=\"progressbar \" style=\"width: 30%; \" aria-valuenow=\"2 \" aria-valuemin=\"0 \" aria-valuemax=\"100 \">30%</div>\r\n            </div>\r\n            <h5 id=\"aSkills\" style=\"margin-bottom: 30px;\" translate>skills.andere</h5>\r\n            <div class=\"tags\">\r\n                <span class=\"badge badge-secondary \">HTML</span>\r\n                <span class=\"badge badge-secondary \">CSS</span>\r\n                <span class=\"badge badge-secondary \">JavaScript</span>\r\n                <span class=\"badge badge-secondary \">TypeScript</span>\r\n                <span class=\"badge badge-secondary \">PHP</span>\r\n                <span class=\"badge badge-secondary \">SQL</span>\r\n                <span class=\"badge badge-secondary \">Java</span>\r\n                <span class=\"badge badge-secondary \">ABAP</span>\r\n                <span class=\"badge badge-secondary \">Angular</span>\r\n                <span class=\"badge badge-secondary \">SAPUI5</span>\r\n                <span class=\"badge badge-secondary \">Express</span>\r\n                <span class=\"badge badge-secondary \">ASP.NET</span>\r\n                <span class=\"badge badge-secondary \">MySQL</span>\r\n                <span class=\"badge badge-secondary \">MongoDB</span>\r\n                <span class=\"badge badge-secondary \">Arduino</span>\r\n                <span class=\"badge badge-secondary \">Linux</span>\r\n                <span class=\"badge badge-secondary \">Windows</span>\r\n                <span class=\"badge badge-secondary \">Raspberry Pi</span>\r\n                <span class=\"badge badge-secondary \">Git</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #scroll>\r\n    <!-----------------------------Header----------------------------------------->\r\n    <app-header></app-header>\r\n\r\n    <!-----------------------------Home----------------------------------------->\r\n    <app-home></app-home>\r\n\r\n    <!-----------------------------Über mich----------------------------------------->\r\n    <app-ueber-mich></app-ueber-mich>\r\n\r\n    <!-----------------------------Skills----------------------------------------->\r\n    <app-skills></app-skills>\r\n\r\n    <!-----------------------------Werdegang----------------------------------------->\r\n    <app-werdegang></app-werdegang>\r\n\r\n    <!-- ---------------------------Projekte--------------------------------------- -->\r\n    <app-projekte></app-projekte>\r\n\r\n    <!-- ---------------------------Footer--------------------------------------- -->\r\n    <app-footer></app-footer>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ueber-mich/ueber-mich.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ueber-mich/ueber-mich.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"überMich\">\r\n    <h1 class=\"headerLine\" translate>header.überMich</h1>\r\n    <hr>\r\n\r\n    <div class=\"card2\">\r\n        <div class=\"card-body\" id=\"weit\" data-aos=\"fade-up\">\r\n            <div class=\"card3\">\r\n                <div class=\"rand\">\r\n                    <div class=\"card-body\">\r\n                        <h4 style=\"text-align: center;\" translate>überMich.kontaktFrage</h4>\r\n                        <form class=\"kontakt\" userPost=\"ngForm\">\r\n                            <label>E-Mail:</label>\r\n                            <input id=\"input\" type=\"email\" required style=\"color: rgb(255, 119, 8);\" />\r\n                            <br>\r\n                            <label translate>überMich.nachrichtLabel</label>\r\n                            <textarea id=\"textarea\" cols=\"30\" rows=\"10\" required></textarea>\r\n                        </form>\r\n                        <button type=\"button\" class=\"btn btn-outline-danger\"><a class=\"txt3\" [href]=\"_sendMail.emailString\" (click)=\"_sendMail.sendMail()\" translate>überMich.emailSenden</a></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"screenWidth > 1276\">\r\n                <img [src]=\"currentTheme === 'theme-dark' ? \r\n                                    (currentLang === 'de' ? 'assets/img/ich/ich_SCHWARZ_DE.svg' : 'assets/img/ich/ich_SCHWARZ_EN.svg')\r\n                                  : (currentLang === 'de' ? 'assets/img/ich/ich_WEIß_DE.svg' : 'assets/img/ich/ich_WEIß_EN.svg')\" alt=\"\" class=\"ichIMG\">\r\n            </div>\r\n            <div *ngIf=\"screenWidth <= 1276\" id=\"vorstellen\">\r\n                <p translate>überMich.vorstellen</p>\r\n            </div>\r\n            <div data-aos=\"fade-up\" data-aos-duration=\"3000\">\r\n                <img src=\"assets/img/icon-code.svg\" title=\"Coden\" style=\"margin-left: 27px\" class=\"programIcon\" alt=\"Code\">\r\n                <img src=\"assets/img/icon-computer.svg\" title=\"Computer\" class=\"programIcon\" alt=\"Computer\">\r\n                <img src=\"assets/img/icon-terminal.svg\" title=\"CLI\" class=\"programIcon\" alt=\"Terminal\">\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" id=\"eng\" data-aos=\"fade-up\">\r\n            <div *ngIf=\"screenWidth <= 1276\" id=\"vorstellen\">\r\n                <p translate>überMich.vorstellen</p>\r\n            </div>\r\n            <button type=\"button\" id=\"sendMailButton\" class=\"btn btn-outline-danger\"><a [href]=\"_sendMail.emailString\" (click)=\"_sendMail.sendMail()\"><img src=\"assets/img/Mail.png\" alt=\"\"></a></button>\r\n            <div data-aos=\"zoom-in\" data-aos-duration=\"3000\" class=\"icons\">\r\n                <img src=\"assets/img/icon-code.svg\" title=\"Coden\" class=\"programIcon\" alt=\"Code\">\r\n                <img src=\"assets/img/icon-computer.svg\" title=\"Computer\" class=\"programIcon\" alt=\"Computer\">\r\n                <img src=\"assets/img/icon-terminal.svg\" title=\"CLI\" class=\"programIcon\" alt=\"Terminal\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/werdegang/werdegang.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/werdegang/werdegang.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"werdegang\">\r\n    <h1 class=\"headerLine\" translate>header.werdegang</h1>\r\n    <hr>\r\n    <div class=\"card2\">\r\n        <div class=\"card-body\" data-aos=\"fade-up\">\r\n            <div *ngIf=\"screenWidth >= 990\">\r\n                <img [src]=\"currentLang === 'de' ? 'assets/img/werdegang/werdegang_WEIß_DE.svg' : 'assets/img/werdegang/werdegang_WEIß_EN.svg' \" alt=\"\" class=\"werdegangIMG\">\r\n\r\n            </div>\r\n            <div *ngIf=\"screenWidth <= 990\">\r\n                <img [src]=\"currentLang === 'de' ? 'assets/img/werdegang/werdegang_WEIß_DE_MOBIL.svg' : 'assets/img/werdegang/werdegang_WEIß_EN_MOBIL.svg' \" alt=\"\" class=\"werdegangIMGMobil\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impressum/impressum.component */ "./src/app/impressum/impressum.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");






const routerOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
};
const routes = [
    { path: "Janis", component: _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"] },
    { path: "Impressum", component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__["ImpressumComponent"] },
    { path: "", redirectTo: "/Janis", pathMatch: "full" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dark_light_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark-light-theme.service */ "./src/app/dark-light-theme.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AppComponent = class AppComponent {
    constructor(_darklight, http) {
        this._darklight = _darklight;
        this.http = http;
        this.title = 'Portfolio';
    }
    ngOnInit() {
        this._darklight.setTheme();
    }
};
AppComponent.ctorParameters = () => [
    { type: _dark_light_theme_service__WEBPACK_IMPORTED_MODULE_2__["DarkLightThemeService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: rootLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootLoaderFactory", function() { return rootLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-responsive-carousel */ "./node_modules/angular-responsive-carousel/fesm2015/angular-responsive-carousel.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./impressum/impressum.component */ "./src/app/impressum/impressum.component.ts");
/* harmony import */ var _projekt_dialog_projekt_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projekt-dialog/projekt-dialog.component */ "./src/app/projekt-dialog/projekt-dialog.component.ts");
/* harmony import */ var _projekte_projekte_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projekte/projekte.component */ "./src/app/projekte/projekte.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _ueber_mich_ueber_mich_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ueber-mich/ueber-mich.component */ "./src/app/ueber-mich/ueber-mich.component.ts");
/* harmony import */ var _werdegang_werdegang_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./werdegang/werdegang.component */ "./src/app/werdegang/werdegang.component.ts");
/* harmony import */ var _send_mail_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./send-mail.service */ "./src/app/send-mail.service.ts");


























function rootLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
            _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_18__["ImpressumComponent"],
            _projekt_dialog_projekt_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ProjektDialogComponent"],
            _projekte_projekte_component__WEBPACK_IMPORTED_MODULE_20__["ProjekteComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_21__["SkillsComponent"],
            _start_start_component__WEBPACK_IMPORTED_MODULE_22__["StartComponent"],
            _ueber_mich_ueber_mich_component__WEBPACK_IMPORTED_MODULE_23__["UeberMichComponent"],
            _werdegang_werdegang_component__WEBPACK_IMPORTED_MODULE_24__["WerdegangComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: rootLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                }
            }),
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_12__["IvyCarouselModule"]
        ],
        providers: [_send_mail_service__WEBPACK_IMPORTED_MODULE_25__["SendMailService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dark-light-theme.service.ts":
/*!*********************************************!*\
  !*** ./src/app/dark-light-theme.service.ts ***!
  \*********************************************/
/*! exports provided: DarkLightThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkLightThemeService", function() { return DarkLightThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");



let DarkLightThemeService = class DarkLightThemeService {
    constructor() {
        this.storedTheme = localStorage.getItem('theme-color');
        this.currentTheme = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.storedTheme);
    }
    setTheme() {
        if (this.storedTheme === 'theme-light') {
            localStorage.setItem('theme-color', 'theme-dark');
            this.storedTheme = 'theme-dark';
        }
        else {
            localStorage.setItem('theme-color', 'theme-light');
            this.storedTheme = 'theme-dark';
        }
        this.updateCurrentTheme();
    }
    get getTheme() {
        return this.storedTheme;
    }
    updateCurrentTheme() {
        this.currentTheme.next(this.storedTheme);
    }
    getCurrentTheme() {
        return this.currentTheme.asObservable();
    }
};
DarkLightThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DarkLightThemeService);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#oben {\n  border-radius: 10px;\n  transition: 0.45s;\n}\n\n#oben:hover {\n  background-color: rgba(255, 255, 255, 0.206);\n}\n\nfooter {\n  width: 100%;\n  height: 220px;\n  background-color: black;\n  text-align: center;\n}\n\nfooter .txt3 {\n  text-decoration: none;\n}\n\nfooter .btn-outline-danger {\n  margin-top: 30px;\n}\n\nfooter .socialMedia:hover {\n  transform: scale(1.1);\n}\n\nfooter ul {\n  margin-top: 30px;\n}\n\nfooter ul li {\n  display: inline;\n}\n\nfooter #impressum {\n  text-decoration: none;\n  color: #626262;\n  transition: 0.25s;\n}\n\nfooter #impressum:hover {\n  color: #7c7c7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcamFuaXNcXERlc2t0b3BcXFdlYnNlaXRlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksNENBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRENJO0VBQ0kscUJBQUE7QUNDUjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxxQkFBQTtBQ0NSOztBRENJO0VBQ0ksZ0JBQUE7QUNDUjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURDSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxjQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuI29iZW4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNDVzO1xyXG59XHJcblxyXG4jb2Jlbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjA2KTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnR4dDMge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC5idG4tb3V0bGluZS1kYW5nZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsTWVkaWE6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgdWwgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICAgICNpbXByZXNzdW0ge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgfVxyXG4gICAgI2ltcHJlc3N1bTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMjQsIDEyNCwgMTI0KTtcclxuICAgIH1cclxufSIsIiNvYmVuIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogMC40NXM7XG59XG5cbiNvYmVuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIwNik7XG59XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9vdGVyIC50eHQzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuZm9vdGVyIC5idG4tb3V0bGluZS1kYW5nZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuZm9vdGVyIC5zb2NpYWxNZWRpYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbmZvb3RlciB1bCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5mb290ZXIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5mb290ZXIgI2ltcHJlc3N1bSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2MjYyNjI7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xufVxuZm9vdGVyICNpbXByZXNzdW06aG92ZXIge1xuICBjb2xvcjogIzdjN2M3Yztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _send_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../send-mail.service */ "./src/app/send-mail.service.ts");



let FooterComponent = class FooterComponent {
    constructor(_sendMail) {
        this._sendMail = _sendMail;
    }
    ngOnInit() {
    }
    toTop() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
    }
    // Scroll Button Functions
    onScrollEvent($event) {
        this.scrollFunction();
    }
    scrollFunction() {
        var backToTopBtn = document.getElementById("oben");
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            backToTopBtn.style.display = "block";
        }
        else {
            backToTopBtn.style.display = "none";
        }
    }
};
FooterComponent.ctorParameters = () => [
    { type: _send_mail_service__WEBPACK_IMPORTED_MODULE_2__["SendMailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], FooterComponent.prototype, "onScrollEvent", null);
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header .navbar-toggler-icon {\n  background-color: blue;\n}\nheader .navbar {\n  z-index: 2 !important;\n  position: fixed !important;\n  width: 100% !important;\n}\nheader .language {\n  color: black;\n  float: right;\n}\nheader .language option {\n  color: black;\n}\nheader #dark_mode {\n  margin-right: 10px;\n}\nheader .theme-switcher-wrap {\n  float: right;\n  margin-top: 13px;\n  margin-right: 10px;\n}\nheader .theme-switcher-wrap .theme-switcher {\n  display: inline-block;\n  cursor: pointer;\n}\nheader .theme-switcher-wrap .theme-switcher .switch-path {\n  width: 40px;\n  height: 20px;\n  border-radius: 10px;\n  background-color: #ccc;\n}\nheader .theme-switcher-wrap .theme-switcher .switch-path .switch-handle {\n  background-color: #999;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  transition: all 0.3s ease-in-out;\n}\nheader .theme-switcher-wrap .theme-switcher .theme-switcher {\n  display: none;\n}\nheader .theme-switcher-wrap .theme-switcher.active .switch-path {\n  background-color: #555;\n}\nheader .theme-switcher-wrap .theme-switcher.active .switch-handle {\n  transform: translateX(20px);\n  background-color: #7bbb5e;\n}\n@media only screen and (max-width: 990px) {\n  header .bg-dark {\n    background-color: rgba(0, 0, 0, 0.8) !important;\n  }\n}\n@media only screen and (max-width: 1118px) {\n  header .theme-switcher-wrap {\n    float: left;\n  }\n  header .language {\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcamFuaXNcXERlc2t0b3BcXFdlYnNlaXRlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7QUNBUjtBREVJO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0VoQjtBRERnQjtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDR3BCO0FEQVk7RUFDSSxhQUFBO0FDRWhCO0FEQ2dCO0VBQ0ksc0JBQUE7QUNDcEI7QURDZ0I7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0FDQ3BCO0FESUk7RUFDSTtJQUNJLCtDQUFBO0VDRlY7QUFDRjtBRElJO0VBQ0k7SUFDSSxXQUFBO0VDRlY7RURJTTtJQUNJLFdBQUE7RUNGVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgICAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIHotaW5kZXg6IDIhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubGFuZ3VhZ2Uge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAubGFuZ3VhZ2Ugb3B0aW9uIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICAjZGFya19tb2RlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudGhlbWUtc3dpdGNoZXItd3JhcCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIC50aGVtZS1zd2l0Y2hlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAuc3dpdGNoLXBhdGgge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgIC5zd2l0Y2gtaGFuZGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRoZW1lLXN3aXRjaGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgLnN3aXRjaC1wYXRoIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnN3aXRjaC1oYW5kbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JiYjVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgICAgIC5iZy1kYXJrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTE4cHgpIHtcclxuICAgICAgICAudGhlbWUtc3dpdGNoZXItd3JhcCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJoZWFkZXIgLm5hdmJhci10b2dnbGVyLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuaGVhZGVyIC5uYXZiYXIge1xuICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuaGVhZGVyIC5sYW5ndWFnZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuaGVhZGVyIC5sYW5ndWFnZSBvcHRpb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5oZWFkZXIgI2RhcmtfbW9kZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmhlYWRlciAudGhlbWUtc3dpdGNoZXItd3JhcCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaGVhZGVyIC50aGVtZS1zd2l0Y2hlci13cmFwIC50aGVtZS1zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC50aGVtZS1zd2l0Y2hlci13cmFwIC50aGVtZS1zd2l0Y2hlciAuc3dpdGNoLXBhdGgge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuaGVhZGVyIC50aGVtZS1zd2l0Y2hlci13cmFwIC50aGVtZS1zd2l0Y2hlciAuc3dpdGNoLXBhdGggLnN3aXRjaC1oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuaGVhZGVyIC50aGVtZS1zd2l0Y2hlci13cmFwIC50aGVtZS1zd2l0Y2hlciAudGhlbWUtc3dpdGNoZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuaGVhZGVyIC50aGVtZS1zd2l0Y2hlci13cmFwIC50aGVtZS1zd2l0Y2hlci5hY3RpdmUgLnN3aXRjaC1wYXRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cbmhlYWRlciAudGhlbWUtc3dpdGNoZXItd3JhcCAudGhlbWUtc3dpdGNoZXIuYWN0aXZlIC5zd2l0Y2gtaGFuZGxlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JiYjVlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuICBoZWFkZXIgLmJnLWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMThweCkge1xuICBoZWFkZXIgLnRoZW1lLXN3aXRjaGVyLXdyYXAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIGhlYWRlciAubGFuZ3VhZ2Uge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translate-config.service */ "./src/app/translate-config.service.ts");
/* harmony import */ var _dark_light_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dark-light-theme.service */ "./src/app/dark-light-theme.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(elementRef, translateConfigService, _darklight) {
        this.elementRef = elementRef;
        this.translateConfigService = translateConfigService;
        this._darklight = _darklight;
    }
    ngOnInit() {
    }
    scrollToSection(section) {
        const element = document.querySelector('#' + section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"] },
    { type: _dark_light_theme_service__WEBPACK_IMPORTED_MODULE_3__["DarkLightThemeService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home {\n  height: 100vh;\n  padding-top: 2px;\n}\n#home .berg {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('Berg.jpeg');\n  background-size: cover;\n  position: relative;\n  background-attachment: fixed;\n  height: 100vh;\n}\n#home .card2Home {\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  height: 80%;\n  max-width: 1500px;\n  width: 97%;\n  border-radius: 5px;\n}\n#home #name {\n  color: #ff7708;\n  bottom: 400px;\n}\n#home .vorstellen {\n  margin-top: 200px;\n  padding-left: 200px;\n  font-family: \"Inconsolata\", monospace;\n  color: white;\n}\n#home .vorstellen h1 {\n  font-size: 50px;\n}\n#home .vorstellen .txt2 {\n  color: white;\n  text-decoration: none;\n}\n#home .vorstellen .btn-outline-danger {\n  border-color: #ff7708;\n}\n#home .vorstellen .btn-outline-danger:hover {\n  background-color: #ff7708;\n}\n#home .vorstellen #anzahl {\n  font-size: 15px;\n  margin-bottom: 30px;\n}\n#home #Janis {\n  border-radius: 8px;\n  margin-top: 90px;\n  margin-right: 150px;\n  float: right;\n  width: 300px;\n  border: 1px solid #000000;\n  -webkit-animation: schweben 2s ease-in-out infinite;\n          animation: schweben 2s ease-in-out infinite;\n}\n@-webkit-keyframes schweben {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@keyframes schweben {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n#home .socialMediaButton {\n  margin-left: 20px;\n  float: left;\n  margin-top: 240px;\n}\n#home .socialMediaButton tr td {\n  padding-bottom: 20px;\n}\n#home .socialMedia {\n  transition: all 0.2s ease;\n}\n#home .socialMedia:hover {\n  transform: scale(1.1);\n}\n@media only screen and (max-width: 1118px) {\n  #home .berg {\n    background-image: none;\n  }\n  #home .vorstellen {\n    margin-top: 30px;\n    text-align: center;\n    padding-left: 0px;\n    font-family: \"Inconsolata\", monospace;\n  }\n  #home .vorstellen #name {\n    font-size: 40px;\n  }\n  #home .vorstellen ul {\n    margin-top: 90px;\n  }\n  #home .vorstellen ul li {\n    display: inline;\n    list-style: none;\n    margin-right: 10px;\n  }\n  #home #Janis {\n    margin-top: 30px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 200px;\n    float: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGphbmlzXFxEZXNrdG9wXFxXZWJzZWl0ZVxcUG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBRENRO0VBQ0kscUZBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDQ1o7QURDUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQ1E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0NaO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7QUNFaEI7QURBWTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ0VoQjtBREFZO0VBQ0kscUJBQUE7QUNFaEI7QURBWTtFQUNJLHlCQUFBO0FDRWhCO0FER1k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNEaEI7QURJUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDRlo7QURJUTtFQUNJO0lBQ0ksMEJBQUE7RUNGZDtFRElVO0lBQ0ksNEJBQUE7RUNGZDtFRElVO0lBQ0ksMEJBQUE7RUNGZDtBQUNGO0FEUFE7RUFDSTtJQUNJLDBCQUFBO0VDRmQ7RURJVTtJQUNJLDRCQUFBO0VDRmQ7RURJVTtJQUNJLDBCQUFBO0VDRmQ7QUFDRjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNGWjtBRElRO0VBQ0ksb0JBQUE7QUNGWjtBRElRO0VBQ0kseUJBQUE7QUNGWjtBRElRO0VBQ0kscUJBQUE7QUNGWjtBRE1JO0VBRVE7SUFDSSxzQkFBQTtFQ0pkO0VETVU7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQ0FBQTtFQ0pkO0VES2M7SUFDSSxlQUFBO0VDSGxCO0VES2M7SUFDSSxnQkFBQTtFQ0hsQjtFREtjO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUNIbEI7RURNVTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ0pkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAjaG9tZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICAgIC5iZXJnIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChDOlxcVXNlcnNcXGphbmlzXFxEZXNrdG9wXFxXZWJzZWl0ZVxcUG9ydGZvbGlvXFxzcmNcXGFzc2V0c1xcaW1nXFxCZXJnLmpwZWcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkMkhvbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI25hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMTE5LCA4KTtcclxuICAgICAgICAgICAgYm90dG9tOiA0MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZvcnN0ZWxsZW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnR4dDIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tb3V0bGluZS1kYW5nZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxMTksIDgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tb3V0bGluZS1kYW5nZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTE5LCA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjU29mdEVudCB7XHJcbiAgICAgICAgICAgICAgICAvL21hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2FuemFobCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNKYW5pcyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2Nod2ViZW4gMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgc2Nod2ViZW4ge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWxNZWRpYUJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWxNZWRpYUJ1dHRvbiB0ciB0ZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc29jaWFsTWVkaWEge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc29jaWFsTWVkaWE6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMThweCkge1xyXG4gICAgICAgICNob21lIHtcclxuICAgICAgICAgICAgLmJlcmcge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudm9yc3RlbGxlbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICAgICAgI25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdWwgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjSmFuaXMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iLCIjaG9tZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG4jaG9tZSAuYmVyZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChDOlxcVXNlcnNcXGphbmlzXFxEZXNrdG9wXFxXZWJzZWl0ZVxcUG9ydGZvbGlvXFxzcmNcXGFzc2V0c1xcaW1nXFxCZXJnLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG59XG4jaG9tZSAuY2FyZDJIb21lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiA4MCU7XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICB3aWR0aDogOTclO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jaG9tZSAjbmFtZSB7XG4gIGNvbG9yOiAjZmY3NzA4O1xuICBib3R0b206IDQwMHB4O1xufVxuI2hvbWUgLnZvcnN0ZWxsZW4ge1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGFcIiwgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG59XG4jaG9tZSAudm9yc3RlbGxlbiBoMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbiNob21lIC52b3JzdGVsbGVuIC50eHQyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jaG9tZSAudm9yc3RlbGxlbiAuYnRuLW91dGxpbmUtZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY3NzA4O1xufVxuI2hvbWUgLnZvcnN0ZWxsZW4gLmJ0bi1vdXRsaW5lLWRhbmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc3MDg7XG59XG4jaG9tZSAudm9yc3RlbGxlbiAjYW56YWhsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuI2hvbWUgI0phbmlzIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgYW5pbWF0aW9uOiBzY2h3ZWJlbiAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgc2Nod2ViZW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG4jaG9tZSAuc29jaWFsTWVkaWFCdXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDI0MHB4O1xufVxuI2hvbWUgLnNvY2lhbE1lZGlhQnV0dG9uIHRyIHRkIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4jaG9tZSAuc29jaWFsTWVkaWEge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuI2hvbWUgLnNvY2lhbE1lZGlhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMThweCkge1xuICAjaG9tZSAuYmVyZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxuICAjaG9tZSAudm9yc3RlbGxlbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGFcIiwgbW9ub3NwYWNlO1xuICB9XG4gICNob21lIC52b3JzdGVsbGVuICNuYW1lIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbiAgI2hvbWUgLnZvcnN0ZWxsZW4gdWwge1xuICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gIH1cbiAgI2hvbWUgLnZvcnN0ZWxsZW4gdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAjaG9tZSAjSmFuaXMge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let HomeComponent = class HomeComponent {
    constructor() {
    }
    ngOnInit() {
        if (window.innerWidth < 1120) {
            $('#infoModal').modal('show');
        }
        this.updateVisitorCount();
    }
    scrollToSection(section) {
        const element = document.querySelector('#' + section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    updateVisitorCount() {
        fetch('https://api.countapi.xyz/update/janispampoukidis.duckdns.org/youtube/?amount=1')
            .then(res => res.json())
            .then(res => {
            this.counter = res.value;
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(10px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400),
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/impressum/impressum.component.scss":
/*!****************************************************!*\
  !*** ./src/app/impressum/impressum.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  color: black;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wcmVzc3VtL0M6XFxVc2Vyc1xcamFuaXNcXERlc2t0b3BcXFdlYnNlaXRlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGltcHJlc3N1bVxcaW1wcmVzc3VtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbXByZXNzdW0vaW1wcmVzc3VtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pbXByZXNzdW0vaW1wcmVzc3VtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIqIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/impressum/impressum.component.ts":
/*!**************************************************!*\
  !*** ./src/app/impressum/impressum.component.ts ***!
  \**************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImpressumComponent = class ImpressumComponent {
    constructor() { }
    ngOnInit() {
    }
};
ImpressumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-impressum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./impressum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/impressum/impressum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./impressum.component.scss */ "./src/app/impressum/impressum.component.scss")).default]
    })
], ImpressumComponent);



/***/ }),

/***/ "./src/app/projekt-dialog/projekt-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/projekt-dialog/projekt-dialog.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#exampleModalLongTitle {\n  color: #fd7e14;\n}\n\n.modal-content {\n  min-height: 300px;\n}\n\nimg {\n  min-width: 200px;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVrdC1kaWFsb2cvQzpcXFVzZXJzXFxqYW5pc1xcRGVza3RvcFxcV2Vic2VpdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxccHJvamVrdC1kaWFsb2dcXHByb2pla3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWt0LWRpYWxvZy9wcm9qZWt0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWt0LWRpYWxvZy9wcm9qZWt0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNleGFtcGxlTW9kYWxMb25nVGl0bGUge1xyXG4gICAgY29sb3I6ICNmZDdlMTQ7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbn0iLCIjZXhhbXBsZU1vZGFsTG9uZ1RpdGxlIHtcbiAgY29sb3I6ICNmZDdlMTQ7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbmltZyB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/projekt-dialog/projekt-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/projekt-dialog/projekt-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ProjektDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjektDialogComponent", function() { return ProjektDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/i18n/de.json */ "./src/assets/i18n/de.json");
var src_assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/i18n/de.json */ "./src/assets/i18n/de.json", 1);
/* harmony import */ var src_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/i18n/en.json */ "./src/assets/i18n/en.json");
var src_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/i18n/en.json */ "./src/assets/i18n/en.json", 1);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translate-config.service */ "./src/app/translate-config.service.ts");





let ProjektDialogComponent = class ProjektDialogComponent {
    constructor(translate) {
        this.translate = translate;
        this.projekte = src_assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_2__;
        this.projekteEN = src_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3__;
    }
    ngOnInit() {
    }
};
ProjektDialogComponent.ctorParameters = () => [
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_4__["TranslateConfigService"] }
];
ProjektDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projekt-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projekt-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projekt-dialog/projekt-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projekt-dialog.component.scss */ "./src/app/projekt-dialog/projekt-dialog.component.scss")).default]
    })
], ProjektDialogComponent);



/***/ }),

/***/ "./src/app/projekte/projekte.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projekte/projekte.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#projekte {\n  text-align: center;\n}\n#projekte .card4 {\n  margin-top: 20px;\n  height: 450px;\n  width: 500px;\n  border-radius: 5px;\n}\n#projekte .card2 {\n  overflow-x: auto;\n  padding-top: 30px;\n  padding-left: 20px;\n}\n#projekte .card2 carousel {\n  z-index: 0;\n}\n#projekte .card {\n  overflow: auto;\n  height: 470px;\n  min-width: 250px;\n  transition: 0.3s;\n  box-shadow: 4px 9px 9px -7px black;\n}\n#projekte .card .card-title {\n  color: #fd7e14;\n}\n#projekte .card .card-img-top {\n  max-height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#projekte .card-body ul {\n  text-align: left;\n}\n#projekte .card:hover {\n  transform: scale(1.02);\n}\n#projekte p {\n  float: left;\n  cursor: pointer;\n  color: #fd7e14;\n  transition: 0.25s;\n  position: relative;\n}\n#projekte p:hover {\n  color: #c46211;\n  transform: translateX(20%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVrdGUvQzpcXFVzZXJzXFxqYW5pc1xcRGVza3RvcFxcV2Vic2VpdGVcXFBvcnRmb2xpby9zcmNcXGFwcFxccHJvamVrdGVcXHByb2pla3RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWt0ZS9wcm9qZWt0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksVUFBQTtBQ0daO0FEQUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQ0VSO0FERFE7RUFDSSxjQUFBO0FDR1o7QUREUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0daO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxzQkFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcHJvamVrdGUvcHJvamVrdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvamVrdGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmNhcmQ0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIC5jYXJkMiB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgY2Fyb3VzZWwge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBib3gtc2hhZG93OiA0cHggOXB4IDlweCAtN3B4IGJsYWNrO1xyXG4gICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZDdlMTQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtYm9keSB1bCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmQ3ZTE0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIHA6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYzQ2MjExO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG4gICAgfVxyXG59IiwiI3Byb2pla3RlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3Byb2pla3RlIC5jYXJkNCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI3Byb2pla3RlIC5jYXJkMiB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4jcHJvamVrdGUgLmNhcmQyIGNhcm91c2VsIHtcbiAgei1pbmRleDogMDtcbn1cbiNwcm9qZWt0ZSAuY2FyZCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDQ3MHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3gtc2hhZG93OiA0cHggOXB4IDlweCAtN3B4IGJsYWNrO1xufVxuI3Byb2pla3RlIC5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZDdlMTQ7XG59XG4jcHJvamVrdGUgLmNhcmQgLmNhcmQtaW1nLXRvcCB7XG4gIG1heC1oZWlnaHQ6IDE2MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbiNwcm9qZWt0ZSAuY2FyZC1ib2R5IHVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNwcm9qZWt0ZSAuY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59XG4jcHJvamVrdGUgcCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmQ3ZTE0O1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI3Byb2pla3RlIHA6aG92ZXIge1xuICBjb2xvcjogI2M0NjIxMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/projekte/projekte.component.ts":
/*!************************************************!*\
  !*** ./src/app/projekte/projekte.component.ts ***!
  \************************************************/
/*! exports provided: ProjekteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjekteComponent", function() { return ProjekteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/i18n/de.json */ "./src/assets/i18n/de.json");
var src_assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/i18n/de.json */ "./src/assets/i18n/de.json", 1);
/* harmony import */ var src_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/i18n/en.json */ "./src/assets/i18n/en.json");
var src_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/i18n/en.json */ "./src/assets/i18n/en.json", 1);
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translate-config.service */ "./src/app/translate-config.service.ts");





let ProjekteComponent = class ProjekteComponent {
    constructor(translate) {
        this.translate = translate;
        this.projekte = src_assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_2__;
        this.projekteEN = src_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3__;
    }
    ngOnInit() {
    }
};
ProjekteComponent.ctorParameters = () => [
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_4__["TranslateConfigService"] }
];
ProjekteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projekte',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projekte.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projekte/projekte.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projekte.component.scss */ "./src/app/projekte/projekte.component.scss")).default]
    })
], ProjekteComponent);



/***/ }),

/***/ "./src/app/send-mail.service.ts":
/*!**************************************!*\
  !*** ./src/app/send-mail.service.ts ***!
  \**************************************/
/*! exports provided: SendMailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailService", function() { return SendMailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SendMailService = class SendMailService {
    constructor() {
        this.emailString = " ";
    }
    sendMail() {
        let mail = document.getElementById("input");
        let text = document.getElementById("textarea");
        this.emailString = "mailto:janis@pampoukidis.de?Subject=Nachricht von " + mail.value + " &body=" + text.value;
        text.value = "";
        mail.value = "";
    }
};
SendMailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SendMailService);



/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#skills {\n  text-align: center;\n  height: auto;\n}\n\n#box2 {\n  width: 200px;\n  height: 200px;\n  border: 1px solid black;\n  border-radius: 100px;\n}\n\n.badge {\n  font-size: 20px;\n  margin-right: 20px;\n  margin-bottom: 15px;\n}\n\n.progress-bar {\n  background-color: #ff7708;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL0M6XFxVc2Vyc1xcamFuaXNcXERlc2t0b3BcXFdlYnNlaXRlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ta2lsbHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiNza2lsbHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jYm94MiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTE5LCA4KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTE4cHgpIHt9IiwiI3NraWxscyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jYm94MiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uYmFkZ2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc3MDg7XG59Il19 */");

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/app/start/start.component.scss":
/*!********************************************!*\
  !*** ./src/app/start/start.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StartComponent = class StartComponent {
    constructor() {
        this.fehler = false;
        this.test = false;
    }
    ngOnInit() {
    }
    myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        }
        else {
            x.style.display = "block";
        }
    }
};
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.scss */ "./src/app/start/start.component.scss")).default]
    })
], StartComponent);



/***/ }),

/***/ "./src/app/translate-config.service.ts":
/*!*********************************************!*\
  !*** ./src/app/translate-config.service.ts ***!
  \*********************************************/
/*! exports provided: TranslateConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function() { return TranslateConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");




let TranslateConfigService = class TranslateConfigService {
    constructor(translateService) {
        this.translateService = translateService;
        this.nowType = "de";
        this.currentLang = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.nowType);
        this.translateService.use('de');
    }
    changeLanguage(type) {
        this.translateService.use(type);
        this.nowType = type;
        this.updateCurrentLang();
    }
    updateCurrentLang() {
        this.currentLang.next(this.nowType);
    }
    getCurrentLang() {
        return this.currentLang.asObservable();
    }
};
TranslateConfigService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslateConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TranslateConfigService);



/***/ }),

/***/ "./src/app/ueber-mich/ueber-mich.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ueber-mich/ueber-mich.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n#überMich {\n  text-align: center;\n}\n#überMich .card3 {\n  margin-top: 50px;\n  height: 400px;\n  width: 500px;\n  border-radius: 5px;\n  float: right;\n}\n#überMich #vorstellen {\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 200px;\n}\n#überMich .ichIMG {\n  width: 700px;\n  transition: 0.9s;\n}\n#überMich .ichIMG:hover {\n  transform: scale(1.04);\n}\n#überMich .hljs {\n  width: 700px;\n  background: none;\n}\n#überMich .card-body {\n  text-align: left;\n}\n#überMich .rand {\n  margin-left: 25px;\n  margin-top: 25px;\n  height: 350px;\n  width: 450px;\n  border-color: #ff7708;\n  border-width: 3px;\n  border-style: solid;\n  border-radius: 5px;\n}\n#überMich .kontakt {\n  margin-bottom: 20px;\n}\n#überMich .kontakt input {\n  margin-left: 25px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n#überMich .kontakt textarea {\n  margin-left: 3px;\n  vertical-align: top;\n  height: 100px;\n  max-width: 200px;\n  max-height: 150px;\n  color: #ff7708;\n}\n#überMich .txt3 {\n  text-decoration: none;\n}\n#überMich .btn-outline-danger {\n  border-color: #ff7708;\n}\n#überMich .btn-outline-danger:hover {\n  background-color: #ff7708;\n}\n#überMich .programIcon {\n  width: 100px;\n  margin-right: 70px;\n  margin-top: 20px;\n  -webkit-filter: invert(99%) sepia(92%) saturate(51%) hue-rotate(225deg) brightness(115%) contrast(100%);\n          filter: invert(99%) sepia(92%) saturate(51%) hue-rotate(225deg) brightness(115%) contrast(100%);\n  transition: 0.75s;\n}\n#überMich .programIcon:hover {\n  transform: scale(1.2);\n  -webkit-filter: invert(61%) sepia(58%) saturate(4778%) hue-rotate(355deg) brightness(101%) contrast(104%);\n          filter: invert(61%) sepia(58%) saturate(4778%) hue-rotate(355deg) brightness(101%) contrast(104%);\n}\n#überMich .ichIMGMobil {\n  margin-left: auto;\n  margin-right: auto;\n  width: auto;\n}\n@media only screen and (max-width: 1118px) {\n  #überMich {\n    text-align: center;\n    height: auto;\n    min-height: 740px;\n  }\n  #überMich .ichIMGMobil {\n    margin-left: auto;\n    margin-right: auto;\n    width: 350px;\n  }\n  #überMich #sendMailButton {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0px;\n  }\n  #überMich .icons {\n    text-align: center;\n  }\n  #überMich .programIcon {\n    width: 70px;\n    margin-right: 30px;\n  }\n  #überMich .hljs {\n    width: 350px;\n    background: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWViZXItbWljaC91ZWJlci1taWNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91ZWJlci1taWNoL0M6XFxVc2Vyc1xcamFuaXNcXERlc2t0b3BcXFdlYnNlaXRlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXHVlYmVyLW1pY2hcXHVlYmVyLW1pY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksa0JBQUE7QURDSjtBQ0FJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBREVSO0FDQUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QURFUjtBQ0FJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FERVI7QUNBSTtFQUNJLHNCQUFBO0FERVI7QUNBSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBREVSO0FDQUk7RUFDSSxnQkFBQTtBREVSO0FDQUk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREVSO0FDQUk7RUFDSSxtQkFBQTtBREVSO0FDQUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURFUjtBQ0FJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREVSO0FDQUk7RUFDSSxxQkFBQTtBREVSO0FDQUk7RUFDSSxxQkFBQTtBREVSO0FDQUk7RUFDSSx5QkFBQTtBREVSO0FDQUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVHQUFBO1VBQUEsK0ZBQUE7RUFDQSxpQkFBQTtBREVSO0FDQUk7RUFDSSxxQkFBQTtFQUNBLHlHQUFBO1VBQUEsaUdBQUE7QURFUjtBQ0FJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURFUjtBQ0VBO0VBRUk7SUFNSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFRExOO0VDRk07SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFRElWO0VDQ007SUFDSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RURDVjtFQ0NNO0lBQ0ksa0JBQUE7RURDVjtFQ0NNO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VEQ1Y7RUNDTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtFRENWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91ZWJlci1taWNoL3VlYmVyLW1pY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jw7xiZXJNaWNoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI8O8YmVyTWljaCAuY2FyZDMge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuI8O8YmVyTWljaCAjdm9yc3RlbGxlbiB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xufVxuI8O8YmVyTWljaCAuaWNoSU1HIHtcbiAgd2lkdGg6IDcwMHB4O1xuICB0cmFuc2l0aW9uOiAwLjlzO1xufVxuI8O8YmVyTWljaCAuaWNoSU1HOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcbn1cbiPDvGJlck1pY2ggLmhsanMge1xuICB3aWR0aDogNzAwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4jw7xiZXJNaWNoIC5jYXJkLWJvZHkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI8O8YmVyTWljaCAucmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogNDUwcHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmNzcwODtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiPDvGJlck1pY2ggLmtvbnRha3Qge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI8O8YmVyTWljaCAua29udGFrdCBpbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuI8O8YmVyTWljaCAua29udGFrdCB0ZXh0YXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBjb2xvcjogI2ZmNzcwODtcbn1cbiPDvGJlck1pY2ggLnR4dDMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jw7xiZXJNaWNoIC5idG4tb3V0bGluZS1kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICNmZjc3MDg7XG59XG4jw7xiZXJNaWNoIC5idG4tb3V0bGluZS1kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NzA4O1xufVxuI8O8YmVyTWljaCAucHJvZ3JhbUljb24ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSg5MiUpIHNhdHVyYXRlKDUxJSkgaHVlLXJvdGF0ZSgyMjVkZWcpIGJyaWdodG5lc3MoMTE1JSkgY29udHJhc3QoMTAwJSk7XG4gIHRyYW5zaXRpb246IDAuNzVzO1xufVxuI8O8YmVyTWljaCAucHJvZ3JhbUljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIGZpbHRlcjogaW52ZXJ0KDYxJSkgc2VwaWEoNTglKSBzYXR1cmF0ZSg0Nzc4JSkgaHVlLXJvdGF0ZSgzNTVkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoMTA0JSk7XG59XG4jw7xiZXJNaWNoIC5pY2hJTUdNb2JpbCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMThweCkge1xuICAjw7xiZXJNaWNoIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDc0MHB4O1xuICB9XG4gICPDvGJlck1pY2ggLmljaElNR01vYmlsIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gICPDvGJlck1pY2ggI3NlbmRNYWlsQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gICPDvGJlck1pY2ggLmljb25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgI8O8YmVyTWljaCAucHJvZ3JhbUljb24ge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfVxuICAjw7xiZXJNaWNoIC5obGpzIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufSIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3DnGJlciBtaWNoLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jw7xiZXJNaWNoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5jYXJkMyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgI3ZvcnN0ZWxsZW4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICAgIH1cclxuICAgIC5pY2hJTUcge1xyXG4gICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjlzO1xyXG4gICAgfVxyXG4gICAgLmljaElNRzpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICAgIH1cclxuICAgIC5obGpzIHtcclxuICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAucmFuZCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDExOSwgOCk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAua29udGFrdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5rb250YWt0IGlucHV0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAua29udGFrdCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMTE5LCA4KTtcclxuICAgIH1cclxuICAgIC50eHQzIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnRuLW91dGxpbmUtZGFuZ2VyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDExOSwgOCk7XHJcbiAgICB9XHJcbiAgICAuYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTksIDgpO1xyXG4gICAgfVxyXG4gICAgLnByb2dyYW1JY29uIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSg5MiUpIHNhdHVyYXRlKDUxJSkgaHVlLXJvdGF0ZSgyMjVkZWcpIGJyaWdodG5lc3MoMTE1JSkgY29udHJhc3QoMTAwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC43NXM7XHJcbiAgICB9XHJcbiAgICAucHJvZ3JhbUljb246aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICBmaWx0ZXI6IGludmVydCg2MSUpIHNlcGlhKDU4JSkgc2F0dXJhdGUoNDc3OCUpIGh1ZS1yb3RhdGUoMzU1ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwNCUpO1xyXG4gICAgfVxyXG4gICAgLmljaElNR01vYmlsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTExOHB4KSB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tw5xiZXIgbWljaC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICPDvGJlck1pY2gge1xyXG4gICAgICAgIC5pY2hJTUdNb2JpbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiA3NDBweDtcclxuICAgICAgICAjc2VuZE1haWxCdXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9ncmFtSWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5obGpzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/ueber-mich/ueber-mich.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ueber-mich/ueber-mich.component.ts ***!
  \****************************************************/
/*! exports provided: UeberMichComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UeberMichComponent", function() { return UeberMichComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _send_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../send-mail.service */ "./src/app/send-mail.service.ts");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate-config.service */ "./src/app/translate-config.service.ts");
/* harmony import */ var _dark_light_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dark-light-theme.service */ "./src/app/dark-light-theme.service.ts");





let UeberMichComponent = class UeberMichComponent {
    constructor(_sendMail, _darklightTheme, translate) {
        this._sendMail = _sendMail;
        this._darklightTheme = _darklightTheme;
        this.translate = translate;
    }
    ngOnInit() {
        this.subscription = this._darklightTheme.getCurrentTheme().subscribe(theme => {
            this.currentTheme = theme;
        });
        this.subscription = this.translate.getCurrentLang().subscribe(lang => {
            this.currentLang = lang;
        });
        this.screenWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            this.screenWidth = window.innerWidth;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
UeberMichComponent.ctorParameters = () => [
    { type: _send_mail_service__WEBPACK_IMPORTED_MODULE_2__["SendMailService"] },
    { type: _dark_light_theme_service__WEBPACK_IMPORTED_MODULE_4__["DarkLightThemeService"] },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"] }
];
UeberMichComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ueber-mich',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ueber-mich.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ueber-mich/ueber-mich.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ueber-mich.component.scss */ "./src/app/ueber-mich/ueber-mich.component.scss")).default]
    })
], UeberMichComponent);



/***/ }),

/***/ "./src/app/werdegang/werdegang.component.scss":
/*!****************************************************!*\
  !*** ./src/app/werdegang/werdegang.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#werdegang {\n  text-align: center;\n}\n#werdegang .card2 {\n  height: auto;\n  min-height: 80%;\n}\n#werdegang .werdegangIMG {\n  margin-top: 50px;\n  width: 800px;\n}\n#werdegang .werdegangIMGMobil {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VyZGVnYW5nL0M6XFxVc2Vyc1xcamFuaXNcXERlc2t0b3BcXFdlYnNlaXRlXFxQb3J0Zm9saW8vc3JjXFxhcHBcXHdlcmRlZ2FuZ1xcd2VyZGVnYW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZXJkZWdhbmcvd2VyZGVnYW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBWUksa0JBQUE7QUNWSjtBRERJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNHUjtBRERJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDR1I7QURESTtFQUNJLFlBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3dlcmRlZ2FuZy93ZXJkZWdhbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VyZGVnYW5nIHtcclxuICAgIC5jYXJkMiB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwJTtcclxuICAgIH1cclxuICAgIC53ZXJkZWdhbmdJTUcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgfVxyXG4gICAgLndlcmRlZ2FuZ0lNR01vYmlsIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIjd2VyZGVnYW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3dlcmRlZ2FuZyAuY2FyZDIge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDgwJTtcbn1cbiN3ZXJkZWdhbmcgLndlcmRlZ2FuZ0lNRyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA4MDBweDtcbn1cbiN3ZXJkZWdhbmcgLndlcmRlZ2FuZ0lNR01vYmlsIHtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/werdegang/werdegang.component.ts":
/*!**************************************************!*\
  !*** ./src/app/werdegang/werdegang.component.ts ***!
  \**************************************************/
/*! exports provided: WerdegangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WerdegangComponent", function() { return WerdegangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dark_light_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dark-light-theme.service */ "./src/app/dark-light-theme.service.ts");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate-config.service */ "./src/app/translate-config.service.ts");




let WerdegangComponent = class WerdegangComponent {
    constructor(_darklightTheme, _translate) {
        this._darklightTheme = _darklightTheme;
        this._translate = _translate;
    }
    ngOnInit() {
        this.subscription = this._darklightTheme.getCurrentTheme().subscribe(theme => {
            this.currentTheme = theme;
        });
        this.subscription = this._translate.getCurrentLang().subscribe(lang => {
            this.currentLang = lang;
        });
        this.screenWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            this.screenWidth = window.innerWidth;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
WerdegangComponent.ctorParameters = () => [
    { type: _dark_light_theme_service__WEBPACK_IMPORTED_MODULE_2__["DarkLightThemeService"] },
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"] }
];
WerdegangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-werdegang',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./werdegang.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/werdegang/werdegang.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./werdegang.component.scss */ "./src/app/werdegang/werdegang.component.scss")).default]
    })
], WerdegangComponent);



/***/ }),

/***/ "./src/assets/i18n/de.json":
/*!*********************************!*\
  !*** ./src/assets/i18n/de.json ***!
  \*********************************/
/*! exports provided: header, home, überMich, skills, werdegang, projekte, footer, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":{\"überMich\":\"Über mich\",\"werdegang\":\"Werdegang\",\"projekte\":\"Projekte\",\"deutsch\":\"Deutsch\",\"englisch\":\"Englisch\"},\"home\":{\"hi\":\"Hi, ich bin\",\"beruf\":\"Fachinformatiker für Anwendungsentwicklung\",\"überMich\":\"Über mich\"},\"überMich\":{\"kontaktFrage\":\"Du möchtest Kontakt?\",\"nachrichtLabel\":\"Nachricht:\",\"emailSenden\":\"E-Mail senden\",\"anzahl\":\"Anzahl der Besucher: \",\"vorstellen\":\"Ich bin Janis, 19 Jahre alt und absolviere aktuell eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der LEW Verteilnetz GmbH in Augsburg.\"},\"skills\":{\"andere\":\"Andere Skills\"},\"werdegang\":{\"2014\":\"seit 2014\",\"grundschule\":\"Grundschule Hammerschmiede\",\"asp\":\"Abenteuerspielplatz Hammerschmiede\",\"freiwillig\":\"(Als freiwilliger Helfer)\",\"realschule\":\"Maria-Ward-Realschule Augsburg\",\"ausbildung\":\"Ausbildung zum Fachinformatiker für Anwendungsentwicklung\",\"bisHeute\":\"2020 - heute\"},\"projekte\":{\"verwendungszweckLabel\":\"Verwendungszweck:\",\"privatLabel\":\"Privat\",\"versionsverwaltungLabel\":\"Versionsverwaltung:\",\"sonstigesLabel\":\"Sonstiges:\",\"entwicklerLabel\":\"Entwickler:\",\"berufsschuleLabel\":\"Berufsschule\",\"hardwareMaterialienLabel\":\"Hardware/Materialien:\",\"deteilsLabel\":\"Details\",\"modal\":[{\"id\":\"nicoModal\",\"name\":\"Comming Soon\",\"bild\":\"Foto-Platzhalter.jpg\",\"framework\":\"\",\"dbms\":\"\",\"webserver\":\"\",\"hardware\":\"\",\"verwendungszweck\":\"\",\"versionsverwaltung\":\"\",\"entwickler\":\"\",\"bild1\":\"Foto-Platzhalter.jpg\",\"bild2\":\"Foto-Platzhalter.jpg\",\"bild3\":\"Foto-Platzhalter.jpg\",\"erklaerung\":\"\"},{\"id\":\"loungeModal\",\"name\":\"LED Lounge\",\"bild\":\"Lounge.jpeg\",\"framework\":\"Arduino\",\"dbms\":\"/\",\"webserver\":\"WLED\",\"hardware\":\"ESP8266, LED ws2801, Kunststoff, Holz\",\"verwendungszweck\":\"Privat\",\"versionsverwaltung\":\"Git\",\"entwickler\":\"Janis\",\"bild1\":\"EL_Dashboard.png\",\"bild2\":\"EL_Wetter.png\",\"bild3\":\"EL_Dialog.png\",\"erklaerung\":\"\"},{\"id\":\"einkaufslisteModal\",\"name\":\"Einkaufsliste\",\"bild\":\"Einkaufsliste.png\",\"framework\":\"Angular\",\"dbms\":\"MySQL\",\"webserver\":\"Apache\",\"hardware\":\"/\",\"verwendungszweck\":\"Privat\",\"versionsverwaltung\":\"Git\",\"entwickler\":\"Janis\",\"bild1\":\"EL_Dashboard.png\",\"bild2\":\"EL_Wetter.png\",\"bild3\":\"EL_Dialog.png\",\"erklaerung\":\"Dank der Einkaufsliste ist es möglich, den Wocheneinkauf neu zu planen. Dieser ist natürlich von außerhalb erreichbar und jeder berechtigte Nutzer, kann Wunscheinkäufe eintragen. Außerdem gibt es die Funktion, den Preis pro Woche anzugeben. Der Verlauf der Preise wird anhand eines Diagrammes dargestellt. Auf einer dritten Seite wird auch das aktuelle Wetter von ausgewählten Standorten angezeigt.\"},{\"id\":\"portfolioModal\",\"name\":\"Portfolio\",\"bild\":\"Portfolio.png\",\"framework\":\"Angular\",\"dbms\":\"/\",\"webserver\":\"Apache\",\"hardware\":\"/\",\"verwendungszweck\":\"Privat\",\"versionsverwaltung\":\"Git\",\"entwickler\":\"Janis\",\"bild1\":\"P_Home.png\",\"bild2\":\"P_Skills.png\",\"bild3\":\"P_Header.png\",\"erklaerung\":\"Um noch mehr über Angular zu lernen, ist das Portfolio eine SPA. Hier gebe ich einen kleinen Einblick in meine Kenntnisse und Projekte.\"},{\"id\":\"schulprojektModal\",\"name\":\"Schulprojekt\",\"bild\":\"Tarife.png\",\"framework\":\"Angular\",\"dbms\":\"MySQL\",\"webserver\":\"Apache\",\"hardware\":\"/\",\"verwendungszweck\":\"Schule\",\"versionsverwaltung\":\"Git\",\"entwickler\":\"Janis\",\"bild1\":\"TR_Uebersicht.png\",\"bild2\":\"TR_Login.png\",\"bild3\":\"TR_Bearbeiten.png\",\"erklaerung\":\"Für die letzte Woche in der Schule, durften wir ein Übungsprojekt erstellen. Dabei wurden alle Phasen eines Projektes durchlaufen und am Ende auch vorgestellt. Meine Aufgabe war einen Tarifrechner zu erstellen. Der Benutzer hat dabei die Möglichkeit seine kWh anzugeben und daraus werden ihm dann Tarife berechnet und vorgeschlagen. Außerdem können berechtigte Benutzer Tarife hinzufügen, bearbeiten, ansehen und löschen.\"},{\"id\":\"homeAssistantModal\",\"name\":\"Home Assistant\",\"bild\":\"HomeAssistant.png\",\"framework\":\"/\",\"dbms\":\"/\",\"webserver\":\"Apache\",\"hardware\":\"Raspberry Pi 4\",\"verwendungszweck\":\"Privat\",\"versionsverwaltung\":\"/\",\"entwickler\":\"Janis\",\"bild1\":\"HomeAssistant_Logo.png\",\"bild2\":\"HA_Garten.png\",\"bild3\":\"HA_Zimmer.png\",\"erklaerung\":\"Um alle Smart-Home-Geräte an einem Platz steuern und verwalten zu können, läuft auf einem Raspberry Pi 4 der Home Assistant. Natürlich ist es auch möglich außerhalb auf den Home Assistanten zugreifen zu können.\"},{\"id\":\"magicMirrorModal\",\"name\":\"Magic Mirror\",\"bild\":\"MagicMirror.png\",\"framework\":\"/\",\"dbms\":\"/\",\"webserver\":\"/\",\"hardware\":\"Alter Monitor, Holz, Schwarze Farbe, Spionspiegel\",\"verwendungszweck\":\"Privat\",\"versionsverwaltung\":\"/\",\"entwickler\":\"Janis\",\"bild1\":\"MM_Aus.png\",\"bild2\":\"MM_Aus.png\",\"bild3\":\"MM_Aus.png\",\"erklaerung\":\"Mit dem Magic Mirror mussten auch die handwerklichen Begabungen gezeigt werden. Der Rahmen ist selbstgebaut. Ausgegeben werden Informationen wie die aktuellen Corona-Fallzahlen, anstehende Feiertage oder ein selbst erstelltes Modul. Dieses führt alle 30 sek. ein Netzwerkscann durch und prüft, ob bestimmte Geräte erreichbar sind. Das Ergebnis wird anschließend ausgegeben.\"}]},\"footer\":{\"kontakt\":\"Kontakt?\",\"impressum\":\"Impressum\"}}");

/***/ }),

/***/ "./src/assets/i18n/en.json":
/*!*********************************!*\
  !*** ./src/assets/i18n/en.json ***!
  \*********************************/
/*! exports provided: header, home, überMich, skills, projekte, footer, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":{\"überMich\":\"About me\",\"werdegang\":\"Career\",\"projekte\":\"Projects\",\"deutsch\":\"German\",\"englisch\":\"English\"},\"home\":{\"hi\":\"Hi, I`m\",\"beruf\":\"Developer\",\"überMich\":\"About me\"},\"überMich\":{\"kontaktFrage\":\"You want contact?\",\"nachrichtLabel\":\"Message:\",\"emailSenden\":\"Send E-Mail\",\"vorstellen\":\"I'm Janis Pampoukidis, 19 years old, and I'm currently training to become an Developer at LEW Verteilnetz GmbH in Augsburg.\",\"anzahl\":\"Number of visitors: \"},\"skills\":{\"andere\":\"Other Skills\"},\"projekte\":{\"entwicklerLabel\":\"Developer:\",\"sonstigesLabel\":\"Other:\",\"verwendungszweckLabel\":\"Intended  use:\",\"versionsverwaltungLabel\":\"Version management:\",\"berufsschuleLabel\":\"Vocational school\",\"hardwareMaterialienLabel\":\"Hardware/Materials:\",\"deteilsLabel\":\"Details\",\"modal\":[{\"id\":\"nicoModal\",\"name\":\"Comming Soon\",\"bild\":\"Foto-Platzhalter.jpg\",\"framework\":\"\",\"dbms\":\"\",\"webserver\":\"\",\"hardware\":\"\",\"verwendungszweck\":\"\",\"versionsverwaltung\":\"\",\"entwickler\":\"\",\"bild1\":\"Foto-Platzhalter.jpg\",\"bild2\":\"Foto-Platzhalter.jpg\",\"bild3\":\"Foto-Platzhalter.jpg\",\"erklaerung\":\"\"},{\"id\":\"loungeModal\",\"name\":\"LED Lounge\",\"bild\":\"Lounge.jpeg\",\"framework\":\"Arduino\",\"dbms\":\"/\",\"webserver\":\"WLED\",\"hardware\":\"ESP8266, LED ws2801, Plastic, Wood\",\"verwendungszweck\":\"Private\",\"versionsverwaltung\":\"Git\",\"entwickler\":\"Janis\",\"bild1\":\"EL_Dashboard.png\",\"bild2\":\"EL_Wetter.png\",\"bild3\":\"EL_Dialog.png\",\"erklaerung\":\"\"},{\"id\":\"einkaufslisteModal\",\"name\":\"Shopping list\",\"bild\":\"Einkaufsliste.png\",\"framework\":\"Angular\",\"dbms\":\"MySQL\",\"webserver\":\"Apache\",\"hardware\":\"/\",\"verwendungszweck\":\"Private\",\"versionsverwaltung\":\"Git\",\"entwickler\":\"Janis\",\"bild1\":\"EL_Dashboard.png\",\"bild2\":\"EL_Wetter.png\",\"bild3\":\"EL_Dialog.png\",\"erklaerung\":\"Thanks to the shopping list, it is possible to re-plan the weekly shopping. This is of course accessible from outside and any authorized user, can enter desired purchases. There is also the function to specify the price per week. The course of the prices, is represented on the basis a diagram. On a third page, the current weather of selected locations is also displayed.\"},{\"id\":\"portfolioModal\",\"name\":\"Portfolio\",\"bild\":\"Portfolio.png\",\"framework\":\"Angular\",\"dbms\":\"/\",\"webserver\":\"Apache\",\"hardware\":\"/\",\"verwendungszweck\":\"Private\",\"versionsverwaltung\":\"Git\",\"entwickler\":\"Janis\",\"bild1\":\"P_Home.png\",\"bild2\":\"P_Skills.png\",\"bild3\":\"P_Header.png\",\"erklaerung\":\"To learn even more about Angular, the portfolio is a SPA. Here I give a little insight into my knowledge and projects.\"},{\"id\":\"schulprojektModal\",\"name\":\"School project\",\"bild\":\"Tarife.png\",\"framework\":\"Angular\",\"dbms\":\"MySQL\",\"webserver\":\"Apache\",\"hardware\":\"/\",\"verwendungszweck\":\"School\",\"versionsverwaltung\":\"Git\",\"entwickler\":\"Janis\",\"bild1\":\"TR_Uebersicht.png\",\"bild2\":\"TR_Login.png\",\"bild3\":\"TR_Bearbeiten.png\",\"erklaerung\":\"For the last week at school, we were allowed to create a practice project. We went through all the phases of a project and presented it at the end. My topic was to create a tariff calculator. The user has the possibility to enter his kWh and then tariffs are calculated and suggested. In addition, authorized users can add, edit, view and delete tariffs.\"},{\"id\":\"homeAssistantModal\",\"name\":\"Home Assistant\",\"bild\":\"HomeAssistant.png\",\"framework\":\"/\",\"dbms\":\"/\",\"webserver\":\"Apache\",\"hardware\":\"Raspberry Pi 4\",\"verwendungszweck\":\"Private\",\"versionsverwaltung\":\"/\",\"entwickler\":\"Janis\",\"bild1\":\"HomeAssistant_Logo.png\",\"bild2\":\"HA_Garten.png\",\"bild3\":\"HA_Zimmer.png\",\"erklaerung\":\"To be able to control and manage all smart home devices in one place, the Home Assistant runs on a Raspberry Pi 4. Of course, it is also possible to access the Home Assistant from outside.\"},{\"id\":\"magicMirrorModal\",\"name\":\"Magic Mirror\",\"bild\":\"MagicMirror.png\",\"framework\":\"/\",\"dbms\":\"/\",\"webserver\":\"/\",\"hardware\":\"Old monitor, Wood, Black lacquer, Spy mirror\",\"verwendungszweck\":\"Private\",\"versionsverwaltung\":\"/\",\"entwickler\":\"Janis\",\"bild1\":\"MM_Aus.png\",\"bild2\":\"MM_Aus.png\",\"bild3\":\"MM_Aus.png\",\"erklaerung\":\"With the Magic Mirror also had to show the craftsmanship. The frame is self-made. Information such as the current Corona case numbers, upcoming holidays or a self-created module is output. This performs a network scan every 30 sec. and checks if certain devices are reachable. The result is then output.\"}]},\"footer\":{\"kontakt\":\"Contact?\",\"impressum\":\"Imprint\"}}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\janis\Desktop\Webseite\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map