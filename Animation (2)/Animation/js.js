const observer = IntersectionObserver((entries)=>{
    entries.forEach(entry => {
    if (entry.Intersection){
        entry.target.classlist.add("animate");
    } 
    else{
        entry.classlist.remove("animate");
    }

    });
},{threshold: 0.2});
document.querySlectorAll("h1, .z1, h2,.z2").forEach(el=>{
    observer.observe(el);
});