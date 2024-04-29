const handleTheme = (e)=>{
    e.target.checked ?  document.querySelector("html").setAttribute("data-theme","night") : document.querySelector("html").setAttribute("data-theme","light");
}
export {handleTheme}