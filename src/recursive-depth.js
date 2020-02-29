module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(Array.isArray(arr) == false){
            return 0;
        }
        let max_depth = this.calculateDepth(arr[0]);
        for(let i = 1; i < arr.length; i++){
            let i_depth = this.calculateDepth(arr[i]);
            if(i_depth > max_depth){
                max_depth = i_depth;
            }
        }
        return 1 + max_depth;
    }
};