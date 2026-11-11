DarkModeSwitch = document.getElementById("DarkModeSwitch");
TextSizeSlider = document.getElementById("TextSizeSlider");

TextSizeSlider.addEventListener("change", (e) =>
{
    console.log("Changed Slider");
    document.documentElement.style.setProperty("--text-size-multiplier", (TextSizeSlider.value / 12));
    document.getElementById("TextSizeLabel").textContent = TextSizeSlider.value
})

DarkModeSwitch.addEventListener("change", (e) =>
{
    console.log("Switched");
    if(DarkModeSwitch.checked)
    {
        document.documentElement.dataset["theme"] = "dark"
        localStorage.setItem("darkmode", "on");
    }
    else
    {
        document.documentElement.dataset["theme"] = "light";
        localStorage.setItem("darkmode", "off");
    }
})