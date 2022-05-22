
//let arr=JSON.parse(localStorage.getItem("data"))||[];
function products(e){
    e.preventDefault();
    let form=document.getElementById("product_form");
    let name1=form.name.value;
    let batch1=form.batch.value;
    let unit1=form.unit.value;
    let studentid1=form.unit.value;
    let image=form.image.value;

    let p1=new product(name1,batch1,unit1,studentid1,image);

    let arr=JSON.parse(localStorage.getItem("data"))||[];

    arr.push(p1);
    console.log("arr",arr);
    localStorage.setItem("data",JSON.stringify(arr));
}
function product(n,b,u,s,m){
    this.name1=n;
    this.batch1=b;
    this.unit1=u;
    this.studentid1=s;
    this.image=m;
}
function calculate(){
    let arr=JSON.parse(localStorage.getItem("data"))||[];

    let obj={};
    for(let i=0; i<arr.length; i++){
        if(!obj[arr[i].batch1]){
            obj[arr[i].batch1]=0;
        }
    }

    for(let i=0; i<arr.length; i++){
        obj[arr[i].batch1]++;
    }
    console.log(obj);

}
calculate();

