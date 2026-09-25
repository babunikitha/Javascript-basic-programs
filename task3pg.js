const st=["kiwi","apple","orange","avacado"]

//convert all strings to uppercase
const upper=st.map(s=>s.toUpperCase())
console.log(upper);                                       //["KIWI""APPLE.....]"


//get length of each word
const lengths=st.map(s=>s.length)
console.log(lengths)                                         //[4,5,6,7]

//FILTER words with length>4
const filtered=st.filter(s=>s.length>4)
console.log(filtered)                                               //["apple","orange","avacado"]





