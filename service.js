function Service(model) {
    this._state = false;
    this._model = model;
}

Service.prototype.on = function () {
    this._state = true;
};

Service.prototype.off = function () {
    this._state = false;
};

Service.prototype.getState = function () {
    return this._state;
};

Service.prototype.getModel = function () {
    return this._model;
};