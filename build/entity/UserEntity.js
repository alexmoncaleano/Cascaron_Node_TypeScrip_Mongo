"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(iduser, typeiduser, nameuser, emailuser, telephoneuser, estadeuser, dateuser, passworduser, codperfil) {
        this.idUser = iduser;
        this.typeIdUser = typeiduser;
        this.nameUser = nameuser;
        this.emailUser = emailuser;
        this.telephoneUser = telephoneuser;
        this.estadeUser = estadeuser;
        this.dateUser = dateuser;
        this.passwordUser = passworduser;
        this.codPerfil = codperfil;
    }
}
exports.UserEntity = UserEntity;
exports.default = UserEntity;
