function Camera(model) {
    Service.call(this, model);
    this._modeRecording = true;
    this._typeVideo = true;
}

Camera.prototype = Object.create(Service.prototype);
Camera.prototype.constructor = Camera;

Camera.prototype.recordType = function () {
    if (this._state == true) {
        this._typeVideo = true;
    }
};

Camera.prototype.liveType = function () {
    if (this._state == true) {
        this._typeVideo = false;
    }
};

Camera.prototype.dayMode = function () {
    if (this._state == true) {
        this._modeRecording = true;
    }
};

Camera.prototype.nightMode = function () {
    if (this._state == true) {
        this._modeRecording = false;
    }
};


Camera.prototype.getTypeVideo = function () {
    return this._typeVideo;
};

Camera.prototype.getModeRecording = function () {
    return this._modeRecording;
};