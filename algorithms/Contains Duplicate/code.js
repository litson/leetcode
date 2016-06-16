/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function ( nums ) {
    var result = false;

    nums = nums.sort();

    var length     = nums.length;
    var startIndex = 0;

    while ( length-- ) {

        if ( compare( startIndex ) ) {
            result = true;
            break;
        } else {
            startIndex += 2;
        }
    }

    function compare( index ) {

        var a = nums[index + 1];
        var b = nums[index];
        var c = nums[index - 1];

        if ( b === undefined ) {
            return false;
        }

        return isSame( a, b ) || isSame( b, c );
    }

    function isSame( a, b ) {
        return a === b;
    }

    return result;
};