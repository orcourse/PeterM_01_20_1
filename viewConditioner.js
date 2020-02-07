function ViewConditioner(conditioner, rootAdd) {
    this._conditioner = conditioner;
    this._rootAdd = rootAdd;
    this._state = document.createElement('div');
    this._state.style.fontWeight = "bold";
    this._state.style.fontSize = "20px";
    this._state.style.margin = "20px";
}

ViewConditioner.prototype = Object.create(Service.prototype);
ViewConditioner.prototype.constructor = ViewConditioner; // constructor?

ViewConditioner.prototype.stateChangeConditioner = function () {
    if (this._conditioner._state) {
        this._state.innerHTML = "Включен";
        this._state.style.color = "green";
    } else {
        this._state.innerHTML = "Выключен";
        this._state.style.color = "red";
    }
};

ViewConditioner.prototype.renderConditioner = function () {

    var name = document.createElement("p");
    name.className = "name_cond";
    name.innerHTML = "Кондиционер <hr>";

    var nameterm = document.createElement("p");
    nameterm.className = "name_term";
    nameterm.innerHTML = "Температура";

    var temp = document.createElement('p');
    temp.className = "term_ravna";
    temp.innerHTML = "Температура равна: " + this._conditioner._currentTemperature + "°C";

    var condBlock = document.createElement('div');
    condBlock.className = "cond_block";
    condBlock.style.background = "radial-gradient(#ffffff, #1989e4)";

    var termBlock = document.createElement("div");
    termBlock.className = "term_block";

    var model = document.createElement('span');
    model.className = "model_cond";
    model.innerHTML = "Модель: " + this._conditioner._model;

    var iOn = document.createElement("i");
    iOn.className = "fas fa-power-off";

    var iOff = document.createElement("i");
    iOff.className = "fas fa-power-off";

    var iPlus = document.createElement("i");
    iPlus.className = "fas fa-plus-circle";

    var iMinus = document.createElement("i");
    iMinus.className = "fas fa-minus-circle";

    var divTerm = document.createElement("div");
    divTerm.className = "div_term";

    var iterm = document.createElement("i");
    iterm.className = "fas fa-thermometer-quarter";
    divTerm.style.color = "rgb(45, 142, 233)";

    var onBtm = document.createElement('button');
    onBtm.type = "button";
    onBtm.className = "on";
    onBtm.addEventListener('click', () => {
        this._conditioner.on();
        this.stateChangeConditioner();
    });

    var offBtm = document.createElement('button');
    offBtm.type = "button";
    offBtm.className = "off";
    offBtm.addEventListener('click', () => {
        this._conditioner.off();
        this.stateChangeConditioner();

    });

    var plusTemperature = document.createElement('button');
    plusTemperature.type = "button";
    plusTemperature.className = "plus_temp";
    plusTemperature.addEventListener('click', () => {
        this._conditioner.plusTemp();
        temp.innerHTML = "Температура равна: " + this._conditioner._currentTemperature + "°C";
        if (this._conditioner._currentTemperature > 25) {
            iterm.className = "fas fa-thermometer-full";
            divTerm.style.color = "red";
            condBlock.style.background = "radial-gradient(#ffffff, #d33125)";
        } else if (this._conditioner._currentTemperature > 15) {
            iterm.className = "fas fa-thermometer-three-quarters";
            divTerm.style.color = "orange";
            condBlock.style.background = "radial-gradient(#ffffff, #d38225)";
        } else if (this._conditioner._currentTemperature > 5) {
            iterm.className = "fas fa-thermometer-half";
            divTerm.style.color = "rgb(221, 208, 31)";
            condBlock.style.background = "radial-gradient(#ffffff, #e4d619)";
        } else if (this._conditioner._currentTemperature > 0) {
            iterm.className = "fas fa-thermometer-quarter";
            divTerm.style.color = "rgb(45, 142, 233)";
            condBlock.style.background = "radial-gradient(#ffffff, #1989e4)";
        } else if (this._conditioner._currentTemperature < 0) {
            iterm.className = "fas fa-thermometer-empty";
            divTerm.style.color = "rgb(26, 116, 201)";
            condBlock.style.background = "radial-gradient(#ffffff, #1260d4)";
        }
    });


    var minusTemperature = document.createElement('button');
    minusTemperature.type = "button";
    minusTemperature.className = "minus_temp";
    minusTemperature.addEventListener('click', () => {
        this._conditioner.minusTemp();
        temp.innerHTML = "Температура равна: " + this._conditioner._currentTemperature + "°C";
        if (this._conditioner._currentTemperature > 25) {
            iterm.className = "fas fa-thermometer-full";
            divTerm.style.color = "red";
            condBlock.style.background = "radial-gradient(#ffffff, #d33125)";
        } else if (this._conditioner._currentTemperature > 15) {
            iterm.className = "fas fa-thermometer-three-quarters";
            divTerm.style.color = "orange";
            condBlock.style.background = "radial-gradient(#ffffff, #d38225)";
        } else if (this._conditioner._currentTemperature > 5) {
            iterm.className = "fas fa-thermometer-half";
            divTerm.style.color = "rgb(221, 208, 31)";
            condBlock.style.background = "radial-gradient(#ffffff, #e4d619)";
        } else if (this._conditioner._currentTemperature > 0) {
            iterm.className = "fas fa-thermometer-quarter";
            divTerm.style.color = "rgb(45, 142, 233)";
            condBlock.style.background = "radial-gradient(#ffffff, #1989e4)";
        } else if (this._conditioner._currentTemperature < 0) {
            iterm.className = "fas fa-thermometer-empty";
            divTerm.style.color = "rgb(26, 116, 201)";
            condBlock.style.background = "radial-gradient(#ffffff, #1260d4)";
        }
    });

    this.stateChangeConditioner();
    termBlock.appendChild(name);
    condBlock.appendChild(divTerm).append(iterm);
    condBlock.appendChild(temp);
    termBlock.appendChild(onBtm).append(iOn);
    termBlock.appendChild(offBtm).append(iOff);
    termBlock.appendChild(nameterm);
    termBlock.appendChild(plusTemperature).append(iPlus);
    termBlock.appendChild(minusTemperature).append(iMinus);
    termBlock.appendChild(this._state);
    termBlock.appendChild(model);
    this._rootAdd.appendChild(termBlock);
    this._rootAdd.appendChild(condBlock);
};