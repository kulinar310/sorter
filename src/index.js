class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunc = (left,right) => left-right;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
   return  this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {

    let sortedIndices = indices.sort((a,b)=> a-b);
    let arrSort = [];

    for (let i = 0; i < sortedIndices.length; i++) {
      arrSort.push(this.arr[sortedIndices[i]]);
    }

    arrSort.sort(this.compareFunc);
    for (let i = 0; i < sortedIndices.length; i++) {
      this.arr[sortedIndices[i]] = arrSort[i];
    }



  }

  setComparator(compareFunction) {


this.compareFunc = compareFunction;

       
  }
}

module.exports = Sorter;