/* jshint esversion: 6 */
(function () {
    console.warn("footer_.js loaded");
    const header_sticky_cls = "header-sticky";
    window.addEventListener(
        "scroll",
        function () {
            this.currentScroll = window.scrollY || document.documentElement.scrollTop;
            this.lastScroll = 2;
            if (this.currentScroll < this.lastScrollTop) {
                this.lastScroll = 1; // down
            }
            this.lastScrollTop = this.currentScroll <= 0 ? 0 : this.currentScroll;
            const header = document.querySelector(".page-index > body > header"),
                headerBounds = header.getBoundingClientRect(),
                headerHeight = headerBounds.height;
            if (
                this.lastScroll === 2 &&
                headerBounds.top <= 0 &&
                !header.classList.contains(header_sticky_cls)
            ) {
                header.classList.add(header_sticky_cls);
                window.scrollBy(window.scrollY, +headerHeight);
            }
            if (
                header.classList.contains(header_sticky_cls) &&
                window.innerHeight - window.scrollY >= 0 &&
                this.lastScroll === 1
            ) {
                header.classList.remove(header_sticky_cls);
                window.scrollBy(window.scrollY, -headerHeight);
            }
        },
        false
    );
    // Trigger scroll event on initial load
    window.dispatchEvent(new Event("scroll"));
})();
