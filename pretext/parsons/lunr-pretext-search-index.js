var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Matrix algebra",
  "body": " Matrix algebra   Here are some Parsons problems to help students develop facility with matrix algebra.    Orthogonally diagonalizable matrices  We say that a matrix is orthogonally diagonalizable if there is a diagonal matrix and an orthogonal matrix such that   Explain why a matrix that is orthogonally diagonalizable must be symmetric.                                                  Diagonalizable matrices  A square matrix is called diagonalizable if there is a diagonal matrix and a matrix such that   If is a diagonalizable matrix, explain why is also diagonalizable.                                                "
},
{
  "id": "symmetric",
  "level": "2",
  "url": "section-1.html#symmetric",
  "type": "Exercise",
  "number": "1.1",
  "title": "Orthogonally diagonalizable matrices.",
  "body": "Orthogonally diagonalizable matrices  We say that a matrix is orthogonally diagonalizable if there is a diagonal matrix and an orthogonal matrix such that   Explain why a matrix that is orthogonally diagonalizable must be symmetric.                                                 "
},
{
  "id": "parsons-diagonalizable",
  "level": "2",
  "url": "section-1.html#parsons-diagonalizable",
  "type": "Exercise",
  "number": "1.2",
  "title": "Diagonalizable matrices.",
  "body": "Diagonalizable matrices  A square matrix is called diagonalizable if there is a diagonal matrix and a matrix such that   If is a diagonalizable matrix, explain why is also diagonalizable.                                              "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "Reasoning with Pivots",
  "body": " Reasoning with Pivots   A collection of Parsons problems to help students draw conclusions from the shapes of matrices and their pivot positions.    Span  Suppose that is a matrix. Determine whether it is possible for the columns of to span for some beginning with an observation about the number of rows in the matrix, followed by an observation about the number of pivot positions.      has 5 rows.     has 3 rows.       has at most 3 pivot positions.     has at most 5 pivot positions.      There is a row of that does not have a pivot position.    Every row of has a pivot position.      There is a vector for which the equation is inconsistent.    The equation is consistent for every vector .      The columns of do not span .    The columns of span .     Linear independence  Suppose is a matrix. Determine if it is possible that the columns of are linearly independent? Begin with an observation about the number of columns of followed by an observation about the number of pivot positions.      has 5 columns.     has 3 columns.       has at most 3 pivot positions.     has at most 5 pivot positions.      There is a column of that does not have a pivot position.    Every column of could possibly have a pivot position.      The homogeneous equation has infinitely many solutions.    The homogeneous equation could have a unique solution.      The zero vector can be written as a linear combination of the columns of with at least one nonzero weight.    It is possible that the only way to express the zero vector as a linear combination of the columns of is if all the weights are zero.      The columns of must be linearly dependent.    The columns of could be linearly independent.      "
},
{
  "id": "parsons-span",
  "level": "2",
  "url": "section-2.html#parsons-span",
  "type": "Exercise",
  "number": "2.1",
  "title": "Span.",
  "body": "Span  Suppose that is a matrix. Determine whether it is possible for the columns of to span for some beginning with an observation about the number of rows in the matrix, followed by an observation about the number of pivot positions.      has 5 rows.     has 3 rows.       has at most 3 pivot positions.     has at most 5 pivot positions.      There is a row of that does not have a pivot position.    Every row of has a pivot position.      There is a vector for which the equation is inconsistent.    The equation is consistent for every vector .      The columns of do not span .    The columns of span .    "
},
{
  "id": "parsons-linear-independence",
  "level": "2",
  "url": "section-2.html#parsons-linear-independence",
  "type": "Exercise",
  "number": "2.2",
  "title": "Linear independence.",
  "body": "Linear independence  Suppose is a matrix. Determine if it is possible that the columns of are linearly independent? Begin with an observation about the number of columns of followed by an observation about the number of pivot positions.      has 5 columns.     has 3 columns.       has at most 3 pivot positions.     has at most 5 pivot positions.      There is a column of that does not have a pivot position.    Every column of could possibly have a pivot position.      The homogeneous equation has infinitely many solutions.    The homogeneous equation could have a unique solution.      The zero vector can be written as a linear combination of the columns of with at least one nonzero weight.    It is possible that the only way to express the zero vector as a linear combination of the columns of is if all the weights are zero.      The columns of must be linearly dependent.    The columns of could be linearly independent.    "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "3",
  "title": "Matrix multiplication",
  "body": " Matrix multiplication   A collection of Parsons problems dealing with matrix multiplication.    The matrix of a linear transformation  Suppose that is a matrix and that What is the matrix ?    Matrix multiplication constructs linear combinations of the columns of .    This means that if the columns of are and , then     Therefore, .    The first column of is then .    Similarly, the second column of is .    The matrix .    Matrix factorization  Suppose we have the orthogonal matrix and the diagonal matrix where and that is the matrix . Notice that represents a counterclockwise rotation.  Beginning with the vector , demonstrate the effect of each term in the factorization of .                                                                   "
},
{
  "id": "parsons-matrix-linear-transformation",
  "level": "2",
  "url": "section-3.html#parsons-matrix-linear-transformation",
  "type": "Exercise",
  "number": "3.1",
  "title": "The matrix of a linear transformation.",
  "body": "The matrix of a linear transformation  Suppose that is a matrix and that What is the matrix ?    Matrix multiplication constructs linear combinations of the columns of .    This means that if the columns of are and , then     Therefore, .    The first column of is then .    Similarly, the second column of is .    The matrix .   "
},
{
  "id": "parsons-factor",
  "level": "2",
  "url": "section-3.html#parsons-factor",
  "type": "Exercise",
  "number": "3.2",
  "title": "Matrix factorization.",
  "body": "Matrix factorization  Suppose we have the orthogonal matrix and the diagonal matrix where and that is the matrix . Notice that represents a counterclockwise rotation.  Beginning with the vector , demonstrate the effect of each term in the factorization of .                                                                 "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
