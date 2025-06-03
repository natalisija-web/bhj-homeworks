const tabs = Array.from(document.getElementsByClassName("tab"));
const tabsContent = Array.from(document.getElementsByClassName("tab__content"));

tabs.forEach((tab, index) => {
    tab.onclick = function () {

        if (!tab.classList.contains("tab_active")) {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("tab_active");
            };
            tab.classList.add("tab_active");
        }

        if (!tabsContent[index].classList.contains("tab__content_active")) {
            for (let i = 0; i < tabs.length; i++) {
                tabsContent[i].classList.remove("tab__content_active");
            }
            tabsContent[index].classList.add("tab__content_active")
        }
    }
})