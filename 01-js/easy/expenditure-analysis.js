/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  cats = {};
  for (let i=0;i<transactions.length;i++){
    let t_obj = transactions[i];
    let {category,price} = t_obj;
    cats[category] = cats[category] || 0 ;
    cats[category]+=price;
    
  }
  let res = []
  Object.entries(cats).forEach(([key, value]) => {
    res.push({ category: key, totalSpent: value });
  });
  return res;
}

module.exports = calculateTotalSpentByCategory;
