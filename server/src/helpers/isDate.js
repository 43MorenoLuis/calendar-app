const moment = require('moment');

const isDate = ( value ) => {
    // Comprobar si value no sea null
    if( !value ){
        return false;
    }

    // Enviar la fecha a moment y comporbar si es valida
    const date = moment( value );
    if( date.isValid() ){
        return true;
    }else{
        return false;
    }
}

module.exports = { isDate };