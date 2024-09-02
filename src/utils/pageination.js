
// takes the array, limit, offset > extract 100 results from array.length based on where they are in the array 


function paginate(array, limit, pageNumber) {
    return array.slice((pageNumber * limit), ((pageNumber * limit) + limit));
    // return array.slice((4 * 10, 4 * 10 + 10));
  }

export default paginate;

