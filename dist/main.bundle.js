webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main {\n  padding: 25px;\n  -webkit-transition: 0.2s background linear;\n  transition: 0.2s background linear; }\n\nimg {\n  width: 200px;\n  border: 1px solid #dadada;\n  border-radius: 30px; }\n\n.man {\n  color: darkred; }\n\n.woman {\n  color: lightseagreen; }\n\n.pet {\n  color: darkgreen; }\n\n.emblem {\n  border-radius: 0px;\n  width: 60px;\n  margin: 10px;\n  border: none; }\n\n.cars-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nb {\n  width: 100px; }\n\n.trnsp-bg, .green-bg, .yellow-bg, .red-bg, .blue-bg {\n  width: 180px;\n  -webkit-appearance: button;\n  margin: 5px;\n  padding: 5px;\n  -webkit-transition: .2s padding linear;\n  transition: .2s padding linear; }\n\n.trnsp-bg:hover, .green-bg:hover, .yellow-bg:hover, .red-bg:hover, .blue-bg:hover {\n    padding: 15px; }\n\n.trnsp-bg {\n  background-color: #ffffff; }\n\n.green-bg {\n  background-color: #6dd17a; }\n\n.yellow-bg {\n  background-color: #bfd16d; }\n\n.red-bg {\n  background-color: #c78585; }\n\n.blue-bg {\n  background-color: #6db2d1; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.state = 'small';
        this.favoriteCars = '';
        this.male = true;
        this.human = true;
        this.bgClrMain = 'transparent';
        this.BGandBGC = [
            {
                value: "Default",
                BGC: "trnsp-bg",
                BG: 'transparent'
            },
            {
                value: "Green",
                BGC: "green-bg",
                BG: '#6dd17a'
            },
            {
                value: "Yellow",
                BGC: "yellow-bg",
                BG: '#bfd16d'
            },
            {
                value: "Red",
                BGC: "red-bg",
                BG: '#c78585'
            },
            {
                value: "Blue",
                BGC: "blue-bg",
                BG: "#6db2d1"
            },
        ];
        this.manClass = 'man';
        this.womanClass = 'woman';
        this.petClass = 'pet';
        this.btnEditStatus = true;
        this.btnBackStatus = false;
        this.manImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShYN0gnvg73V4s9tTqd-YlDEYRpW3ok4_yFjlF9ZqwHBn1gRpMA";
        this.womanImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABNVBMVEX////oxZ4vMjPRWFLGUETdtY7gYFzjYV3pyKDpyqLhuJDRVlDnYl7QUE0qLzHoxJ0eIiMoKywjKi7KoH8oMTLPTUsiMDEbLzDOSULPT0gXHB0SFxnjvZYjJyjwy6McJiwKERPgooW7vLynqKjr6+vEWFXFST8eJywTISnbsIZAPjtvcHHJUkjUZ1z99/bDQDLZgG13Z1eMSEdPSUJnXVFWOjqukXSaTErktJJMTk+ARUQ5NDW3VFHSX1fa2trCPS6Md2Ly1dHdjIfx4dO6oILv173bjHZYWlvWcmTYd3D46unZuZWCg4TZlI3iopvluLSYmZnJycloPz703Nrdl33ov7virIyFRkWdnp7bgnxJODjlqqXWbGaJiovOc13y3siZhW7JrIxYUkliZGQ6QkgCGCLKsZVH+wkxAAARRElEQVR4nNWdaVsaOx/GCxTZZFhEURgOuIIouO+iuKFYl2qrrUVPbXvO8/0/wpNMWDIzSSazZTj3K69eFfj53zNJ+PDBdc0dPcx+frv5c7nnh6pW9y7/LL19/j7zcDTn/ru7rKOZt0t/Pp9LFgqplOTvSUqlCoVCMpfPp/ZuZh/+q5xHs39K+WQh5WdKSiVzpdTNzH+O8uHNn08awGFKJfPVm4e615+aW0dvqXxBMuZSG7OQKy3NeP3RuTSzly+YpOubMle4OfL68xtpVsqZtZ5KhdLlg9cMLM0WknbwkCHz/wwt40M1Z5sPSsrvDaWv1pdKtvwTV6q0NHzlY6ZgNb+QGXPfvSbSaKnkJB9Ubm+YzDi3Zz/D6JTKDU95fMjxty9mVLrxmqyrGcc9tKfkpddsimZdAwQNQHUImlU3AUEw+j3PN+65aA/RYys+uAwIEL111Lm824AgFve8JKy6UybUSi55B7jkaKdGVX7WK8AZAT6qqOTRPDXnzLDEIangTbb5IyIIkQqehKJJH81kMhM9ZTJmR0lP/FTi/ZSALJvNbD3ur+8gfdt/3AL/BEC5CaWqeMDPXANTZgKwre/Mj4wihUKh7k8j8zvfAOcEJ2VOeD7lSTOZbHZLgQuFRvSCrCPz6z/4ICW/aMI3o1IoTWQfDyEdAQ7DHB1t7GxlJziMKHgerhukmUz2YKdhQNcTgFz3Z42iWvpHLOF3ZhRK2a3D0CgXXteSoZ0fRowlsUuMzE+T/XHIaT4ccueA7asFoWsaM4w8M+HfMc0HBezIzjkpkYSX1HZGyu6PmPBPNWPgMcsgzAms+nPUuXfiYN4q3wh01UOGGUW6KTXPZPctOShmxhGGGQviCPfIiUbKHtowYI9xnYqYF5ZNKU6aYXtoCBcL8ZCWU5PCOrdZopNmfozQmjOls5mfnz9EAj8p3QylnRudp7TkKWEzFHEwnNjSAaLO83AHjBIHWa0Oth6/7Rw2QgTMUMNPyTeiCEnFcGJL/UEVuJ39HxllSiJ9YDgwgqnqxz5qzlW/HDggIpYELQ8fEXrSzFZIhRc6XN/KADbjGVICnH4wgqgggRVJvymqIhLCMPMjhOEFDh/5Bz/0+2CM3AeTSGiASEo3SUGPTZd0YSj5A6Ee3ggYhrJm6PqU2cwj6NdDvYxKKBopQTVf/87ZefS5RkPz++aMp4Wc+DbfZRzd0SNKYpa/9dUwuzOK+MAIZB0PaQIMXqPo5R71jiqm+X7QptKJffiJRkfWM4ZjLI/g8KwMl6ED3cvlhCRTbaKRDhDfBMdSBJ8kyBgaCc3r/FRM36ZdoQFBGAKjnWN86EUPwBCtD0Ux5UIzGwIfHT08YM11KqU5/5+U3QIlUuunSSHLUdpaHAIDD3f8pZtF3v+aya6Pav1UTO+tdtKJnUP+/CmVz6Pb3IhgnG48ql87+VkAoGYp+GCf20H9UnosGoxuV7gtLk3sqwkLbyIINV0pfwFMV4PRYDAYHSP2nGRpXl3IQsaR1aeGxd8QMAEQg1XefKOVkAlRV/D5JFWa0IA+H0SMrlWGmHDG0ia9tH8bAEZ9PgUxGH0vW2p/hpZQqqxBD5V9vj7i2AZ/ThVMSF6kYapcPYce2gUEgojR97T5aBxOwnSxGe15aE8yZAxu8teNISZMFxUHxQzYRwxGzzeK5hiHjlACfGMEvr4Zo9tVU3YUUg/5CaWiv4lqfEIPCBJOFDH+LvLHo5CehpMQmG9jm8GHMY4107y1oyCiL+WpFlK5uNH8FVX8k8qnMKJ4BIYsc0EKmS0MCCVgPGnzPajgRQnxp4tHZMjg9pq/mDbaoyNkPlR3bWkgCSmdLhcr6Y2193OEJ3PgYZaMAnd9X6tWiuX+KyovqmIWsiED77zT6bX35trm742Njd+ba8337V/wg8Luhe2cREoZ/e75NnzFqqLfm83mJu6+ORHrNNj0VN5M/KUoAST3lDALh2EqkqMq/doY5Nq8iLW2wQQs/f7LMgtLSvYZCAxbfSsmhawm9lcx0p9cAdQSgi6936SLWRHu++i7OybUEQaja10/FbSq31tNrLhkQgLheXdgFvQQ+KbgahQSCIPRrtsIaWn6JT/dFEi4KYkr+P1HwMVzgYTvKBBFbTdB5aLyyyVAEuF2WXnPkqAt+2i/UNmtREMiRPVC2GZvlGrcqoYkwiAiFLafBqUakYRdG4raqNDtTD3wUnHbL1EuFUmIHlgJ6bsVKU+Bi+dhcYRKtRB4qkQZgsvbAgmbkFDgDtp60pOeRuSJC7g5UdoQSCiJDcNuvai4BEiYLcYq4kYnJGVbVHnbJcIoJQxFrAb3BWdEadMlN9U7qbKMIfIwQnfh262arwM8V6phSSQgamvcyqbkTCpukzeSspTh0joGMc8IP52nuKk7kZjQEm4otSIp+Dg32mRa2XYBUbtc2iwLnZz6QituxV/OI6oJo9tonU38lUroMaIkOY8oqwHR+oXgTArVfXwhVd59DjPifMGm2JVSlXqnu8rpNWcR8TJR7j2UEVvukT73n18426DiqfTf3lsIz6RQg5Mzzq4rDsKwH4PASf+IB8SeQTn7iAYjbPYfHIo7l4erf3RGcjQQsTD83X9uKO5sJa7+thPJ7w5hcPB4O+cFoEuBOEg03ZFCCUOP7t5zJRCJYSj2soGB+gcvnOzAdR23d4kGr4hFxwDxajjYKe1FvYcaXB3h3LNEzEnf+9XQo1SKpxrnGje8ZcNSqUfXQ9axg4gOAeJOiu3J9KJnUzQ4H+TUQwxiyyb0ugi1BpdHONXWEBsawfe24MLO6TkzX2DD7y/8zIlnhNjdCs4UfcyEzfSQEUpVBwjxPOPH5Vkc4vdjVBzINZgJ1acUxWxJNCB0YBMYZsJoVb012CtC1Ylg+wNGlGZCz3qaD6o/tO32GzfhhnpHu1d96Qf1rn27RsRNqDmeKGjHnk6a6yNsRqJMjULRD0cH0p4mrZzbIcQA37VHE71ZatPfaSZVw9a36eNr+fpjJR6VfN11UUUbjQ1mwjX9SS9R1ydppD8eZD3ZYGnmnHAK2psv8yAc6ga9mzU/xX2UdFrfm1RzQ7iFtmzt0T5eCjdJpxG9uCiZ5KTQTy2t2GA++k4+qS9yP1RPlCtMi5/Md+AyOwihvFhP3CNfYSpVTQNiy9zEIITyYNX7gXZVctp0a4NlGW0zM5D4ekExoR+e2TOHiG1j26AfIRW2x7sn1qX65hCxQrHBONQt/MZyujspiBYAo0xAkE3FTlAGl+qnN3j3gw2yzC/mH010rqHflNxV5Zyvt8HSqHYm1EnojeX0NIMkbfyV4DnJjS+u6YZCrfICR6g3o0sHlM4maGhG1R49thFTucJ3gQ8vLkvs7/pNo2QaDLLbG80mRNU6vkpSsrQneLiYm73M5ahf/yBJXevJpDtN+upn0bHeD8Rcmkrm9j57MR7OzdwUSjnil1Jj3XeQ7qqylk/vp1Iqmc8tefmN1nMzb3sF3XdvV/BJXx6j2LHbyYwNAOHDisECTaqQy1eXZofgS2XrRzNvf3Il+P3p6NvTK5oREUDIPm1AJgh8EHGtKKXgl66Xkn8+D9d3rs8dzczeXFZTpfy/+rUaCKI2pIzwtIDQiv9c3szOHA3B9zpSVD/6n74nDScQDTBluMcH/2FRywcRL7xGMNAZrT4oSNBmcnCx9yNRi/KZ1xAMXV8wLm2Ru5AIL0E47Ntj/DSkjPWziNGlNAmFsnuxEpUQ2vHn0AXi9f1ri2vBG/NiBiKAXO588Rqqr+un08bk1Piz2RUo7ckRtRYWVj6+3HtOeX1y156anIrHAoH4rklAthXlxsePHxdWVlbadyfX3sDVT+5fGpOTUzFABxWzsthNTzfy3x+RgC2Pl186YjHrX+5PYxicAtiwtlGBxiivLnwcCGKuAEwR+ad+cvc6pYZDhFcRS4Td+9p0irZwwh7mSu32yU1jArra5JSeTiFctUoIIQmWnNYRIkzgs7fu2LL+9AJtR4BDhC0bhD50XZtKz2RCRLnSvnfYlPWnNsEzccW/OrA5UcY8lkGITHl175wlv5xO0Y3XI5x26oaFHiaTEFnyxZlyedKejBvxAULTBZ8leIGfESGEPK6d2OerTRrjQcJdh2/JiDRiy8vGkCsNe4zXbT4+ay0Nm7CmvLMx5XHbRtK54+ULBMa5r/I0RwgUM4BcOO5YNWBtipcPEFrfSUMhvMI7JjbkSs2SGZ/4DQgJnb6sRkUIxGRcWLEQjR1TgIFxewWfQLiqawyZ0XhvFvBu0gyfEEK2Hc0GY8ckoBhCJqM5Kz6ZBRRFGAgwEE3E4rW5GBRKyDDjCn9GbZgGdD+XciAuXPECdkzUwT6hq/VQLWpSXeEMRQs+6mpPYwaRb6A6tWBCF/pSZqjQ/PSOB7BuOo8iQqdnizjr7WhWPOYx4p0VEzo8H0KNM9+Pkm64IjFgIQqdnPG7kpk2pPppzRjwiyUntb0SpVV414CQgnhsvLBhpVQEbK4mkginjQjJfsqRa14tOamNFWEK4VfDz0E24rIRoLVMan1VnyZq0zYQ2YiGrduTNScFqcbZpoZV8Ht/VDLhkwHhrZH7UwmdLYgJjrckB+KpAaGFprtL6MSi90CGqTRArYlswGuLYeh0MjVOpVBEwGN2IFoOQ5BqnCTkSDQ0QoNAtNayKYo7OV2w++6eiG66cMskNM5gdEIn+zajno1ByK6IdcNnTHQ5GYh8YUhzU9Z8YbEpRYQB52zIGPA5CFmt6b31MHR0gEpwuhLRTZkTlOV6D+Wcm/I6KbmtYdb8tvUwBG8Xc8qGvE5KdtOFNoPQRqIJOJhNo9yuRA5EOqDVwaKrWM0ZN420uP/QxEBkLNbYSaVQ485037x5hkbISKYnNgmdGYMjLf58R0w1jIeJtooFlCMjVIK5cUcjYqqhlwuLazQDORGJJqKQRkhfq7FVDhXZT6fGi2zGhPTe21Y5VBQL2F3M4Fi+wEVKNYxnUBbX2VSINhubyFdzfkRMpvRlYctLGJjGp+0gmvRRCmGDSmgmiVFlK58mzD5TIJYL6oRYt5tK0XsGZMuIYfMTOImQOiFaX4ZSIzYSFhHD3B23ASFtMcohQsuIkSsL1coUod22FEO04KjhhAULUghpjenJZBwqFrOdcWKxZ7MZNbJrLZOr2RYUHdMWFM98id3d5+nWai0wHrdHGRtvRUyZMTLNsRGZSQjIlmurrenn5+dF2uG3M9CPhMPhSCTik6dbtZjF90SK13b5zRiRrYSgomVE9/Hv1jT8SndljziTsCfAmZhetQMZG1+V+RgjiZb191kGeLXWM77Nn074U9NThiO+ZzuQsfjqrqGvhiNyy0ZExBZqXxe1x24WaUdtL/RfbR+OJL427DBeTfsYkOFI+HnVzsvHgfX0p4qohPWzi3ACUCY0n2K6YX2qAh/i6uuuLxIJqzlhuIej9uIgHvuaiGiO2iwuLsoX7BOoADMiQ8wE9mmm7WRWANm4ak3vyoCzq7C8O926asTt5DKQrhMR7PAbYFv0XZzV+TZ+1a8BZ2LAGU7Y8CX4aWIAc3w8HmjUarVGAP4Yt1l1e7laVtiCny5+Xps/JVQ/+wk4FYF65cTgEUNy4IXGW2Ff96NdnJ3ZOwFVPzu7uPDJ4WiNfbZLlMBfaGpq6jkcvrCNpgO9rcGTo1M22x17aOADBNq3HUfRVLr+8tQ5bTcmu6QiUGEMQ7LJqdeX2/sTC9FmmfS23YjBvyk8Veo8KnJGABZrvJ527k++eHQHQf365On+7rQdmFTMqsBa5VV+M46wJicb7dO7+6eTa1E2M1YdmPW+c/fSfq0Fpnq8yJV1zLG+4uh/Kf8fGKv9ctvpPJ18GR4siup1YNuTp6dO5+729hRCNxqNHh74EVTF19d2++X09vau0wGWgkycpdq0/g9y+8co5wAPmAAAAABJRU5ErkJggg==";
        this.dogMImg = "data:image/png;base64,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";
        this.dogWImg = "https://cdn4.iconfinder.com/data/icons/tail-waggers/120/bows-512.png";
        this.dogArrM = ['dog', 'male'];
        this.dogArrW = ['dog', 'female'];
        this.womanArr = ['human', 'female'];
        this.manArr = ['human', 'male'];
        this.dogObject = {
            rase: 'dog',
            gender: {
                male: 'male',
                female: 'female',
            }
        };
        this.humanObject = {
            rase: 'human',
            gender: {
                male: 'male',
                female: 'female',
            }
        };
    }
    AppComponent.prototype.imgLarger = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.favoriteCars = this.dataService.favoriteCarsTypes();
    };
    AppComponent.prototype.toHuman = function ($event) {
        this.human = true;
    };
    AppComponent.prototype.toDog = function ($event) {
        this.human = false;
    };
    AppComponent.prototype.toMale = function ($event) {
        this.male = true;
    };
    AppComponent.prototype.toFemale = function ($event) {
        this.male = false;
    };
    AppComponent.prototype.toBG = function ($event, bgClr) {
        console.log(bgClr);
        this.bgClrMain = bgClr;
    };
    AppComponent.prototype.editBtn = function (event) {
        console.log(event); //"Edit button mouseenter"
    };
    AppComponent.prototype.backBtn = function (event) {
        console.log(event); //"Back button click"
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/creations-library/creations-library.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('myAwesomeAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('small', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                        transform: 'scale(1)',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('large', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                        transform: 'scale(1.2)',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('small <=> large', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'rotate(0deg) translate(0%, 10%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0.5, transform: 'rotate(90deg) translate(-10%, 0%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'rotate(180deg) translate(0%, -10%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0.5, transform: 'rotate(270deg) translate(-10%, 0%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'rotate(360deg) translate(0%, 10%)' }),
                    ]))),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creations_library_creations_library_component__ = __webpack_require__("./src/app/creations-library/creations-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__creations_library_creations_library_component__["a" /* CreationsLibraryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__creations_library_creations_library_component__["a" /* CreationsLibraryComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/creations-library/creations-library.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\"  [style.background]=\"bgClrMain\" >\n  <h4>\n    Library of your creations works!\n  </h4>\n  <div *ngIf=\"human; then humanTmpl else dogTmpl\"></div>\n  <ng-template #humanTmpl>\n    <div *ngIf=\"male\">\n    <h4>Creation: <span [class]=\"manClass\"> {{humanObject.rase}} {{humanObject.gender.male}} </span> </h4>\n    <img src = {{manImg}} [@myAwesomeAnimation]='state' (click)=\"imgLarger()\" >\n    <ul> Description:\n      <li *ngFor=\"let arr of manArr\">{{ arr }}</li>\n    </ul>\n    </div>\n    <div *ngIf=\"!male\">\n    <h4>Creation: <span [class]=\"womanClass\">{{humanObject.rase}} {{humanObject.gender.female}} </span> </h4>\n    <img src = {{womanImg}} [@myAwesomeAnimation]='state' (click)=\"imgLarger()\">\n    <ul> Description:\n      <li *ngFor=\"let arr of womanArr\">{{ arr }}</li>\n    </ul>\n    </div>\n  </ng-template>\n  <ng-template #dogTmpl>\n    <div *ngIf=\"male\">\n    <h4>Creation: <span [class]=\"petClass\">{{dogObject.rase}} {{dogObject.gender.male}} </span> </h4>\n    <img src = {{dogMImg}} [@myAwesomeAnimation]='state' (click)=\"imgLarger()\">\n    <ul> Description:\n      <li *ngFor=\"let arr of dogArrM\">{{ arr }}</li>\n    </ul>\n    </div>\n    <div *ngIf=\"!male\">\n    <h4>Creation: <span [class]=\"petClass\"> {{dogObject.rase}} {{dogObject.gender.female}} </span> </h4>\n    <img src = {{dogWImg}} [@myAwesomeAnimation]='state' (click)=\"imgLarger()\">\n    <ul> Description:\n      <li *ngFor=\"let arr of dogArrW\">{{ arr }}</li>\n    </ul>\n    </div>\n  </ng-template>\n  <button [disabled] = \"btnEditStatus\" (mouseenter) = \"editBtn($event)\">Edit</button>\n  <button [disabled] = \"btnBackStatus\" (click) = \"backBtn($event)\">Back</button>\n  <form>\n    <p>Species</p>\n    <input type=\"radio\" name=\"species\" value=\"human\" checked=\"true\" (click) = \"toHuman($event)\">Human<br>\n    <input type=\"radio\" name=\"species\" value=\"dog\" (click) = \"toDog($event)\">Dog<br>\n  </form>\n  <form>\n    <p>Gender</p>\n    <input type=\"radio\" name=\"gender\" value=\"male\" checked=\"true\" (click) = \"toMale($event)\">Male<br>\n    <input type=\"radio\" name=\"gender\" value=\"female\" (click) = \"toFemale($event)\">Female<br>\n  </form>\n  <form>\n      <h3>Page costumization</h3>\n      <p><b>Select backgraund-color:</b></p>\n        <div *ngFor=\"let arr of BGandBGC\">\n          <p [class]=\"arr.BGC\" (click)=\"toBG($event, arr.BG)\">{{arr.value}}</p>\n        </div>\n  </form> \n  <div>\n    <ul> <h3>My favorite cars:</h3>\n      <li *ngFor=\"let arr of dataService.cars\" class=\"cars-block\">\n        <b>{{ arr.name }}</b><img src=\"{{arr.emblem}}\" class=\"emblem\"><br>\n      </li>\n    </ul>\n    <br>\n    <i>{{ favoriteCars }}</i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/creations-library/creations-library.component.scss":
/***/ (function(module, exports) {

module.exports = ".main {\n  padding: 25px;\n  -webkit-transition: 0.2s background linear;\n  transition: 0.2s background linear; }\n\nimg {\n  width: 200px;\n  border: 1px solid #dadada;\n  border-radius: 30px; }\n\n.man {\n  color: darkred; }\n\n.woman {\n  color: lightseagreen; }\n\n.pet {\n  color: darkgreen; }\n\n.emblem {\n  border-radius: 0px;\n  width: 60px;\n  margin: 10px;\n  border: none; }\n\n.cars-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nb {\n  width: 100px; }\n\n.trnsp-bg, .green-bg, .yellow-bg, .red-bg, .blue-bg {\n  width: 180px;\n  -webkit-appearance: button;\n  margin: 5px;\n  padding: 5px;\n  -webkit-transition: .2s padding linear;\n  transition: .2s padding linear; }\n\n.trnsp-bg:hover, .green-bg:hover, .yellow-bg:hover, .red-bg:hover, .blue-bg:hover {\n    padding: 15px; }\n\n.trnsp-bg {\n  background-color: #ffffff; }\n\n.green-bg {\n  background-color: #6dd17a; }\n\n.yellow-bg {\n  background-color: #bfd16d; }\n\n.red-bg {\n  background-color: #c78585; }\n\n.blue-bg {\n  background-color: #6db2d1; }\n"

/***/ }),

/***/ "./src/app/creations-library/creations-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreationsLibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreationsLibraryComponent = /** @class */ (function () {
    function CreationsLibraryComponent() {
    }
    CreationsLibraryComponent.prototype.ngOnInit = function () {
    };
    CreationsLibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-creations-library',
            template: __webpack_require__("./src/app/creations-library/creations-library.component.html"),
            styles: [__webpack_require__("./src/app/creations-library/creations-library.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreationsLibraryComponent);
    return CreationsLibraryComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.cars = [
            {
                name: 'Tesla',
                emblem: 'data:image/png;base64,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'
            },
            {
                name: 'Mercedes',
                emblem: 'data:image/jpeg;base64,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'
            },
            {
                name: 'Mitsubishi',
                emblem: 'data:image/png;base64,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'
            }
        ];
    }
    DataService.prototype.favoriteCarsTypes = function () {
        return 'I like all electro-cars & van-cars';
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map