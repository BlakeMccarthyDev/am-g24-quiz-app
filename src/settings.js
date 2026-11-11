document.getElementById("TextSizeSlider").addEventListener("change", (e) =>
{
    console.log("Changed Slider");
    document.getElementById("TextSizeLabel").textContent = document.getElementById("TextSizeSlider").value;
})

document.getElementById("DarkModeSwitch").addEventListener("change", (e) =>
{
    console.log("Switched");
    document.body.style.setProperty("data-theme", "dark")
})