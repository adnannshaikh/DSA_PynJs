class myArray {
	constructor(){
		this.length = 0;
		this.data = {};
	}

// Accessing data in array using get method
	get(index){
		return this.data[index];
	}

	push(item){
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop(){
		const lastItem = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length--;
		return lastItem;
	}

	delete(index){
		const item = this.data[index];
		this.shift(index);
		return item;
	}

	shift(index){
		for(let i = index;i < this.length-1;i++){
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length-1];
		this.length--;
	}
}




// Instantiation of the class object
const newArray = new myArray 
console.log(newArray)