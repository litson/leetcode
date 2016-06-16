/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function ( nums ) {
    var length = nums.length;
    while ( length-- ) {
        if ( nums[length] === 0 ) {
            nums.splice( length, 1 );
            nums.push( 0 );
        }
    }
};