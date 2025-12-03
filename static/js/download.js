window.onload = function () {
    const downloadBtns = document.querySelectorAll('.td_download_btn');
    downloadBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // 阻止默认跳转行为
            const fileUrl = btn.dataset.url;
            
            const url = "/api/download?url=" + encodeURIComponent(fileUrl);
            const a = document.createElement("a");
            a.href = url;
            a.download = "telegram.zip"; // 可根据 fileUrl 动态设置
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
            
        });
    });
};