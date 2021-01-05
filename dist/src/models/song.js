"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class song {
    constructor(id, songName, songUrl, songTime, creationDate = '', updateDate = '', songType) {
        this.creation = '';
        this.update = '';
        this.idSong = id;
        this.name = songName;
        this.url = songUrl;
        this.time = songTime;
        this.creation = creationDate;
        this.update = updateDate;
        this.type = songType;
    }
    get attributInsert() {
        return [`idSong`, `name`, `url`, `time`, `creation`, `update`, `type`];
    }
    ;
    get id() {
        return this.idSong;
    }
    get songName() {
        return this.name;
    }
    get songUrl() {
        return this.url;
    }
    get songTime() {
        return this.time;
    }
    get creationDate() {
        return this.creation;
    }
    get updateDate() {
        return this.update;
    }
    get songType() {
        return this.type;
    }
}
exports.default = song;
