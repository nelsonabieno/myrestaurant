//A Program to model a restaurant with the OOP features

class Order {
	let items=[];
	constructor (itemList){
	this.items = itemList;
	}
}
class Customer {
	const order; //const seals ur variable globally
	let money;
	
	makeOrder() {
		//customer places order
		this.order = new Order([{name:'margarita'}]);
}
class Waiter {
	/**
	*receives order from customer and forwards 
	*order to kitchen
	*/
	let money;

}
class Kitchen {
/**
* Kitchen Customer Order from waiter 
* and processes it
*/

}