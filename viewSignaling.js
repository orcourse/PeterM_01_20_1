function ViewSignaling(signaling, signalingAdd) {
    this._signaling = signaling;
    this._signalingAdd = signalingAdd;
    this._state = document.createElement("span");
    this._state.className = "state_signal";
    this._state.style.fontWeight = "bold";
    this._state.style.fontSize = "20px";
    this._block4 = document.getElementById("signal_block");
    this._block2 = document.getElementById("video_block");
    this._block1 = document.getElementById("term_block");
    this._block = document.getElementById("block");
}

ViewSignaling.prototype = Object.create(Service.prototype);
ViewSignaling.prototype.constructor = ViewSignaling;

ViewSignaling.prototype.stateChangeSignaling = function () {
    if (this._signaling._state) {
        this._state.innerHTML = "Включена";
        this._state.style.color = "red";
        this._block4.style.background = "transparent";
        this._block2.style.background = "transparent";
        this._block1.style.background = "transparent";
        this._block.style.background = "transparent";
    } else {
        this._state.innerHTML = "Выключена";
        this._state.style.color = "green";
        this._block4.style.background = "radial-gradient(#e4f9ff, #0f6b77)";
        this._block2.style.background = "radial-gradient(#e4f9ff, #0f6b77)";
        this._block1.style.background = "radial-gradient(#e4f9ff, #0f6b77)";
        this._block.style.background = "radial-gradient(#9acbd8, #148594)";
    }
};

ViewSignaling.prototype.renderSignaling = function () {

    var nameHome = document.createElement("p");
    nameHome.className = "name_home";
    nameHome.innerHTML = "Приложения умный дом";

    var name = document.createElement("p");
    name.className = "name_signal";
    name.innerHTML = "Сигнализация";

    var signalBlock = document.createElement("div");
    signalBlock.className = "signal_block";

    var passwordBlock = document.createElement("div");
    passwordBlock.className = "passwoed_block";

    var model = document.createElement("span");
    model.className = "model_signal";
    model.innerHTML = "Модель: " + this._signaling._model;

    var pNew = document.createElement("p");
    pNew.className = "p_password";
    pNew.innerHTML = "Осталось 3 попытки";

    let inputField = document.createElement("input");
    inputField.type = "password";
    inputField.value = "";
    inputField.placeholder = "Введите слово test";
    inputField.addEventListener('keydown', (keyPressed) => {
        if (keyPressed.which === 13 && inputField.value != '') {
            if (inputField.value == 'test') {
                pNew.innerHTML = "Добро пожаловать";
                pNew.style.color = "green";
                let fon = document.getElementById("fon_block");
                setTimeout(function () {
                    fon.style.display = "none";
                }, 10);

            } else if (inputField.value != 'test' && this._signaling._currentPassword != 2) {
                this._signaling.plusPass();
                if (this._signaling._currentPassword == 1) {
                    pNew.innerHTML = "Осталось 2 попытки";
                    inputField.value = "";
                } else if (this._signaling._currentPassword == 2) {
                    pNew.innerHTML = "Осталось 1 попытки";
                    inputField.value = "";
                }
            } else {
                this._signaling.on();
                this.stateChangeSignaling();
                pNew.innerHTML = "Включена";
                pNew.style.color = "red";
                pNew.style.marginLeft = "30%";
                pNew.style.fontSize = "30px";
                pNew.style.marginBottom = "86px";
                inputField.style.display = "none";
                this._state.style.display = "none";
                let fon = document.getElementById("signal_block_window");
                fon.style.background = "radial-gradient(#ffffff, #770f0f)";
            }
        }
    });

    this.stateChangeSignaling();

    signalBlock.appendChild(nameHome);
    signalBlock.appendChild(passwordBlock);
    passwordBlock.appendChild(name);
    passwordBlock.appendChild(pNew);
    passwordBlock.appendChild(inputField);
    passwordBlock.appendChild(model);
    passwordBlock.appendChild(this._state);
    this._signalingAdd.appendChild(signalBlock);
};



ViewSignaling.prototype.renderSignalingTwo = function () {

    var name = document.createElement("p");
    name.className = "name_signal2";
    name.innerHTML = "Сигнализация <hr>";

    var signalBlock = document.createElement("div");
    signalBlock.className = "signaling_block";

    var passwordBlock = document.createElement("div");
    passwordBlock.className = "passwoed_block2";

    var model = document.createElement("span");
    model.className = "model_signal2";
    model.innerHTML = "Модель: " + this._signaling._model;

    var iOn = document.createElement("i");
    iOn.className = "fas fa-power-off";

    var iOff = document.createElement("i");
    iOff.className = "fas fa-power-off";

    var onBut = document.createElement("button");
    onBut.type = "button";
    onBut.className = "on";
    onBut.addEventListener('click', () => {
        this._signaling.on();
        this.stateChangeSignaling();
    });

    var offBut = document.createElement("button");
    offBut.type = "button";
    offBut.className = "off";
    offBut.addEventListener('click', () => {
        this._signaling.off();
        this.stateChangeSignaling();
    });

    this._state.style.marginLeft = "80px";

    this.stateChangeSignaling();

    passwordBlock.appendChild(name);
    signalBlock.appendChild(model);
    passwordBlock.appendChild(onBut).append(iOn);
    passwordBlock.appendChild(offBut).append(iOff);
    passwordBlock.appendChild(this._state);
    this._signalingAdd.appendChild(passwordBlock);
    this._signalingAdd.appendChild(signalBlock);
};