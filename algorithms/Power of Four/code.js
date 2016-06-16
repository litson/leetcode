/**
 * @param {number} num
 * @return {boolean}
 */

var isPowerOfFour = function ( num ) {
    if ( num < 1 ) {
        return false;
    }
    if ( num === 1 ) {
        return true;
    }
    if ( num % 4 === 0 ) {
        num = num / 4;
        return isPowerOfFour( num );
    } else {
        return false;
    }
};

/**
 * 比较慢的一种方法。。。
 * @param num
 * @returns {boolean}
 * @private
 */
function _stage( num ) {
    if ( num < 1 ) {
        return false;
    }
    var result = Math.log10( num ) / Math.log10( 4 );
    return parseInt( result ) === result;
}
