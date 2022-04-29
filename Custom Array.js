function MyArray() {
    Object.defineProperty(this, "length", {
        enumerable: false,

        writable: true
    });

    for (var i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }

    this.length = arguments.length;
}

//push
MyArray.prototype.push = function (ele) {
    var index = this.length;
    this[index] = ele;
    this.length++;
};

//pop
MyArray.prototype.pop = function(){
  var index = this.length - 1;
  var poppedEle = this[index];
  delete this[index];
  this.length--;
  //console.log("Popped Element Is : ",poppedEle)
  return poppedEle;
};


//top
MyArray.prototype.top = function(){
    var index = this.length - 1;
    var top = this[index];
    //console.log("Top Element is : ",top);
    return top;
}


//print
MyArray.prototype.print = function(){
    var arr = [];

    var length = this.length;

    for(var i = 0 ; i < length ; i++){
        arr.push(this[i]);
    }

    console.log(arr);

}


//printReverse
MyArray.prototype.printReverse = function(){
    var arr = [];

    var length = this.length;

    for(var i = length - 1 ; i >= 0; i--){
        arr.push(this[i]);
    }

    console.log(arr);
}


//size
MyArray.prototype.size = function(){
    return this.length;
}


var arr = new MyArray(1, 2,"atul","Hello World");


arr.push("Masai")
arr.print();
arr.printReverse();
console.log(arr.size())
console.log(arr.pop());
console.log(arr.top());
console.log(arr);