DarkModeSwitch = document.getElementById("DarkModeSwitch");
TextSizeSlider = document.getElementById("TextSizeSlider");

TextSizeSlider.addEventListener("change", (e) =>
{
    console.log("Changed Slider");
    document.getElementById("TextSizeLabel").textContent = TextSizeSlider.value;
})

DarkModeSwitch.addEventListener("change", (e) =>
{
    console.log("Switched");
    if(DarkModeSwitch.checked)
    {
        document.documentElement.dataset["theme"] = "dark"
    }
    else
    {
        document.documentElement.dataset["theme"] = "light";
    }
})