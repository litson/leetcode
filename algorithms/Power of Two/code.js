/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function ( n ) {
    return _stage2( n );
};

/**
 * 这种反而慢=。=
 * @param n
 * @returns {boolean}
 * @private
 */
function _stage1( n ) {
    if ( n < 1 ) {
        return false;
    }
    var result = Math.log2( n ).toString();
    return !( result === '-Infinity' || result.indexOf( '.' ) !== -1 );
}

/**
 * 稍快
 * @param n
 * @returns {boolean}
 * @private
 */
function _stage2( n ) {
    if ( n < 1 ) {
        return false;
    }
    if ( n === 1 ) {
        return true;
    }
    if ( n % 2 === 0 ) {
        n = n / 2;
        return isPowerOfTwo( n );
    } else {
        return false;
    }
}