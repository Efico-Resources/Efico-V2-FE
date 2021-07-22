
const myPage = document.querySelector('ul');
function page(total, num){
	let myList = '';
	let activePage;
	let firstPage = num;
	let nextPage = num +1;

	for (let i = num; i <= total; i++) {
		 if (num == i) {
		 	activePage = "active"; 
		 }
		 else{
		 	activePage = ""
		 }
myList =+ `<li class=${activePage}>${i}</li>`;
	}
}
