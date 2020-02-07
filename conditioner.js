function Conditioner(model, currentTemperature) {
    Service.call(this, model);
    this._currentTemperature = currentTemperature;
}
Conditioner.prototype = Object.create(Service.prototype);
Conditioner.prototype.constructor = Conditioner;


Conditioner.prototype.plusTemp = function () {
    if ((this._currentTemperature < 25) && (this._state == true)) {
        this._currentTemperature += 2;
    }
};

Conditioner.prototype.minusTemp = function () {
    if ((this._currentTemperature > -10) && (this._state == true)) {
        this._currentTemperature -= 2;
    }
};

Conditioner.prototype.getCurrentTemperature = function () {
    return this._currentTemperature;
};