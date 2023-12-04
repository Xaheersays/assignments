/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
