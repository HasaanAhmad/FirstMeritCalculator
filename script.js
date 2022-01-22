function getMerit(){

    
    var mMarks = document.getElementById("matric").value;
    var fscMarks = document.getElementById("fsc").value;
    var ntsMarks = document.getElementById("nts").value;
    
    let mMerit= (mMarks/1100) * 10;
    let fMerit= (fscMarks/1100) *40;
    let nMerit= (ntsMarks/2);
    
    let agg= mMerit+fMerit+nMerit;
    document.getElementById("aggregate").innerHTML = `<h2>Your Aggregate is ${agg}.ThankYou`;   
}